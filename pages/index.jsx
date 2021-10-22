import { useContext, useEffect, useState } from "react";
import ListSection from "../components/ListSection";
import Page from "../components/Page";
import { bundles, techs } from "../lib/lists";
import { store } from "../lib/store";
import Link from "next/link";
import Button from "../components/Button";
import Realtime from "../components/Realtime";
import SignUp from "../components/SignUp";

export default function Home() {
  const { state, dispatch } = useContext(store);
  const [showSignUp, setSignUp] = useState(false);

  useEffect(async () => {
    if (!state.sentAnalytics) {
      await Realtime();
      dispatch({ type: "analytics", payload: true });
    }
  }, []);

  useEffect(() => {
    return setTimeout(() => setSignUp(true), 2000);
  },[]);
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
          <div className="skip-content">
          <div className="close">
            <button
              className="button"
              onClick={() => setSignUp(false)}
            >
              Go back & Select Courses
            </button>
          </div>
          <SignUp />
          </div>
        </div>
      </Page>
      {state.selected.length !== 0 && (
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
