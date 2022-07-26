import React from "react";
import "./css/eventsin.css";
import {useLocation} from 'react-router-dom';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import magnum from "./images/magnum opus 2022.jpg";
import webtraffic from "./images/web-traffic.png";

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function EventsIn() {
    const location = useLocation();
    const event = location.state;
    const date = new Date();
    const d1 = new Date(event.date.substring(0,10));
    const base64String = btoa(
        String.fromCharCode(...new Uint8Array(event.photo.data.data))
    );
    return (
        <div className="eventsin-container">
            <div className="eventsin-blue">
                <p className="eventsin-para1">{event.name}</p>
                <p className="eventsin-date"><CalendarMonthIcon style={{fontSize: "1.2em"}} /> {event.date.substring(0,10) + " " + event.time} </p>
            </div>
            <div className="white">
                <div className="eventsin-info">
                    <div className="eventsin-topinfo">
                        <p className="eventsin-paran"><LocationOnIcon style={{fontSize: "1.3em", marginBottom: "1%", color: "#696e6e"}} />ADDRESS</p>
                        <a className="eventsin-link" href="https://iiti.webex.com/iiti/j.php?MTID=m891f8e5dcff56d4f0a731605c9f1834b">{event.email}</a>
                    </div>
                    <hr />
                    <div className="eventsin-bottominfo">
                        
                        <p className="eventsin-paran"><FindInPageIcon style={{fontSize: "1.3em", marginBottom: "1%", color: "#696e6e"}} /> DESCRIPTION</p>
                        <div style={{marginLeft: "3%", fontWeight: "600", color: "#3c4a4a"}}>
                        <p style={{}}><b>{event.name}</b></p>
                        <p>{event.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="eventsin-card">
                <div className="eventsin-image">
                    <img src={`data:image/png;base64,${base64String}`} alt="" height="330px" width="340px" />
                    <img className="eventsin-tinylap" src={webtraffic} alt="" />
                    <p style={{float: "right", marginRight: "110px", marginTop: "12px"}}>Online event</p>
                </div>
                <hr />
                <div className="eventsin-content">
                    <p>DATE & TIME:</p>
                    <p>Start : <b>{weekday[d1.getDay()] + " " + month[d1.getMonth()] + " " + d1.getDate() + " " + d1.getFullYear()}</b></p>
                    <p>Duration : <b>{event.duration}</b></p>
                    <p className="eventsin-para2">(as per your local time, <b>Indian Standard Time</b>)</p>
                    <div style={{marginBottom: "6%"}}><button className="btn btn-secondary disabled rounded-5">{(d1>=date)?"Future Event":"Past Event" }</button></div>
                    <div><button className="btn btn-secondary disabled rounded-5" style={{backgroundColor: "#9fb5b5", color: "black"}}>{event.name}</button></div>
                </div>
            </div>
        </div>
    );
}

export default EventsIn;