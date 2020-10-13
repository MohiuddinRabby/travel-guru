import React from "react";
import { useState } from "react";
import data from "../../data";
import Description from "./Description";
import img1 from "../../assets/img/Sajek.png";
import img2 from "../../assets/img/Sreemongol.png";
import img3 from "../../assets/img/sundorbon.png";
import "./Slider.css";

const Slider = () => {
  const [destination] = useState(data);
  const [card, setCard] = useState("Cox's Bazar");
  const selectCard = destination.filter((place) => place.name === card);
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
                <h6 className="text-center text-info">Cox's Bazar</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 place-card">
              <div className="card">
                <div className="card-img" onClick={() => setCard("Sreemangal")}>
                  <img src={img2} alt="" className="img-fluid" />
                <h6 className="text-center text-info">Sreemangal</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3 place-card">
              <div className="card">
                <div className="card-img" onClick={() => setCard("Sundarban")}>
                  <img src={img3} alt="" className="img-fluid" />
                <h6 className="text-center text-info">Sundarban</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
