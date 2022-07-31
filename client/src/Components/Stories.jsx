import React, { useEffect, useState } from "react";
import "./css/events.css";
import Axios from "axios";
import { useLocation } from 'react-router-dom';
import useWindowSize from "./WindowSize";
import StoriesCards from "./StoriesCards";
import AddIcon from '@mui/icons-material/Add';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Stories() {
    const userinfo = useSelector(state => state.user);
    const [navappear, setNavappear] = useState(false);
    const [storiesdata, setstoriesdata] = useState([]);
    const size = useWindowSize();
    const location = useLocation();
    const type = location.state;
    const user = userinfo.user.status;
    const navigate = useNavigate();

    async function getData() {
        await Axios.get("http://localhost:8080/getStory").then((response) => {
            setstoriesdata(response.data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    let filteredData;
    if (type === "STORY") {
        filteredData = storiesdata.filter(event => { return (event.category.match(/STORIES/i)) });
    } else if (type === "UPDATES") {
        filteredData = storiesdata.filter(event => { return (event.category.match(/UPDATES/i)) });
    } else if (type === "ACHIEVEMENTS") {
        filteredData = storiesdata.filter(event => { return (event.category.match(/ACHIEVEMENTS/i)) });
    } else {
        filteredData = storiesdata;
    }
    return (
        <div className="eventpage">
            <div className="side-nav">
                <div className="input-group mb-4">
                    <div style={{ display: (size.width >= 801) ? "none" : "block" }} className="temp-button"><button className="btn btn-secondary" onClick={() => { setNavappear(!navappear) }} type="button"><LegendToggleIcon /></button></div>
                </div>
                <div style={{ display: (size.width <= 800) ? (navappear ? "block" : "none") : "block" }}>
                    <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>CATEGORIES</p>
                    <nav id="sideEvents">
                        <ul>
                            <li onClick={() => navigate("/stories")}><span>All Stories</span></li>
                            <li><span>Categories</span></li>
                        </ul>
                    </nav>
                    <div className="eventsname"><a href={void (0)} className="eventsname-link" onClick={() => navigate("/stories", { state: "STORY" })}>Alumni Stories</a></div>
                    <div className="eventsname"><a href={void (0)} className="eventsname-link" onClick={() => navigate("/stories", { state: "UPDATES" })}>Institute Updates</a></div>
                    <div className="eventsname"><a href={void (0)} className="eventsname-link" onClick={() => navigate("/stories", { state: "ACHIEVEMENTS" })}>Alumni Achievements</a></div>
                </div>
            </div>
            <div className="content">
                <button style={{ display: (user === "admin") ? "block" : "none" }} onClick={() => navigate("/create", { state: location.state })} className="btn add-event-button"><AddIcon /> CREATE {location.state}</button>
                {
                    filteredData && filteredData.map((event, index) => {
                        return <StoriesCards key={index} forIn={event} img={event.photo} heading={event.title} content={event.description} tag={event.category} date={event.publishDate} />
                    })
                }
            </div>
        </div>
    );
}

export default Stories;