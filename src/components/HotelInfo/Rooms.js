import React, { useState } from "react";
import { useAuth } from "../../assets/hooks/useAuth";
import Login from "../Login/Login";
import ReserveConfirm from "../ReserveConfirm/ReserveConfirm";
import "./HotelInfo.css";
const Rooms = (props) => {
  const { title, inImg, price, description } = props.rooms;
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const auth = useAuth();
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
          {auth.singInUser ? (
            <ReserveConfirm></ReserveConfirm>
          ) : (
            <button
              className="btn btn-danger btn-block btn-sm"
              onClick={handleShowModal}
            >
              Reserve
            </button>
          )}
        </div>
      </div>
      {showModal ? (
        <Login show={showModal} handleClose={handleCloseModal}></Login>
      ) : (
        false
      )}
    </div>
  );
};

export default Rooms;
