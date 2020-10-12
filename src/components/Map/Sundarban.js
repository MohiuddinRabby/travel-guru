import React, { useRef, useState } from "react";
import HotelRoom from "../HotelInfo/HotelRoom";
import ReactMapGL, { Marker } from "react-map-gl";
import { Overlay, Tooltip } from "react-bootstrap";
import Key from "../../Key";

const Sundarban = () => {
  const [mapStyle, setMapStyle] = useState({
    width: "100%",
    height: "80vh",
    latitude: 22.492247,
    longitude: 89.591059,
    zoom: 8,
  });
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <HotelRoom></HotelRoom>
        </div>
        <div className="col-md-4 py-5">
          <ReactMapGL
            {...mapStyle}
            onViewportChange={(nextViewport) => setMapStyle(nextViewport)}
            mapboxApiAccessToken={Key}
          >
            {/* marker of cox's bazar*/}
            <Marker latitude={22.492247} longitude={89.591059}>
              <i
                className="fas fa-map-marker text-danger"
                ref={target}
                onClick={() => setShow(!show)}
              ></i>
            </Marker>
            <Overlay target={target.current} show={show} placement="right">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  Sundarban
                </Tooltip>
              )}
            </Overlay>
          </ReactMapGL>
        </div>
      </div>
    </div>
  );
};

export default Sundarban;
