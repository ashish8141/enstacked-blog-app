import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import SinglePost from "./SinglePost";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;
