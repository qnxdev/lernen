import { getFirestore } from "firebase-admin/firestore";
import firebaseAdminInit from "../../lib/firebaseAdmin";
const { customAlphabet } = require("nanoid");
const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
const nanoid = customAlphabet(alphabet, 6);

export default async (req, res) => {
  if (req.method == "POST") {
    const { country, phone, time } = req.body;

    try {
      const firebase = firebaseAdminInit();
      const db = getFirestore(firebase);
      let referrer = {};

      if (country && phone && time) {
        const exists = await db
          .collection("referrers")
          .where("country", "==", country)
          .where("phone", "==", phone)
          .get();
        if (exists.empty) {
          referrer = {
            id: nanoid(),
            country,
            phone,
            time,
          };
          const newReferrer = await db.collection("/referrers").doc();
          await newReferrer.set(referrer);
        } else {
          await exists.forEach((doc) => {
            referrer = doc.data();
          });
        }
        referrer.referrals = [];
        res.send(referrer);
      } else {
        res.send({ error: true, check: true });
      }
    } catch (error) {
      console.log(error);
      res.send({ error: true });
    }
  } else {
    res.redirect("/");
  }
};
