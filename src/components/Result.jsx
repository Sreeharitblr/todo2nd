import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../Redux/action";

const Result = (props) => {
  const [style, setStyle] = useState({ display: "none"});
  const dispatch = useDispatch();
  return (
    <div
      className="pt-3"
      style={{ width: "75%", margin: "auto" }}
      onMouseEnter={(e) => {
        setStyle({ display: "block", width :"147.609px", height : "49px" , position: "fixed" });
      }}
      onMouseLeave={(e) => {
        setStyle({ display: "none" });
      }}
    >
      <Card className="shadow -lg">
        <Card.Body>
          <Form>
            <Row className="ml-4">
              <Form.Control
                size="lg"
                style={{ width: "95%" }}
                type="text"
                placeholder={props.ele.title}
                disabled={true}
                // onChange={(e) =>
                //   setTodo({ id: Math.random() * 50, title: e.target.value })
                // }
              />
              <Button

                className="float-right      "
                style={style}
                onClick={() => {
                   dispatch(deleteTodo(props.ele.id));
                }}
              >
                Delete
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Result;
