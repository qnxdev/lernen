import Page from "../components/Page";
import List from "../components/List";
import { bundles, techs } from "../lib/lists";
import SignUp from "../components/SignUp";

export default function SignUpPage() {
  return (
    <Page>
      <div className="container flex">
        <SignUp />
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
