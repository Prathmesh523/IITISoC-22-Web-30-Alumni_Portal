import React from "react";
import KeyIcon from '@mui/icons-material/Key';

function Changepassword() {
    return (
        <div>
            <div className="black-box">Change Password</div>
            <div className="working-div">
                <div className="signup-form">
                    <form action="/examples/actions/confirmation.php" method="post">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><KeyIcon sx={{ my: "10px" }} /></span>
                                <input type="password" className="form-control shadow-none" name="oldpassword" placeholder="Enter Old Password" required="required" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><KeyIcon sx={{ my: "10px" }} /></span>
                                <input type="password" className="form-control shadow-none" name="newpassword" placeholder="Enter new Password" required="required" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-primary float-end">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Changepassword;