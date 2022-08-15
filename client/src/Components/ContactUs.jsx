import React from "react";
import "./css/contactus.css";
import DAR from "./images/DAR.jpg";
import DPPC from "./images/DPPC.jpg";
import SS from "./images/SS.jpg";
import SK from "./images/SK.jpg";
import SWI from "./images/SWI.jpg";
import GG from "./images/GG.jpg";
import BG from "./images/BG.jpg";
import PY from "./images/PY.jpg";
import IP from "./images/IP.jpg";
import AM from "./images/AM.jpg";

function ContactUs() {
    return (
        <div className="container">
            <h1>Our Team</h1>
            <div className="top">
                <div className="imag">
                    <img className="image" src={DAR} alt="" />
                        <p className="name">Dr. Abhishek Rajput</p>
                        <p className="posi">Head - Alumni Affairs</p>
                </div>
                <div className="imag">
                    <img className="image" src={DPPC} alt="" />
                        <p className="name">Dr. Partha Pratim Chattaraj</p>
                        <p className="posi">Alumni and Industry Liasoning Officer</p>
                </div>
            </div>

            <h1>Alumni Cell members</h1>
            <div className="bottom">
                <div className="imag">
                    <img className="image" src={SS} alt="" />
                        <p className="name">S Shrevesh</p>
                        <p className="posi">General Secretary- Counselling, Outreach and Alumni</p>
                </div>
                <div className="imag">
                    <img className="image" src={SK} alt="" />
                        <p className="name">Sejal Kotian</p>
                        <p className="posi">Student Head</p>
                </div>
                <div className="imag">
                    <img className="image" src={SWI} alt="" />
                        <p className="name">Safdar Wahid Inamdar</p>
                        <p className="posi">Head, Content Writing</p>
                </div>
                <div className="imag">
                    <img className="image" src={GG} alt="" />
                        <p className="name">Garvit Gupta</p>
                        <p className="posi">Logistics and Operations</p>
                </div>
                <div className="imag">
                    <img className="image" src={BG} alt="" />
                        <p className="name">Bhavya Gupta</p>
                        <p className="posi">Logistics and Operations</p>
                </div>
                <div className="imag">
                    <img className="image" src={PY} alt="" />
                        <p className="name">Piyush Yadav</p>
                        <p className="posi">Logistics and Operations</p>
                </div>
                <div className="imag">
                    <img className="image" src={IP} alt="" />
                        <p className="name">Isha Pathak</p>
                        <p className="posi">Head, Design and Social Media</p>
                </div>
                <div className="imag">
                    <img className="image" src={AM} alt="" />
                        <p className="name">Ayush Maheshwari</p>
                        <p className="posi">Social Media Team</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;