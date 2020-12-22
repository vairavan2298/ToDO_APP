import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Todo from "./Todo";

function Home() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to={"/"}>
          TODO APP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-md-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={"/Login"}>
                Login <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/SignUp"}>
                SignUp
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to={"/Todo"}>
                Todo
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Todo" component={Todo} />
      </Switch>
    </Router>
  );
}

export default Home;
