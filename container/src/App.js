import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { createBrowserHistory } from "history";

import Header from "./components/header";
import Progress from "./components/progress";

const AuthLazyApp = lazy(() => import("./components/auth-app"));
const MarketingLazyApp = lazy(() => import("./components/marketing-app"));
const DashboardLazyApp = lazy(() => import("./components/dashboard"));

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

const history = createBrowserHistory();

export default function App() {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    if (isSignIn) {
      history.push("/dashboard");
    }
  }, [isSignIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header onSignOut={() => setIsSignIn(false)} isSignIn={isSignIn} />

        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazyApp onSignIn={() => setIsSignIn(true)} />
            </Route>

            <Route path="/dashboard">
              {!isSignIn && <Redirect to="/" />}
              <DashboardLazyApp />
            </Route>
            <Route path="/" component={MarketingLazyApp} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
}
