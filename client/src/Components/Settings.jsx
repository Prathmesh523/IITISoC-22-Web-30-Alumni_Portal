import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./css/settings.css";
import { joiningYears, graduateYears, departments, courses } from "./Arrays";
import { useForm, Controller } from "react-hook-form";

function Settings() {
    const [state, setState] = useState({ phone: "" });
    const { handleSubmit, control } = useForm();
    const [enter, setenter] = useState("");
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
                                                <label htmlFor="password" className="form-label" style={{color: "Blue"}}>Confirm Your Password to proceed:</label>
                                                <input type="password" value={enter} onChange={(event) => {setenter(event.target.value)}} id="password" className="form-control shadow-none" name="newpassword" required="required" />
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
                    <form onSubmit={handleSubmit(data => console.log(data))} className="row g-4">
                        <div className="col-md-6">
                            <label htmlFor="first_name" className="form-label">First Name</label>
                            <input type="text" className="form-control shadow-none" id="first_name" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="last_name" className="form-label">Last Name</label>
                            <input type="text" className="form-control shadow-none" id="last_name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control shadow-none" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">Mobile</label>
                            <Controller
                                render={(props) => (
                                    <PhoneInput
                                        inputProps={{
                                            name: "mobileNumber",
                                            required: true,
                                        }}
                                        inputStyle={{ width: "100%" }}
                                        country={"in"}
                                        value={state.phone}
                                        onChange={value => setState({ phone: value })}
                                    />
                                )}
                                name="mobileNumber"
                                control={control}
                                rules={{ required: true }}
                            />

                        </div>
                        <div className="col-md-6">
                            <label htmlFor="coursefield" className="form-label">Course/Degree</label>
                            <Controller
                                render={() => (
                                    <Select options={courses} />
                                )}
                                id="coursefield"
                                name="course"
                                control={control}
                                rules={{ required: true }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="depfield" className="form-label">Division/Department</label>
                            <Controller
                                render={() => (
                                    <Select options={departments} />
                                )}
                                id="depfield"
                                name="department"
                                control={control}
                                rules={{ required: true }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="joinyear" className="form-label">Year Of Joining</label>
                            <Controller
                                render={() => (
                                    <Select options={joiningYears} />
                                )}
                                id="joinyear"
                                name="joiningyear"
                                control={control}
                                rules={{ required: true }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="gradyear" className="form-label">Year Of Joining</label>
                            <Controller
                                render={() => (
                                    <Select options={graduateYears} />
                                )}
                                id="gradyear"
                                name="graduationyear"
                                control={control}
                                rules={{ required: true }}
                            />
                        </div>
                        <div className="col-12">
                            <input type="submit" className="btn btn-primary float-end" value="Update" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Settings;
