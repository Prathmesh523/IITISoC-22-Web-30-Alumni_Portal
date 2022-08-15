import { height } from "@mui/system";
import React from "react";
import "./css/email.css";

function Email() {
    return (
        <div className="email_body">

            <div style={{float: "left"}} class="adminLeft">
                <div class="adminLBox">
                    <a href="/dashboard"><i class="fa-solid fa-gauge"></i> Dashboard </a>
                </div>
                <div class="adminLBox">
                    <a href="#"><i class="fa-solid fa-gear"></i> Manage Items </a>
                </div>
                <div class="adminLBox">
                    <a href="#"><i class="fa-solid fa-tasks"></i> Manage Content </a>
                </div>
                <div class="adminLBox">
                    <a href="#"><i class="fa-solid fa-envelope"></i> Mailing </a>
                </div>
                <div class="adminLBox">
                    <a href="#"><i class="fa-solid fa-wrench"></i> Portal Setting </a>
                </div>
                <div class="adminLBox">
                    <a href="#"><i class="fa-solid fa-sitemap"></i> Manage Admins </a>
                </div>
            </div>

            <div className="email_0">
                <p className="email_title">Send Mail</p>
                <div className="email_1">
                    <form action="#">
                        <div>
                            <p className="ip0">
                                <span class="ip01">Mail to :</span> 
                                <input type="radio" name="mail_to" id="all_users" value="all_users" />
                                <label for="all_users">All Users</label>
                                <input type="radio" name="mail_to" id="specific_users" value="specific_users" />
                                <label for="specific_users">Specific Users</label>
                            </p>
                            <p>
                                <p className="ip1">
                                    <label for="sender_name">Sender Name</label>
                                    <br />
                                    <input type="text" name="sender_name" className="sender_name" />
                                </p>
                            </p>
                            <p className="ip2">
                                <p className="ip2_1">
                                    <label for="send_from">Send from</label>
                                    <br />
                                    <select name="send_from" className="send_from">
                                        <option value="#"> Please choose an option</option>
                                    </select>
                                </p>
                                <p className="ip2_2">
                                    <label for="receive">Receive replies on</label>
                                    <br />
                                    <select name="receive" className="receive">
                                        <option value="#"> Please choose an option</option>
                                    </select>
                                </p>
                            </p>
                            <p className="ip3">
                                <label for="subject">Subject</label>
                                <br />
                                <input type="text" name="subject" className="subject" placeholder="Subject" />
                            </p>
                            <p className="ip4">
                                <textarea className="email_text" rows="8" cols="120" name="email_text" placeholder="Type you text here"></textarea>
                            </p>
                            <p className="ip5">
                                <label for="attachment">Add Attachment:</label>
                                <input type="file" className="attachment" name="attachment" placeholder="Attachment" multiple />
                            </p>
                        </div>
                        <button className="submit_button" type="submit">Send</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Email;