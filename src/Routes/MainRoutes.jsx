import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import MoviesDashboard from "../components/MoviesDashboard";
import { Navbar } from "../components/Navbar";

export const MainRoutes = ()=>{
    return(
        <>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="MoviesDashboard" element={<MoviesDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}