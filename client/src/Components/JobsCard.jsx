import React from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function JobsCard(props){
    return (
        <div className="cardbox-new">
            <div className="card-title">
                <div className="card-post">{props.post}</div>
                <div className="card-place">{props.place}</div>
                <div className="card-apply"><a href="#"><AddTaskIcon /> Apply</a></div>
            </div>
            <div id="card-content">
                <table>
                    <tr>
                        <th>Location</th>
                        <th>Deadline</th>
                        <th>Salary</th>
                        <th>Applicants</th>
                    </tr>
                    <tr>
                        <td>{props.location}</td>
                        <td>{props.deadline}</td>
                        <td>{props.salary}</td>
                        <td>{props.applicants}</td>
                    </tr>
                </table>
            </div>
            <div className="card-disabled-button">
                <button type="button" class="btn btn-info btn-sm rounded-pill" disabled>Job</button>
            </div>
            <div className="card-bottom">
                <div style={{marginTop: "1.1%"}}>
                    <AccountCircleIcon className="svg_icons" />
                </div>
                <div className="card-top-bottom">
                    <div className="card-top-bottom-heading">{props.publisher}</div>
                    <div>Published On {props.published}</div>
                </div>
                <div style={{width: "45%", textAlign: "right"}}><button type="button" className="btn btn-primary">View</button></div>
            </div>
        </div>
    );
}

export default JobsCard;