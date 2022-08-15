import React from "react";
import "./css/wait.css";
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function Wait() {
    const navigate = useNavigate();
    return (
        <div className="cont">
            <div className="top-cont">
                <h1><PersonOutlineIcon style={{fontSize: "2em"}} /></h1>
                <p className="black-bold">Your profile has been created and has been sent to platform admin for verification</p>
                <p>It might take upto 72 hours for completing the verification process. You will recieve an email on your email once verified</p>
            </div>
            <div className="bottom-cont">
                <div className="first-c">
                    <p className="blue-bold">What can I do while I wait?</p>
                    <p>Start filling in the rest of your profile, it will improve your chances of getting verified.</p>
                    <button className="personal-butt" onClick={() => navigate("/profile")}>Edit My Profile</button>
                </div>
                <div className="second-c">
                    <p className="boldd">Why is verifications required?</p>
                    <p>Verification of all the profiles is required so that only the verified members of Indian Institute of Technology Indore can access the complete platform.</p>
                    <p className="boldd">Whom can I contact for verification purpose?</p>
                    <p>Verification is done by platform admin, you can contact the admins at alumnicell@iiti.ac.in email.</p>
                    <p className="boldd">What happens after verification is complete?</p>
                    <p>Once your profile is verified, you will receive an email for the same. You will then be able to access the complete platform.</p>
                </div>
            </div>
        </div>
    );
}

export default Wait;