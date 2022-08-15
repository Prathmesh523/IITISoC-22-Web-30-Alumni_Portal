import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./css/settings.css";
import { joiningYears, graduateYears, departments, courses } from "./Arrays";
import Axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { successlogin } from "../actions";

function Settings() {
    let userinfo = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formdata, setformdata] = useState({
        username: userinfo.user.username,
        email: String(userinfo.user.email),
        fname: String(userinfo.user.name.substring(0,userinfo.user.name.indexOf(" "))),
        lname: String(userinfo.user.name.substring(userinfo.user.name.indexOf(" ")+1)),
        mobile: String(userinfo.user.phone),
        course: "",
        department: "",
        joining: "",
        graduation: ""
    });
    const [enter, setenter] = useState("");
    useEffect(() => {
    },[userinfo]);
    async function handlesSubmit(e) {
        e.preventDefault();
        await Axios.post("http://localhost:8080/settings-data", formdata).then((response) => {
            dispatch(successlogin(response.data));
        });
        navigate("/profile");
    }   
    return (
        <div className="head-set">
            <div className="settings">
                <div className="title"><h4>Account Settings</h4></div>
                <div className="buttons-container">
                    <button className="buttons"><Link className="link-item" to="/profile">GO TO PROFILE</Link></button>
                    <button className="buttons"><Link className="link-item" to="/changepassword">CHANGE PASSWORD</Link></button>
                    <button className="buttons" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >DELETE ACCOUNT</button>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Delete Account</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Are you sure, you want to delete your account from this platform:
                                    This action is irreversible 💀
                                    <div>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="password" className="form-label" style={{ color: "Blue" }}>Confirm Your Password to proceed:</label>
                                                <input type="password" value={enter} onChange={(event) => { setenter(event.target.value) }} id="password" className="form-control shadow-none" name="newpassword" required />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Proceed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="settings-container">
                    <form onSubmit={handlesSubmit} className="row g-4">
                        <div className="col-md-6">
                            <label htmlFor="first_name" className="form-label">First Name</label>
                            <input type="text" name="fname" value={formdata.fname} onChange={(e) => setformdata({ ...formdata, [e.target.name]: e.target.value })} className="form-control shadow-none" id="first_name" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="last_name" className="form-label">Last Name</label>
                            <input type="text" name="lname" value={formdata.lname} onChange={(e) => setformdata({ ...formdata, [e.target.name]: e.target.value })} className="form-control shadow-none" id="last_name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" name="email" value={formdata.email} onChange={(e) => setformdata({ ...formdata, [e.target.name]: e.target.value })} className="form-control shadow-none" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">Mobile</label>
                            <PhoneInput
                                inputProps={{
                                    name: "mobileNumber",
                                    required: true,
                                }}
                                inputStyle={{ width: "100%" }}
                                country={"in"}
                                value={formdata.mobile}
                                onChange={value => setformdata({ ...formdata, mobile: value })}
                            />


                        </div>
                        <div className="col-md-6">
                            <label htmlFor="coursefield" className="form-label">Course/Degree</label>
                            <Select onChange={(option) => setformdata({ ...formdata, course: option.value })} options={courses} />

                        </div>
                        <div className="col-md-6">
                            <label htmlFor="depfield" className="form-label">Division/Department</label>
                            <Select onChange={(option) => setformdata({ ...formdata, department: option.value })} options={departments} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="joinyear" className="form-label">Year Of Joining</label>
                            <Select onChange={(option) => setformdata({ ...formdata, joining: option.value })} options={joiningYears} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="gradyear" className="form-label">Year Of Graduation</label>
                            <Select onChange={(option) => setformdata({ ...formdata, graduation: option.value })} options={graduateYears} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary float-end">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Settings;
