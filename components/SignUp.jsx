import Button from "../components/Button";
import Input from "../components/Input";
import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import { store } from "../lib/store";
import GenerateCourses from "../components/GenerateCourses";
import CountrySelect from "./CountrySelect";
import { setCookie } from "nookies";

export default function SignUp() {
  const router = useRouter();
  const { state } = useContext(store);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    country: "+91",
    courses: [],
  });

  const onInput = (e, prop) => {
    setUser({ ...user, [prop]: e.target.value });
  };
  console.log(state);

  const onSubmit = async () => {
    setLoading(true);
    const regex = /^\s*$/g;
    if (user.name.match(regex)) {
      setMessage("Name is required.");
    } else if (user.email.match(regex)) {
      setMessage("Email ID is required.");
    } else if (user.phone.match(regex)) {
      setMessage("Phone Number is required.");
    } else {
      setMessage("");
      const courses = GenerateCourses(state.selected);
      console.log(state);
      try {
        const promise = await fetch("/api/create", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            ...user,
            ld: state.ld,
            courses: courses,
            time: new Date().toString(),
            ref: state.rd,
          }),
        });
        const data = await promise.json();
        if (data.id) {
          //set cookie
          try {
            setCookie(null, "LERNEN_LD", data.id);
          } catch (error) {
            console.log("Please enable cookies.");
          }
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

  return (
    <div className="form flex col justify-center">
      <h2>Sign Up</h2>
      <Input
        label="Name"
        placeholder="Full Name"
        value={user.name}
        onInput={(e) => onInput(e, "name")}
      />
      <Input
        label="Email ID"
        placeholder="Email ID"
        value={user.email}
        onInput={(e) => onInput(e, "email")}
      />
      <Input
        label="Mobile Number"
        placeholder="Mobile Number"
        type="number"
        value={user.phone}
        onInput={(e) => onInput(e, "phone")}
      />
      <CountrySelect
        value={user.country}
        onChange={(e) => {
          onInput(e, "country");
          //showList(false);
        }}
      />
      {(loading || message != "") && (
        <p className="error">
          {loading ? "Please wait.." : message != "" ? message : ""}
        </p>
      )}
      <Button handleClick={onSubmit}>Sign Up</Button>
    </div>
  );
}
