import React, { useState } from "react";
import "./css/storystyle.css";
import DirectoryAdminCard from "./DirectoryAdminCard";
import B from "./images/B.png";
import Select from "react-select";
import useWindowSize from "./WindowSize";
import SearchIcon from '@mui/icons-material/Search';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { joiningYears, graduateYears, departments, courses } from "./Arrays";

function DirectoryAdmin() {
    const [navappear, setNavappear] = useState(false);
    const [role, setRole] = useState(false);
    const [viajoin, setViajoin] = useState(false);
    const [viagrad, setViagrad] = useState(false);
    const [viadep, setViadep] = useState(false);
    const [viacourse, setViacourse] = useState(false);
    const [vialoc, setVialoc] = useState(false);
    const size = useWindowSize();
    return (
        <div className="diTableView">
            <div className="directory-side-nav">
                <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>FILTERS</p>
                <div className="input-group mb-5">
                    <input type="text" className="form-control shadow-none" placeholder="Enter Keyword.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-success" type="button" id="button-addon2"><SearchIcon /></button>
                    <div style={{ display: (size.width >= 901) ? "none" : "block" }} className="temp-button"><button className="btn btn-secondary" onClick={() => { setNavappear(!navappear) }} type="button"><LegendToggleIcon /></button></div>
                </div>
                <div style={{ display: (size.width <= 900) ? (navappear ? "block" : "none") : "block" }}>
                    <nav id="sideEvents">
                        <ul>
                            <li onClick={() => setRole(!role)}><span>Search by Role</span></li>
                            <div style={{ margin: "30px 0", display: role ? "block" : "none" }}><select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option defaultValue="Select Role">Select Role</option>
                                <option value="Admin">Admin</option>
                                <option value="Alumni">Alumni</option>
                                <option value="Faculty">Faculty</option>
                                <option value="Student">Student</option>
                            </select></div>
                            <li onClick={() => setViajoin(!viajoin)}><span>Year of Joining</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viajoin ? "block" : "none" }}><Select options={joiningYears} /></div>
                            <li onClick={() => setViagrad(!viagrad)}><span>Year of Graduation</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viagrad ? "block" : "none" }}><Select options={graduateYears} /></div>
                            <li onClick={() => setViadep(!viadep)}><span>Division/Department</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viadep ? "block" : "none" }}><Select options={departments} /></div>
                            <li onClick={() => setViacourse(!viacourse)}><span>Course/Degree</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viacourse ? "block" : "none" }}><Select options={courses} /></div>
                            <li onClick={() => setVialoc(!vialoc)}><span>Current Location</span></li>
                            <li><span>Hometown</span></li>
                            <li><span>Company</span></li>
                            <li><span>Work Industry</span></li>
                            <li><span>Skills</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="diRightSide">
                <div className="dirsTopBlue">
                    1920 Profile Records
                </div>
                <div className="dirsBlueBelow">
                    <p id="allProfileP">All Profiles</p>
                    <button className="sendMailBtn"><i className="fa-solid fa-envelope"></i> Send Mail </button>
                    <button className="downloadBtn"><i className="fa-solid fa-download"></i> DOWNLOAD LIST </button>
                </div>
                <div className="dirsTable">
                    <form>
                        <table className="listTable">
                            <thead>
                                <tr>
                                    <td id="checkBoxTd"><input type="checkbox" id="checkImputTab" /> </td>
                                    <td style={{ width: "27%" }}> NAME </td>
                                    <td style={{ width: "28%" }}> EMAIL </td>
                                    <td style={{ width: "18%" }}> COMPANY </td>
                                    <td style={{ width: "25%" }}> DESIGNATION </td>
                                </tr>
                            </thead>
                            <tbody>
                                <DirectoryAdminCard img={B} name="Rishi Parsai" email="cse200001068@iiti.ac.in " company="Google" designation="C.E.O" />
                                <DirectoryAdminCard img={B} name="Harsh Wardhan Dohaiya" email="cse200001026@iiti.ac.in " company="Amazon" designation="C.E.O" />
                                <DirectoryAdminCard img={B} name="Patil Prathamesh" email="cse200001061@iiti.ac.in " company="Microsoft" designation="C.E.O" />
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DirectoryAdmin;