import React, { useEffect, useState } from "react";
import Rooms from "./Rooms";

const HotelRoom = () => {
  const [hotelRooms, setHotelRooms] = useState([]);
  useEffect(() => {
    fetch("https://airdnd0101.herokuapp.com/homes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setHotelRooms(data.slice(0, 3));
      });
  }, []);
  return (
    <div className="container py-5 text-danger">
      {hotelRooms.map((room) => (
        <div className="py-3">
          <Rooms key={room.keys} rooms={room}></Rooms>
        </div>
      ))}
    </div>
  );
};

export default HotelRoom;
