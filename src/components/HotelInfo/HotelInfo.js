import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HotelInfo = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    const desInfo = JSON.parse(localStorage.getItem("info"));
    setInfo(desInfo);
  }, []);
  return (
    <div className="container py-5">
      <h1 className="text-danger">Hotel {info.from}</h1>
    </div>
  );
};

export default HotelInfo;
