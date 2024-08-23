import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Header from "./components/header";
import Progress from "./components/progress";

const AuthLazyApp = lazy(() => import("./components/auth-app"));
const MarketingLazyApp = lazy(() => import("./components/marketing-app"));

const generateClassName = createGenerateClassName({
  productionPrefix: "container",
});

export default function App() {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header onSignOut={() => setIsSignIn(false)} isSignIn={isSignIn} />

        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazyApp onSignIn={() => setIsSignIn(true)} />
            </Route>
            <Route path="/" component={MarketingLazyApp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
}
