import React from "react";
import { Accordion } from "react-bootstrap";
import "./styles.css";
const FAQAccord = ({ index, title, desc }) => {
  return (
    <Accordion.Item eventKey={index.toString()}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>{desc}</Accordion.Body>
    </Accordion.Item>
  );
};

export default FAQAccord;
