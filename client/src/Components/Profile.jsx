import React, { useEffect, useState } from "react";
import "./css/profile.css";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import DatePicker from "react-datepicker";
import R from "./images/R.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { successlogin } from "../actions";

function Profile() {
    const state = useSelector(state => state.user);
    const user = state.user;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formdata, setformdata] = useState({
        username: user.username,
        skills: String(user.skills),
        location: String(user.location),
        hometown: String(user.hometown),
        gender: String(user.gender),
        maritalStatus: String(user.marriageStatus),
        dob: new Date(user.dob),
        summary: String(user.summary),
    });
    const [formdata1, setformdata1] = useState({
        username: user.username,
        workTitle: "",
        companyName: "",
        workIndustry: "",
        duration: "",
    });
    const [formdata2, setformdata2] = useState({
        username: user.username,
        instituteName: "",
        startYear: "",
        gradYear: "",
        degree: "",
        department: ""
    });
    useEffect(() => {
    },[state]);
    async function handleSubmit(e) {
        e.preventDefault();
        await Axios.post("http://localhost:8080/profile-data", formdata).then((response) => {
            dispatch(successlogin(response.data));
        });
        navigate("/profile");
    }
    async function handleSubmitWork(e) {
        e.preventDefault();
        await Axios.post("http://localhost:8080/profile-data-work", formdata1).then((response) => {
            dispatch(successlogin(response.data));
        });
        navigate("/profile");
    }
    async function handleSubmitEducation(e) {
        e.preventDefault();
        await Axios.post("http://localhost:8080/profile-data-education", formdata2).then((response) => {
            dispatch(successlogin(response.data));
        });
        navigate("/profile");
    }
    console.log(user)
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
                            <button className="editBtn" onClick={() => navigate("/settings")}>Edit</button>
                        </div>
                        <div className="leftBoxSec">
                            <div className="leftBoxSecItem">
                                <span className="fas fa-envelope"></span>
                                <p id="leftBoxSubHead">{user.email}</p>
                            </div>
                            <div className="leftBoxSecItem">
                                <span className="fas fa-phone"></span>
                                <p id="leftBoxSubHead">{user.phone}</p>
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
                            <button className="editBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Edit</button>
                            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <form onSubmit={handleSubmit}>
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Expertise</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="email_11" >
                                                    <div>
                                                        <p className="ip11" >
                                                            <p className="para11">Skills:</p>
                                                            <input type="text" value={formdata.skills} name="skills" onChange={(e) => setformdata({ ...formdata, skills: e.target.value })} className="textskills" placeholder="Add Skills" />
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
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
                            <button className="editBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">Edit</button>
                            <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div style={{ width: "800px" }} className="modal-content">
                                        <form onSubmit={handleSubmit}>
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Expertise</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="email_11" >
                                                    <div>
                                                        <p className="ip1000">
                                                            <label htmlFor="sender_name">Current Location*</label>
                                                            <br />
                                                            <input type="text" value={formdata.location} onChange={(e) => setformdata({ ...formdata, location: e.target.value })} name="location" id="sender_name" />
                                                        </p>
                                                        <p className="ip1000">
                                                            <label htmlFor="sender_name">Hometown*</label>
                                                            <br />
                                                            <input type="text" value={formdata.hometown} onChange={(e) => setformdata({ ...formdata, hometown: e.target.value })} name="hometown" id="sender_name" />
                                                        </p>
                                                        <p className="ip11" >
                                                            <label htmlFor="send_from">Gender *</label>
                                                            <br />
                                                            <select name="gender" onChange={(e) => setformdata({ ...formdata, gender: e.target.value })} id="send_from">
                                                                <option value="" defaultChecked hidden>Select Gender</option>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                                <option value="Others">Others</option>
                                                            </select>
                                                        </p>
                                                        <p className="ip11" >
                                                            <label htmlFor="send_from">Marital Status *</label>
                                                            <br />
                                                            <select name="maritalStatus" onChange={(e) => setformdata({ ...formdata, maritalstatus: e.target.value })} id="send_from">
                                                                <option value="" defaultChecked hidden>Select Marital Status</option>
                                                                <option value="Married">Married</option>
                                                                <option value="Unmarried">Unmarried</option>
                                                            </select>
                                                        </p>
                                                        <p className="ip11" >
                                                            <label htmlFor="send_from">Date of Birth *</label>
                                                            <br />
                                                            <div className="sender_name"><DatePicker name="dob" wrapperClassName="hellobro1" dateFormat="yyyy/MM/dd" selected={formdata.dob} onChange={(date) => setformdata({ ...formdata, dob: date })} /></div>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="leftBoxSec">
                            <div className="leftBoxSecItem">
                                <span className="fa-solid fa-location-dot" style={{ marginRight: "1.5%" }}></span>
                                <p id="leftBoxSubHeadLink2">{user.location}</p>
                            </div>
                            <div className="leftBoxSecItem">
                                <span className="fas fa-home"></span>
                                <p id="leftBoxSubHeadLink2">{user.hometown}</p>
                            </div>
                            <div className="leftBoxSecItem">
                                <span className="fa-solid fa-cake-candles"></span>
                                <p id="leftBoxSubHead" style={{ marginLeft: "42px" }}>{user.dob.substr(0, 10)}</p>
                            </div>
                            <div className="leftBoxSecItem">
                                <span className="fa-solid fa-user"></span>
                                <p id="leftBoxSubHead" style={{ marginLeft: "44px" }}>{user.gender}</p>
                            </div>
                            <div className="leftBoxSecItem">
                                <span className="fa-solid fa-user-group"></span>
                                <p id="leftBoxSubHead" style={{ marginLeft: "36px" }}>{user.marriageStatus}</p>
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
                            <button className="editBtn2" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">+Add</button>
                            <div className="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <form onSubmit={handleSubmit}>
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Summary</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="email_11" >

                                                    <div>
                                                        <p className="ip1001">
                                                            <label >Add summary</label>
                                                            <br />
                                                            <p className="ip400">
                                                                <textarea id="email_text" value={formdata.summary} onChange={(e) => setformdata({ ...formdata, summary: e.target.value })} rows="8" cols="59" name="email_text" placeholder="Type you text here"></textarea>
                                                            </p>
                                                        </p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="rightBoxSec2">
                            <p id="rightBoxSubHead2" style={{ fontSize: "16px", display: !user.summary ? "block" : "none" }}> <i className="fa-solid fa-circle-plus big"></i> Use summary to share what
                                you do, your achievements or the opportunities you're looking for.</p>
                            <div style={{ display: !user.summary ? "none" : "block" }}>{user.summary}</div>
                        </div>
                    </div>
                    <div className="profileRightBox">
                        <div className="rightBoxInfos">
                            <div className="infoCircle2">
                                <span className="fa-solid fa-bag-shopping"></span>
                            </div>
                            <p id="leftBoxHeads">Work Experience </p>
                            <button className="editBtn2" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">+Add Work</button>
                            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <form onSubmit={handleSubmitWork}>
                                        <div style={{ width: "750px" }} className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Add Work</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="email_11" >
                                                    <div>
                                                        <p className="ip1000">
                                                            <label htmlFor="sender_name">Work Title*</label>
                                                            <br />
                                                            <input type="text" value={formdata1.workTitle} onChange={(e) => setformdata1({ ...formdata1, workTitle: e.target.value })} name="sender_name" id="sender_name" />
                                                        </p>
                                                        <p className="ip1000">
                                                            <label htmlFor="sender_name">Company Name*</label>
                                                            <br />
                                                            <input type="text" value={formdata1.companyName} onChange={(e) => setformdata1({ ...formdata1, companyName: e.target.value })} name="sender_name" id="sender_name" />
                                                        </p>
                                                        <p className="ip1000">
                                                            <label htmlFor="sender_name">Work Industry*</label>
                                                            <br />
                                                            <input type="text" value={formdata1.workIndustry} onChange={(e) => setformdata1({ ...formdata1, workIndustry: e.target.value })} name="sender_name" id="sender_name" />
                                                        </p>
                                                        <p className="ip1000">
                                                            <label htmlFor="sender_name">Duration*</label>
                                                            <br />
                                                            <input type="text" value={formdata1.duration} onChange={(e) => setformdata1({ ...formdata1, duration: e.target.value })} name="sender_name" id="sender_name" />
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="rightBoxSec2">
                            <p id="rightBoxSubHead2" style={{display: user.workExperience.length===0?"block":"none"}}> <i className="fa-solid fa-circle-plus big"></i> Share your work history to
                                enhance your networking potential.</p>
                            <div>{
                                user.workExperience.map(work => {
                                    return (
                                        <div class="workexp">
                                            <div class="jobtitle">{work.workTitle}</div>
                                            <div class="company">{work.companyName}</div>
                                            <div class="duration">{work.duration} ({work.workIndustry})</div>
                                        </div>
                                    )
                                })
                            }</div>
                        </div>
                    </div>
                    <div className="profileRightBox3">
                        <div className="rightBoxInfos">
                            <div className="infoCircle2">
                                <span className="fa-solid fa-book"></span>
                            </div>
                            <p id="leftBoxHeads">Education</p>
                            <button className="editBtn2" data-bs-toggle="modal" data-bs-target="#staticBackdrop5">+Add Education</button>
                            <div className="modal fade" id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <form onSubmit={handleSubmitEducation}>
                                        <div style={{ width: "600px" }} className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Education</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="email_11" >

                                                    <div>

                                                        <div className="nameOfInstitute">
                                                            <input type="text" value={formdata2.instituteName} onChange={(e) => setformdata2({ ...formdata2, instituteName: e.target.value })} placeholder="Name of the Institute" />
                                                        </div>
                                                        <div className="startEndYear">
                                                            <select name="send_from" onChange={(e) => setformdata2({ ...formdata2, startYear: e.target.value })} id="send_from">
                                                                <option value="#"> Select starting Year</option>
                                                            </select>

                                                            <select name="send_from" onChange={(e) => setformdata2({ ...formdata2, gradYear: e.target.value })} id="send_from">
                                                                <option value="#"> Select Graduation Year</option>
                                                            </select>
                                                        </div>
                                                        <div className="degreeDepartment">
                                                            <input type="text" value={formdata2.degree} onChange={(e) => setformdata2({ ...formdata2, degree: e.target.value })} className="degree" placeholder="Degree" />
                                                            <input type="text" value={formdata2.department} onChange={(e) => setformdata2({ ...formdata2, department: e.target.value })} className="department" placeholder="Department" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="righteducate">
                            {user.education.map(edu => {
                                return (<div className="educateCover">
                                    <div className="educateContent">
                                        <p id="ImgName2">{edu.instituteName}</p>
                                        <p id="ImgText2">{edu.degree} {edu.department} {edu.startYear}-{edu.gradYear}</p>
                                    </div>
                                    <div className="penButton">
                                        <i className="fa-solid fa-pen pen"></i>
                                    </div>
                                </div>)
                            })}
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