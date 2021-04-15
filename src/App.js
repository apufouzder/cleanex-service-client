import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddService from "./components/AdminMenu/AddService/AddService";
import AllBookingList from "./components/AdminMenu/AllBookingList/AllBookingList";
import ManageServices from "./components/AdminMenu/ManageServices/ManageServices";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Booking from "./components/UserMenu/Booking/Booking";
import BookingList from "./components/UserMenu/BookingList/BookingList";


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/allBookings">
            <AllBookingList />
          </PrivateRoute>

          <Route path="/addService">
            <AddService />
          </Route>

          <Route path="/manage-services">
            <ManageServices />
          </Route>

          <PrivateRoute path="/booking/:_id">
            <Booking />
          </PrivateRoute>

          <PrivateRoute path="/bookingList">
            <BookingList />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <h1>page not found 404</h1>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
