import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassname = createGenerateClassName({
  productionPrefix: "auth",
});

export default function App({ history, onSignIn }) {
  return (
    <StylesProvider generateClassName={generateClassname}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <SignIn onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <SignUp onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
}
