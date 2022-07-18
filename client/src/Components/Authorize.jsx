import React from "react";
import "./css/authorize.css";
import AuthCard from "./AuthCard";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function Authorize() {
    return (
        <div>
            <div className="auth-container">
                <div style={{ padding: "3%" }}>
                    <div><PeopleAltIcon style={{ fontSize: "4em", color: "#4fb0e8", marginBottom: "1.4%" }} /></div>
                    <div style={{ fontSize: "1.2em", fontWeight: "500" }}>Manage All Users<br /> At One Place</div>
                </div>
                <hr />
                <div className="auth-text">List of all the users who have recently been registered but not verified by the admin.
                These users cannot access all the features of the portal until verified.
                Click on "Accept" to verify the user and "Reject" to remove them from the portal.
                Verified users will recieve a mail welcoming them on the portal once you "Accept" them.</div>
                <div>
                    <AuthCard />
                    <AuthCard />
                    <AuthCard />
                    <AuthCard />
                    <AuthCard />
                </div>
            </div>
        </div>
    );
}

export default Authorize;