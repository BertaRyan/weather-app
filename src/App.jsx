import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home/index.jsx";
import City from "./pages/City/index.jsx";
import MenuBar from "../src/components/MenuBar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./index.css"

const lightTheme = {
  main: "#FFFFFF",
  secondary: "#000000",
  border: "#3f3f3f",
  accent: "lightblue",
  shadow: "lightblue",
};

const darkTheme = {
  main: "black",
  secondary: "#FFFFFF",
  border: "#FFFFFF",
  accent: "#9b33b2",
  shadow: "#9b33b2",
};

const GlobalStyle = createGlobalStyle`
body{
  margin:0px;
  padding:
}

*{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
  font-family:roboto, sans-serif;
}

`;

const App = () => {
  const [isLight, setLight] = useState(true);

  const handleLight = () => {
    setLight(!isLight);
  };

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className='main-container'>
        <Router>
          <MenuBar isLight={isLight} handleLight={handleLight} />
          <div style={{ display: "flex", background: isLight ? lightTheme.main : darkTheme. main, height:"94vh",overflow:"scroll"  }}>
            <Navigation />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/city/:cityId" element={<City />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
