import React from "react";
import { Link } from "react-router-dom";

const Description = (props) => {
  const { description } = props.description;
  return (
    <div>
      <h5>{description}</h5>
    </div>
  );
};
export default Description;
