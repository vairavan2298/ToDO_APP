//import React, { Component } from "react";
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/Todo");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h1>Log in</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="l-font">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control l-font"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label className="l-font">Password</label>
            <input
              type="password"
              name="password"
              className="form-control l-font"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-log-col btn-hover btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
