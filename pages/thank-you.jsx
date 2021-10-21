import Page from "../components/Page";
import Tick from "../components/Tick";

export default function Thank() {
  return (
    <Page>
      <div className="thank flex col justify-center wh100">
        <Tick on full/>
        <h1>Thank You !</h1>
        <h3>We will reach out to you soon.</h3>
      </div>
    </Page>
  );
}
