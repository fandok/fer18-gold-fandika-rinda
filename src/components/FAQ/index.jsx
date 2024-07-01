import React from "react";
import "./styles.css";
import { Accordion } from "react-bootstrap";
import { faqList } from "../../dummy";
import FAQAccord from "../FAQAccord";
const FAQ = ({ id }) => {
  return (
    <div id={id} className="faq-wrapper">
      <div className="faq">
        <div className="faq-title">
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="faq-accord">
          <Accordion>
            {faqList.map((item, index) => (
              <FAQAccord
                key={index}
                title={item.title}
                desc={item.desc}
                index={index}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
