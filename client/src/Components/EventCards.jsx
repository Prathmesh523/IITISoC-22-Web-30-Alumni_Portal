import React from "react";
import { useNavigate } from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function EventCards(props) {
    const navigate = useNavigate();
    return (
        <div className="cardbox">
            <div className="card-img-box">
                <img className="card-img" src={props.img} alt={props.heading}></img>
            </div>
            <div className="card-content">
                <a href={void (0)} onClick={() => navigate("/eventsin", {state: props.forIn})}><h5>{props.heading}</h5></a>
                <table id="card-table">
                    <tbody>
                        <tr>
                            <td><AccessTimeIcon /></td>
                            <td>{props.start}</td>
                        </tr>
                        <tr>
                            <td><AvTimerIcon /></td>
                            <td>{props.duration}</td>
                        </tr>
                        <tr>
                            <td><LocationOnIcon /></td>
                            <td>{props.platform}</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ width: "100%" }}>
                    <button type="button" className="btn btn-secondary btn-sm rounded-pill" disabled>Past Event</button>
                    <button onClick={() => navigate("/eventsin", {state: props.forIn})} className="btn btn-primary rounded-0 float-end">View</button>
                </div>
            </div>
        </div>
    );
}

export default EventCards;