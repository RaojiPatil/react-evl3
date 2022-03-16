
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import MoviesDashboard from "./MoviesDashboard";
import { Navbar } from "./Navbar";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="MoviesDashboard" element={<MoviesDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

