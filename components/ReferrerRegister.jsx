import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import CountrySelect from "./CountrySelect";

export default function ReferrerRegister({ setLoggedReferrer }) {
  const [newReferrer, setNewReferrer] = useState({
    country: "+91",
    phone: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setLoading(true);
    const regex = /^\s*$/g;
    if (newReferrer.phone.match(regex)) {
      setMessage("Mobile Number is required.");
    } else if (newReferrer.country.match(regex)) {
      setMessage("Country is required.");
    } else {
      setMessage("");

      try {
        const promise = await fetch("/api/createReferrer", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            ...newReferrer,
            time: new Date().toString(),
          }),
        });
        const data = await promise.json();
        if (data.id) {
          //set cookie
          try {
            if (document.cookie) {
              document.cookie = `LERNEN_RD=${data.id}; path=/;`;
            }
          } catch (error) {
            alert("Please enable cookies.");
          }
          setLoggedReferrer(data);
        } else {
          setMessage("An error occured.");
        }
      } catch (error) {
        setMessage("An error occured.");
      }
    }
    setLoading(false);
  }
  return (
    <div className="refer-form w100 flex col justify-center">
      <h2>Register as a Referrer</h2>
      <Input
        label="Mobile number"
        placeholder="Mobile number"
        type="number"
        value={newReferrer.phone}
        onInput={(e) =>
          setNewReferrer({ ...newReferrer, phone: e.target.value })
        }
      />
      <CountrySelect
        value={newReferrer.country}
        onChange={(e) =>
          setNewReferrer({ ...newReferrer, country: e.target.value })
        }
      />
      {(loading || message != "") && (
        <p className="error">
          {loading ? "Please wait.." : message != "" ? message : ""}
        </p>
      )}
      <Button handleClick={handleSubmit}>Register</Button>
      <h4 className="h4">
        Refer LERNEN to your friends and get paid 300 bucks for each person you
        refer
      </h4>
    </div>
  );
}
