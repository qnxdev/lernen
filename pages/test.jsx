import { useRouter } from "next/dist/client/router";
import { useState } from "react";

export default function Test(params) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    courses: [],
  });

  const onSubmit = () => {
    setLoading(true);
    if (user.name == "") {
      setMessage("Name is required.");
    } else if (user.email == "") {
      setMessage("Email ID is required.");
    } else if (user.phone == "") {
      setMessage("Phone Number is required.");
    } else {
      setMessage("");
      try {
        const promise = await fetch("/api/hello");
        const data = await promise.json();
        if (data.id) {
          //set cookie
          setUser({ ...user, id: data.id });
          router.push("/thank-you");
        } else {
          setMessage("An error occured.");
        }
      } catch (error) {
        setMessage("An error occured.");
      }
    }
    setLoading(false);
  };

  () => setUser({ ...user, name: e.target.value });

  return <div>hi</div>;
}
