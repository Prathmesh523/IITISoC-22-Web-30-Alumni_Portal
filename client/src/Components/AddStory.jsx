import React, { useState } from "react";
import "./css/AddStory.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useLocation} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InfoIcon from '@mui/icons-material/Info';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PublicIcon from '@mui/icons-material/Public';
import { useNavigate } from "react-router-dom";

function AddStory() {
    const[highlight, sethighlight] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <div className="add-story-container">
                <a href={void(0)} onClick={() => navigate("/stories", {state: "STORY"})}>All Campusfeed</a> {">"} Create
            </div>
            <div className="add-story-body">
                <form className="row">
                    <div className="col-md-12">
                        <div className="input-group">
                            <input type="text" className="form-control add-photo-title shadow-none" placeholder="Add Title..." aria-describedby="inputGroupPrepend" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="add-story-photo">
                            <label for="add-photo">
                                <input type="file" id="add-photo" />
                                <PhotoCameraIcon style={{ fontSize: "20px", marginRight: "5%" }} />Add Cover Photo
                            </label>
                            <a href={void(0)} onClick={() => sethighlight(!highlight)} className="new-div"><AddIcon style={{ fontSize: "20px" }} /> Key Highlights</a>
                            <button className="btn btn-secondary btn-sm float-end" disabled><PublicIcon style={{ fontSize: "20px", paddingRight: "2px" }} />Public Content</button>
                        </div>
                    </div>
                    <div className="col-md-12" style={{display: highlight?"block":"none"}}>
                    <textarea className="form-control shadow-none" placeholder="Add Highlight..." rows="3"></textarea>
                    </div>
                    <div className="col-md-12">
                        <textarea style={{display: (location.state==="NEWSLETTER"?"none":"block")}} className="form-control shadow-none" rows="10"></textarea>
                        <div style={{display: (location.state==="NEWSLETTER"?"block":"none")}} className="add-event-photo">
                            <label style={{height: "100%"}} for="add-photo">
                                <div><AddPhotoAlternateIcon style={{fontSize: "85px", color: "white", backgroundColor: "green", margin: "5% auto 2%"}} /></div>
                                <input id="add-photo" type="file" />
                                Upload Photo
                            </label>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="add-story-footer">
                            <div style={{ float: "left", paddingTop: "12px", paddingLeft: "10px" }}>Publish Date <InfoIcon style={{ fontSize: "19px", color: "grey" }} />:</div>
                            <div style={{padding: "0", float: "left"}} aria-describedby="inputGroupPrepend"><DatePicker wrapperClassName="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} /></div>
                            <div className="add-story-footer-dp">
                                <select className="form-select shadow-none" aria-label="Default select example">
                                    <option selected disabled>Select Post Category</option>
                                    <option value="Institute Updates">Institute Updates</option>
                                    <option value="Alumni Achievements">Alumni Achievements</option>
                                    <option value="Alumni Stories">Alumni Stories</option>
                                    <option value="Newsletters">Newsletters</option>
                                </select>
                            </div>
                            <div style={{paddingTop: "0.6%"}}><button className="btn btn-primary float-end">PUBLISH</button></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddStory;