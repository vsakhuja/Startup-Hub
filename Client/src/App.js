import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter, Route, Switch } from "react-router-dom";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage";
import Light from "components/headers/light";
import Registration from "components/Registration";
import StartupLogin from "components/StartupLogin";
import Adminlogin from "components/features/Adminlogin";
import Dashboard from "components/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SaaSProductLandingPage />
        </Route>
        <Route exact path='/login'>
          <Adminlogin />
        </Route>
        <Route exact path='/register'>
          <Registration />
        </Route>
        <Route exact path='/startuplogin'>
          <StartupLogin />
        </Route>
        <Route exact path='/admin/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}
