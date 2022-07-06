import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <div className="head-white">
                <div className="head-text">
                    <div style={{ float: "left" }}>Indian Institute Of Technology Indore</div>
                    <div style={{ float: "right", paddingBottom: "10px" }}><button type="submit" className="btn btn-success">LOGIN / REGISTER</button></div>
                </div>
            </div>
            <img src={props.myLogo} className="logo"></img>
            <div className="title-small">
            <img src={props.myLogo} className="logo-small"></img>
            <div>IIT Indore</div>
            </div>
            <div className="head-blue">
                <div className="nav-container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <button type="submit" className="button-small btn btn-success">LOGIN / REGISTER</button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        {/* <Link className="nav-link " to="/">Home</Link> */}
                                        <a className="nav-link" aria-current="page" href="#">HOME</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            EVENTS
                                        </a> 
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Magnum Opus</a></li>
                                            <li><a className="dropdown-item" href="#">Convocations</a></li>
                                            <li><Link className="dropdown-item" to="/events">All Events</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            STORIES
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="/stories">Alumni Stories</Link></li>
                                            <li><a className="dropdown-item" href="#">Alumni Magazine</a></li>
                                            <li><a className="dropdown-item" href="#">Institute Updates</a></li>
                                            <li><a className="dropdown-item" href="#">Gallery</a></li>
                                            <li><a className="dropdown-item" href="#">Alumni Achievements</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            DIRECTORY
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="/directory">Alumni - List View</Link></li>
                                            <li><a className="dropdown-item" href="#">Alumni - Batchwise</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">OPPORTUNITIES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">CONTACT US</a>
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