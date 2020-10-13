import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UserBookignInfo = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    const desInfo = JSON.parse(localStorage.getItem("info"));
    setInfo(desInfo);
  }, []);
  return (
    <div>
      <h6 style={{ fontWeight: "bold", color: "#008080" }}>
        {info.location} - chekcIn {info.chekin} - checkOut {info.checkout}
      </h6>
    </div>
  );
};

export default UserBookignInfo;
