import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import app from "./base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/Login");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  // render(){
  return (
    <div className="container">
      <div className="auth-wwrapper">
        <div className="auth-iinner">
          <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSignUp}>
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
              <div className="form-group">
                <label className="l-font">Re-Enter Password</label>
                <input
                  type="password"
                  name="rpassword"
                  className="form-control l-font"
                  placeholder="Enter password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-log-col btn-hover btn-block"
              >
                SignUp
              </button>
              <p className="forgot-password text-right l-font">
                Already registered, Go to<Link to={"/Login"}>Login?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
