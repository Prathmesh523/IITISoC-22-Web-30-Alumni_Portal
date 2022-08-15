import React, { useEffect } from "react";
import "./css/home.css";
import Footer from "./Footer";
import Carousel from 'better-react-carousel';
import FacebookIcon from '@mui/icons-material/Facebook';
import slideshow1_1 from "./images/home/slideshow1_1.jpg";
import slideshow2_1 from "./images/home/slideshow2_1.jpg";
import slideshow3_1 from "./images/home/slideshow3_1.jpg";
import card2_1 from "./images/home/card2_1.png";
import card2_2 from "./images/home/card2_2.png";
import card2_3 from "./images/home/card2_3.png";
import card2_4 from "./images/home/card2_4.png";
import card5_1 from "./images/home/card5_1.jpg";
import card5_2 from "./images/home/card5_2.jpg";
import card5_3 from "./images/home/card5_3.jpg";
import card1_1 from "./images/home/card1_1.png";
import card1_2 from "./images/home/card1_2.png";
import card1_3 from "./images/home/card1_3.png";
import card1_4 from "./images/home/card1_4.png";
import dir_pic from "./images/home/dir_pic.jpg";
import card4_1 from "./images/home/card4_1.png";
import card4_2 from "./images/home/card4_2.png";
import card4_3 from "./images/home/card4_3.png";
import card4_4 from "./images/home/card4_4.png";

function Home() {
    return (
        <div>
            <Carousel autoplay={2000} cols={1} rows={1} gap={0} loop showDots >
                <Carousel.Item>
                    <img alt="" width="100%" src={slideshow1_1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="" width="100%" src={slideshow2_1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="" width="100%" src={slideshow3_1} />
                </Carousel.Item>
            </Carousel>
            <div className="cards2" >
                <div className="heading2">
                    <h2 style={{ fontSize: "24px" }}>IIT INDORE ALUMNI PLATFORM</h2>
                </div>
                <div className="card2" style={{ marginLeft: "10%" }}>
                    <div className="pic2">
                        <img alt="" src={card2_1} />
                    </div>
                    <div className="title2">
                        <h3>VOLUNTEER</h3>
                    </div>
                    <div className="text2">
                        <p>Volunteer for Alumni Meet & contribute towards it a huge success</p>
                    </div>
                </div>
                <div className="card2">
                    <div className="pic2">
                        <img alt="" src={card2_2} />
                    </div>
                    <div className="title2">
                        <h3>VOLUNTEER</h3>
                    </div>
                    <div className="text2">
                        <p>Volunteer for Alumni Meet & contribute towards it a huge success</p>
                    </div>
                </div>
                <div className="card2">
                    <div className="pic2">
                        <img alt="" src={card2_3} />
                    </div>
                    <div className="title2">
                        <h3>INVITE</h3>
                    </div>
                    <div className="text2">
                        <p>Invite your friends to join the Alumni Portal & register for Alumni Meet</p>
                    </div>
                </div>
                <div className="card2">
                    <div className="pic2">
                        <img alt="" src={card2_4} />
                    </div>
                    <div className="title2">
                        <h3>GET IN TOUCH</h3>
                    </div>
                    <div className="text2">
                        <p>Contact us for more details about the program<br /></p>
                    </div>
                </div>
            </div>

            <div className="cards5">
                <p className="heading5">Alumni Updates</p>
                <div className="card5" style={{ width: "23rem", display: "inline-block", marginLeft: "200px" }}>
                    <img className="card-img-top" src={card5_1} alt="Card image cap" style={{ height: "250px" }} />
                    <div className="area5">
                        <p className="title5"><a  href={void(0)}>Gaurav Parchani's Dozee Healthtech Goes Global! </a></p>
                        <p className="text5">Our alumnus, Mr Gaurav Parchani (BTech ME 2013) had come up with a startup, Dozee which is now India's first contactless remote patient monitoring device, that...</p>
                        <a  href={void(0)} className="btn btn-light">Read more</a>
                    </div>
                </div>
                <div className="card5" style={{ width: "23rem", display: "inline-block", marginLeft: "9px" }}>
                    <img className="card-img-top" src={card5_2} alt="Card image cap" style={{ height: "250px" }} />
                    <div className="area5">
                        <p className="title5"><a  href={void(0)}>Alumni Magazine 2019 Decennial celebration Edition</a></p>
                        <p className="text5">Our alumnus, Mr Gaurav Parchani (BTech ME 2013) had come up with a startup, Dozee which is now India's first contactless remote patient monitoring device, that...</p>
                        <a  href={void(0)} className="btn btn-light">Read more</a>
                    </div>
                </div>
                <div className="card5" style={{ width: "23rem", display: "inline-block", marginLeft: "9px" }}>
                    <img className="card-img-top" src={card5_3} alt="Card image cap" style={{ height: "250px" }} />
                    <div className="area5">
                        <p className="title5"><a  href={void(0)}>INSTITUTE INSIGHTS THE TECHNOBER</a></p>
                        <p className="text5">Our alumnus, Mr Gaurav Parchani (BTech ME 2013) had come up with a startup, Dozee which is now India's first contactless remote patient monitoring device, that...</p>
                        <a  href={void(0)} className="btn btn-light">Read more</a>
                    </div>
                </div>
            </div>

            <div className="cards1" >
                <div className="heading1">
                    <h2 style={{ fontSize: "24px" }}>UPCOMING EVENT - MAGNUM OPUS 2020</h2>
                    <p style={{ fontSize: "14px" }}>We are all set to organize Magnum Opus 2020, the third edition of Alumni Meet on 8th and 9th Feb 2020. We are organizing a two-day event where the second day is an informal Reunion for batch 2009 and 2010 celebrating the decennial anniversary of the batches.</p>
                </div>
                <div className="card1" style={{ marginLeft: "10%" }}>
                    <div className="pic1">
                        <img alt="" src={card1_1} />
                    </div>
                    <div className="title1">
                        <h3>REGISTER NOW!</h3>
                    </div>
                    <div className="text1">
                        <p>Register for Magnum Opus & get all the updates about the meet</p>
                    </div>
                </div>
                <div className="card1">
                    <div className="pic1">
                        <img alt="" src={card1_2} />
                    </div>
                    <div className="title1">
                        <h3>VOLUNTEER</h3>
                    </div>
                    <div className="text1">
                        <p>Volunteer for Alumni Meet & contribute towards it a huge success</p>
                    </div>
                </div>
                <div className="card1">
                    <div className="pic1">
                        <img alt="" src={card1_3} />
                    </div>
                    <div className="title1">
                        <h3>INVITE</h3>
                    </div>
                    <div className="text1">
                        <p>Invite your friends to join the Alumni Portal & register for Alumni Meet</p>
                    </div>
                </div>
                <div className="card1">
                    <div className="pic1">
                        <img alt="" src={card1_4} />
                    </div>
                    <div className="title1">
                        <h3>GET IN TOUCH</h3>
                    </div>
                    <div className="text1">
                        <p>Contact us for more details about the program<br /></p>
                    </div>
                </div>
            </div>

            <div className="Message" >
                <h3 style={{ fontSize: "27px" }}>Message from Director</h3>
                <img alt="" src={dir_pic} style={{ borderRadius: "100%", paddingBottom: "10px" }} />
                <h4 style={{ fontSize: "22px" }}>Suhas Joshi</h4>
                <p style={{ fontSize: "16px" }}>World over, the most acclaimed universities and institutions boast of having a strong and vibrant alumnus base.<br />
                    The alumni network of IIT Indore forms a very important and significant element to propel the institute towards excellence in all spheres of science, technology, humanity and social sciences, and in producing leaders.<br />
                    IIT Indore has been fortunate, right from its first graduating batch, to have a robust institute- alumni network, which we must all nurture and see its exponential growth in all dimensions.
                    With the very best wishes</p>

            </div>


            <div className="cards4" >

                <div className="heading4">
                    <h2 style={{ fontSize: "24px" }}>Initiatives & Activities</h2>
                </div>
                <div className="card4" style={{ marginLeft: "170px" }}>
                    <div className="pic4">
                        <img alt="" src={card4_1} />
                    </div>
                    <div className="title4">
                        <h3><b>MAGNUM OPUS 2017</b></h3>
                        <p >The Alumni Cell at IIT Indore organized the institutes first ever Alumni Meet Magnum Opus on the 28th of December 2017 at the newly constructed campus at Simrol.</p>
                        <a  href={void(0)}>View More</a>
                    </div>
                </div>
                <div className="card4" >
                    <div className="pic4">
                        <img alt="" src={card4_2} />
                    </div>
                    <div className="title4">
                        <h3><b>FIRST ALUMNI MAGAZINE</b></h3>
                        <p >This magazine was launched on the joyous occasion of Magnum Opus, the first alumni meet of IIT Indore, by Prof. Pradeep Mathur, Director, in the presence of alumni from first three graduating batches, faculty members and students at the institute’s new-constructed campus at Simrol.</p>
                        <a  href={void(0)}>View More</a>
                    </div>
                </div>
                <div className="card4" style={{ marginLeft: "170px" }}>
                    <div className="pic4">
                        <img alt="" src={card4_3} />
                    </div>
                    <div className="title4">
                        <h3><b>ALUMNI STORIES</b></h3>
                        <p >Compling Stories by alumni, generating statistics about their current locations, profiles and positions.</p>
                        <a  href={void(0)}>View More</a>
                    </div>
                </div>
                <div className="card4" >
                    <div className="pic4">
                        <img alt="" src={card4_4} />
                    </div>
                    <div className="title4">
                        <h3><b>YEARBOOK</b></h3>
                        <p >We are all set to launch our First Yearbook which will take you to back to those never-to-return memories</p>
                        <a  href={void(0)}>View More</a>
                    </div>
                </div>


                <Footer />
            </div>
        </div>
    );
}

export default Home;