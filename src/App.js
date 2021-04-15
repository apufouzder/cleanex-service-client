import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <h1>page not found 404</h1>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
