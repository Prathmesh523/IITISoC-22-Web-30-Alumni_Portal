import React, { useEffect, useState } from "react";
import "./css/AddStory.css";
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from '@mui/icons-material/Public';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function AddStory() {
    const userinfo = useSelector(state => state.user);
    const [highlight, sethighlight] = useState(false);
    const location = useLocation();
    const type = location.state;
    const navigate = useNavigate();

    const [formdata, setformdata] = useState({
        title: "",
        highlight: "",
        description: "",
        publishDate: new Date(),
        category: "",
        by: userinfo.user.name,
        status: userinfo.user.status,
        photo: ""
    });
    const [image, setImage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        uploadImage();
    }

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
                setformdata({ ...formdata, photo: data.url });
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (formdata.photo !== "") {
            try {
                const res = Axios.post(
                    "http://localhost:8080/addStory",
                    formdata
                );
                setformdata({
                    title: "",
                    highlight: "",
                    description: "",
                    publishDate: new Date(),
                    category: "",
                    newsletter: "",
                    photo: ""
                });
                navigate("/stories");
            } catch (error) {
                console.log(error);
            }
        }
    }, [formdata.photo]);

    return (
        <div>
            <div className="add-story-container">
                <a href={void (0)} onClick={() => navigate("/stories", { state: "STORY" })}>All Campusfeed</a> {">"} Create
            </div>
            <div className="add-story-body">
                <form className="row" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                        <div className="input-group">
                            <input type="text" value={formdata.title} onChange={(e) => setformdata({ ...formdata, title: e.target.value })} className="form-control add-photo-title shadow-none" placeholder="Add Title..." aria-describedby="inputGroupPrepend" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="add-story-photo">
                            <label htmlFor="add-photo">
                                <input type="file" id="add-photo" onChange={(e) => { setImage(e.target.files[0]); }} accept="image/*" />
                                <a><PhotoCameraIcon style={{ fontSize: "20px", marginRight: "5%" }} />Add Cover Photo</a>
                            </label>
                            <p style={{ display: (image !== "" ? "inline" : "none"), marginLeft: "5px" }}>{(image == null) ? "" : image.name}</p>
                            <a href={void (0)} onClick={() => sethighlight(!highlight)} className="new-div"><AddIcon style={{ fontSize: "20px" }} /> Key Highlights</a>
                            <button className="btn btn-secondary btn-sm float-end" disabled><PublicIcon style={{ fontSize: "20px", paddingRight: "2px" }} />Public Content</button>
                        </div>
                    </div>
                    <div className="col-md-12" style={{ display: highlight ? "block" : "none" }}>
                        <textarea className="form-control shadow-none" value={formdata.highlight} onChange={(e) => setformdata({ ...formdata, highlight: e.target.value })} placeholder="Add Highlight..." rows="3"></textarea>
                    </div>
                    <div className="col-md-12" style={{ display: "flex" }}>
                        <textarea value={formdata.description} onChange={(e) => setformdata({ ...formdata, description: e.target.value })} className="form-control shadow-none" rows="10"></textarea>
                    </div>
                    <div className="col-md-12">
                        <div className="add-story-footer">
                            <div style={{ float: "left", paddingTop: "12px", paddingLeft: "10px" }}>Publish Date <InfoIcon style={{ fontSize: "19px", color: "grey" }} />:</div>
                            <div style={{ padding: "0", float: "left" }} aria-describedby="inputGroupPrepend"><DatePicker wrapperClassName="date-picker" selected={formdata.publishDate} onChange={(date) => setformdata({ ...formdata, publishDate: date })} /></div>
                            <div className="add-story-footer-dp">
                                <select className="form-select shadow-none" onChange={(e) => setformdata({ ...formdata, category: e.target.value })} aria-label="Default select example">
                                    <option defaultChecked hidden>Select Post Category</option>
                                    <option value="Institute Updates">Institute Updates</option>
                                    <option value="Alumni Achievements">Alumni Achievements</option>
                                    <option value="Alumni Stories">Alumni Stories</option>
                                </select>
                            </div>
                            <div style={{ paddingTop: "0.6%" }}><button type="submit" className="btn btn-primary float-end">PUBLISH</button></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddStory;