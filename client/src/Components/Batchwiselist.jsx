import React from "react";
import "./css/directory.css"
import PeopleCard from "./PeopleCard";
import Yearbook from "./images/yearbook.png";

function Batchwiselist() {
    return (
        <div>
            <img className="yearbook" src={Yearbook} alt="yearbook"></img>
            <div style={{ margin: "2% 12%", fontSize: "1.3em", fontWeight: "bold" }}>Select Year</div>
            <div className="batch-cards">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <PeopleCard heading="Class of 2018" content="1 Member" />
                    <PeopleCard heading="Class of 2018" content="1 Member" />
                    <PeopleCard heading="Class of 2018" content="1 Member" />
                    <PeopleCard heading="Class of 2018" content="1 Member" />
                </div>
            </div>
        </div>
    );
}

export default Batchwiselist;