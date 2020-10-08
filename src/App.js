import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./assets/hooks/useAuth";
import Booking from "./components/Booking/Booking";
import Header from "./components/Header/Header";
import HotelInfo from "./components/HotelInfo/HotelInfo";
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
          <Route path="/hotelInfo">
            <HotelInfo></HotelInfo>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
