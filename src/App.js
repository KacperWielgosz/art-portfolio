import React from "react";
import { Route, Routes } from "react-router-dom";
import Tattoos from "./components/Tattoos/Tattoos";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Drawings from "./components/Drawings/Drawings";
import Paintings from "./components/Paintings/Paintings";
import Photography from "./components/Photography/Photography";
import SurrealisticTattoos from "./components/SurrealisticTattoos";
import VintageTattoos from "./components/VintageTattoos";
import NotFound from "./components/NotFound/NotFound";
import TattooDrawings from "./components/TattooDrawings";
import SurrealisticDrawings from "./components/SurrealisticDrawings";
import PhotoSeriesOne from "./components/PhotoSeriesOne";
import PhotoSeriesTwo from "./components/PhotoSeriesTwo";
import PhotoSeriesThree from "./components/PhotoSeriesThree";
import Container from "./components/Container/Container";
import PaintingSeriesOne from "./components/PaintingSeriesOne";
import PaintingSeriesTwo from "./components/PaintingSeriesTwo";
import Contact from "./components/Contact/Contact";

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
          <Route path="/tattoodrawings" element={<TattooDrawings />}/>
          <Route path="/surrealisticdrawings" element={<SurrealisticDrawings />}/>
          <Route path="/photoseriesone" element={<PhotoSeriesOne />}/>
          <Route path="/photoseriestwo" element={<PhotoSeriesTwo />}/>
          <Route path="/photoseriesthree" element={<PhotoSeriesThree />}/>
          <Route path="/paintingseriesone" element={<PaintingSeriesOne />}/>
          <Route path="/paintingseriestwo" element={<PaintingSeriesTwo />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </>

  );
}

export default App;
