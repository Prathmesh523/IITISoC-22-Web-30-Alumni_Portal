import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Events from "./Events";
import Stories from "./Stories";
import Directory from "./Directory";
import Batchwiselist from "./Batchwiselist";
import Terms from "./Terms";
import ContactUs from "./ContactUs";
import Privacypolicy from "./Privacypolicy";
import Settings from "./Settings";
import Changepassword from "./Changepassword";
import Opportunities from "./Opportunities";
import Login from "./Login";
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
          <Route path="/batch" element={<Batchwiselist />} /> 
          <Route path="/terms" element={<Terms />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
