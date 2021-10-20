import Page from "../components/Page";
import Button from "../components/Button";
import Input from "../components/Input";
import List from "../components/List";
import { bundles, techs } from "../lib/lists";

export default function SignUp() {
  return (
    <Page>
      <div className="container flex">
        <form className="sign flex col justify-center">
          <h2>Sign Up</h2>
          <Input label="Name" placeholder="Enter name" type="text" />
          <Input label="Email id" placeholder="Enter email id" type="text" />
          <Input
            label="Mobile no:"
            placeholder="Enter mobile number"
            type="number"
          />
          <Button>Sign Up</Button>
        </form>
        <div className="sign-col">
          <h2>Bundles </h2>
          <List items={bundles} final />
        </div>
        <div className="sign-col">  
        <h2>Techs</h2>
          <List items={techs} final />
        </div>
      </div>
    </Page>
  );
}
