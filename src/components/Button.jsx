import React from "react";

const Button = ({ text, width, height, color, linear, icon ,fn }) => {
  return (
    <div
      style={{
        width,
        height,
      }}
    >
      <div onClick={fn} className={`button ${linear ? "linear" : "transparant"}`}>
        {icon && <img src={icon} alt="Button Icon" className="px-2 " />}
        <span style={{ color: color }}>{text}</span>
      </div>
    </div>
  );
};

export default Button;
