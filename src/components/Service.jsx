import React from "react";

const Service = ({ title, icon, desc }) => {
  return (
    <div className="service_card">
      <div className="service_icon">
        <img className="icon" src={icon} />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Service;
