import React from "react";
import { Route, Routes } from "react-router-dom";
import Tattoos from "./components/Tattoos";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Drawings from "./components/Drawings";
import Paintings from "./components/Paintings";
import Photography from "./components/Photography";
import SurrealisticTattoos from "./components/SurrealisticTattoos";
import VintageTattoos from "./components/VintageTattoos";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tattoos" element={<Tattoos />}/>
        <Route path="/photography" element={<Photography />}/>
        <Route path="/paintings" element={<Paintings />}/>
        <Route path="/drawings" element={<Drawings />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/surrealistictattoos" element={<SurrealisticTattoos />}/>
        <Route path="/vintagetattoos" element={<VintageTattoos />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>

  );
}

export default App;
