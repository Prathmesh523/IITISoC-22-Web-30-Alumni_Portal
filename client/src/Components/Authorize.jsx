import React, { useEffect, useState } from "react";
import "./css/authorize.css";
import Axios from "axios";
import AuthCard from "./AuthCard";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function Authorize() {
    const [authdata,setauthdata] = useState(null);

    useEffect(() => {
        Axios.get("http://localhost:8080/getAuthlist").then((response) => {
            setauthdata(response.data);
        });
    },[]);
    return (
        <div>
            <div style={{float: "left"}} className="adminLeft">
                <div className="adminLBox">
                    <a href="/dashboard"><i className="fa-solid fa-gauge"></i> Dashboard </a>
                </div>
                <div className="adminLBox">
                    <a href="#"><i className="fa-solid fa-gear"></i> Manage Items </a>
                </div>
                <div className="adminLBox">
                    <a href="#"><i className="fa-solid fa-tasks"></i> Manage Content </a>
                </div>
                <div className="adminLBox">
                    <a href="/email"><i className="fa-solid fa-envelope"></i> Mailing </a>
                </div>
                <div className="adminLBox">
                    <a href="#"><i className="fa-solid fa-wrench"></i> Portal Setting </a>
                </div>
                <div className="adminLBox">
                    <a href="#"><i className="fa-solid fa-sitemap"></i> Manage Admins </a>
                </div>
            </div>
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
                {
                    authdata && authdata.map((data,index) => {
                        return <AuthCard key={index} username={data.username} name={data.name} email={data.email} course={data.course} depart={data.department} grad={data.yearOfGraduation} />
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default Authorize;