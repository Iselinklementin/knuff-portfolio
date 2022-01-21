import "./sass/style.scss";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/routes/Portfolio";
import Websites from "./components/routes/Websites";
import About from "./components/routes/About";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="Portfolio" element={<Portfolio />} />
      <Route exact path="Websites" element={<Websites />} />
      <Route exact path="About" element={<About />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
