import logo from "../logo.svg";
import React, { Component, useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../Redux/action";

function Main(props) {
  const [todo, setTodo] = useState({});
  const dispatch = useDispatch();


  return (
    <div className = "py-4" style={{ width: "75%",  margin: "auto" }}>
      <Card className="shadow -lg">
        <Card.Body>
          <Form>
            <Row className="ml-4">
              <Form.Control
                size="lg"
                style={{ width: "80%" }}
                type="text"
                placeholder="Enter Todo"
                onChange={(e) => setTodo({id: Math.round(Math.random() * 50) , title : e.target.value})}
              />
              <Button
                className="ml-3"
                style={{ width: "15%" }}
                onClick={() => {
                  dispatch(addTodo(todo));                  
                }}
              >
                Add
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Main;
