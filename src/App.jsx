import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import East from "./pages/DomesticPlaces/East";
import West from "./pages/DomesticPlaces/West";
import North from "./pages/DomesticPlaces/North";
import South from "./pages/DomesticPlaces/South";
import Thailand from "./pages/InternationalPages/Thailand";
import Belgium from "./pages/InternationalPages/Belgium";
import Switzerland from "./pages/InternationalPages/Switzerland";
import Maldives from "./pages/InternationalPages/Maldives";
import Malysia from "./pages/InternationalPages/Malysia";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/east" element={<East />} />
          <Route path="/west" element={<West />} />
          <Route path="/north" element={<North />} />
          <Route path="/south" element={<South />} />
          <Route path="/thailand" element={<Thailand />} />
          <Route path="/belgium" element={<Belgium />} />
          <Route path="/switzerland" element={<Switzerland />} />
          <Route path="/maldives" element={<Maldives />} />
          <Route path="/malysia" element={<Malysia />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
