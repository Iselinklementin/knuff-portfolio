import "./sass/style.scss";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/routes/portfolio";
import Websites from "./components/routes/websites";
import About from "./components/routes/about";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="portfolio" element={<Portfolio />} />
      <Route exact path="websites" element={<Websites />} />
      <Route exact path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
