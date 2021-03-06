import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import { NotificationContainer } from "react-notifications";

import WSocket from "./components/ws/Ws";
import Agents from "./components/agents/Agents";
import Dash from "./components/dash/Dash";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Info from "./components/info/Info";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/react-notifications/lib/notifications.css";

class App extends Component {
  render() {
    return (
      <Container>
        <WSocket />
        <Header />
        <NotificationContainer />
        <Agents />
        <BrowserRouter>
          <Switch>
            <Route path="/info/:id" component={Info} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Dash} />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
