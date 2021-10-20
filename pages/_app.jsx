import "../styles/globals.css";
import "../styles/Home.css";
import "../styles/Thanks.css";
import "../styles/Page.css";
import "../styles/Button.css";
import "../styles/Item.css";
import "../styles/SignUp.css";
import { StateProvider } from "../lib/store";

function Lernen({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default Lernen;
