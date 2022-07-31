import React from "react";
import { useNavigate } from "react-router-dom";

function GalleryCard(props) {
    const navigate = useNavigate();
    return (
        <div className="gallery-card">
            <a onClick={() => navigate("/galleries", {state: props.pics})}><img className="gallery-image" src={props.src} alt={props.heading} /><div className="gallery-left">
                {props.heading}
            </div></a>

            <div className="gallery-right">
                {props.items}
            </div>
        </div>
    );
}

export default GalleryCard;