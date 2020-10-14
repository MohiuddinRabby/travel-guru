import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import "./ReserveConfirm.css";
const ReserveConfirm = () => {
  let afterSuccess = useHistory();
  const [successMsg, setSuccessMsg] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleConfirm = () => {
    setSuccessMsg(true);
    //clear local storage
    window.localStorage.clear();
  };
  if (successMsg) {
    setTimeout(() => {
      afterSuccess.push("/");
    }, 2000);
  }
  return (
    <Popup
      trigger={<button className="btn global buttons btn-sm"> Reserve</button>}
      position="center center"
    >
      {(close) => (
        <Container fluid="md">
          {successMsg && <p className="text-success">Booking Confirmed</p>}
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="text-info">Email address</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label className="text-info">Pay with</label>
              <select className="form-control">
                <option value="visa">Visa</option>
                <option value="bakash">Bkash</option>
                <option value="rocket">Rocket</option>
              </select>
            </div>
            <button
              className="btn global buttons btn-sm"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </form>
          <button className="close" onClick={close}>
            &times;
          </button>
        </Container>
      )}
    </Popup>
  );
};
export default ReserveConfirm;
