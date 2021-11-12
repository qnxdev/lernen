import "../styles/globals.css";
import "../styles/HomePage.css";
import "../styles/ThanksPage.css";
import "../styles/Page.css";
import "../styles/Button.css";
import "../styles/Item.css";
import "../styles/SignUpPage.css";
import "../styles/ContactPage.css";
import "../styles/List.css";
import "../styles/ReferrerPage.css";
import "../styles/Input.css";
import "../styles/CountrySelect.css"
import "../styles/ReferralLink.css"
import "../styles/ShareBtn.css"
import { StateProvider } from "../lib/store";

/*Main App File - This is not a page*/

function Lernen({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default Lernen;
