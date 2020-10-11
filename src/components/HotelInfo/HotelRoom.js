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
  const [info, setInfo] = useState({});
  useEffect(() => {
    const desInfo = JSON.parse(localStorage.getItem("info"));
    setInfo(desInfo);
  }, []);
  if (info.location === "Cox's Bazar") {
    console.log("cox");
  } else if (info.location === "sreemangal") {
    console.log("sree");
  }
  return (
    <div className="container py-5 text-danger">
      <div className="row">
        <div className="col-md-8">
          {hotelRooms.map((room) => (
            <div className="py-3">
              <Rooms key={room.keys} rooms={room}></Rooms>
            </div>
          ))}
        </div>
        <div className="col-md-4">{}</div>
      </div>
    </div>
  );
};

export default HotelRoom;
