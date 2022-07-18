import React from "react";
import { useNavigate } from "react-router-dom";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import "./css/jobopportunities.css";
import user from "./images/user.png";

function OpportunitiesIn() {
    const navigate = useNavigate();
    return (
        <div className="jobsin-container">
            <div className="add-story-container">
                <a href={void(0)} onClick={() => navigate("/opportunities")}>All jobs</a> {">"} Create
            </div>
            <div className="jobsin-card">
                <p style={{fontSize: "1.5em", padding: "2% 3% 1%"}}>Job Details <button className="btn btn-secondary float-end rounded-5 disabled">Closed</button></p>
                <hr />
                <div className="jobsin-info">
                    <p className="jobsin-paran"><InsertDriveFileIcon style={{fontSize: "1.1em", margin: "0 10px 5px 10px"}} />BASIC</p>
                    <div className="jobsin-left">
                        <ul>
                            <li><h5>Company Name</h5><p>Pint AI</p></li>
                            <li><h5>Salary</h5><p>INR 12-18 LPA</p></li>
                            <li><h5>Posted On</h5><p>Date: Jun 15, 2022</p></li>
                        </ul>
                    </div>
                    <div className="jobsin-left">
                        <ul>
                            <li><h5>Designation</h5><p>UI/UX Designer</p></li>
                            <li><h5>Location</h5><p>Bangalore</p></li>
                            <li><h5>Application Deadline</h5><p>Apply till: Jun 30, 2022</p></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="jobsin-info">
                    <p className="jobsin-paran"><InsertDriveFileIcon style={{fontSize: "1.1em", margin: "0 10px 5px 10px"}} />DESCRIPTION</p>
                    <p className="jobsin-darkg"><b>About the Role—UI/UX Designer</b></p>
                    <p className="jobsin-gray">As Pint AI's UI/UX designer, you will be the focal point between our backend technology
                        and the user-facing product. Your role will primarily focus on designing the complete
                        user experience workflow and interface of the platform. This may include understanding
                        the various data points and components made available by the tech. team, examining
                        our clients' needs and analysing the workflows of competitor platforms. Not to worry,
                        you will not be alone; all team members will always be ready to listen, critique and add
                        to your ideas. However, the role does place a major emphasis on your ability to take
                        ownership of the product's UI & UX. Additional responsibilities include gathering user
                        requirements, designing graphic elements and building complex components. You
                        should have experience with design software and wireframe tools.</p>
                    <p className="jobsin-darkg"><b>Who We Are Looking For</b></p>
                    <p className="jobsin-gray">3+ years of work experience in designing SaaS products, preferably dashboard-
                        centric.</p>
                    <ul className="jobsin-gray">
                        <li>Strong data visualisation skills; should be able to understand, analyse and visualise big data.</li>
                        <li>Experience in user-centred design (UCD), planning & prioritizing, conducting user research, user testing, A/B testing and rapid prototyping.</li>
                        <li>A good listener, receptive to feedback, and clear in articulating the impact of your design in verbal and visual presentation i.e. mood boards, brand, and product story, wireframes, visual mockups, clickable prototypes, design systems, etc.</li>
                        <li>Awareness of inclusive design principles and best practices.</li>
                        <li>Excellent handoff strategies, involving complex UI components/elements.</li>
                        <li>Advanced proficiency in software such as Figma, Sketch, and Adobe XD.</li>
                        <li>Open and comfortable with both solo and collaborative design processes.</li>
                        <li>A portfolio/website/blog showcasing the above skills.</li>
                    </ul>

                    <p className="jobsin-darkg"><b>Brownie Points For:</b></p>

                    <ul className="jobsin-gray">
                        <li>Knowledge of Adobe Illustrator, After Effects, and Premier Pro.</li>
                        <li>Knowledge of HTML/CSS; JavaScript.</li>
                        <li>Experience with various analytics tools like Mixpanel, Amplitude, New Relic, Localytics, etc.</li>
                        <li>Ability to work seamlessly with multiple stakeholders.</li>
                        <li>Self-motivation and willingness to take on tough problems.</li>
                    </ul>

                    <p style={{marginTop: "8%"}} className="jobsin-paran"><InsertDriveFileIcon style={{fontSize: "1.1em", margin: "0 10px 5px 10px"}} />About Pint AI</p>
                    <p className="jobsin-gray">Pint AI is a social intelligence platform for the early detection of risks and opportunities
                        for brands. The Internet has evolved, and with it, so has the need for more cautious and
                        nuanced listening and analysis tools. That is why we work with India's top companies to
                        identify manipulation and misinformation regarding their brands online. Our emphasis
                        on Machine Learning & Deep Learning methods allows brands to dive deep and
                        understand what, how and why conversations spread early enough to make a difference
                        and quickly derive actionable insights. Be it brand management, competitor analysis,
                        influencer identification or crisis management, we aim to make it as relaxing as chilling
                        with a pint.</p>
                </div>
                <hr />
                <div className="jobsin-info">
                    <p className="jobsin-paran"><PersonIcon style={{fontSize: "1.1em", margin: "0 10px 5px 10px"}} />POSTED BY</p>
                    <img className="jobsin-imag" src={user} alt="" />
                    <table className="jobsin-tab">
                        <tr>
                            <td style={{fontSize: "1.1em", fontWeight: "500"}}>Ashish Kumar Jatav</td>
                            <td style={{textAlign: "right"}}>Last Active:</td>
                        </tr>
                        <tr>
                        <td>Alumni, Class of 2015</td>
                        <td style={{textAlign: "right"}}>Jun 20, 2022</td>
                        </tr>
                    </table>
                </div>
                <hr />
                <div className="jobsin-info">
                    <p className="jobsin-paran"><MessageIcon style={{fontSize: "1.1em", margin: "0 10px 5px 10px"}} />CONTACT</p>
                    <p className="jobsin-foot">Want to get in touch with Ashish Kumar Jatav? Send a <a href={void(0)}>Direct Message</a> </p>

                </div>
            </div>
        </div>
    );
}

export default OpportunitiesIn;