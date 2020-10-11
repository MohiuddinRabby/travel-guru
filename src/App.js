import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./assets/hooks/useAuth";
import Booking from "./components/Booking/Booking";
import Header from "./components/Header/Header";
import HotelInfo from "./components/HotelInfo/HotelInfo";
import Coxsbazar from "./components/Map/Coxsbazar";
import Sreemangal from "./components/Map/Sreemangal";
import Sundarban from "./components/Map/Sundarban";
import Slider from "./components/Slider/Slider";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Slider></Slider>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="/hotel/room/Info/coxsbazar">
            <Coxsbazar></Coxsbazar>
          </Route>
          <Route path="/hotel/room/Info/sundorban">
            <Sundarban></Sundarban>
          </Route>
          <Route path="/hotel/room/Info/sreemangal">
            <Sreemangal></Sreemangal>
          </Route>
          <Route path="/hotelInfo">
            <HotelInfo></HotelInfo>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
