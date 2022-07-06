import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function EventCards(props){
    return (
        <div className="cardbox">
            <div className="card-img-box">
                <img className="card-img" src={props.img}></img>
            </div>
            <div className="card-content">
                <h5>{props.heading}</h5>
                <table id="card-table">
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
                        <td>{props.location}</td>
                    </tr>
                </table>
                <div style={{width: "100%"}}>
                    <button type="button" class="btn btn-secondary btn-sm rounded-pill" disabled>Past Event</button>
                    <button className="btn btn-primary rounded-0 float-end">View</button>
                </div>
            </div>
        </div>
    );
}

export default EventCards;