import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./css/dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const [authdata,setauthdata] = useState(null);
    const [userdata, setuserdata] = useState(null);
    function getAuth(){
        Axios.get("http://localhost:8080/getAuthlist").then((response) => {
            setauthdata(response.data);
        });
    }
    useEffect(() => {
        Axios.get("http://localhost:8080/getUser").then((response) => {
            setuserdata(response.data);
        });
        getAuth();
        getAuth();
    },[]);
    return (
        <div class="adminMain">
            <div class="adminLeft">
                <div class="adminLBox">
                    <a href="/dashboard"><i class="fa-solid fa-gauge"></i> Dashboard </a>
                </div>
                <div class="adminLBox">
                    <a href="#"><i class="fa-solid fa-gear"></i> Manage Items </a>
                </div>
                <div class="adminLBox">
                    <a href="#"><i class="fa-solid fa-tasks"></i> Manage Content </a>
                </div>
                <div class="adminLBox">
                    <a href="/email"><i class="fa-solid fa-envelope"></i> Mailing </a>
                </div>
                <div class="adminLBox">
                    <a href="#"><i class="fa-solid fa-wrench"></i> Portal Setting </a>
                </div>
                <div class="adminLBox">
                    <a href="#"><i class="fa-solid fa-sitemap"></i> Manage Admins </a>
                </div>
            </div>
            <div class="adminMidRight">
                <div class="topWrap">
                    <div class="community">
                        <div class="statsCom">
                            <p id="stattext">Community Stats</p>
                            <div class="recordNum">
                                <div class="recordText">
                                    <p>{userdata && userdata.length}</p>
                                    <i class="fa-solid fa-user"> </i></div>
                            </div>
                            <div class="viewSec">
                                Profile Records
                                <button class="recViewBtn" onClick={() => navigate("/adirectory")}>View</button>
                            </div>
                        </div>
                        <div class="adminCom">
                            <div class="pendNum">
                                <div class="pendText">
                                    <p>{authdata && authdata.length}</p> <i style={{paddingTop: "10px"}} class="fa-solid fa-user"> </i></div>
                            </div>
                            <div class="viewSec">
                                Pending Users
                                <button class="pendViewBtn" onClick={() => navigate("/auth")}>View</button>
                            </div>
                        </div>
                    </div>
                    <div class="QAWrap">
                        <p id="adminComText">Quick Actions</p>
                        <div class="quickActions">
                            <div class="adminRBox">
                                <a href="/stories"><i class="fa-solid fa-book-open"></i> Create Story </a>
                            </div>
                            <div class="adminRBox">
                                <a href="/email"><i class="fa-solid fa-envelope"></i> Send Mail </a>
                            </div>
                            <div class="adminRBox">
                                <a href="/events"><i class="fa-solid fa-calendar"></i> Create Event</a>
                            </div>
                            <div class="adminRBox">
                                <a href="/gallery"><i class="fa-solid fa-camera"></i> Upload Photos </a>
                            </div>
                            <div class="adminRBox">
                                <a href="#"><i class="fa-solid fa-vote-yea"></i> Take Opinion Poll</a>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="bottomWrap1">
                    <p id="profileOverView1">Profile OverView</p>
                    <p id="profileOverView2">The graph shows the data of users by year, division/department, and course/degree.</p>
                    <div class="graph">
                        <div class="graphTop">
                            <p id="year"><i class="fa-solid fa-calendar"> </i>BY YEAR</p>
                            <p id="division"><i class="fa-solid fa-building"> </i>BY DIVISION / DEPARTMENT</p>
                            <p id="course"> <i class="fa-solid fa-graduation-cap"> </i>BY COURSE / DEGREE</p>
                        </div>
                    </div>
                </div>
                <div class="bottomWrap2">
                    <p id="profession">Distribution by Profession and Location</p>
                    <div class="distribution">
                        <div class="disCard1">
                            <div class="cardRow">
                                <div class="left">Profile Updates</div>
                                <div class="right">Users</div>
                            </div>
                            <div class="cardRowText">
                                <div class="left"><i class="fa-solid fa-suitcase"> </i>Updated Work</div>
                                <div class="right">31</div>
                            </div>
                            <div class="cardRowText">
                                <div class="left"><i class="fa-solid fa-map-marker"> </i>Profiles With Updated Location</div>
                                <div class="right">31</div>
                            </div>
                            <div class="cardRowText">
                                <div class="left"><i class="fa-solid fa-phone"> </i>Profiles With Updated Phone Number</div>
                                <div class="right">31</div>
                            </div>
                        </div>
                        <div class="disCard1">
                            <div class="cardRow">
                                <div class="left">Company</div>
                                <div class="right">Users</div>
                            </div>
                            <div class="cardRowText">
                                <div class="left">Microsoft</div>
                                <div class="right">10</div>
                            </div>
                            <div class="cardRowText">
                                <div class="left">Amazon</div>
                                <div class="right">20</div>
                            </div>
                        </div>
                        <div class="disCard1">
                            <div class="cardRow">
                                <div class="left">Designation</div>
                                <div class="right">Users</div>
                            </div>
                            <div class="cardRowText">
                                <div class="left">Software Engineer</div>
                                <div class="right">20</div>
                            </div>
                            <div class="cardRowText">
                                <div class="left">Machine Learning Scientist</div>
                                <div class="right">31</div>
                            </div>
                        </div>
                        <div class="disCard1">
                            <div class="cardRow">
                                <div class="left">Work Industry</div>
                                <div class="right">Users</div>
                            </div>
                            <div class="cardRowText">
                                <div class="left">Computer Vision</div>
                                <div class="right">31</div>
                            </div>
                            <div class="cardRowText">
                                <div class="left">Higher Education</div>
                                <div class="right">31</div>
                            </div>
                            <div class="cardRowText">
                                <div class="left">Policy Making</div>
                                <div class="right">31</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;