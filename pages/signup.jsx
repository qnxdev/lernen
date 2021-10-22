import Page from "../components/Page";
import Button from "../components/Button";
import Input from "../components/Input";
import List from "../components/List";
import { bundles, countries, techs } from "../lib/lists";
import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import { store } from "../lib/store";
import GenerateCourses from "../components/GenerateCourses";
export default function SignUpPage() {
  const router = useRouter();
  const { state, dispatch } = useContext(store);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
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

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  const onSubmit = async () => {
    const regex = /^\s*$/g;
    setLoading(true);
    if (user.name.match(regex)) {
      setMessage("Name is required.");
    } else if (user.email.match(regex)) {
      setMessage("Email ID is required.");
    } else if (user.phone.match(regex)) {
      setMessage("Phone Number is required.");
    } else {
      setMessage("");
      const courses = GenerateCourses(state.selected);
      try {
        const promise = await fetch("/api/create", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ ...user, courses: courses }),
        });
        const data = await promise.json();
        if (data.id) {
          //set cookie
          try {
            if (document) {
              document.cookie = "LERNEN_LD=" + data.id + "; path=/";
            }
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
    <Page>
      <div className="container flex">
        <div className="form flex col justify-center">
          <h2>Sign Up</h2>
          <Input
            label="Name"
            placeholder="Full Name"
            type="text"
            value={user.name}
            onInput={(e) => onInput(e, "name")}
          />
          <Input
            label="Email ID"
            placeholder="Email ID"
            type="text"
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
          <h4>Country</h4>
          <select
            className="custom-scroll"
            id="countries"
            value={user.country}
            onChange={(e) => {
              onInput(e, "country");
              //showList(false);
            }}
          >
            <option key="s" className="option1" value={undefined}>
              Select Country
            </option>
            <option key="k" value="+91">
              +91 - India
            </option>
            {JSON.parse(countries).map((i, k) => (
              <option key={k} value={i.c} defaultValue={i.n}>
                {i.c + " - " + i.n}
              </option>
            ))}
          </select>
          <p className="error">
            {loading ? "Please wait.." : message != "" ? message : ""}
          </p>
          <Button handleClick={onSubmit}>Sign Up</Button>
        </div>
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
