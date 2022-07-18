import React from "react";

function PeopleCard(props) {
    return (
        <div className="col">
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">{props.heading}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href={void(0)} className="stretched-link"></a>
                </div>
            </div>
        </div>
    );
}

export default PeopleCard;