// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Contact from "./Contact";
import About from "./About";
import Blog from "./Blog";
import Faculty from "../src/Components/Faculty";
import Home from "./Home";
import FetchAPI from "./FetchAPI";
import FetchAPIByID from "./FetchAPIByID";
import FormUpdate from "./Components/FormUpdate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faculty" element={<Faculty />}></Route>
          //? This is making after the compo
          <Route path="api" element={<FetchAPI />}></Route>
          <Route path="/api/:id" element={<FetchAPIByID />}></Route>
          <Route path="/edit/:id" element={<FormUpdate />}></Route>
          <Route path="/AddFac" element={<FormUpdate />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
