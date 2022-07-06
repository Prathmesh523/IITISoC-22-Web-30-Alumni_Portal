import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Events from "./Events";
import Stories from "./Stories";
import Directory from "./Directory";
import logo from "./images/logo.jpg";


function App() {
  return (
    <div>
      <Router>
        <Header myLogo={logo} />
        <Routes>
          {/* <Route path="/" element={<HomeBody />} /> */}
          <Route path="/events" element={<Events />} />
          <Route path='/stories' element={<Stories />} />
          <Route path="/directory" element={<Directory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
