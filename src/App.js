import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddService from "./components/AdminMenu/AddService/AddService";
import AllBookingList from "./components/AdminMenu/AllBookingList/AllBookingList";
import MakeAdmin from "./components/AdminMenu/MakeAdmin/MakeAdmin";
import ManageServices from "./components/AdminMenu/ManageServices/ManageServices";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import Booking from "./components/UserMenu/Booking/Booking";
import BookingList from "./components/UserMenu/BookingList/BookingList";
import Review from "./components/UserMenu/Review/Review";


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

          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
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

          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
