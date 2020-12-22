import React, { Component } from "react";
import app from "./base";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";

class Todo extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      userInput: "",
      pending_array: [],
      completed_array: [],
    };
  }

  // Set a user input value
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  // Add item if user input in not empty
  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        // Add a random id which is used to delete
        id: Math.random(),

        // Add a user value to list
        value: this.state.userInput,
      };

      // Update list
      const pending_array = [...this.state.pending_array];
      pending_array.push(userInput);

      // completed_array.push(userInput);
      // reset state
      this.setState({
        pending_array,

        userInput: "",
      });
    }
  }

  deleteItem(key) {
    const pending_array = [...this.state.pending_array];
    const completed_array = [...this.state.completed_array];
    // Filter values and leave value which we need to delete
    const updateList = pending_array.filter((item) => item.id !== key);

    const move = pending_array.filter((item) => item.id === key);
    const move1 = move[0].value;
    console.log(move1);
    completed_array.push(move1);
    console.log(completed_array);
    // const moveList = completed_array.push((item) => item.id == key);
    //console.log(moveList);
    // Update list in state
    this.setState({
      pending_array: updateList,
      completed_array,
    });
  }

  render() {
    return (
      <Container>
        <br></br>
        <br></br>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          TODO LIST
        </Row>

        <hr />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="add task to do . . . "
                size="lg"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
                aria-label="add something"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="dark" size="lg" onClick={() => this.addItem()}>
                  ADD TASK
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 1 }}>
            <h1>Pending Task</h1>
            <ListGroup>
              {/* map over and print items */}
              {this.state.pending_array.map((item) => {
                return (
                  <ListGroup.Item
                    variant="dark"
                    action
                    onClick={() => this.deleteItem(item.id)}
                  >
                    {item.value}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <h1>Completed Task</h1>
            <ListGroup>
              {/* map over and print items */}
              {this.state.completed_array.map((move1) => {
                return (
                  console.log(move1),
                  (<ListGroup.Item variant="dark">{move1}</ListGroup.Item>)
                );
              })}
            </ListGroup>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 5, offset: 5 }}>
            <Link to={"/Login"}>
              <Button variant="dark" size="lg" align="center">
                Logout
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Todo;
