import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
