import React from "react";
import { useNavigate } from "react-router-dom";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import "./css/jobopportunities.css";
import user from "./images/user.png";
import { useLocation } from 'react-router-dom';

function OpportunitiesIn() {
    const navigate = useNavigate();
    const location = useLocation();
    const op = location.state;
    const date = new Date();
    const op1 = new Date(op.deadline);
    return (
        <div className="jobsin-container">
            <div className="add-story-container">
                <a href={void(0)} onClick={() => navigate("/opportunities")}>All jobs</a> {">"} Create
            </div>
            <div className="jobsin-card">
                <p style={{fontSize: "1.5em", padding: "2% 3% 1%"}}>Job Details <button className="btn btn-secondary float-end rounded-5 disabled">{op1>date?"Closed":"Open"}</button></p>
                <hr />
                <div className="jobsin-info">
                    <p className="jobsin-paran"><InsertDriveFileIcon style={{fontSize: "1.1em", margin: "0 10px 5px 10px"}} />BASIC</p>
                    <div className="jobsin-left">
                        <ul>
                            <li><h5>Company Name</h5><p>{op.name}</p></li>
                            <li><h5>Salary</h5><p>{op.salary}</p></li>
                            <li><h5>Posted On</h5><p>Date: {op.publishedOn.substring(0,10)}</p></li>
                        </ul>
                    </div>
                    <div className="jobsin-left">
                        <ul>
                            <li><h5>Designation</h5><p>{op.title}</p></li>
                            <li><h5>Location</h5><p>{op.location}</p></li>
                            <li><h5>Application Deadline</h5><p>Apply till: {op.deadline.substring(0,10)}</p></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="jobsin-info">
                    <p className="jobsin-paran"><InsertDriveFileIcon style={{fontSize: "1.1em", margin: "0 10px 5px 10px"}} />DESCRIPTION</p>
                    <p className="jobsin-gray">{op.description}</p>

                    <p style={{marginTop: "8%"}} className="jobsin-paran"><InsertDriveFileIcon style={{fontSize: "1.1em", margin: "0 10px 5px 10px"}} />About {op.name}</p>
                    <p className="jobsin-gray">{op.about}</p>
                </div>
                <hr />
                <div className="jobsin-info">
                    <p className="jobsin-paran"><PersonIcon style={{fontSize: "1.1em", margin: "0 10px 5px 10px"}} />POSTED BY</p>
                    <img className="jobsin-imag" src={user} alt="" />
                    <table className="jobsin-tab">
                        <tr>
                            <td style={{fontSize: "1.1em", fontWeight: "500"}}>{op.by}</td>
                        </tr>
                        <tr>
                        <td>On {op.publishedOn.substring(0,10)}</td>
                        </tr>
                    </table>
                </div>
                <hr />
                <div className="jobsin-info">
                    <p className="jobsin-paran"><MessageIcon style={{fontSize: "1.1em", margin: "0 10px 5px 10px"}} />CONTACT</p>
                    <p className="jobsin-foot">Want to get in touch with {op.by}? Send a <a href={void(0)}>Direct Message</a> </p>

                </div>
            </div>
        </div>
    );
}

export default OpportunitiesIn;