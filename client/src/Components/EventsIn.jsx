import React from "react";
import "./css/eventsin.css";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import magnum from "./images/magnum opus 2022.jpg";
import webtraffic from "./images/web-traffic.png";

function EventsIn() {
    return (
        <div className="eventsin-container">
            <div className="eventsin-blue">
                <p className="eventsin-para1">Magnum Opus 2022</p>
                <p className="eventsin-date"><CalendarMonthIcon style={{fontSize: "1.2em"}} /> Thursday, Feb 17, 2022 </p>
            </div>
            <div className="white">
                <div className="eventsin-info">
                    <div className="eventsin-topinfo">
                        <p className="eventsin-paran"><LocationOnIcon style={{fontSize: "1.3em", marginBottom: "1%", color: "#696e6e"}} />ADDRESS</p>
                        <a className="eventsin-link" href="https://iiti.webex.com/iiti/j.php?MTID=m891f8e5dcff56d4f0a731605c9f1834b">https://iiti.webex.com/iiti/j.php?MTID=m891f8e5dcff56d4f0a731605c9f1834b</a>
                    </div>
                    <hr />
                    <div className="eventsin-bottominfo">
                        
                        <p className="eventsin-paran"><FindInPageIcon style={{fontSize: "1.3em", marginBottom: "1%", color: "#696e6e"}} /> DESCRIPTION</p>
                        <div style={{marginLeft: "3%", fontWeight: "600", color: "#3c4a4a"}}>
                        <p style={{}}><b>Magnum Opus 2022</b></p>
                        <p>The annual alumni meet, Magnum Opus is the flagship event of the Alumni Cell. Alumni from across
                            the globe and from various fields reunite on this day while they share their college experiences
                            and revive the old memories. In addition to it, the event also includes panel discussions and
                            many alumni talks to motivate students and guide them in their careers.</p>
                        <br />

                        <p>The agenda for this year's panel discussion is “Funding for the Alumni Association”</p>
                        <br />

                        <p>Alumni Association is an association of the graduates of our institute who would work towards
                            strengthening the ties between our alumni and their alma mater. The members of the Alumni
                            Association would facilitate professional networking for mutual benefit in academic,
                            professional, and/or business areas. They would also encourage alumni to contribute to the
                            institute's efforts for achieving excellence.</p>
                        <br />
                        <p>Magnum Opus is an excellent opportunity to learn and interact with our alumni.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="eventsin-card">
                <div className="eventsin-image">
                    <img src={magnum} alt="" height="330px" width="340px" />
                    <img className="eventsin-tinylap" src={webtraffic} alt="" />
                    <p style={{float: "right", marginRight: "110px", marginTop: "12px"}}>Online event</p>
                </div>
                <hr />
                <div className="eventsin-content">
                    <p>DATE & TIME:</p>
                    <p>Start : <b>Thu, Feb 17, 2022</b></p>
                    <p>End : <b>Sun, Feb 20, 2022 11:59 PM</b></p>
                    <p className="eventsin-para2">(as per your local time, <b>India Standard Time</b>)</p>
                    <div style={{marginBottom: "6%"}}><button className="btn btn-secondary disabled rounded-5"> Past Event</button></div>
                    <div><button className="btn btn-secondary disabled rounded-5" style={{backgroundColor: "#9fb5b5", color: "black"}}> Magnum Opus</button></div>
                </div>
            </div>
        </div>
    );
}

export default EventsIn;