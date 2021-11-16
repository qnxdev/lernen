import Page from "../components/Page";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import ShareButton from "../components/ShareButton";
import firebaseAdminInit from "../lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import ReferrerRegister from "../components/ReferrerRegister";

export const getServerSideProps = async ({ req }) => {
  const LERNEN_RD = req.cookies.LERNEN_RD;
  if (LERNEN_RD) {
    const firebase = await firebaseAdminInit();
    const db = await getFirestore(firebase);
    let data;
    const response = await db
      .collection("referrers")
      .where("id", "==", LERNEN_RD)
      .get();
    const referrals = await db
      .collection("users")
      .where("ref", "==", LERNEN_RD)
      .get();
    await response.forEach((doc) => (data = doc.data()));
    if (data) {
      data.referrals = [];
      if (!referrals.empty) {
        await referrals.forEach((doc) => data.referrals.push(doc.data().name));
      }
      return { props: { referrer: data } };
    }
  }
  return { props: { referrer: { id: null } } };
};

export default function RefererPage({ referrer }) {
  const [LoggedReferrer, setLoggedReferrer] = useState(referrer);

  return (
    <Page refLink={false}>
      {LoggedReferrer.id ? (
        <DashBoard referrer={LoggedReferrer} />
      ) : (
        <ReferrerRegister setLoggedReferrer={setLoggedReferrer} />
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

  const ShareTitle = `Lernen - Web Development Classes`;
  const ShareText = `With just 2 hours a day get a new income. Try free for first 3 days and Learn Web Development. \n`;

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
          console.log("&copy;");
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
      .catch(() => {
        console.log("Please check permissions");
      });
  }

  return (
    <div className="ref-page flex">
      <div className="share-wrap w100 flex justify-center col">
        <div className="w100 flex justify-center col content">
          <h2 className="balance">
            Balance : ₹
            {referrer.referrals ? referrer.referrals.length * 300 : 0}
          </h2>
          {/* <Input label="Your Referrel Link" value={refUrl} readOnly={true} /> */}
          <h2 className="label">Share Your Unique Link</h2>
          <div className="copy-btn flex ">
            <input
              className="w100 tc"
              type="text"
              readOnly={true}
              value={refUrl}
            />
            <Button handleClick={CopyText}>
              {copyStatus ? "Link Copied" : "Copy Link"}
            </Button>
          </div>

          {webShare && (
            <Button handleClick={WebShare}>Share Lernen And Earn</Button>
          )}
          <ShareButton
            name="Facebook"
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
        <h2 className="tc w100 margin0 header">Your Referrals</h2>
        <div className="earnings">
          {referrer.referrals && referrer.referrals.length > 0
            ? referrer.referrals.map((i) => <p>{i}</p>)
            : <p>Nothing here. Start inviting your friends.</p> }
        </div>
      </div>
    </div>
  );
};
