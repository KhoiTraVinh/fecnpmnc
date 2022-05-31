import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HotelList from "./pages/hotelList/HotelList";
import Hotel from "./pages/hotel/Hotel";
import NewHotel from "./pages/newHotel/NewHotel";
import FlightList from "./pages/flightList/FlightList";
import Flight from "./pages/flight/Flight";
import NewFlight from "./pages/newFlight/NewFlight";
import Transaction from "./pages/transaction/Transaction";
import Login from "./pages/login/Login.jsx";
import TransactionInfo from "./pages/transactionInfo/TransactionInfo";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        {/* Login Page */}
        <Route path="/login">
          <Login />
        </Route>
        {
          <>
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>

              {/* Hotel page */}
              <Route path="/hotels">
                <HotelList />
              </Route>
              <Route path="/hotel/:hotelId">
                <Hotel />
              </Route>
              <Route path="/newhotel">
                <NewHotel />
              </Route>

              {/* flight page */}
              <Route path="/flights">
                <FlightList />
              </Route>
              <Route path="/flight/:flightID">
                <Flight />
              </Route>
              <Route path="/newflight">
                <NewFlight />
              </Route>

              {/* Transactions page */}
              <Route path="/transactions">
                <Transaction />
              </Route>
              {/* Transactions Info page */}
              <Route path="/transaction/:orderId">
                <TransactionInfo />
              </Route>
            </div>
          </>
        }
      </Switch>
    </Router>
  );
}

export default App;
