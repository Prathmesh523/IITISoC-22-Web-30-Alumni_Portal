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
    const [viagradjoin, setViagradjoin] = useState(graduateYears);
    const [joinyears, setJoinyears] = useState(joiningYears);
    const [enter, setenter] = useState("");
    return (
        <div className="head-set">
            <div className="settings">
                <div className="title"><h4>Account Settings
                </h4></div>
                <div className="buttons-container">
                    <button className="buttons">GO TO PROFILE</button>
                    <button className="buttons"><Link className="link-item" to="/changepassword">CHANGE PASSWORD</Link></button>
                    <button className="buttons" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >DELETE ACCOUNT</button>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                                <label for="password" className="form-label" style={{color: "Blue"}}>Confirm Your Password to proceed:</label>
                                                <input type="password" onChange={(event) => {setenter(event.target.value)}} id="password" className="form-control" name="newpassword" required="required" />
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
                    <form onSubmit={handleSubmit(data => console.log(data))} class="row g-4">
                        <div class="col-md-6">
                            <label for="first_name" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="first_name" required />
                        </div>
                        <div class="col-md-6">
                            <label for="last_name" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="last_name" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="phone" class="form-label">Mobile</label>
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
                        <div class="col-md-6">
                            <label for="coursefield" class="form-label">Course/Degree</label>
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
                        <div class="col-md-6">
                            <label for="depfield" class="form-label">Division/Department</label>
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
                        <div class="col-md-6">
                            <label for="joinyear" class="form-label">Year Of Joining</label>
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
                        <div class="col-md-6">
                            <label for="gradyear" class="form-label">Year Of Joining</label>
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
                        <div class="col-12">
                            <input type="submit" class="btn btn-primary float-end" value="Update" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Settings;
