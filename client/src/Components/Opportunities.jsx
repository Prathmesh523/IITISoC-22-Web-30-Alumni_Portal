import React, { useState } from "react";
import "./css/events.css";
import "./css/opportunities.css";
import useWindowSize from "./WindowSize";
import JobsCard from "./JobsCard";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';

function Opportunities() {
    const [navappear, setNavappear] = useState(false);
    const size = useWindowSize();
    return (
        <div className="eventpage">
            <div className="side-nav">
                <div style={{ display: (size.width >= 801) ? "none" : "flex" }} class="input-group mb-4">
                    <div style={{textAlign: "center", width:"70%", fontSize: "1.3em", display: (size.width < 650) ? "none" : "block"}}>JOB OPPORTUNITIES AND INTERNSHIPS</div>
                    <div className="temp-button"><button className="btn btn-secondary btn-sm" onClick={() => setNavappear(!navappear)} type="button"><LegendToggleIcon /></button></div>
                </div>
                <div style={{ display: (size.width <= 800) ? (navappear ? "block" : "none") : "block" }}>
                    <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>JOB CATEGORIES</p>
                    <nav id="sideEvents">
                        <ul>
                            <li><span>All Opportunities</span></li>
                        </ul>
                    </nav>
                    <div className="eventsname"><a className="eventsname-link" href="#">Jobs</a></div>
                    <div className="eventsname"><a className="eventsname-link" href="#">Internships</a></div>
                    <nav id="sideEvents">
                        <ul>
                            <li><span>Posted By Me</span></li>
                            <li><span>Applied By Me</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="content">
                <JobsCard post="Data Scientist" place="Nomura Research Institute" location="Bangalore" deadline="Jun 30, 2022" salary="INR 12-18 LPA" applicants="2" publisher="Ashish Kumar Jatav" published="Jun 15, 2022" />
                <JobsCard post="Data Scientist" place="Nomura Research Institute" location="Bangalore" deadline="Jun 30, 2022" salary="INR 12-18 LPA" applicants="2" publisher="Ashish Kumar Jatav" published="Jun 15, 2022" />
                <JobsCard post="Data Scientist" place="Nomura Research Institute" location="Bangalore" deadline="Jun 30, 2022" salary="INR 12-18 LPA" applicants="2" publisher="Ashish Kumar Jatav" published="Jun 15, 2022" />
                <JobsCard post="Data Scientist" place="Nomura Research Institute" location="Bangalore" deadline="Jun 30, 2022" salary="INR 12-18 LPA" applicants="2" publisher="Ashish Kumar Jatav" published="Jun 15, 2022" />
            </div>
        </div>
    );
}

export default Opportunities;