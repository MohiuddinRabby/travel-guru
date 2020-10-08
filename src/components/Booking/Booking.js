import React, { useState } from "react";
import "./Booking.css";
import Auth from "../../assets/hooks/useAuth";
import Login from "../Login/Login";
const Booking = () => {
  const auth = Auth();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleSubmit = (e) => {
    e.preventDefault();
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
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>From</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Dhaka"
                      />
                    </div>
                    <div className="form-group">
                      <label>Destination</label>
                      <select className="form-control">
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
                            name="date"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Check-out</label>
                          <input
                            type="date"
                            name="date"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    {auth.singInUser ? (
                      <button
                        type="submit"
                        className="btn btn-warning btn-block btn-sm"
                      >
                        Confirm Booking
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-warning btn-block btn-sm"
                        onClick={handleShowModal}
                      >
                        Login to Confirm Booking
                      </button>
                    )}
                  </form>
                  {showModal ? (
                    <Login
                      show={showModal}
                      handleClose={handleCloseModal}
                    ></Login>
                  ) : (
                    false
                  )}
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
