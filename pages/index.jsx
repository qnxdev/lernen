import { useContext, useEffect, useState } from "react";
import ListSection from "../components/ListSection";
import Page from "../components/Page";
import { bundles, techs } from "../lib/lists";
import { store } from "../lib/store";
import Link from "next/link";
import Button from "../components/Button";
import SignUp from "../components/SignUp";
import Referlink from "../components/Referlink";
import { useRouter } from "next/dist/client/router";
import Realtime from "../components/Realtime";
import { setCookie } from "nookies";

export default function Home() {
  const { state, dispatch } = useContext(store);
  const { rd, selected } = state;
  const [showSignUp, setSignUp] = useState(false);
  const router = useRouter();
  useEffect(async () => {
    if (!state.sentAnalytics) {
      const ld = await Realtime();
      dispatch({ type: "analytics", payload: ld });
    }
    return setTimeout(() => setSignUp(true), 2000);
  }, []);

  useEffect(() => {
    if (router.query.ref && !rd) {
      dispatch({ type: "referral-id", payload: router.query.ref });
      setCookie(null, "LERNEN_REF", router.query.ref);
    }
  }, [router.query]);

  return (
    <div className="app">
      <Page>
        <ListSection
          className="bundles"
          items={bundles}
          title="Bundles"
          text="Learn a set of technologies.."
        />
        <ListSection
          className="techs"
          items={techs}
          title="Technologies"
          text="Customise your learning experience.."
        />
        <div className={`skipper ${showSignUp ? "show-skipper" : ""}`}>
          <Referlink />
          <div className="skip-content">
            <div className="close">
              <button className="button" onClick={() => setSignUp(false)}>
                Go back & Select Courses
              </button>
            </div>
            <SignUp />
          </div>
        </div>
      </Page>
      {selected.length !== 0 && (
        <div className="popup w100 flex">
          {/* <p>selected: {state.selected.map(id => {
            return state.
          })}</p> */}

          <Link href="/signup">
            <a>
              <Button>Sign Up</Button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
