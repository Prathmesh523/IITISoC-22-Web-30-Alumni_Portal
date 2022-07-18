import React from "react";
import "./css/galleryin.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import gallery11 from "./images/gallery/gallery11.jpg";
import gallery12 from "./images/gallery/gallery12.jpg";
import gallery13 from "./images/gallery/gallery13.jpg";
import gallery14 from "./images/gallery/gallery14.jpg";
import gallery15 from "./images/gallery/gallery15.jpg";

function GalleryIn() {
    return (
        <div className="galleryin-container">
        <h2 className="galleryin-head">Alumni Baat-Cheet 2021</h2>
        <div className="galleryin-text">
            A glimpse of Alumni Baat-Cheet-Conversation with the Batch of 2021.Thanks to our outstanding seniors for providing us with an opportunity to learn from their experiences and seek great insights!
        </div>
        <table className="galleryin-right">
            <tr>
                <td>5 items</td>
                <td><CalendarMonthIcon style={{fontSize: "1.2em"}} /> Created on: Jan 08, 2022</td>
            </tr>
        </table>
        <div className="galleryin-image">
            <img src={gallery11} alt="" className="galleryin-acimg" />
        </div>
        <div className="galleryin-image">
            <img src={gallery12} alt="" className="galleryin-acimg" />
        </div>
        <div className="galleryin-image">
            <img src={gallery13} alt="" className="galleryin-acimg" />
        </div>
        <div className="galleryin-image">
            <img src={gallery14} alt="" className="galleryin-acimg" />
        </div>
        <div className="galleryin-image">
            <img src={gallery15} alt="" className="galleryin-acimg" />
        </div>
    </div>
    );
}

export default GalleryIn;