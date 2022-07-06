import React, { useState } from "react";
import "./css/events.css";
import useWindowSize from "./WindowSize";
import EventCards from "./EventCards";
import SearchIcon from '@mui/icons-material/Search';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import Magnum2022 from "./images/magnum opus 2022.jpg"

function Events() {
    const [navappear, setNavappear] = useState(false);
    const size = useWindowSize();
    return (
        <div className="eventpage">
            <div className="side-nav">
                <div class="input-group mb-4">
                    <input type="text" class="form-control" placeholder="Search by title..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-success" type="button" id="button-addon2"><SearchIcon /></button>
                    <div style={{display: (size.width >= 801) ? "none": "block"}} className="temp-button"><button className="btn btn-secondary" onClick={() => setNavappear(!navappear)} type="button"><LegendToggleIcon /></button></div>
                </div>
                <div style={{display: (size.width <= 800) ? (navappear ? "block" : "none") : "block"}}>
                <p style={{fontSize: "1.2rem", marginBottom: "20px"}}>EVENT CATEGORIES</p>
                <nav id="sideEvents">
                    <ul>
                        <li><span>All Events</span></li>
                        <li><span>Past Events</span></li>
                        <li><span>Upcoming Events</span></li>
                        <li><span>Categories</span></li>
                    </ul>
                </nav>
                <div className="eventsname"><a className="eventsname-link" href="#">Convocation</a></div>
                <div className="eventsname"><a className="eventsname-link" href="#">Magnum Opus</a></div>
                </div>
            </div>
            <div className="content">
                <EventCards img={Magnum2022} heading="Magnum Opus 2022" start="Starts: Feb 17, 2022" duration="3-Hrs" location="IIT Indore, Simrol, Khandwa Rd, Madhya Pradesh 453552 , Indore" />
                <EventCards img={Magnum2022} heading="ALUMNI MEET 2020: MAGNUM OPUS" start="Starts: Feb 08, 2020" duration="3-Hrs" location="IIT Indore, Simrol, Khandwa Rd, Madhya Pradesh 453552 , Indore" />
                <EventCards img={Magnum2022} heading="Magnum Opus 2019" start="Starts: Feb 17, 2019" duration="3-Hrs" location="IIT Indore, Simrol, Khandwa Rd, Madhya Pradesh 453552 , Indore" />
                <EventCards img={Magnum2022} heading="Magnum Opus 2015" start="Starts: Feb 17, 2022" duration="3-Hrs" location="IIT Indore, Simrol, Khandwa Rd, Madhya Pradesh 453552 , Indore" />
                <EventCards img={Magnum2022} heading="Magnum Opus 2022" start="Starts: Dec 28, 2015" duration="3-Hrs" location="IIT Indore, Simrol, Khandwa Rd, Madhya Pradesh 453552 , Indore" />
            </div>
        </div>
    );
}

export default Events;