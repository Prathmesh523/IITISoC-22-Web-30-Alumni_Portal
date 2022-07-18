import React from "react";
import PersonIcon from '@mui/icons-material/Person';

function AuthCard() {
    return (
        <div className="auth-card">
            <div className="auth-card-logo-container">
                <div className="auth-card-logo">
                    <PersonIcon style={{fontSize: "3em", color: "white"}} />
                </div>
            </div>
            <div className="auth-card-table">
                <table>
                    <tr>
                        <th>Harshit Pachar</th>
                    </tr>
                    <tr><td>cse200001027@iiti.ac.in</td></tr>
                    <tr><td>B.Tech (Computer Science engineering)</td></tr>
                    <tr><td>Student, Class of 2024</td></tr>
                </table>
            </div>
            <div className="auth-card-button">
                <button className="btn btn-outline-white me-2" type="button">REJECT</button>
                <button className="btn btn-primary float-end" type="button">ACCEPT</button>
            </div>
        </div>
    );
}

export default AuthCard;