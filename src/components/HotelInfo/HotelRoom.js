import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Rooms from "./Rooms";
import UserBookignInfo from "./UserBookignInfo";

const HotelRoom = () => {
  const [hotelRooms, setHotelRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://airdnd0101.herokuapp.com/homes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setHotelRooms(data.slice(0, 3));
        setLoading(false);
      });
  }, []);
  return (
    <div className="container py-5 text-danger">
      <h4>
        <UserBookignInfo></UserBookignInfo>
      </h4>
      {loading ? (
        <div className="py-5">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <h5 className="py-4">Loading hotel info</h5>
        </div>
      ) : (
        hotelRooms.map((room) => (
          <div className="py-2" key={room.keys}>
            <Rooms  rooms={room}></Rooms>
          </div>
        ))
      )}
    </div>
  );
};

export default HotelRoom;
