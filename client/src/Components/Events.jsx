import React, { useEffect, useState } from "react";
import "./css/events.css";
import Axios from "axios";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useWindowSize from "./WindowSize";
import EventCards from "./EventCards";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CloseIcon from '@mui/icons-material/Close';

function Events() {
    // Page variables
    const userinfo = useSelector(state => state.user);
    const navigate = useNavigate();
    const location = useLocation();
    const type = location.state;
    const [eventsdata, seteventsdata] = useState([]);
    const date = new Date();

    // Appearance
    const [navappear, setNavappear] = useState(false);
    const [step0, setstep0] = useState(true);
    const [step1, setstep1] = useState(false);
    const [step2, setstep2] = useState(false);

    //Texts
    const [selectedFiles, setSelectedFiles] = useState();
    const [image, setImage] = useState("");
    const [formdata, setformdata] = useState({
        name: "",
        sdate: new Date(),
        stime: "",
        duration: "",
        platform: "",
        venue: "",
        city: "",
        email: "",
        file: "",
        description: ""
    });

    // Fetching Data

    async function getData() {
        await Axios.get("http://localhost:8080/getEvents").then((response) => {
            seteventsdata(response.data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    function handleChange(e) {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        uploadImage();
    };

    const uploadImage = async () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Alumni_preset")
        data.append("cloud_name", "harshit9829")
        await fetch("  https://api.cloudinary.com/v1_1/harshit9829/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setformdata({ ...formdata, file: data.url });
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        if (formdata.file !== "") {
            try {
                const res = Axios.post(
                    "http://localhost:8080/addEvent",
                    formdata
                );
                getData();
                setformdata({
                    name: "",
                    sdate: new Date(),
                    stime: "",
                    duration: "",
                    platform: "",
                    venue: "",
                    city: "",
                    email: "",
                    file: "",
                    description: ""
                });
            } catch (error) {
                console.log(error);
            }
        }
    }, [formdata.file]);
    const renderPhotos = (source) => {
        return <span><CloseIcon onClick={() => setSelectedFiles(null)} style={{ position: "absolute", zIndex: "1", margin: "5px", fontSize: "1em", backgroundColor: "white", cursor: "pointer" }} /><img src={source} alt="" key={source} /></span>;
    };
    const size = useWindowSize();
    const user = userinfo.user.status;

    let filteredData;
    if(type==="past"){
        filteredData = eventsdata.filter(event => { return (new Date(event.date)< date) });
    } else if(type==="future"){
        filteredData = eventsdata.filter(event => { return (new Date(event.date) >= date) });
    } else if(type==="convocation"){
        filteredData = eventsdata.filter(event => { return (event.name.match(/convocation/i)) });
    } else if(type==="magnum"){
        filteredData = eventsdata.filter(event => { return (event.name.match(/magnum/i)) });
    } else{
        filteredData = eventsdata;
    }
    return (
        <div className="eventpage">
            <div className="side-nav">
                <div className="input-group mb-4">
                    <div style={{ display: (size.width >= 801) ? "none" : "block" }} className="temp-button"><button className="btn btn-secondary" onClick={() => setNavappear(!navappear)} type="button"><LegendToggleIcon /></button></div>
                </div>
                <div style={{ display: (size.width <= 800) ? (navappear ? "block" : "none") : "block" }}>
                    <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>EVENT CATEGORIES</p>
                    <nav id="sideEvents">
                        <ul>
                            <li onClick={() => navigate("/events", {state: "all"})}><span>All Events</span></li>
                            <li onClick={() => navigate("/events", {state: "past"})}><span>Past Events</span></li>
                            <li onClick={() => navigate("/events", {state: "future"})}><span>Upcoming Events</span></li>
                            <li><span>Categories</span></li>
                        </ul>
                    </nav>
                    <div className="eventsname"><a className="eventsname-link" onClick={() => navigate("/events", {state: "convocation"})} href={void (0)}>Convocation</a></div>
                    <div className="eventsname"><a className="eventsname-link" onClick={() => navigate("/events", {state: "magnum"})} href={void (0)}>Magnum Opus</a></div>
                </div>
            </div>
            <div className="content">
                <button style={{ display: (user === "admin" && step0) ? "block" : "none" }} onClick={() => { setstep0(false); setstep1(true); }} className="btn add-event-button"><AddIcon /> CREATE AN EVENT</button>
                <div className="add-event" style={{ display: (step1 || step2) ? "block" : "none" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="add-event-header">Tell Us About Your Event</div>
                        <div className="add-addons">
                            <div className="add-hr1"></div>
                            <div style={{ backgroundColor: step2 ? "green" : "rgb(169, 220, 244)" }} className="add-hr2"></div>
                        </div>
                        <div style={{ display: (step1) ? "block" : "none" }} className="get-in-touch">
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend"><DriveFileRenameOutlineIcon /></span>
                                        <input type="text" onChange={handleChange} value={formdata.name} className="form-control shadow-none" name="name" placeholder="Event Name" aria-describedby="inputGroupPrepend" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend"><DateRangeIcon /></span>
                                        <div style={{ padding: "0" }} className="form-control" aria-describedby="inputGroupPrepend"><DatePicker wrapperClassName="date-picker" placeholderText="Start Date" onChange={(date) => setformdata({ ...formdata, sdate: date })} selected={formdata.sdate} /></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <input type="text" className="form-control shadow-none" onChange={handleChange} value={formdata.stime} name="stime" placeholder="Start Time" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="input-group">
                                        <input type="text" className="form-control shadow-none" onChange={handleChange} value={formdata.duration} name="duration" placeholder="Duration" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-check form-check-inline">
                                        <input onChange={handleChange} className="form-check-input shadow-none" type="radio" name="platform" id="inlineRadio1" value="Offline" />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Offline</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input onChange={handleChange} className="form-check-input shadow-none" type="radio" name="platform" id="inlineRadio2" value="Online" />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Online</label>
                                    </div>
                                </div>
                                <div style={{ display: formdata.platform === "Offline" ? "block" : "none" }} className="col-md-6">
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend"><LocationOnIcon /></span>
                                        <input type="text" className="form-control shadow-none" onChange={handleChange} value={formdata.venue} name="venue" placeholder="Venue" aria-describedby="inputGroupPrepend" />
                                    </div>
                                </div>
                                <div style={{ display: formdata.platform === "Offline" ? "block" : "none" }} className="col-md-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control shadow-none" onChange={handleChange} value={formdata.city} name="city" placeholder="City" />
                                    </div>
                                </div>
                                <div style={{ display: formdata.platform === "Online" ? "block" : "none" }} className="col-md-12">
                                    <div className="input-group">
                                        <input type="text" className="form-control shadow-none" onChange={handleChange} value={formdata.email} name="email" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="button" onClick={() => { setstep1(false); setstep0(true); }} className="btn btn-outline-success">Cancel</button>
                                    <button type="button" onClick={() => { setstep1(false); setstep2(true); }} className="btn btn-primary float-end">Next</button>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: step2 ? "block" : "none" }} className="get-in-touch">
                            <div className="add-event-image">
                                <div className="add-event-photo">
                                    <label style={{ height: "100%" }} htmlFor="add-photo">
                                        <div><AddPhotoAlternateIcon style={{ fontSize: "85px", color: "white", backgroundColor: "green", margin: "5% auto 2%" }} /></div>
                                        <input id="add-photo" name="file" onChange={(e) => { setImage(e.target.files[0]); setSelectedFiles(URL.createObjectURL(e.target.files[0])); URL.revokeObjectURL(e.target.files[0]); }} type="file" accept="image/*" />
                                        Upload Photo
                                    </label>
                                </div>
                                <div style={{ marginBottom: "5%", display: (selectedFiles) ? "block" : "none" }} className="gallery-add-result">{renderPhotos(selectedFiles)}</div>
                            </div>
                            <div>
                                <div><FileCopyIcon style={{ marginRight: "2%" }} />Description:</div>
                                <div className="mt-4">
                                    <textarea className="form-control" name="description" value={formdata.description} onChange={handleChange} rows="6"></textarea>
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
                    filteredData && filteredData.map((event, index) => {
                        return <EventCards key={index} forIn={event} img={event.photo.data} heading={event.name} start={event.date.substring(0, 10)} duration={event.duration} platform={event.platform} />
                    })
                }
            </div>
        </div>
    );
}

export default Events;