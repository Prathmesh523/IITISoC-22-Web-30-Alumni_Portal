import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
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
import { useSelector } from 'react-redux';
import Axios from "axios";
import { useLocation } from 'react-router-dom';

function Opportunities() {
    const userinfo = useSelector(state => state.user);
    const navigate = useNavigate();
    const location = useLocation();
    const type = location.state;

    const [navappear, setNavappear] = useState(false);
    const [step0, setstep0] = useState(true);
    const [step1, setstep1] = useState(false);
    const [step2, setstep2] = useState(false);
    const [success, setsuccess] = useState(false);
    const [formdata, setformdata] = useState({
        type: "",
        title: "",
        name: "",
        location: "",
        deadline: "",
        salary: "",
        duration: "",
        startDate: "",
        about: "",
        description: "",
        by: userinfo.user.name,
        publishedOn: new Date()
    });

    const [radiotext, setradiotext] = useState("Job");
    const [checked, setchecked] = useState(false);
    const size = useWindowSize();
    const user = userinfo.user.status;
    const [opdata, setopdata] = useState(null);

    const getData = async () => {
        await Axios.get("http://localhost:8080/opportunities-data").then((response) => {
            setopdata(response.data);
        });
    }

    useEffect(() => {
        getData();
    },[]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await Axios.post(
                "http://localhost:8080/opportunities-data",
                formdata
            );
            getData();
            setformdata({
                type: "Job",
                title: "",
                name: "",
                location: "",
                deadline: "",
                salary: "",
                duration: "",
                startDate: "",
                about: "",
                description: "",
                by: userinfo.user.name,
                publishedOn: new Date()
            })
        } catch (error) {
            console.log(error);
        }
    }
    let filteredData;
    if(type==="jobs"){
        filteredData = opdata.filter(op => {return (op.type==="Job")});
    } else if(type === "intern"){
        filteredData = opdata.filter(op => {return (op.type==="Internship")});
    } else if(type === "me"){
        filteredData = opdata.filter(op => {return (op.by===userinfo.user.name)});
    } else{
        filteredData = opdata;
    }

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
                            <li onClick={() => navigate("/opportunities", {state: "all"})}><span>All Opportunities</span></li>
                        </ul>
                    </nav>
                    <div className="eventsname"><a className="eventsname-link" onClick={() => navigate("/opportunities", {state: "jobs"})} href={void (0)}>Jobs</a></div>
                    <div className="eventsname"><a className="eventsname-link" onClick={() => navigate("/opportunities", {state: "intern"})} href={void (0)}>Internships</a></div>
                    <nav id="sideEvents">
                        <ul>
                            <li onClick={() => navigate("/opportunities", {state: "me"})}><span>Posted By Me</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="content">
                <button style={{ display: (user === "admin" && step0) ? "block" : "none" }} onClick={() => { setstep0(false); setstep1(true); }} className="btn add-event-button"><AddIcon /> POST AN OPPORTUNITY</button>
                <div className="add-event" style={{ display: (step1 || step2) ? "block" : "none" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="add-event-header">Post an Opportunity (Step {step1 ? "1" : "2"} of 2)</div>
                        <div className="add-addons">
                            <div className="add-hr1"></div>
                            <div style={{ backgroundColor: step2 ? "green" : "rgb(169, 220, 244)" }} className="add-hr2"></div>
                        </div>
                        <div style={{ display: (step1) ? "block" : "none" }} className="get-in-touch">
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Job" onClick={() => {setradiotext("Job");setformdata({...formdata, type: "JOB"})}} required defaultChecked />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Job</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input shadow-none" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Internship" onClick={() => {setradiotext("Internship");setformdata({...formdata, type: "Internship"})}} required />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Internship</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend"><DriveFileRenameOutlineIcon /></span>
                                        <input type="text" value={formdata.title} onChange={(e) => setformdata({ ...formdata, title: e.target.value })} className="form-control shadow-none" placeholder={radiotext === "Job" ? "Job Title*" : "Internship Title*"} aria-describedby="inputGroupPrepend" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input type="text" value={formdata.name} onChange={(e) => setformdata({ ...formdata, name: e.target.value })} className="form-control shadow-none" placeholder="Name of the Company*" aria-describedby="inputGroupPrepend" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend"><LocationOnIcon /></span>
                                        <input type="text" value={formdata.location} onChange={(e) => setformdata({ ...formdata, location: e.target.value })} className="form-control shadow-none" placeholder="Location*" aria-describedby="inputGroupPrepend" disabled={checked} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-check" style={{ paddingTop: "2%" }}>
                                        <input onChange={() => { setchecked(!checked); setformdata({ ...formdata, location: userinfo.user.location }) }} className="form-check-input shadow-none" type="checkbox" value="home" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Work From Home
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend"><DateRangeIcon /></span>
                                        <div style={{ padding: "0" }} className="form-control" aria-describedby="inputGroupPrepend"><DatePicker wrapperClassName="date-picker" placeholderText="Deadline" dateFormat="yyyy/MM/dd" selected={formdata.deadline} onChange={(date) => setformdata({ ...formdata, deadline: date })} /></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input type="text" value={formdata.salary} onChange={(e) => setformdata({ ...formdata, salary: e.target.value })} className="form-control shadow-none" placeholder={radiotext === "Job" ? "Salary*" : "Stipend*"} />
                                    </div>
                                </div>
                                <div style={{ display: radiotext === "Internship" ? "block" : "none" }} className="col-md-6">
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend"><TimelapseIcon /></span>
                                        <input type="text" value={formdata.duration} onChange={(e) => setformdata({ ...formdata, duration: e.target.value })} className="form-control shadow-none" placeholder="Duration*" />
                                    </div>
                                </div>
                                <div style={{ display: radiotext === "Internship" ? "block" : "none" }} className="col-md-6">
                                    <div className="input-group">
                                        <div style={{ padding: "0", height: "36px" }} className="form-control" aria-describedby="inputGroupPrepend"><DatePicker wrapperClassName="date-picker" placeholderText="Start Date Of Intern" dateFormat="yyyy/MM/dd" selected={formdata.startDate} onChange={(date) => setformdata({ ...formdata, startDate: date })} /></div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="button" onClick={() => { setstep1(false); setstep0(true); }} className="btn btn-outline-success">Cancel</button>
                                    <button type="button" onClick={() => { setstep1(false); setstep2(true); }} className="btn btn-primary float-end">Next</button>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: step2 ? "block" : "none" }} className="get-in-touch">
                            <div>
                                <div style={{ color: "red", fontSize: "1.2em" }}>Write about company *</div>
                                <div className="mt-3">
                                    <textarea className="form-control shadow-none" value={formdata.about} onChange={(e) => setformdata({ ...formdata, about: e.target.value })} rows="6"></textarea>
                                </div>
                            </div>
                            <div style={{ marginTop: "6%" }}>
                                <div style={{ color: "red", fontSize: "1.2em" }}>Write about role, responsibility, eligibility etc. *</div>
                                <div className="mt-3">
                                    <textarea className="form-control shadow-none" value={formdata.description} onChange={(e) => setformdata({ ...formdata, description: e.target.value })} rows="6"></textarea>
                                </div>
                            </div>
                            <div className="add-event-end-buttons">
                                <button type="button" onClick={() => { setstep1(true); setstep2(false); }} className="btn btn-outline-success">Previous</button>
                                <button type="submit" onClick={() => {setstep0(true);setstep2(false);}} className="btn btn-primary float-end">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                {
                    filteredData && filteredData.map((op,index) => {
                        return (
                            <JobsCard key={index} data={op} type={op.type} post={op.title} place={op.name}  location={op.location} deadline={op.deadline.substring(0,10)} salary={op.salary} applicants={op.applicants} publisher={op.by} published={op.publishedOn.substring(0,10)} />
                        )
                    })
                }

            </div>
        </div>
    );
}

export default Opportunities;