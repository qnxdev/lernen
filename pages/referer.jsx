import Page from "../components/Page";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import ShareButton from "../components/ShareButton";
import { store } from "../lib/store";
import ReferrerRegister from "../components/ReferrerRegister";
import firebaseAdminInit from "../lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";


export const getServerSideProps = async ({ req }) => {
  const LERNEN_RD = req.cookies.LERNEN_RD;
  if (LERNEN_RD) {
    const firebase = await firebaseAdminInit();
    const db = await getFirestore(firebase);
    const response = await db
      .collection("referrers")
      .where("id", "==", LERNEN_RD)
      .get();
    let data;
    await response.forEach((doc) => (data = doc.data()));
    if (data) return { props: { referrer: data } };
  }
  return { props: { referrer: { id: null } } };
};

export default function RefererPage({ referrer = {} }) {
  const { state, dispatch } = useContext(store);

  function setReferrer(data) {
    dispatch({
      type: "referrer",
      payload: data,
    });
  }

  useEffect(() => setReferrer(referrer), []);

  return (
    <Page refLink={false}>
      {state.referrer.id ? (
        <DashBoard referrer={state.referrer} />
      ) : (
        <ReferrerRegister setLoggedReferrer={setReferrer} />
      )}
    </Page>
  );
}

const DashBoard = ({ referrer }) => {
  const [copyStatus, setCopyStatus] = useState(false);
  const [webShare, setWebShare] = useState(false);

  useEffect(() => {
    setWebShare("share" in navigator);
  }, []);

  const refUrl = `https://lernen.vercel.app?ref=${referrer.id}`;

  const ShareTitle = `Lernen`;
  const ShareText = `Hey Lernen is the best \n`;

  const shareData = {
    title: ShareTitle,
    text: ShareText,
    url: refUrl,
  };

  function CopyText() {
    if (!copyStatus) {
      navigator.clipboard
        .writeText(refUrl)
        .then(() => {
          console.log("succesfull copy");
          setCopyStatus(true);
          setTimeout(() => setCopyStatus(false), 1000);
        })
        .catch(console.error);
    }
  }

  function WebShare() {
    navigator
      .share(shareData)
      .then(() => {
        console.log("Thank you For Sharing");
      })
      .catch(console.error);
  }

  return (
    <div className="ref-page flex">
      <div className="share-wrap w100 flex justify-center col">
        <h2 className="margin0 tc w100 header">Dashboard</h2>
        <div className="w100 flex justify-center col content">
          <h2 className="margin0">Earned : $500</h2>
          {/* <Input label="Your Referrel Link" value={refUrl} readOnly={true} /> */}
          <h2 className="label">Your Referrel Link</h2>
          <div className="copy-btn flex ">
            <input
              className="w100 tc"
              type="text"
              readOnly={true}
              value={refUrl}
            />
            <Button handleClick={CopyText}>
              {copyStatus ? "Copied" : "Copy"}
            </Button>
          </div>

          {webShare && (
            <Button handleClick={WebShare}>Share Lernen And Earn</Button>
          )}
          <ShareButton
            name="FaceBook"
            link={`https://www.facebook.com/sharer/sharer.php?u=${refUrl}&quote=${ShareText}`}
            color="#2d88ff"
          />
          <ShareButton
            name="WhatsApp"
            link={`whatsapp://send?text=${ShareText + refUrl}`}
            color="#59de71"
          />
          <ShareButton
            name="Telegram"
            link={`https://telegram.me/share/url?url=${refUrl}&text=${ShareText}`}
            color="rgb(46 187 255)"
          />
        </div>
      </div>
      <div className="earn-wrap w100 flex justify-center col light">
        <h2 className="tc w100 margin0 header">Your Referral Earnigs</h2>
        <div className="earnigs content"></div>
      </div>
    </div>
  );
};
