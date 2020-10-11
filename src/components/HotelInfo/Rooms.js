import React from "react";
import "./HotelInfo.css";
const Rooms = (props) => {
  const { title, inImg, price, description } = props.rooms;
  return (
    <div className="rooms-details">
      <div className="room-img">
        <div className="card" style={{ width: "20rem" }}>
          <div className="card-body">
            <img src={inImg} className="card-img-top" alt="" />
          </div>
        </div>
      </div>
      <div className="room-desc">
        <div className="card text-center" style={{ width: "20rem" }}>
          <div className="card-text">{title}</div>
          <div className="card-text">{description}</div>
          <div className="card-text">$ {price} / day</div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
