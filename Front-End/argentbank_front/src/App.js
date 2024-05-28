import React from "react";
import { Routes, Route } from "react-router-dom";
import "./main.scss";
import Nav from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Accueil from "./pages/Accueil/Accueil";
import Connexion from "./pages/Connexion/Connexion";
import User from "./pages/User/User";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="User" element={<User />} />
        <Route path="Connexion" element={<Connexion />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;