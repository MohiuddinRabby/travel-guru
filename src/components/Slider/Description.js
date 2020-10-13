import React from "react";
import { useHistory } from "react-router-dom";

const Description = (props) => {
  const { description } = props.description;
  let bookingPage = useHistory();
  const handleBookingPage = () => {
    bookingPage.push("/booking");
  };
  return (
    <div>
      <h5>{description}</h5>
      <button className="global buttons btn btn-sm" onClick={handleBookingPage}>
        BOOKING
      </button>
    </div>
  );
};
export default Description;
