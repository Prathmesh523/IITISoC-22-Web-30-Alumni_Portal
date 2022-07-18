import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function StoriesCards(props){
    return (
        <div className="cardbox">
            <div className="card-img-box">
                <img className="card-img" src={props.img} alt=""></img>
            </div>
            <div className="card-content">
                <div style={{display: "flex", marginBottom: "10px"}}>
                    <div style={{marginRight: "10px"}}><CalendarMonthIcon fontSize="small" /></div>
                    <div style={{fontSize: "0.9em"}}>6 July, 2022</div>
                </div>
                <div id="story-heading"><a href={void(0)}>{props.heading}</a></div>
                <div style={{fontSize: "0.85em", marginBottom: "13px"}}>{props.content}</div>
                <div>
                    <button style={{backgroundColor: "#9aeced"}} type="button" className="btn btn-sm rounded-pill" disabled>{props.tag}</button>
                </div>
            </div>
        </div>
    );
}

export default StoriesCards;