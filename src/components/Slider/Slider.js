import React from "react";
import { useState } from "react";
import data from "../../data";
import Description from "./Description";
import img1 from "../../assets/img/Sajek.png";
import img2 from "../../assets/img/Sreemongol.png";
import img3 from "../../assets/img/sundorbon.png";
import "./Slider.css";

const Slider = () => {
  const [destination, setDestination] = useState(data);
  const [card, setCard] = useState("Cox's Bazar");
  const selectCard = destination.filter((place) => place.name === card);
  const handleBooking = () => {
    console.log("place", selectCard);
  };
  return (
    <div id="home">
      <div className="dark-overlay">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              {selectCard.map((des) => (
                <Description key={des.id} description={des}></Description>
              ))}
            </div>
            <div className="col-md-3 place-card">
              <div className="card">
                <div
                  className="card-img"
                  onClick={() => setCard("Cox's Bazar")}
                >
                  <img src={img1} alt="" className="img-fluid" />
                </div>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={handleBooking}
                >
                  Book Destination
                </button>
              </div>
            </div>
            <div className="col-md-3 place-card">
              <div className="card">
                <div className="card-img" onClick={() => setCard("Sreemangal")}>
                  <img src={img2} alt="" className="img-fluid" />
                </div>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={handleBooking}
                >
                  Book Destination
                </button>
              </div>
            </div>
            <div className="col-md-3 place-card">
              <div className="card">
                <div className="card-img" onClick={() => setCard("Sundarban")}>
                  <img src={img3} alt="" className="img-fluid" />
                </div>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={handleBooking}
                >
                  Book Destination
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
