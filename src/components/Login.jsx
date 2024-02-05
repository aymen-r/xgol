import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import CustomInput from "./CustomInput";
import Button from "./Button";

import Google from "../assets/icons/google.svg";
import Facebook from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/twitter.svg";
import Line from "./Line";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    email && password && dispatch(login({ email, password }));
  };
  return (
    <div className="login_section ">
      <Row>
        <Col className="  d-flex flex-column  gap-4" xl="4" md="6" xs="12">
          <div className="d-flex align-items-center gap-2">
            <Line width={60} />
            <h5>Automated coaching tool</h5>
          </div>
          <h2>AI-Powered Leadership Transformation</h2>
          <form className="d-flex flex-column gap-3">
            <CustomInput
              placeholder={"email address"}
              type={"email"}
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              placeholder={"password"}
              type={"password"}
              value={password}
              setValue={setPassword}
            />
            <Button
              fn={handleSubmit}
              text={"Sign In"}
              color={"white"}
              linear={true}
              height={45}
            />
          </form>
          <div className="line-container">
            <div className="ligne"></div>
            <span>or</span>
            <div className="ligne"></div>
          </div>
          <Button
            text={"Continue with Google"}
            color={"white"}
            linear={true}
            height={58}
            icon={Google}
          />
          <Button
            text={"Continue with Facebook"}
            color={"white"}
            linear={false}
            height={58}
            icon={Facebook}
          />
          <Button
            text={"Continue with Twitter"}
            color={"white"}
            linear={false}
            height={58}
            icon={Twitter}
          />
          <p>
            Don't have an account? <span>Signup Now</span>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
