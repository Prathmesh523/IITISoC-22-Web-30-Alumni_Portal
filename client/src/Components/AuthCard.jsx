import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import PersonIcon from '@mui/icons-material/Person';

function AuthCard(props) {
    const navigate = useNavigate();
    function acceptHandleClick() {
        Axios.post(
            "http://localhost:8080/changeStatus",
            {username: props.username, type: "accept"}
        );
        navigate("/dashboard");
    }
    function rejectHandleClick() {
        Axios.post(
            "http://localhost:8080/changeStatus",
            {username: props.username, type: "reject"}
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
                <button className="btn btn-outline-white me-2" method="button" onClick={rejectHandleClick}>REJECT</button>
                <button className="btn btn-primary float-end" method="button" onClick={acceptHandleClick}>ACCEPT</button>
            </div>
        </div>
    );
}

export default AuthCard;