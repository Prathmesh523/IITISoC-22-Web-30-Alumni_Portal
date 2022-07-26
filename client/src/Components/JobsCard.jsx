import React from "react";
import { useNavigate } from "react-router-dom";
import AddTaskIcon from '@mui/icons-material/AddTask';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function JobsCard(props) {
    const navigate = useNavigate();
    return (
        <div className="cardbox-new">
            <div className="card-title">
                <div className="card-post">{props.post}</div>
                <div className="card-place">{props.place}</div>
                <div className="card-applys"><a href={void (0)} onClick={() => navigate("/jobsview", {state: props.data})}><AddTaskIcon /> Apply</a></div>
            </div>
            <div id="card-content">
                <table>
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Deadline</th>
                            <th>Salary</th>
                            <th>Applicants</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.location}</td>
                            <td>{props.deadline}</td>
                            <td>{props.salary}</td>
                            <td>{props.applicants}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="card-disabled-button">
                <button type="button" className="btn btn-info btn-sm rounded-pill" disabled>{props.type}</button>
            </div>
            <div className="card-bottom">
                <div style={{ marginTop: "1.1%" }}>
                    <AccountCircleIcon className="svg_icons" />
                </div>
                <div className="card-top-bottom">
                    <div className="card-top-bottom-heading">{props.publisher}</div>
                    <div>Published On {props.published}</div>
                </div>
                <div style={{ width: "45%", textAlign: "right" }}><button type="button" onClick={() => navigate("/jobsview", {state: props.data})} className="btn btn-primary">View</button></div>
            </div>
        </div>
    );
}

export default JobsCard;