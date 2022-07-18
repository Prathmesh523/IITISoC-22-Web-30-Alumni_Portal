import React, { useEffect, useState } from "react";
import "./css/profile.css";
import { useLocation } from 'react-router-dom';
import Axios from "axios";
import R from "./images/R.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { change } from "../actions/index";

function Profile() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className="profilePage">
            <div className="profileTopImg">
            </div>
            <div className="profilebottom">
                <div className="profileLeftNav">
                    <div className="profileLeftBox">
                        <div className="profImgTop">
                            <img src={R} alt="" className="profileMainImg" />
                        </div>
                        <button className="changeImg">Change Profile Image</button>
                        <p id="ImgName"> {user.name} <i className="fa-solid fa-pen pen"></i></p>
                        <p id="ImgText">{user.role}, Class of {user.yearOfGraduation}</p>
                        <p id="ImgText">{user.course} {user.department}</p>
                    </div>

                    <div className="profileLeftBox1">
                        <div className="leftBoxInfos">
                            <div className="infoCircle">
                                <span className="fas fa-info"></span>
                            </div>
                            <p id="leftBoxHeads" style={{ paddingTop: "4%" }}>Contact Information </p>
                            <button className="editBtn">Edit</button>
                        </div>
                        <div className="leftBoxSec">
                            <div className="leftBoxSecItem">
                                <span className="fas fa-envelope"></span>
                                <p id="leftBoxSubHead">{user.email}</p>
                            </div>
                            <div className="leftBoxSecItem">
                                <span className="fas fa-phone"></span>
                                <p id="leftBoxSubHead"></p>
                            </div>
                            <div className="leftBoxSecItem">
                                <span className="fas fa-paperclip"></span>
                                <p id="leftBoxSubHeadLink">https://alumni.iiti.ac.in/profile/{user._id}</p>
                            </div>
                        </div>
                    </div>

                    <div className="profileLeftBox2">
                        <div className="leftBoxInfos">
                            <div className="infoCircle">
                                <span className="fas fa-info"></span>
                            </div>
                            <p id="leftBoxHeads" style={{ paddingTop: "4%" }}>Expertise</p>
                            <button className="editBtn">Edit</button>
                        </div>
                        <div className="leftBoxSec">
                            <p style={{ fontSize: "15px" }}>Skills: {user.skills}</p>
                        </div>
                    </div>

                    <div className="profileLeftBox3">
                        <div className="leftBoxInfos">
                            <div className="infoCircle">
                                <span className="fas fa-info"></span>
                            </div>
                            <p id="leftBoxHeads" style={{ paddingTop: "4%" }}>Basic Information</p>
                            <button className="editBtn">Edit</button>
                        </div>

                        <div className="leftBoxSec">
                            <div className="leftBoxSecItem">
                                <span className="fa-solid fa-location-dot" style={{ marginRight: "1.5%" }}></span>
                                <p id="leftBoxSubHeadLink2">{user.location}</p>
                            </div>
                            <div className="leftBoxSecItem">
                                <span className="fas fa-home"></span>
                                <p id="leftBoxSubHeadLink2">{user.location}</p>
                            </div>
                            <div className="leftBoxSecItem">
                                <span className="fa-solid fa-cake-candles"></span>
                                <p id="leftBoxSubHead" style={{ marginLeft: "42px" }}>{user.dob.substr(0,10)}</p>
                            </div>
                            <div className="leftBoxSecItem">
                                <span className="fa-solid fa-user"></span>
                                <p id="leftBoxSubHead" style={{ marginLeft: "44px" }}>{user.gender}</p>
                            </div>
                            <div className="leftBoxSecItem">
                                <span className="fa-solid fa-user-group"></span>
                                <p id="leftBoxSubHead" style={{ marginLeft: "36px" }}></p>
                            </div>
                        </div>
                    </div>

                    <div className="profileLeftBox4">
                        <div className="leftBoxInfos">
                            <div className="infoCircle">
                                <span className="fas fa-info"></span>
                            </div>
                            <p id="leftBoxHeads" style={{ paddingTop: "4%" }}>Network </p>
                            <button className="editBtn">Add People</button>
                        </div>
                        <div className="leftBoxSec2">
                            <p id="leftBoxSubHead2"> <i className="fa-solid fa-circle-plus big"></i> Add IIT Indore friends and
                                contacts to your growing network.</p>
                        </div>
                    </div>
                </div>
                <div className="profileRightNav">
                    <div className="profileRightBox">
                        <div className="rightBoxInfos">
                            <div className="infoCircle2">
                                <span className="fa-solid fa-clipboard-user"></span>
                            </div>
                            <p id="leftBoxHeads">Summary </p>
                            <button className="editBtn2">+Add</button>
                        </div>
                        <div className="rightBoxSec2">
                            <p id="rightBoxSubHead2" style={{ fontSize: "16px" }}> <i className="fa-solid fa-circle-plus big"></i> Use summary to share what
                                you do, your achievements or the opportunities you're looking for.</p>
                        </div>
                    </div>
                    <div className="profileRightBox">
                        <div className="rightBoxInfos">
                            <div className="infoCircle2">
                                <span className="fa-solid fa-bag-shopping"></span>
                            </div>
                            <p id="leftBoxHeads">Work Experience </p>
                            <button className="editBtn2">+Add Work</button>
                        </div>
                        <div className="rightBoxSec2">
                            <p id="rightBoxSubHead2"> <i className="fa-solid fa-circle-plus big"></i> Share your work history to
                                enhance your networking potential.</p>
                        </div>
                    </div>
                    <div className="profileRightBox3">
                        <div className="rightBoxInfos">
                            <div className="infoCircle2">
                                <span className="fa-solid fa-book"></span>
                            </div>
                            <p id="leftBoxHeads">Education</p>
                            <button className="editBtn2">+Add Education</button>
                        </div>
                        <div className="righteducate">
                            <div className="educateCover">
                                <div className="educateContent">
                                    <p id="ImgName2">Indian Institue of Technology</p>
                                    <p id="ImgText2">B.Tech Computer Science Engineering 2020-2024</p>
                                </div>
                                <div className="penButton">
                                    <i className="fa-solid fa-pen pen"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profileRightBox4">
                        No more updates to display.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;