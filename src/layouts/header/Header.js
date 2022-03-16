import React from "react";
import "../../assets/css/header.css";
import { Switch} from "antd";
// import { useThemeSwitcher } from "react-css-theme-switcher";

const Header = () => {
    // const [isDarkMode, setIsDarkMode] = React.useState();
    // const { switcher, currentTheme, status, themes } = useThemeSwitcher();

    // const toggleTheme = (isChecked) => {
    //     console.log("hhhhhhhhhhhhhhh")
    //     console.log(isChecked)
    //   setIsDarkMode(isChecked);
    //   switcher({ theme: isChecked ? themes.dark : themes.light });
    // };
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/employees">Employee manager</a>
                    </li>
                </ul>
                <form className="d-flex">
                     {/* <Switch checked={isDarkMode} onChange={toggleTheme} /> */}
                     <Switch />
                </form>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Header;
