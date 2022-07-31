import React from "react";
import "./css/email.css";

function Email() {
    return (
        <div className="email_body">

            {/* <button className="myBtn">Open Modal</button>


            <div id="myModal" className="modal">


                <div className="modal_content">
                    <span className="close">&times;</span>
                    <p className="title_modal">Select list</p>
                    <div className="email_11">
                        <form action="#">
                            <div>
                                <p className="ip11">
                                    <label for="send_from">Search by Role</label>
                                    <br />
                                    <select name="send_from" className="send_from">
                                        <option value="#"> Select Role</option>
                                    </select>
                                </p>
                                <p className="ip11">
                                    <select name="send_from" className="send_from">
                                        <option value="#"> Select a Year of Joining</option>
                                    </select>
                                </p>
                                <p className="ip11">
                                    <select name="send_from" className="send_from">
                                        <option value="#"> Select a Year of Graduation</option>
                                    </select>
                                </p>
                                <p className="ip11">
                                    <select name="send_from" className="send_from">
                                        <option value="#"> Select Division/Department</option>
                                    </select>
                                </p>
                                <p className="ip11">
                                    <select name="send_from" className="send_from">
                                        <option value="#"> Select Course/Degree</option>
                                    </select>
                                </p>
                                <p className="ip11">
                                    <select name="send_from" className="send_from">
                                        <option value="#"> Location</option>
                                    </select>
                                </p>
                                <p className="ip11">
                                    <select name="send_from" className="send_from">
                                        <option value="#"> Company Name</option>
                                    </select>
                                </p>
                                <p className="ip11">
                                    <select name="send_from" className="send_from">
                                        <option value="#"> Select Gender</option>
                                    </select>
                                </p>
                            </div>
                            <button className="submit_button1" type="submit">Submit</button>
                        </form>
                    </div>
                </div>

            </div> */}


            <div className="email_0">
                <p className="email_title">Send Mail</p>
                <div className="email_1">
                    <form action="#">
                        <div>
                            <p className="ip0">
                                Mail to :
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