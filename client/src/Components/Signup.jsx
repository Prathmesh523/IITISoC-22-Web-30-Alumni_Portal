import React, { useEffect, useState } from "react";
import useWindowSize from "./WindowSize";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { joiningYears, graduateYears, departments, courses } from "./Arrays";
import "./css/signup.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { successlogin } from "../actions";

function Signup() {
    const userinfo = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [formdata, setformdata] = useState({
        email: userinfo.user.email,
        role: "",
        department: "",
        course: "",
        graduation: "",
        joining: "",
        gender: "",
        location: "",
        dob: ""
    });
    const size = useWindowSize();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());

    function handleChange(e) {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };
    useEffect(() => {
        if (!userinfo.user.department) {
            navigate("/signup");
        } else {
            navigate("/profile");
        }
    }, [userinfo]);
    function handleSubmit(e) {
        e.preventDefault();
        setformdata({ ...formdata, dob: startDate });
        Axios.post("http://localhost:8080/signup-data", formdata).then((response) => {
            dispatch(successlogin(response.data));
        });
    }

    const style = {
        control: base => ({
            ...base,
            border: 0,
            boxShadow: "none",
        })
    };

    return (
        <div style={{ height: "900px" }}>
            <div style={{ paddingBottom: "66px" }}>
                <div className="title-small-s">{(size.width < 800) ? "IIT INDORE" : "Indian Institute of Technology Indore"}</div>
                <div style={{ float: "left", padding: "8px" }}>
                    <div style={{ float: "left" }}><AccountCircleIcon style={{ fontSize: "45px", color: "#1e124a", marginRight: "10px" }} /></div>
                    <div style={{ float: "left" }}><table style={{ fontSize: "0.9em" }}>
                        <tbody>
                            <tr><th style={{ fontWeight: "500", color: "#436970" }}>{(userinfo.user ? userinfo.user.name : "")}</th></tr>
                            <tr><td><a className="signup-link" href="/login" onClick={() => {
                                localStorage.clear();
                                window.location.reload(false);
                                Axios.get("http://localhost:8080/logout").then((response) => {
                                    console.log(response.data);
                                });
                            }}>Logout</a></td></tr>
                        </tbody>
                    </table></div>
                </div>
            </div>
            <div className="blue-div"></div>
            <div className="secard">
                <form onSubmit={handleSubmit}>
                    <p className="headi">Indian Institute of Technology Indore</p>
                    <hr />
                    <p className="changee">* Fill in the following details to help us verify you</p>
                    <div className="contai">

                        <div className="lefti">
                            <p className="changee">Role *</p>
                            <select onChange={handleChange} name="role" id="" className="boxx">
                                <option value="Select Role" defaultChecked>Select Role</option>
                                <option value="Current Student">Current Student</option>
                                <option value="Alumni (Past Student)">Alumni (Past Student)</option>
                                <option value="Staff/Faculty">Staff/Faculty</option>
                            </select>
                            <p className="changee">Course/Degree *</p>
                            <div className="boxx"><Select name="course" onChange={(option) => setformdata({ ...formdata, course: option.value })} options={courses} styles={style} /></div>
                            <p className="changee">Year of Graduation *</p>
                            <div className="boxx"><Select name="graduation" onChange={(option) => setformdata({ ...formdata, graduation: option.value })} options={graduateYears} styles={style} /></div>
                            <p className="changee">Location *</p>
                            <select onChange={handleChange} name="location" id="" className="boxx">
                                <option value="" defaultChecked hidden>Select Location</option>
                                <option value="Indore">Indore</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Rajasthan">Rajasthan</option>
                            </select>
                        </div>
                        <div className="righti">
                            <p className="changee">Division/Department *</p>
                            <div className="boxx"><Select name="department" onChange={(option) => setformdata({ ...formdata, department: option.value })} options={departments} styles={style} /></div>
                            <p className="changee">Year of Joining *</p>
                            <div className="boxx"><Select name="joining" onChange={(option) => setformdata({ ...formdata, joining: option.value })} options={joiningYears} styles={style} /></div>
                            <p className="changee">Gender *</p>
                            <select onChange={handleChange} name="gender" id="" className="boxx">
                                <option value="" defaultChecked hidden>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                            <p className="changee">DOB *</p>
                            <div className="boxx"><DatePicker name="dob" wrapperClassName="hellobro" format='yyyy-MM-dd' selected={formdata.dob} onChange={(date) => setformdata({ ...formdata, dob: date })} /></div>
                        </div>
                    </div>
                    <p className="lastline">* By clicking Join Alumni Network , you agree to our <b>privacy policy</b> and <b>terms & conditions.</b></p>
                    <button type="submit" className="btnnn">JOIN ALUMNI NETWORK</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;