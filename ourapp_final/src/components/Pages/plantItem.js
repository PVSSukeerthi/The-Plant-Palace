import React from "react";
import "./exploreplants.css";

function Plant({ image, name, category}) {
  return (
    <div className="plant">
      <div className='pool'>{image} </div>
      <h1> {name} </h1>
      <p> {category} </p>
    </div>
  );
}

export default Plant;