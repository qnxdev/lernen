import Page from "../components/Page";
import Button from "../components/Button";
import Input from "../components/Input";
import List from "../components/List";
import { bundles, countries, techs } from "../lib/lists";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    courses: [],
  });

  const onSubmit = async () => {
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
  return (
    <Page>
      <div className="container flex">
        <form className="sign flex col justify-center">
          <h2>Sign Up</h2>
          <Input label="Name" placeholder="Full Name" type="text" />
          <Input label="Email ID" placeholder="Email ID" type="text" />
          <Input
            label="Mobile Number"
            placeholder="Mobile Number"
            type="number"
          />
          <select
            id="countries"
            onChange={(e) => {
              if (e.target.value != "" && e.target.value != "+") {
                console.log(e.target.value);
                //showList(false);
              }
            }}
          >
            <option key="s">Select Country</option>
            <option key="k" value="+91">
              +91 India
            </option>
            {JSON.parse(countries).map((i, k) => (
              <option key={k} value={i.c} defaultValue={i.n}>
                {i.c + " " + i.n}
              </option>
            ))}
          </select>
          <Button>Sign Up</Button>
        </form>
        <div className="flex col-wrap">
          <div className="sign-col">
            <h2>Bundles </h2>
            <List items={bundles} final />
          </div>
          <div className="sign-col">
            <h2>Techs</h2>
            <List items={techs} final />
          </div>
        </div>
      </div>
    </Page>
  );
}
