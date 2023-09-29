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
import TattooDrawings from "./components/TattooDrawings";
import SurrealisticDrawings from "./components/SurrealisticDrawings";
import PhotoSeriesOne from "./components/PhotoSeriesOne";
import PhotoSeriesTwo from "./components/PhotoSeriesTwo";
import PhotoSeriesThree from "./components/PhotoSeriesThree";
import Container from "./components/Container";
import PaintingSeriesOne from "./components/PaintingSeriesOne";
import PaintingSeriesTwo from "./components/PaintingSeriesTwo";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Container>
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
      </Container>
    </>

  );
}

export default App;
