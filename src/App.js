import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Home from "../src/screens/Home";
import Menu from "./screens/Menu";
import ForgotPassword from "./screens/ForgotPassword";
import Search from "./screens/Search";
import Profile from "./screens/Profile";
import NutritionalFacts from "./screens/NutritionalFacts";
import Premium from "./screens/Premium";
import Login from "./screens/Login";
import Recipe from "./screens/Recipe";
import Register from "./screens/Register.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nutritional_facts" element={<NutritionalFacts />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
