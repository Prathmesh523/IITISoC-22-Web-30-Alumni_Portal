import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AddStory from "./AddStory";
import Authorize from "./Authorize";
import HomeBody from "./HomeBody";
import Gallery from "./Gallery";
import GalleryIn from "./GalleryIn";
import EventsIn from "./EventsIn";
import OpportunitiesIn from "./OpportunitiesIn";
import Profile from "./Profile";
import Signup from "./Signup";
import Test from "./Test";
import DirectoryAdmin from "./DirectoryAdmin";
import StoriesIn from "./StoriesIn";
import Email from "./Email";
import logo from "./images/logo.jpg";


function App() {
  return (
    <div>
      <Router>
        <Header myLogo={logo} />
        <Routes>
          <Route path="/" element={<HomeBody />} />
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
          <Route path="/jobsview" element={<OpportunitiesIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/galleries" element={<GalleryIn />} />
          <Route path="/eventsin" element={<EventsIn />} />
          <Route path="/create" element={<AddStory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<Authorize />} />
          <Route path="/test" element={<Test />} />
          <Route path="/email" element={<Email />} />
          <Route path="/storiesin" element={<StoriesIn />} />
          <Route path="/adirectory" element={<DirectoryAdmin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
