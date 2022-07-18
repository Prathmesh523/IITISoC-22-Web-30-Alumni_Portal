import React from "react";

function GalleryCard(props) {
    return (
        <div className="gallery-card">
            <a href="/galleries"><img className="gallery-image" src={props.src} alt={props.heading} /><div className="gallery-left">
                {props.heading}
            </div></a>

            <div className="gallery-right">
                {props.items}
            </div>
        </div>
    );
}

export default GalleryCard;