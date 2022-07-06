import React from "react";

function DirectoryCard(props) {
    return (
        <div className="col mb-4">
            <div className="card h-100">
                <img src={props.img} className="card-img-top directory-card-img" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    );
}

export default DirectoryCard;