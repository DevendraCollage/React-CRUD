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
import Counter from "./Components/Counter";
import FetchAPImern from "./FetchAPImern";
import FetchAPImernById from "./FetchAPImernByID";
import FormUpdatemern from "./Components/FormUpdatemern";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="counter" element={<Counter />}></Route>
          <Route path="blog" element={<Blog />} />
          <Route path="faculty" element={<Faculty />}></Route>
          //? This is making after the Components
          <Route path="api" element={<FetchAPI />}></Route>
          <Route path="/api/:id" element={<FetchAPIByID />}></Route>
          <Route path="/edit/:id" element={<FormUpdate />}></Route>
          <Route path="/AddFac" element={<FormUpdate />}></Route>
          //? This is for get app faculty data using MERN API
          <Route path="/apimern" element={<FetchAPImern />}></Route>
          <Route path="/AddFit" element={<FormUpdatemern />}></Route>
          <Route path="/challenges/:id" element={<FetchAPImernById />}></Route>
          <Route path="/AddFit/:id" element={<FormUpdatemern />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
