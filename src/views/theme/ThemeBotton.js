import React, { useContext } from "react";
import IconButton from '@mui/material/IconButton';
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "./ThemeContext";

function ThemeBotton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <div>
      <IconButton
        className="darkMode"
        onClick={handleTheme}>
        <LightModeIcon />
      </IconButton>
    </div>
  );
}

export default ThemeBotton;