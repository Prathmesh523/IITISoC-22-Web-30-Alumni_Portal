import React from "react";

function Footer() {
    return (
        <div className="foot">
            <div className="foot-1">
                <a><div className="foot-fb">f</div></a>
                <a><div className="foot-fb">in</div></a>
            </div>
            <h3> <a style={{paddingRight: "20px"}} href="/">HOME</a>   |  <a style={{padding: "0 20px"}} href="/contactus">CONTACT</a>  |  <a style={{padding: "0 20px"}} href="/terms">TERMS</a>  |  <a style={{padding: "0 20px"}} href="/Privacypolicy">PRIVACY</a></h3>
        </div>
    );
}

export default Footer;