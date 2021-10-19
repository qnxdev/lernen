import Page from "../components/Page";

export default function SignUp() {
  return (
    <Page>
      <form className="form flex col">
        <label className="col flex">
          Your name
          <input type="text" />
        </label>
        <label className="col flex">
          Email id
          <input type="text" />
        </label>
      </form>
    </Page>
  );
}
