import React from "react";

const CustomInput = ({ placeholder, type, value, setValue }) => {
  return (
    <div className="custom_input">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
