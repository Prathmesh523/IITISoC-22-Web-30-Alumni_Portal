import React, { useState } from "react";
import "./css/login.css";
import SendIcon from '@mui/icons-material/Send';
import Logo from "./images/logo.jpg";

function Login() {
    const [emaillogin, setemaillogin] = useState(false);
    const [signup, setsignup] = useState(true);
    return (
        <div class="loginMain">
            <div class="loginBlue"> Sign Up/ Login </div>
            <div class="LoginBelow">
                <div class="LoginForm" style={{height: signup?"450px":"410px"}}>

                    {/* <!--Right Panel--> */}

                    <div class="loginLeft">
                        <div class="LoginLeftImg">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div class="LoginLeftText">
                            <p id="headText">Indian Institute of Technology Indore</p>
                            <p id="subText">Sign up or log in to stay connected with your community</p>
                        </div>
                    </div>

                    {/* <!--Right Panel-->

                    <!--Right Panel 1, main page--> */}
                    <div class="loginRight">
                        <div class="loginRightMain" style={{ display: (!emaillogin && !signup) ? "block" : "none" }} id="login1">
                            <p id="headTextRight">Choose any one of the following to Signup/Login</p>
                            <button class="loginRightButton" id="rightbtn1">Connect with Facebook</button>
                            <button class="loginRightButton" id="rightbtn2">Connect with Google</button>
                            <button class="loginRightButton" id="rightbtn3">Connect with Linkedin</button>
                            <div class="ORclass">
                                <hr class="ORhr" />
                                <span class="ORclassMain">OR</span>
                                <hr class="ORhr" />
                            </div>
                            <form method="POST" action="/" id="Regform">
                                <div class="RightFirstForm">
                                    <div class="formitem">
                                        <label for="mailitem" class="formlabel">Enter Your Email</label>
                                        <input type="email" class="email" id="mailitem" placeholder="Enter Your Email" />
                                    </div>
                                    <div class="formitem2">
                                        <button type="button" onClick={() => setemaillogin(true)} class="nextbtn" id="nextBtnId" name="update_pass"><SendIcon /></button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div style={{display: (signup && !emaillogin)? "block" : "none"}} class="loginRightMain2" id="login2">
                            <p id="headTextRight">SignUp</p>
                            <form method="POST" action="/" id="Regform">
                                <div class="RightFirstForm">
                                    <div class="formitem1">
                                        <label for="mailitem" class="formlabel">First Name</label>
                                        <input type="text" class="email" id="mailitem" placeholder="Enter First Name" />
                                    </div>
                                    <div class="formitem12">
                                        <label for="mailitem" class="formlabel">Last Name</label>
                                        <input type="text" class="email" id="mailitem" placeholder="Enter Last Name" />
                                    </div>
                                    <div class="formitem3">
                                        <label for="mailitem" class="formlabel">Enter Your Email</label>
                                        <input type="email" class="email" id="mailitem" placeholder="Enter Your Email" />
                                    </div>
                                    <div class="formitem3">
                                        <label for="mailitem" class="formlabel">Enter Password</label>
                                        <input type="password" class="email" id="mailitem" placeholder="Enter Password" />
                                    </div>
                                    <div class="formitem3">
                                        <label for="mailitem" class="formlabel">Confirm Password</label>
                                        <input type="password" class="email" id="mailitem" placeholder="Reenter Password" />
                                    </div>
                                    <p id="subText2">*By clicking Sign Up, you agree to our privacy policy and terms & conditions.</p>
                                    <div class="formitem4">
                                        <button type="button" onClick={() => setsignup(false)} class="btn1" id="backbtn">BACK</button>
                                        <button class="btn1" id="signupbtn">SIGN UP</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="loginRightMain" style={{ display: (!signup && emaillogin) ? "block" : "none" }} id="login3">
                            <p id="headTextRight">E-mail Login</p>
                            <form method="POST" action="/" id="Regform">
                                <div class="RightFirstForm">
                                    <div class="formitem33">
                                        <label for="mailitem" class="formlabel">Email</label>
                                        <input type="email" class="email" id="mailitem" placeholder="Enter Your Email" />
                                    </div>
                                    <div class="formitem3">
                                        <label for="mailitem" class="formlabel">Password</label>
                                        <input type="Password" class="email" id="mailitem"
                                            placeholder="Enter Your Password" />
                                    </div>
                                    <div class="formitem4">
                                        <button type="button" class="btn2" id="backbtn" onClick={() => setemaillogin(false)}>BACK</button>
                                        <button class="btn2" id="loginbtn">LOG IN</button>
                                    </div>
                                    <button class="forgetPart" id="forgetpass">Forget Password?</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;