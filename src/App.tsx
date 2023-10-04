import { AboutMe } from "./pages/AboutMe/AboutMe";
import "./global.css";
import { Routes, Route } from "react-router-dom";
import { FormPage } from "./pages/FormPage/FormPage";

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<AboutMe />}></Route>
        <Route path="/quiz" element={<FormPage />}></Route>
      </Routes>
    </div>
  );
};
