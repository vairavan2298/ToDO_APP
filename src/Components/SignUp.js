import React, { useCallback } from "react";
import { withRouter } from "react-router";
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

              <button
                type="submit"
                className="btn btn-log-col btn-hover btn-block"
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
