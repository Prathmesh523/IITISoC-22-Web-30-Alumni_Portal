import React, { useState } from "react";
import "./css/header.css";
import useWindowSize from "./WindowSize";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";

function Header(props) {
    const state = useSelector(state => state.user);
    const location = useLocation();
    const navigate = useNavigate();
    const size = useWindowSize();
    return (
        <div style={{ display: location.pathname === "/signup" ? "none" : "block" }} className="header">
            <div className="head-white">
                <div className="head-text">
                    <div style={{ float: "left" }}>Indian Institute Of Technology Indore</div>
                    <div style={{ float: "right", paddingBottom: "10px", display: !state.user ? "block" : "none" }}><button type="submit" className="btn btn-success" onClick={() => navigate("/login")}>LOGIN / REGISTER</button></div>
                    <div style={{ float: "right", color: "#7d7a87", display: state.user ? "block" : "none" }}>
                        <a href={void (0)} onClick={() => navigate("/profile")}><AccountCircleIcon style={{ fontSize: "35px", color: "#1e124a", marginRight: "10px" }} />{(state.user ? state.user.name : "")}</a>
                        <div style={{ float: "right", marginLeft: "10px" }} className="dropdown">
                            <div className="three-dots" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <MoreVertIcon />
                            </div>
                            <ul className="dropdown-menu dropdown-menu-start three-dot-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a href={void (0)} className="dropdown-item" onClick={() => navigate("/settings")}>Settings</a></li>
                                <li><a href={void (0)} className="dropdown-item" onClick={() => navigate("/profile")}>My Profile</a></li>
                                <li><a href={void (0)} className="dropdown-item" onClick={() => navigate("/Privacypolicy")}>Privacy Policy</a></li>
                                <li><a href={void (0)} className="dropdown-item" onClick={() => navigate("/Terms")}>Terms & Conditions</a></li>
                                <li><a href="/login" onClick={() => {
                                    localStorage.clear();
                                    window.location.reload(false);
                                    Axios.get("http://localhost:8080/logout").then((response) => {
                                        console.log(response.data);
                                    });
                                }} className="dropdown-item">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <img src={props.myLogo} className="logo" alt="IITI"></img>
            <div className="title-small">
                <img src={props.myLogo} className="logo-small" alt="IITI"></img>
                <div>IIT Indore</div>
            </div>
            <div className="head-blue">
                <div className="nav-container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <button type="submit" style={{ display: (!state.user && size.width <= 991.5) ? "block" : "none" }} onClick={() => navigate("/login")} className="button-small btn btn-success">LOGIN / REGISTER</button>
                            <div style={{ float: "right", color: "white", display: (state.user && size.width <= 991.5) ? "block" : "none" }}>
                                <AccountCircleIcon style={{ fontSize: "35px", color: "white", marginRight: "10px" }} />{(state.user ? state.user.name : "")}
                                <div style={{ float: "right", marginLeft: "10px" }} className="dropdown">
                                    <div className="three-dots" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <MoreVertIcon />
                                    </div>
                                    <ul className="dropdown-menu dropdown-menu-end three-dot-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a href={void (0)} className="dropdown-item" onClick={() => navigate("/settings")}>Settings</a></li>
                                        <li><a href={void (0)} className="dropdown-item">My Profile</a></li>
                                        <li><a href={void (0)} className="dropdown-item" onClick={() => navigate("/Privacypolicy")}>Privacy Policy</a></li>
                                        <li><a href={void (0)} className="dropdown-item" onClick={() => navigate("/Terms")}>Terms & Conditions</a></li>
                                        <li><a href="/login" onClick={() => {
                                            localStorage.clear();
                                            window.location.reload(false);
                                            Axios.get("http://localhost:8080/logout").then((response) => {
                                                console.log(response.data);
                                            });
                                        }} className="dropdown-item">Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        {/* <Link className="nav-link " to="/">Home</Link> */}
                                        <a href={void (0)} className="nav-link" aria-current="page" onClick={() => navigate("/")}>HOME</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href={void (0)} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            EVENTS
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a href={void (0)} onClick={() => navigate("/events", {state: "magnum"})} className="dropdown-item">Magnum Opus</a></li>
                                            <li><a href={void (0)} onClick={() => navigate("/events", {state: "convocation"})} className="dropdown-item">Convocations</a></li>
                                            <li><a href={void (0)} onClick={() => navigate("/events", {state: "all"})} className="dropdown-item">All Events</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href={void (0)} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            STORIES
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a href={void (0)} className="dropdown-item" onClick={() => navigate("/stories", { state: "STORY" })}>Alumni Stories</a></li>
                                            <li><a href={void (0)} className="dropdown-item" onClick={() => navigate("/stories", { state: "UPDATES" })}>Institute Updates</a></li>
                                            <li><a href={void (0)} className="dropdown-item" onClick={() => navigate("/gallery")}>Gallery</a></li>
                                            <li><a href={void (0)} className="dropdown-item" onClick={() => navigate("/stories", { state: "ACHIEVEMENTS" })}>Alumni Achievements</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href={void (0)} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            DIRECTORY
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="/directory">Alumni - List View</Link></li>
                                            <li><Link className="dropdown-item" to="/batch">Alumni - Batchwise</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/opportunities">OPPORTUNITIES</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contactus">CONTACT US</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;