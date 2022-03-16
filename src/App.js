import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./layouts/header/Header";
import Employees from "./views/employees/Employees";
import Home from "./views/home/Home";
import "antd/dist/antd.css";
import Footer from "./layouts/footer/Footer";
import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <Header />
      <div >
        <div className="content">
          <Switch>
            <Route path="/employees">
              <Employees />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
