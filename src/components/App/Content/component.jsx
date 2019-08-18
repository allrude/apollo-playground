import React from "react";
import { Route, Switch } from "react-router";

import HomePage from "components/Pages/HomePage/component";
import CustomerPage from "components/Pages/CustomerPage";
import CheckoutPage from "components/Pages/CheckoutPage";
import LoginPage from "components/Pages/LoginPage";
import CartPage from "components/Pages/CartPage";
import Page from "components/Pages/Page";
import NotFoundPage from "components/Pages/NotFoundPage";
import Messages from "components/Molecules/Messages";

import customerPages from "./customerPages";
import "./component.css";

const Content = () => {
  return (
    <div className="Content">
      <Messages />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {customerPages.map((customerPage) => {
          return (
            <Route
              key={customerPage.path}
              exact
              path={customerPage.path}
              render={props => {
                return (
                  <CustomerPage {...props} content={customerPage.component} />
                );
              }}
            />
          );
        })}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route path="/:url_key" component={Page} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Content;
