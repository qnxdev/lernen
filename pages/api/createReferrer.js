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

      if (country && phone && time) {
        const newId = nanoid();
        const AddingReferrer = {
          id: newId,
          country,
          phone: country + phone,
          time,
        };
        const newReferrer = await db.collection("/referrers").doc();
        await newReferrer.set(AddingReferrer);
        res.send(AddingReferrer);
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
