import React, { useEffect, useState } from "react";
import "./css/directory.css";
import Axios from "axios";
import Select from "react-select";
import Magnum from "./images/magnum opus 2022.jpg";
import DirectoryCard from "./DirectoryCard";
import useWindowSize from "./WindowSize";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { useSelector } from 'react-redux';
import { joiningYears, graduateYears, departments, courses, countryList, companyNames, skills } from "./Arrays";

function Directory() {
    const userinfo = useSelector(state => state.user);
    const [userdata, setuserdata] = useState(null);
    const [navappear, setNavappear] = useState(false);
    const [role, setRole] = useState(false);
    const [rolevalue, setrolevalue] = useState("");
    const [viajoin, setViajoin] = useState(false);
    const [joinvalue, setjoinvalue] = useState("");
    const [viagrad, setViagrad] = useState(false);
    const [gradvalue, setgradvalue] = useState("");
    const [viadep, setViadep] = useState(false);
    const [depvalue, setdepvalue] = useState("");
    const [viacourse, setViacourse] = useState(false);
    const [coursevalue, setcoursevalue] = useState("");
    const [vialoc, setVialoc] = useState(false);
    const [locvalue, setlocvalue] = useState("");
    const [viahome, setViahome] = useState(false);
    const [homevalue, sethomevalue] = useState("");
    const [viacompany, setViacompany] = useState(false);
    const [companyvalue, setcompanyvalue] = useState("");
    const [viaskills, setViaskills] = useState(false);
    const [skillsvalue, setskillsvalue] = useState("");
    const size = useWindowSize();

    async function getData() {
        await Axios.get("http://localhost:8080/getUser").then((response) => {
            setuserdata(response.data);
        });
    };

    useEffect(() => {
        getData();
    }, []);
    let filteredData;
    let findcompany=false;
    if(userdata){
        filteredData = userdata.filter(user => {
            return (user.department!=null && user.department!=="")
        });
    }
    if(filteredData){
        if(rolevalue!=="") filteredData = filteredData.filter(user => { return (user.status === rolevalue) });
        if(joinvalue!=="") filteredData = filteredData.filter(user => { return (user.yearOfJoining === joinvalue) });
        if(gradvalue!=="") filteredData = filteredData.filter(user => { return (user.yearOfGraduation === gradvalue) });
        if(depvalue!=="") filteredData = filteredData.filter(user => { return (user.department === depvalue) });
        if(coursevalue!=="") filteredData = filteredData.filter(user => { return (user.course === coursevalue) });
        if(locvalue!=="") filteredData = filteredData.filter(user => { return (user.location === locvalue) });
        if(homevalue!=="") filteredData = filteredData.filter(user => { return (user.yearOfJoining === homevalue) });
        if(companyvalue!=="") filteredData = filteredData.filter(user => {findcompany=false;(user.workExperience.forEach(ar => { if(ar.companyName === companyvalue){findcompany= true;} }));return (findcompany) });
        if(skillsvalue!=="") filteredData = filteredData.filter(user => { return (user.skills.toLowerCase().includes(skillsvalue.toLowerCase())) });
    }
    return (
        <div className="directory-eventpage">
            <div className="directory-side-nav">
                <p style={{ fontSize: "1.2rem", marginBottom: "0px" }}>FILTERS</p>
                <div className="input-group mb-4">
                    <div style={{ display: (size.width >= 901) ? "none" : "block" }} className="temp-button"><button className="btn btn-secondary" onClick={() => { setNavappear(!navappear) }} type="button"><LegendToggleIcon /></button></div>
                </div>
                <div style={{ display: (size.width <= 900) ? (navappear ? "block" : "none") : "block" }}>
                    <nav id="sideEvents">
                        <ul>
                            <li onClick={() => {setrolevalue("");
                                                setjoinvalue("");
                                                setgradvalue("");
                                                setdepvalue("");
                                                setcoursevalue("");
                                                setlocvalue("");
                                                sethomevalue("");
                                                setcompanyvalue("");
                                                setskillsvalue("");}}><span>All</span></li>
                            <li onClick={() => setRole(!role)}><span>Search by Role</span></li>
                            <div style={{ margin: "30px 0", display: role ? "block" : "none" }}><select className="form-select form-select-sm" onChange={(e) => setrolevalue(e.target.value)} aria-label=".form-select-sm example">
                                <option defaultValue="Select Role">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="alumni">Alumni</option>
                                <option value="student">Student</option>
                            </select></div>
                            <li onClick={() => setViajoin(!viajoin)}><span>Year of Joining</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viajoin ? "block" : "none" }}><Select onChange={(option) => setjoinvalue(option.value)} options={joiningYears} /></div>
                            <li onClick={() => setViagrad(!viagrad)}><span>Year of Graduation</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viagrad ? "block" : "none" }}><Select onChange={(option) => setgradvalue(option.value)} options={graduateYears} /></div>
                            <li onClick={() => setViadep(!viadep)}><span>Division/Department</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viadep ? "block" : "none" }}><Select onChange={(option) => setdepvalue(option.value)} options={departments} /></div>
                            <li onClick={() => setViacourse(!viacourse)}><span>Course/Degree</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viacourse ? "block" : "none" }}><Select onChange={(option) => setcoursevalue(option.value)} options={courses} /></div>
                            <li onClick={() => setVialoc(!vialoc)}><span>Current Location</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: vialoc ? "block" : "none" }}><Select onChange={(option) => setlocvalue(option.value)} options={countryList} /></div>
                            <li onClick={() => setViahome(!viahome)}><span>Hometown</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viahome ? "block" : "none" }}><Select onChange={(option) => sethomevalue(option.value)} options={countryList} /></div>
                            <li onClick={() => setViacompany(!viacompany)}><span>Company</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viacompany ? "block" : "none" }}><Select onChange={(option) => setcompanyvalue(option.value)} menuPlacement="top" options={companyNames} /></div>
                            <li onClick={() => setViaskills(!viaskills)}><span>Skills</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viaskills ? "block" : "none" }}><Select onChange={(option) => setskillsvalue(option.value)} menuPlacement="top" options={skills} /></div>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="content directory-content">
                <div style={{ margin: "0 3%", backgroundColor: "white" }}>
                    <div className="text-directory">{filteredData ? filteredData.length: "0"} Members in community</div>
                    <div className="text1-directory">All Profiles</div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4" style={{ margin: "0 2%" }}>
                        {
                            filteredData && filteredData.map((data,index) => {
                                return <DirectoryCard key={index} info={data} status={userinfo.user.status} img={Magnum} title={data.name} content1={data.status + ", Class of "+data.yearOfJoining} content2={data.department} content3={data.location} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directory;