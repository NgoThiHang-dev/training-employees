import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layouts/header/Header";
import Employees from "./views/employees/Employees";
import Home from "./views/home/Home";
import "antd/dist/antd.css";
import Footer from "./layouts/footer/Footer";
import "./assets/css/style.css";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

import { useContext } from "react";
import { ThemeContext } from "./views/theme/ThemeContext";

function App() {
  // const [isDialogAdd, setIsDialogAdd] = useState();
  // const themes = {
  //   dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  //   light: `${process.env.PUBLIC_URL}/light-theme.css`,
  // };
  // const [checkColor, setCheckColor] = useState();


  const { darkMode } = useContext(ThemeContext);

  return (
    // <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
      <Router>
        <Header />
        <div>
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
        <Footer />
      </Router>
    // </ThemeSwitcherProvider>
  );
}

export default App;
