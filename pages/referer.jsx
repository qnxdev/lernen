import Page from "../components/Page";
import RefererRegister from "../components/RefererRegister";
import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import ShareButton from "../components/ShareButton";
import firebaseAdminInit from "../lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";

export const getServerSideProps = async ({ req }) => {
  const cookieId = req.cookies.LERNEN_RD;
  if (cookieId) {
    const firebase = await firebaseAdminInit();
    const db = await getFirestore(firebase);
    const collectionRef = await db.collection("referers");
    const queryRef = await collectionRef.where("id", "==", cookieId);
    const response = await queryRef.get();
    let data;
    response.forEach((doc) => (data = doc.data()));
    if (data) return { props: { referrer: data } };
  }
  return { props: { referrer: { id: null } } };
};

export default function RefererPage({ referrer }) {
  const [LoggedReferer, setLoggedReferer] = useState(referrer);

  return (
    <Page>
      {LoggedReferer.id ? (
        <DashBoard referrer={LoggedReferer} />
      ) : (
        <RefererRegister setLoggedReferer={setLoggedReferer} />
      )}
    </Page>
  );
}

const DashBoard = ({ referrer }) => {
  const [copyStatus, setCopyStatus] = useState(false);
  const [share, setShare] = useState(false);

  useEffect(() => {
    setShare(navigator.share !== undefined);
  }, []);

  const refUrl = `https://lernen.vercel.app?ref=${referrer.id}`;

  const ShareText = `Hey you shoud try Lernen \n ${refUrl}`;

  const shareData = {
    title: "Lernen",
    text: ShareText,
    url: `https://lernen.vercel.app?ref=${referrer.id}`,
  };

  async function CopyText() {
    if (!copyStatus) {
      try {
        await navigator.clipboard.writeText(refUrl);
        setCopyStatus(true);
        setTimeout(() => setCopyStatus(false), 2000);
      } catch (err) {
        console.log(err);
        alert("Clipboard is not available");
      }
    }
  }

  async function WebShare() {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log(err);
      alert("Share is not available");
    }
  }

  return (
    <div className="ref-page flex">
      <div className="copy-wrap w100 flex justify-center col">
        <h2 className="margin0 tc w100 header">Dashboard</h2>
        <div className="w100 flex justify-center col content">
          <Input label="Your Referel Link" value={refUrl} readOnly={true} />
          <Button handleClick={CopyText}>
            {copyStatus ? "Copied" : "Copy"}
          </Button>
        </div>
        <h2 className="tc w100 margin0 header">Your Referal Earnigs</h2>
        <div className="earnigs content">
          <h2 className="margin0">Total : $500</h2>
        </div>
      </div>
      <div className="share-wrap w100 flex justify-center col light">
        <h2 className="margin0 tc w100 header">
          Share Lernen via social medias
        </h2>
        <div className="flex col w100 content">
          {!share && (
            <Button handleClick={WebShare}>Share Lernen And Earn</Button>
          )}
          <ShareButton
            name="FaceBook"
            link={`https://www.facebook.com/sharer/sharer.php?u=${refUrl}&quote=${ShareText}`}
            color="#2d88ff"
          />
          <ShareButton
            name="WhatsApp"
            link={`whatsapp://send?text=${ShareText}`}
            color="#59de71"
          />
          <ShareButton
            name="Telegram"
            link={`https://telegram.me/share/url?url=${refUrl}&text=${ShareText}`}
            color="rgb(46 187 255)"
          />
        </div>
      </div>
    </div>
  );
};
