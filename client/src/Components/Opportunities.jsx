import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./css/events.css";
import "./css/opportunities.css";
import useWindowSize from "./WindowSize";
import JobsCard from "./JobsCard";
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TimelapseIcon from '@mui/icons-material/Timelapse';

function Opportunities() {
    const [navappear, setNavappear] = useState(false);
    const [step0, setstep0] = useState(true);
    const [step1, setstep1] = useState(false);
    const [step2, setstep2] = useState(false);
    const [radiotext, setradiotext] = useState("Job");
    const [checked, setchecked] = useState(false);
    const size = useWindowSize();
    const user = "admin";
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="eventpage">
            <div className="side-nav">
                <div style={{ display: (size.width >= 801) ? "none" : "flex" }} className="input-group mb-4">
                    <div style={{ textAlign: "center", width: "70%", fontSize: "1.3em", display: (size.width < 650) ? "none" : "block" }}>JOB OPPORTUNITIES AND INTERNSHIPS</div>
                    <div className="temp-button"><button className="btn btn-secondary btn-sm" onClick={() => setNavappear(!navappear)} type="button"><LegendToggleIcon /></button></div>
                </div>
                <div style={{ display: (size.width <= 800) ? (navappear ? "block" : "none") : "block" }}>
                    <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>JOB CATEGORIES</p>
                    <nav id="sideEvents">
                        <ul>
                            <li><span>All Opportunities</span></li>
                        </ul>
                    </nav>
                    <div className="eventsname"><a className="eventsname-link" href={void(0)}>Jobs</a></div>
                    <div className="eventsname"><a className="eventsname-link" href={void(0)}>Internships</a></div>
                    <nav id="sideEvents">
                        <ul>
                            <li><span>Posted By Me</span></li>
                            <li><span>Applied By Me</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="content">
                <button style={{ display: (user === "admin" && step0) ? "block" : "none" }} onClick={() => { setstep0(false); setstep1(true); }} className="btn add-event-button"><AddIcon /> POST AN OPPORTUNITY</button>
                <div className="add-event" style={{ display: (step1 || step2) ? "block" : "none" }}>
                    <div className="add-event-header">Post an Opportunity (Step {step1 ? "1" : "2"} of 2)</div>
                    <div className="add-addons">
                        <div className="add-hr1"></div>
                        <div style={{ backgroundColor: step2 ? "green" : "rgb(169, 220, 244)" }} className="add-hr2"></div>
                    </div>
                    <div style={{ display: (step1) ? "block" : "none" }} className="get-in-touch">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Job" onClick={() => setradiotext("Job")} required defaultChecked />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Job</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Internship" onClick={() => setradiotext("Internship")} required />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Internship</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend"><DriveFileRenameOutlineIcon /></span>
                                    <input type="text" className="form-control shadow-none" placeholder={radiotext === "Job" ? "Job Title*" : "Internship Title*"} aria-describedby="inputGroupPrepend" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <input type="text" className="form-control shadow-none" placeholder="Name of the Company*" aria-describedby="inputGroupPrepend" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend"><LocationOnIcon /></span>
                                    <input type="text" className="form-control shadow-none" placeholder="Location*" aria-describedby="inputGroupPrepend" disabled={checked} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-check" style={{ paddingTop: "2%" }}>
                                    <input onChange={() => setchecked(!checked)} className="form-check-input shadow-none" type="checkbox" value="home" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Work From Home
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend"><DateRangeIcon /></span>
                                    <div style={{padding: "0"}} className="form-control" aria-describedby="inputGroupPrepend"><DatePicker wrapperClassName="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} /></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <input type="text" className="form-control shadow-none" placeholder={radiotext === "Job" ? "Salary*" : "Stipend*"} />
                                </div>
                            </div>
                            <div style={{ display: radiotext === "Internship" ? "block" : "none" }} className="col-md-6">
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend"><TimelapseIcon /></span>
                                    <input type="text" className="form-control shadow-none" placeholder="Duration*" required />
                                </div>
                            </div>
                            <div style={{ display: radiotext === "Internship" ? "block" : "none" }} className="col-md-6">
                                <div className="input-group">
                                    <input type="text" className="form-control shadow-none" placeholder="Start Date of Internship*" required />
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="button" onClick={() => { setstep1(false); setstep0(true); }} className="btn btn-outline-success">Cancel</button>
                                <button type="submit" onClick={() => { setstep1(false); setstep2(true); }} className="btn btn-primary float-end">Next</button>
                            </div>
                        </form>
                    </div>
                    <div style={{ display: step2 ? "block" : "none" }} className="get-in-touch">
                        <form>
                            <div>
                                <div style={{color: "red", fontSize: "1.2em"}}>Write about company *</div>
                                <div className="mt-3">
                                    <textarea className="form-control shadow-none" rows="6"></textarea>
                                </div>
                            </div>
                            <div style={{marginTop: "6%"}}>
                                <div style={{color: "red", fontSize: "1.2em"}}>Write about role, responsibility, eligibility etc. *</div>
                                <div className="mt-3">
                                    <textarea className="form-control shadow-none" rows="6"></textarea>
                                </div>
                            </div>
                            <div className="add-event-end-buttons">
                                <button type="button" onClick={() => { setstep1(true); setstep2(false); }} className="btn btn-outline-success">Previous</button>
                                <button className="btn btn-primary float-end">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <JobsCard post="Data Scientist" place="Nomura Research Institute" location="Bangalore" deadline="Jun 30, 2022" salary="INR 12-18 LPA" applicants="2" publisher="Ashish Kumar Jatav" published="Jun 15, 2022" />
                <JobsCard post="Data Scientist" place="Nomura Research Institute" location="Bangalore" deadline="Jun 30, 2022" salary="INR 12-18 LPA" applicants="2" publisher="Ashish Kumar Jatav" published="Jun 15, 2022" />
                <JobsCard post="Data Scientist" place="Nomura Research Institute" location="Bangalore" deadline="Jun 30, 2022" salary="INR 12-18 LPA" applicants="2" publisher="Ashish Kumar Jatav" published="Jun 15, 2022" />
                <JobsCard post="Data Scientist" place="Nomura Research Institute" location="Bangalore" deadline="Jun 30, 2022" salary="INR 12-18 LPA" applicants="2" publisher="Ashish Kumar Jatav" published="Jun 15, 2022" />
            </div>
        </div>
    );
}

export default Opportunities;