import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider, PrivateRoute } from "./assets/hooks/useAuth";
import Booking from "./components/Booking/Booking";
import Header from "./components/Header/Header";
import HotelInfo from "./components/HotelInfo/HotelInfo";
import Coxsbazar from "./components/Map/Coxsbazar";
import Sreemangal from "./components/Map/Sreemangal";
import Sundarban from "./components/Map/Sundarban";
import Slider from "./components/Slider/Slider";
import UnauthorizedView from "./components/UnauthorizedView/UnauthorizedView";
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
          <PrivateRoute path="/hotel/room/Info/coxsbazar">
            <Coxsbazar></Coxsbazar>
          </PrivateRoute>
          <PrivateRoute path="/hotel/room/Info/sundorban">
            <Sundarban></Sundarban>
          </PrivateRoute>
          <PrivateRoute path="/hotel/room/Info/sreemangal">
            <Sreemangal></Sreemangal>
          </PrivateRoute>
          <PrivateRoute path="/hotelInfo">
            <HotelInfo></HotelInfo>
          </PrivateRoute>
          <Route path="/unAuthorized/404">
            <UnauthorizedView></UnauthorizedView>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
