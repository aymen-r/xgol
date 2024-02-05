import React from "react";
import { Col, Row } from "reactstrap";
import AiRobot from "../assets/images/ai-robot.png";
import Dots from "../assets/images/dot-pattern.jpg";
import Line from "../components/Line";

const About = () => {
  return (
    <div className="about_section">
      <Row className="about">
        <Col className="left p-0" lg="6">
          <img src={Dots} alt="" className="dots" />
          <img src={AiRobot} className="about_image" />
        </Col>
        <Col className="right " lg="6">
          <div className="d-flex align-items-center gap-2">
            <Line width={100} />
            <h5>Dedicated Artificial Intelligence</h5>
          </div>
          <h2>AI-Powered Leadership Transformation</h2>
          <p>
            XGOL introduces groundbreaking AI-powered leadership simulators,
            designed to revolutionize the leadership development journey. Our
            simulators provide on-demand, immersive, and personalized
            experiences that adapt to each user's unique learning style and
            needs. lorem
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
