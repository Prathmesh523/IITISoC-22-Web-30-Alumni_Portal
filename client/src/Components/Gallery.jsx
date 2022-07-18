import React, { useState } from "react";
import "./css/gallery.css";
import useWindowSize from "./WindowSize";
import AddIcon from '@mui/icons-material/Add';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GalleryCard from "./GalleryCard";
import CloseIcon from '@mui/icons-material/Close';
import gallery1 from "./images/gallery/gallery1.jpg";
import gallery2 from "./images/gallery/gallery2.jpg";
import gallery3 from "./images/gallery/gallery3.jpg";
import gallery4 from "./images/gallery/gallery4.jpg";
import gallery5 from "./images/gallery/gallery5.jpg";
import gallery6 from "./images/gallery/gallery6.jpg";
import gallery7 from "./images/gallery/gallery7.jpg";

function Gallery() {
    const [navappear, setNavappear] = useState(false);
    const size = useWindowSize();
    const [step0, setstep0] = useState(true);
    const [step1, setstep1] = useState(false);
    const user = "admin";
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );

            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }
    };

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <span><CloseIcon onClick={() => setSelectedFiles(files => files.filter((photos) => {return photos!==photo}))} style={{position: "absolute", zIndex: "1", margin: "5px", fontSize: "1em", backgroundColor: "white", cursor: "pointer"}} /><img src={photo} alt="" key={photo} /></span>;
        });
    };
    return (
        <div className="gallery-page">
            <div className="side-nav">
                <div style={{ display: (size.width >= 801) ? "none" : "flex" }} className="input-group mb-4">
                    <div style={{ textAlign: "center", width: "70%", fontSize: "1.3em", display: (size.width < 650) ? "none" : "block" }}>JOB OPPORTUNITIES AND INTERNSHIPS</div>
                    <div className="temp-button"><button className="btn btn-secondary btn-sm" onClick={() => setNavappear(!navappear)} type="button"><LegendToggleIcon /></button></div>
                </div>
                <div style={{ display: (size.width <= 800) ? (navappear ? "block" : "none") : "block" }}>
                    <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>GALLERY CATEGORIES</p>
                    <nav id="sideEvents">
                        <ul>
                            <li><span>All</span></li>
                        </ul>
                    </nav>
                    <nav id="sideEvents">
                        <ul>
                            <li><span>Created By Me</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="gallery-container">
                <button style={{ display: (user === "admin" && step0) ? "block" : "none", width: "80%" }} onClick={() => { setstep0(false); setstep1(true); }} className="btn add-event-button"><AddIcon /> CREATE AN ALBUM</button>
                <div className="add-event" style={{ display: (step1) ? "block" : "none", width: "80%" }}>
                    <div style={{ height: "60px" }} className="add-event-header">CREATE AN ALBUM</div>
                    <div style={{ display: (step1) ? "block" : "none", padding: "3%" }}>
                        <input className="gallery-title" type="text" placeholder="Album Name" />
                        <div className="gallery-add">
                            <input type="file" id="file" multiple onChange={handleImageChange} />
                            <div className="label-holder">
                                <label htmlFor="file" className="btn btn-outline-success rounded-0 gallery-add-label">
                                    <AddPhotoAlternateIcon style={{fontSize: "1.3em"}} /> Add Photo
                                </label>
                                <button type="submit" className="btn btn-primary float-end rounded-0" disabled={(selectedFiles.length===0)?true:false}>CREATE</button>
                                <button style={{marginRight: "15px"}} type="submit" onClick={() => {setstep0(true); setstep1(false);setSelectedFiles([])}} className="btn btn-outline-secondary float-end rounded-0">CANCEL</button>
                                
                            </div>
                            <div className="gallery-add-result">{renderPhotos(selectedFiles)}</div>
                        </div>
                    </div>
                </div>
                <GalleryCard src={gallery1} heading="Alumni Baat-Cheet 2021" items="5 items" />
                <GalleryCard src={gallery2} heading="Convocation 2021" items="5 items" />
                <GalleryCard src={gallery3} heading="Convocation 2018" items="1 items" />
                <GalleryCard src={gallery4} heading="IIT Indore in Local Newspapers" items="2 items" />
                <GalleryCard src={gallery5} heading="Cover Stories" items="3 items" />
                <GalleryCard src={gallery6} heading="IIT Indore First Convocation-2013" items="5 items" />
                <GalleryCard src={gallery7} heading="Team AVANA, IIT Indore" items="5 items" />
                
            </div>
        </div>
    );
}

export default Gallery;