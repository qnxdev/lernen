import Page from "../components/Page";
import List from "../components/List";
import { bundles, countries, techs } from "../lib/lists";
import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import { store } from "../lib/store";
import GenerateCourses from "../components/GenerateCourses";
import SignUp from "../components/SignUp";
import Referlink from "../components/Referlink";
export default function SignUpPage() {

  return (
    <Page>
      <Referlink />
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
