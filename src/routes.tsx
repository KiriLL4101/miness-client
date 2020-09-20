import React from "react";
import { Switch, Route } from "react-router-dom";
import BasketPage from "./pages/BasketPage";
import HomePage from "./pages/HomePage";

import SignInPage from "./pages/SignInPage";

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <SignInPage />
        </Route>
        <Route path="/basket">
          <BasketPage />
        </Route>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" component={SignInPage} />
    </Switch>
  );
};
