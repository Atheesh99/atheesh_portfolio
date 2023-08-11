import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Atheesh K </span>
            from <span className="purple"> palakkad, kerala.</span>
            <br /> As a fresher with a passion for mobile app development  , I am excited to share my journey as a flutter developer. Currently,  lam pursuing a flutter developer course from Brototype this self learning experience has allowed me to develop my skills independently and I take pride in my commitment to continous growth and improvement.   
            <br />
            <br/>
            As a self learner I am excited to bring my skills and knowledge to your dynamic organization .i thrive in innovation environments that encourage professional growth. Please check out my portfolio to see my dedication and passion for mobile app development
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't Quit "Work Hard" if it Late also Don't Care !"{" "}
          </p>
          <footer className="blockquote-footer">Atheesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
