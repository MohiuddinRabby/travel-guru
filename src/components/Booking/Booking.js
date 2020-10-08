import React, { useState } from "react";
import Auth from "../../assets/hooks/useAuth";
const Booking = () => {
  const auth = Auth();
  return (
    <div>
      <h1 className="text-danger">This is bookign page</h1>
    </div>
  );
};

export default Booking;
