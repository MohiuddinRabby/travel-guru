import React, { useState } from "react";
import "./Booking.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
const Booking = () => {
  const { handleSubmit, register, errors } = useForm();
  const [fromLocation, setFromLocation] = useState("");
  const [location, setLocation] = useState("coxsbazar");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  let hotelPage = useHistory();
  const saveToLocal = () => {
    const newInfo = {
      from: fromLocation,
      location: location,
      chekin: checkin,
      checkout: checkout,
    };
    localStorage.setItem("info", JSON.stringify(newInfo));
    if (location === "coxsbazar") {
      hotelPage.push("/hotel/room/Info/coxsbazar");
    } else if (location === "sundarban") {
      hotelPage.push("/hotel/room/Info/sundorban");
    } else {
      hotelPage.push("/hotel/room/Info/sreemangal");
    }
  };
  return (
    <div id="booking-section">
      <div className="booking-darkOverlay">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6"></div>
            <div className="col-md-6 py-5">
              <div className="card bg-dark text-center card-form">
                <div className="card-body">
                  <form onSubmit={handleSubmit(saveToLocal)}>
                    <div className="form-group">
                      <label>From</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Dhaka"
                        onChange={(e) => setFromLocation(e.target.value)}
                        name="from"
                        ref={register({
                          required: "Required",
                        })}
                      />
                      <p className="text-danger">
                        {errors.from && errors.from.message}
                      </p>
                    </div>
                    <div className="form-group">
                      <label>Destination</label>
                      <select
                        className="form-control"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                      >
                        <option value="coxsbazar">Cox's Bazar</option>
                        <option value="sreemangal">Sreemangal</option>
                        <option value="sundarban">Sundarban</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <label>Check-in</label>
                          <input
                            type="date"
                            value={checkin}
                            onChange={(e) => setCheckin(e.target.value)}
                            className="form-control"
                            name="checkin"
                            ref={register({
                              required: "Required",
                            })}
                          />
                          <p className="text-danger">
                            {errors.checkin && errors.checkin.message}
                          </p>
                        </div>

                        <div className="col-md-6">
                          <label>Check-out</label>
                          <input
                            type="date"
                            value={checkout}
                            onChange={(e) => setCheckout(e.target.value)}
                            className="form-control"
                            name="checkout"
                            ref={register({
                              required: "Required",
                            })}
                          />
                          <p className="text-danger">
                            {errors.checkout && errors.checkout.message}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="btn global buttons btn-block btn-sm">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
