import Link from "next/link";
import Page from "../components/Page";
import Referlink from "../components/Referlink";

export default function ContactPage(params) {
  return (
    <Page>
      <Referlink />
      <div className="contact-page flex">
        <a className="contact-item" href="mailto:dev.qnx@gmail.com">
          <h4>Email</h4>
          <p>dev.qnx@gmail.com</p>
          <button className="button">Open in Mail</button>
        </a>
        <a className="contact-item" href="tel:+918848753428">
          <h4>Phone</h4>
          <p>+918848753428</p>
          <button className="button">Open in Phone App</button>
        </a>
        <a
          className="contact-item"
          href="https://api.whatsapp.com/send/?phone=918848753428&text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Lernen.&app_absent=0"
        >
          <h4>WhatsApp</h4>
          <p>+918848753428</p>
          <button className="button">Open in WhatsApp</button>
        </a>
      </div>
      <h1 className="contact-invite">
        <Link href="/">
          <span>Sign Up</span>
        </Link>{" "}
        today & Start Your Career
      </h1>
    </Page>
  );
}
