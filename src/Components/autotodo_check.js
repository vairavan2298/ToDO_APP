import React, { Component } from "react";
import firebase from "./base";
import { withRouter } from "react-router";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  // Set a user input value
  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };

    db.settings(settings);
    db.collection("any");
    const userRef = db.collection("pendingTask").add({
      task: this.state.task,
    });
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <div className="auth-rapper">
        <div className="auth-nner">
          <h1>Todo</h1>
          <form onSubmit={this.addUser}>
            <div className="form-group">
              <label className="l-font">Add task to do...</label>
              <input
                type="text"
                name="task"
                placeholder="task yet to do"
                onChange={this.updateInput}
                value={this.state.task}
              />
            </div>

            <button
              type="submit"
              className="btn btn-log-col btn-hover btn-block"
            >
              Add Task
            </button>
            <Link to={"/Login"}>
              <button variant="dark" size="lg" align="center">
                Logout
              </button>
            </Link>
          </form>
        </div>
      </div>

      /* <Row>
          <Col md={{ span: 5, offset: 5 }}>
            <Link to={"/Login"}>
              <Button variant="dark" size="lg" align="center">
                Logout
              </Button>
            </Link>
          </Col>
        </Row> */
    );
  }
}

export default withRouter(Todo);
