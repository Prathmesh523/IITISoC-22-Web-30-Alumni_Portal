import React from "react";
import "./css/galleryin.css";
import { useLocation } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function GalleryIn() {
    const location = useLocation();
    const data = location.state;
    return (
        <div className="galleryin-container">
            <h2 className="galleryin-head">{data.name}</h2>
            <div className="galleryin-text">
                A glimpse of Alumni Conversation.Thanks to our outstanding seniors for providing us with an opportunity to learn from their experiences and seek great insights!
            </div>
            <table className="galleryin-right">
                <tbody>
                    <tr>
                        <td>{data.photos[0].length} items</td>
                        <td><CalendarMonthIcon style={{ fontSize: "1.2em" }} /> Created on: {data.date.substring(0, 10)}</td>
                    </tr>
                </tbody>
            </table>
            {
                data.photos[0] && data.photos[0].map((pic, index) => {
                    return (
                        <div key={index} className="galleryin-image">
                            <img src={pic} alt="" className="galleryin-acimg" />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default GalleryIn;