import React from "react";
import Logo from "../assets/images/white-logo.png";
import Button from "./Button";
const Header = () => {
  return (
    <div className=" header">
      <img src={Logo} className="h-10 w-36" />
      <nav>
        <ul className="flex flex-wrap justify-center gap-4  text-lg  text-cyan-50 tracking-wider">
          {["Home", "About", "Program", "Services", "Contact"].map((e, i) => (
            <li
              key={i}
              className="mr-5 hover:text-[#8A2BEE] transition duration-200 ease-in-out cursor-pointer "
            >
              {e}
            </li>
          ))}
        </ul>
      </nav>
      <Button
        width={150}
        height={40}
        text={"Sign up"}
        color={"white"}
        linear={true}
      />
    </div>
  );
};

export default Header;
