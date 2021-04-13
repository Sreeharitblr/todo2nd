import React, { Component } from "react";
import logo from "../logo.svg";
import Main from "./MainPage";
import { useSelector, useDispatch } from "react-redux";
import { Container, Image, Button, Form, Row, Col } from "react-bootstrap";
import Result from "./Result";

function DesignePage(props) {
  const value = useSelector((state) => state);

  return (
    <div>
      <div
        style={{ position: "fixed", width: "50%" }}
        className="cutting"
      ></div>
      <Main />
      {console.log("22222222222222", value.length)}
      {value.map((ele) => {
        return <Result ele={ele} />;
      })}
    </div>
  );
}

export default DesignePage;
