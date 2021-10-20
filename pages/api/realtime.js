import { getFirestore } from "firebase-admin/firestore";
import firebaseAdminInit from "../../lib/firebaseAdmin";
export default async (req, res) => {
  const { ua } = req.query;

  try {
    const firebase = firebaseAdminInit();
    const db = getFirestore(firebase);
    let lead = {};
    //get ip
    if (req.headers["x-real-ip"]) {
      lead.ip = req.headers["x-real-ip"];
    } else if (req.headers["x-forwarded-for"]) {
      lead.ip = req.headers["x-forwarded-for"];
    } else if (req.headers["x-vercel-forwarded-for"]) {
      lead.ip = req.headers["x-vercel-forwarded-for"];
    }
    //get geoloc
    if (lead.ip != "") {
      const promise = await fetch("https://ifconfig.co/json?ip=" + lead.ip);
      let data = await promise.json();
      lead = { ...lead, ...data };
    }
    //get useragent
    if (ua) {
      lead = { ...lead, user_agent: JSON.parse(decodeURIComponent(ua)) };
    }
    //send info
    console.log(lead);
    const newLead = await db.collection("/analytics").doc().set(lead);
    res.send({ success: (await newLead.writeTime) ? true : false });
  } catch (error) {
    console.log(error);
    res.send({ error: true });
  }
};
