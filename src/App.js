
import "./app.css";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./pages/home/Home";
import CCA from "./pages/cca/CCA";

function App() {
  return (
    <div>
      <Router className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>            
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/cca">
              <CCA />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>



  );
}

export default App;
