import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from "react-router-dom";

function StoriesCards(props){
    const navigate = useNavigate();
    return (
        <div className="cardbox">
            <div className="card-img-box">
                <img className="card-img" src={props.img} alt=""></img>
            </div>
            <div className="card-content">
                <div style={{display: "flex", marginBottom: "10px"}}>
                    <div style={{marginRight: "10px"}}><CalendarMonthIcon fontSize="small" /></div>
                    <div style={{fontSize: "0.9em"}}>{props.date.substring(0,10)}</div>
                </div>
                <div id="story-heading"><a href={void(0)} onClick={() => navigate("/storiesin", {state: props.forIn})}>{props.heading}</a></div>
                <div style={{fontSize: "0.85em", marginBottom: "13px"}}>{props.content.substring(0,100) + "..."}</div>
                <div>
                    <button style={{backgroundColor: "#9aeced"}} type="button" className="btn btn-sm rounded-pill" disabled>{props.tag}</button>
                </div>
            </div>
        </div>
    );
}

export default StoriesCards;