import React from "react";
import Star from "../assets/icons/star.svg";

const Slide = ({ name, comment, profession }) => {
  return (
    <div className="slide">
      <div className="rating">
        {[1, 2, 3, 4, 5].map((e) => (
          <img key={e} src={Star} />
        ))}
      </div>
      <p>{comment}</p>
      <p>
        <b>{name}</b>
        <br />
        {profession}
      </p>
    </div>
  );
};

export default Slide;
