import "../styles/globals.css";
import "../styles/HomePage.css";
import "../styles/ThanksPage.css";
import "../styles/Page.css";
import "../styles/Button.css";
import "../styles/Item.css";
import "../styles/SignUpPage.css";
import "../styles/ContactPage.css";
import "../styles/List.css";
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
