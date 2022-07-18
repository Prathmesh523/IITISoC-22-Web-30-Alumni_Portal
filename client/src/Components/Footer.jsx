import React from "react";

function Footer() {
    return (
        <div className="foot">
            <div className="foot-1">
                <a><div className="foot-fb">f</div></a>
                <a><div className="foot-fb">in</div></a>
            </div>
            <h3> <a href="/">HOME</a>  |  <a href={void(0)}>ABOUT</a>  |  <a href="/contactus">CONTACT</a>  |  <a href={void(0)}>SITEMAP</a>  |  <a href="/terms">TERMS</a>  |  <a href="/Privacypolicy">PRIVACY</a></h3>
        </div>
    );
}

export default Footer;