import { getFirestore } from "firebase-admin/firestore";
import firebaseAdminInit from "../../lib/firebaseAdmin";

export default async (req, res) => {
  if (req.method == "POST") {
    const { name, email, phone, country, ld, courses, time } = req.body;

    try {
      const firebase = firebaseAdminInit();
      const db = getFirestore(firebase);
      if (name && email && phone && courses) {
        const newUser = await db.collection("/users").doc();
        await newUser.set({
          uid: newUser.id,
          name: name,
          email: email,
          phone: country + phone,
          courses: courses,
          country: country,
          time: time,
          ld: ld,
        });
        res.send({ id: await newUser.id });
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

/* export default async (req, res) => {
  const firebaseAdmin = firebaseAdminInit();
  const uid = "oDWYdX9NXMcTVHFLt9Ed";
  getAuth(firebaseAdmin)
    .createCustomToken(uid)
    .then((customToken) => {
      console.log(customToken);
    })
    .catch((error) => {
      console.log("Error creating custom token:", error);
    });
  await res.status(200).send("no");
};
 */
