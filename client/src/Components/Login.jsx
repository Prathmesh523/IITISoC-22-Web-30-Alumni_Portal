import React, { useEffect, useRef, useState } from "react";
import "./css/login.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import validator from 'validator';
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from "./images/logo.jpg";
import Axios from "axios";
import { Tooltip } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { startlogin, successlogin, failedlogin } from "../actions";

function Login() {
    const userinfo = useSelector(state => state.user);
    const dispatch = useDispatch();
    const initialValue = useRef(true);
    const [showpassword, setshowpassword] = useState(false);
    const [showcpassword, setshowcpassword] = useState(false);
    const [tooltipm, settooltipm] = useState("Minimum Length of Password is 8 and It should have atleast 1-lowercase, 1-uppercase, 1-number and 1-special character.");
    const [signupdata, setsignupdata] = useState({
        email: "",
        fname: "",
        lname: "",
        password: "",
        confirmpassword: "",
        userpass: ""
    });
    const [curpage, setcurpage] = useState(true);
    const [login, setlogin] = useState(false);
    const [signup, setsignup] = useState(false);
    const navigate = useNavigate();

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const checkUser = (e) => {
        e.preventDefault();
        if (!isValidEmail(signupdata.email)) {
            alert("Invalid Email!!!");
        } else {
            Axios.post("http://localhost:8080/check-email",
                signupdata
            ).then((response) => {
                if (response.data === "Not Found") {
                    setsignup(true);
                    setcurpage(false);
                } else {
                    setlogin(true);
                    setcurpage(false);
                }
            });
        }
    };

    function handleCheck(e) {
        if (e.target.name === "password") {
            const value = e.target.value;
            if (value === "") {
                settooltipm("Minimum Length of Password is 8 and It should have atleast 1-lowercase, 1-uppercase, 1-number and 1-special character.")
            } else {
                if (validator.isStrongPassword(value, {
                    minLength: 8, minLowercase: 1,
                    minUppercase: 1, minNumbers: 1, minSymbols: 1
                })) {
                    settooltipm("Strong Password");
                } else {
                    settooltipm("Not Acceptible Password");
                }
            }
        }
        setsignupdata({
            ...signupdata,
            [e.target.name]: e.target.value
        });
    };

    function signuphandle(e) {
        e.preventDefault();
        if (signupdata.password !== signupdata.confirmpassword) {
            alert("Password Does Not Match!!!");
        } else if (tooltipm !== "Strong Password") {
            alert("Please enter password according to validation!")
        } else {
            Axios.post("http://localhost:8080/add-user",
                signupdata
            ).then((response) => {
                setlogin(true);
                setsignup(false);
            });
        }
    };

    useEffect(() => {
        if (userinfo.user) {
            if (!userinfo.user.department) {
                navigate("/signup");
            } else {
                navigate("/profile");
            }
        }
    }, [userinfo]);

    function loginhandle(e) {
        e.preventDefault();
        const user = { username: signupdata.email, password: signupdata.userpass };

        dispatch(startlogin());
        try {
            Axios.post("http://localhost:8080/login-user", user).then((response) => {
                (response.data === "Wrong") ? (alert("Please check your password!!!")) : dispatch(successlogin(response.data));
            });
        } catch (error) {
            dispatch(failedlogin(error));
            console.log(error);
        }
    };
    return (
        <div className="loginMain">
            <div className="loginBlue"> Sign Up/ Login </div>
            <div className="LoginBelow">
                <div className="LoginForm" style={{ height: signup ? "450px" : "410px" }}>

                    {/* <!--Right Panel--> */}

                    <div className="loginLeft">
                        <div className="LoginLeftImg">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="LoginLeftText">
                            <p id="headText">Indian Institute of Technology Indore</p>
                            <p id="subText">Sign up or log in to stay connected with your community</p>
                        </div>
                    </div>

                    {/* <!--Right Panel-->

                    <!--Right Panel 1, main page--> */}
                    <div className="loginRight">
                        <div className="loginRightMain" style={{ display: curpage ? "block" : "none" }} id="login1">
                            <p id="headTextRight">Choose any one of the following to Signup/Login</p>
                            <button className="loginRightButton" id="rightbtn1">Connect with Facebook</button>
                            <button className="loginRightButton" id="rightbtn2">Connect with Google</button>
                            <button className="loginRightButton" id="rightbtn3">Connect with Linkedin</button>
                            <div className="ORclass">
                                <hr className="ORhr" />
                                <span className="ORclassMain">OR</span>
                                <hr className="ORhr" />
                            </div>
                            <form onSubmit={checkUser} id="Regform">
                                <div className="RightFirstForm">
                                    <div className="formitem">
                                        <label htmlFor="mailitem" className="formlabel">Enter Your Email</label>
                                        <input type="email" onChange={handleCheck} value={signupdata.email} name="email" className="email" id="mailitem" placeholder="Enter Your Email" required />
                                    </div>
                                    <div className="formitem2">
                                        <button type="submit" className="nextbtn" id="nextBtnId" name="update_pass"><SendIcon /></button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div style={{ display: signup ? "block" : "none" }} className="loginRightMain2" id="login2">
                            <p id="headTextRight">SignUp</p>
                            <form id="Regform" onSubmit={signuphandle}>
                                <div className="RightFirstForm">
                                    <div className="formitem1">
                                        <label htmlFor="mailitem" className="formlabel">First Name</label>
                                        <input type="text" onChange={handleCheck} value={signupdata.fname} name="fname" className="email" id="mailitem" placeholder="Enter First Name" required />
                                    </div>
                                    <div className="formitem12">
                                        <label htmlFor="mailitem" className="formlabel">Last Name</label>
                                        <input type="text" onChange={handleCheck} value={signupdata.lname} name="lname" className="email" id="mailitem" placeholder="Enter Last Name" required />
                                    </div>
                                    <div className="formitem3">
                                        <label htmlFor="mailitem" className="formlabel">Enter Your Email</label>
                                        <input type="email" className="email" value={signupdata.email} id="mailitem" placeholder="Enter Your Email" disabled />
                                    </div>
                                    <div className="formitem3">
                                        <label htmlFor="mailitem" className="formlabel">Enter Password</label>
                                        <Tooltip title={tooltipm}>
                                            <div style={{ display: "flex" }}>
                                                <input style={{ width: "94%" }} type={showpassword ? "text" : "password"} onChange={handleCheck} value={signupdata.password} name="password" className="email" id="mailitem" placeholder="Enter Password" required /><div onClick={() => setshowpassword(!showpassword)}>{showpassword ? <VisibilityOffIcon style={{ fontSize: "20px", marginTop: "10px", color: "#8eadac" }} /> : <VisibilityIcon style={{ fontSize: "20px", marginTop: "10px", color: "#8eadac" }} />}</div>
                                            </div>
                                        </Tooltip>
                                    </div>
                                    <div className="formitem3">
                                        <label htmlFor="mailitem" className="formlabel">Confirm Password</label>
                                        <div style={{ display: "flex" }}><input style={{ width: "94%" }} type={showcpassword ? "text" : "password"} onChange={handleCheck} value={signupdata.confirmpassword} name="confirmpassword" className="email" id="mailitem" placeholder="Re-enter Password" required /><div onClick={() => setshowcpassword(!showcpassword)}>{showcpassword ? <VisibilityOffIcon style={{ fontSize: "20px", marginTop: "10px", color: "#8eadac" }} /> : <VisibilityIcon style={{ fontSize: "20px", marginTop: "10px", color: "#8eadac" }} />}</div></div>
                                    </div>
                                    <p id="subText2">*By clicking Sign Up, you agree to our privacy policy and terms & conditions.</p>
                                    <div className="formitem4">
                                        <button type="button" onClick={() => { setcurpage(true); setsignup(false); }} className="btn1" id="backbtn">BACK</button>
                                        <button type="submit" className="btn1" id="signupbtn">SIGN UP</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="loginRightMain" style={{ display: login ? "block" : "none" }} id="login3">
                            <p id="headTextRight">E-mail Login</p>
                            <form onSubmit={loginhandle} id="Regform">
                                <div className="RightFirstForm">
                                    <div className="formitem33">
                                        <label htmlFor="mailitem" className="formlabel">Email</label>
                                        <input type="email" value={signupdata.email} className="email" id="mailitem" placeholder="Enter Your Email" required />
                                    </div>
                                    <div className="formitem3">
                                        <label htmlFor="mailitem" className="formlabel">Password</label>
                                        <input type="Password" onChange={handleCheck} name="userpass" value={signupdata.userpass} className="email" id="mailitem"
                                            placeholder="Enter Your Password" required />
                                    </div>
                                    <div className="formitem4">
                                        <button type="button" onClick={() => { setcurpage(true); setlogin(false); }} className="btn2" id="backbtn">BACK</button>
                                        <button type="submit" className="btn2" id="loginbtn">LOG IN</button>
                                    </div>
                                    <button className="forgetPart" id="forgetpass">Forget Password?</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Login;