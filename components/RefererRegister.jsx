import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import CountrySelect from "./CountrySelect";

export default function RefererRegister({ setLoggedReferer }) {
  const [newReferer, setNewReferer] = useState({
    country: "+91",
    phone: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setLoading(true);
    const regex = /^\s*$/g;
    if (newReferer.phone.match(regex)) {
      setMessage("Mobile Number is required.");
    } else if (newReferer.country.match(regex)) {
      setMessage("Country is required.");
    } else {
      setMessage("");

      try {
        const promise = await fetch("/api/createReferer", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            ...newReferer,
            time: new Date().toString(),
          }),
        });
        const data = await promise.json();
        if (data.id) {
          //set cookie
          try {
            if (document) {
              document.cookie = "LERNEN_RD=" + data.id + "; path=/";
            }
          } catch (error) {
            alert("Please enable cookies.");
          }
          setLoggedReferer(data);
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
      <h2>Register as a Referer</h2>
      <Input
        label="Mobile number"
        placeholder="mobile number"
        type="number"
        value={newReferer.phone}
        onInput={(e) => setNewReferer({ ...newReferer, phone: e.target.value })}
      />
      <CountrySelect
        value={newReferer.country}
        onChange={(e) =>
          setNewReferer({ ...newReferer, country: e.target.value })
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
