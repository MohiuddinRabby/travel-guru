import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./assets/hooks/useAuth";
import Booking from "./components/Booking/Booking";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header></Header>
        <Switch>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route exact path="*">
            <Slider></Slider>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
