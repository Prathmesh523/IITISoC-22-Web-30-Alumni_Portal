import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import PersonIcon from '@mui/icons-material/Person';

function AuthCard(props) {
    const navigate = useNavigate();
    const [type,settype] = useState("");
    function rejectHandle() {
        settype("reject");
        handleClick();
    }
    function acceptHandle() {
        settype("accept");
        handleClick();
    }
    function handleClick() {
        Axios.post(
            "http://localhost:8080/changeStatus",
            {username: props.username, type: type}
        );
        navigate("/dashboard");
    }
    return (
        <div className="auth-card">
            <div className="auth-card-logo-container">
                <div className="auth-card-logo">
                    <PersonIcon style={{ fontSize: "3em", color: "white" }} />
                </div>
            </div>
            <div className="auth-card-table">
                <table>
                    <tbody>
                        <tr>
                            <th>{props.name}</th>
                        </tr>
                        <tr><td>{props.email}</td></tr>
                        <tr><td>{props.course} ({props.depart})</td></tr>
                        <tr><td>Student, Class of {props.grad}</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="auth-card-button">
                <button className="btn btn-outline-white me-2" type="button" onClick={rejectHandle}>REJECT</button>
                <button className="btn btn-primary float-end" type="button" onClick={acceptHandle}>ACCEPT</button>
            </div>
        </div>
    );
}

export default AuthCard;