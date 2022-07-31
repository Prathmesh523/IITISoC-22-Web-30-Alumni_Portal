import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import R from "./images/R.jpg";

function NetworkCard(props) {
    return (
        <div className="cards">
            <div className="propic">
                <img src={R} alt="" className="propic1" />
            </div>
            <div className="cont">
                <p className="namee">{props.name}</p>
                <p className="descri">{props.status}, Class of {props.year}</p>
            </div>
            <div className="messa">
                <a href=""><div className="propic2"><EmailIcon style={{ color: "white", fontSize: "1em" }} /></div></a>
            </div>
        </div>
    );
}

export default NetworkCard;