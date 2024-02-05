import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

const InsideApp = () => {
  const { email } = useSelector((state) => state.auth.user);

  return (
    <Layout>
      <div style={{ height: "60vh" }}>
        <h1>Welcome back {email}</h1>
      </div>
    </Layout>
  );
};

export default InsideApp;
