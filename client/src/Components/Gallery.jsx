import React, { useEffect, useState } from "react";
import "./css/gallery.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import useWindowSize from "./WindowSize";
import AddIcon from '@mui/icons-material/Add';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GalleryCard from "./GalleryCard";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function Gallery() {
    const location = useLocation();
    const type = location.state;
    const userinfo = useSelector(state => state.user);
    const [navappear, setNavappear] = useState(false);
    const size = useWindowSize();
    const navigate = useNavigate();
    const [step0, setstep0] = useState(true);
    const [step1, setstep1] = useState(false);
    const [imagedata, setimagedata] = useState(null);
    const [formdata, setformdata] = useState({
        name: "",
        date: new Date(),
        by: userinfo.user.name,
        photos: []
    });
    const user = userinfo.user.status;
    const [image, setImage] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);

    async function getData() {
        await Axios.get("http://localhost:8080/getGallery").then((response) => {
            setimagedata(response.data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    const handleImageChange = (e) => {
        if (e.target.files) {
            const fileArray = Array.from(e.target.files);
            setImage((prev) => prev.concat(fileArray));
            const filesArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );

            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
        uploadImage();
    }

    const uploadImage = async () => {
        image.map(file => {
            const data = new FormData()
            data.append("file", file)
            data.append("upload_preset", "Alumni_preset")
            data.append("cloud_name", "harshit9829")
            fetch("  https://api.cloudinary.com/v1_1/harshit9829/image/upload", {
                method: "post",
                body: data
            })
                .then(resp => resp.json())
                .then(data => {
                    setformdata(prev => { return ({ ...formdata, photos: prev.photos.concat(data.url) }) });
                })
                .catch(err => console.log(err))
        })
    }

    useEffect(() => {
        if (formdata.photos.length !== 0) {
            try {
                const res = Axios.post(
                    "http://localhost:8080/addAlbum",
                    formdata
                );
                getData();
                setSelectedFiles([]);
                setImage([]);
                setformdata({
                    name: "",
                    date: new Date(),
                    photos: []
                });
            } catch (error) {
                console.log(error);
            }
        }
    }, [formdata.photos.length === image.length]);

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <span><CloseIcon onClick={() => {
                setSelectedFiles(files => files.filter((photos) => { return photos !== photo })); fetch(photo)
                    .then(res => res.blob())
                    .then(blob => {
                        setImage(files => files.filter((photos) => { return photos.size !== blob.size }));
                    });
            }} style={{ position: "absolute", zIndex: "1", margin: "5px", fontSize: "1em", backgroundColor: "white", cursor: "pointer" }} /><img src={photo} alt="" key={photo} /></span>;
        });
    };

    let filteredData;
    if (type === "me") {
        filteredData = imagedata.filter(img => { return (img.by === userinfo.user.name) });
    } else {
        filteredData = imagedata;
    }

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
                            <li onClick={() => navigate("/gallery", {state: "all"})}><span>All</span></li>
                        </ul>
                    </nav>
                    <nav id="sideEvents">
                        <ul>
                            <li onClick={() => navigate("/gallery", {state: "me"})}><span>Created By Me</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="gallery-container">
                <button style={{ display: (user === "admin" && step0) ? "block" : "none", width: "80%" }} onClick={() => { setstep0(false); setstep1(true); }} className="btn add-event-button"><AddIcon /> CREATE AN ALBUM</button>
                <div className="add-event" style={{ display: (step1) ? "block" : "none", width: "80%" }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ height: "60px" }} className="add-event-header">CREATE AN ALBUM</div>
                        <div style={{ display: (step1) ? "block" : "none", padding: "3%" }}>
                            <input className="gallery-title" type="text" value={formdata.name} onChange={(e) => setformdata({ ...formdata, name: e.target.value })} placeholder="Album Name" />
                            <div className="gallery-add">
                                <input type="file" id="file" multiple onChange={handleImageChange} />
                                <div className="label-holder">
                                    <label htmlFor="file" className="btn btn-outline-success rounded-0 gallery-add-label">
                                        <AddPhotoAlternateIcon style={{ fontSize: "1.3em" }} /> Add Photo
                                    </label>
                                    <button type="submit" onClick={() => {setstep0(true);setstep1(false);}} className="btn btn-primary float-end rounded-0" disabled={(selectedFiles.length === 0) ? true : false}>CREATE</button>
                                    <button style={{ marginRight: "15px" }} type="submit" onClick={() => { setstep0(true); setstep1(false); setSelectedFiles([]); setImage([]); }} className="btn btn-outline-secondary float-end rounded-0">CANCEL</button>

                                </div>
                                <div className="gallery-add-result">{renderPhotos(selectedFiles)}</div>
                            </div>
                        </div>
                    </form>
                </div>
                {
                    filteredData && filteredData.map((data,index) => {
                        return (
                            <GalleryCard key={index} pics={data} src={data.photos[0][0]} heading={data.name} items={data.photos[0].length} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Gallery;