import React, { useState } from "react";
import "./css/directory.css";
import Select from "react-select";
import Magnum from "./images/magnum opus 2022.jpg";
import DirectoryCard from "./DirectoryCard";
import useWindowSize from "./WindowSize";
import SearchIcon from '@mui/icons-material/Search';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';

const joiningYears = [
    { label: '2009', value: '2009' }, { label: '2010', value: '2010' }, { label: '2011', value: '2011' },
    { label: '2012', value: '2012' }, { label: '2013', value: '2013' }, { label: '2014', value: '2014' },
    { label: '2015', value: '2015' }, { label: '2016', value: '2016' }, { label: '2017', value: '2017' },
    { label: '2018', value: '2018' }, { label: '2019', value: '2019' }, { label: '2020', value: '2020' },
    { label: '2021', value: '2021' }
];
const graduateYears = [
    { label: '2009', value: '2009' }, { label: '2010', value: '2010' }, { label: '2011', value: '2011' },
    { label: '2012', value: '2012' }, { label: '2013', value: '2013' }, { label: '2014', value: '2014' },
    { label: '2015', value: '2015' }, { label: '2016', value: '2016' }, { label: '2017', value: '2017' },
    { label: '2018', value: '2018' }, { label: '2019', value: '2019' }, { label: '2020', value: '2020' },
    { label: '2021', value: '2021' }, { label: '2022', value: '2022' }, { label: '2023', value: '2023' },
    { label: '2024', value: '2024' }, { label: '2025', value: '2025' }, { label: '2026', value: '2026' }
];
const departments = [
    { label: 'Computer Science Engineering', value: 'Computer Science Engineering'},
    { label: 'Electrical Engineering', value: 'Electrical Engineering'},
    { label: 'Mechanical Engineering', value: 'Mechanical Engineering'},
    { label: 'Civil Engineering', value: 'Civil Engineering'},
    { label: 'Chemistry', value: 'Chemistry'},
    { label: 'Metallurgy Engineering and Materials Science', value: 'Metallurgy Engineering and Materials Science'},
    { label: 'VLSI Design and Nanoelectronics', value: 'VLSI Design and Nanoelectronics'},
    { label: 'Biosciences and Bioengineering', value: 'Biosciences and Bioengineering'},
    { label: 'Biosciences and Biomedical Engineering', value: 'Biosciences and Biomedical Engineering'},
    { label: 'HSS', value: 'HSS'},
    { label: 'Production and Industrial Engineering', value: 'Production and Industrial Engineering'},
    { label: 'Communication and Signal Processing', value: 'Communication and Signal Processing'},
    { label: 'Materials Science and Engineering', value: 'Materials Science and Engineering'},
    { label: 'Psychology', value: 'Psychology'},
    { label: 'Philosophy', value: 'Philosophy'},
    { label: 'Economics', value: 'Economics'},
    { label: 'Mathematics', value: 'Mathematics'},
    { label: 'Physics', value: 'Physics'},
    { label: 'Astronomy Astrophysics and Space Engineering', value: 'Astronomy Astrophysics and Space Engineering'}
];
const courses = [
    { label: 'B.Tech.',value: 'B.Tech.'},
    { label: 'M.Tech.', value: 'M.Tech.'},
    { label: 'M.Sc.', value: 'M.Sc.'},
    { label: 'Ph.D.', value: 'Ph.D.'},
    { label: 'MS (Research)', value: 'MS (Research)'}
];
function Directory() {
    const [navappear, setNavappear] = useState(false);
    const [role, setRole] = useState(false);
    const [viajoin, setViajoin] = useState(false);
    const [viagradjoin, setViagradjoin] = useState(graduateYears);
    const [viagrad, setViagrad] = useState(false);
    const [joinyears, setJoinyears] = useState(joiningYears);
    const [viadep, setViadep] = useState(false);
    const [viacourse, setViacourse] = useState(false);
    function checkDate() {
        const curryear = new Date().getFullYear();
        setJoinyears(prev => {
            let inList = false;
            prev.forEach(years => {
                if (years.value === curryear) {
                    inList = true;
                }
            });
            if (!inList) {
                return [...prev, {label: curryear, value: curryear}];
            } else{
                return prev;
            }
        });
        setViajoin(!viajoin);
    }
    function checkgradDate() {
        const curryear = new Date().getFullYear();
        setViagradjoin(prev => {
            let inList = false;
            prev.forEach(years => {
                if (years.value === (curryear+5)) {
                    inList = true;
                }
            });
            if (!inList) {
                return [...prev, {label: curryear+5, value: curryear+5}];
            } else{
                return prev;
            }
        });
        setViagrad(!viagrad);
    }
    const size = useWindowSize();
    return (
        <div className="directory-eventpage">
            <div className="directory-side-nav">
                <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>FILTERS</p>
                <div className="input-group mb-5">
                    <input type="text" className="form-control" placeholder="Enter Keyword.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-success" type="button" id="button-addon2"><SearchIcon /></button>
                    <div style={{ display: (size.width >= 901) ? "none" : "block" }} className="temp-button"><button className="btn btn-secondary" onClick={() => { setNavappear(!navappear) }} type="button"><LegendToggleIcon /></button></div>
                </div>
                <div style={{ display: (size.width <= 900) ? (navappear ? "block" : "none") : "block" }}>
                    <nav id="sideEvents">
                        <ul>
                            <li onClick={() => setRole(!role)}><span>Search by Role</span></li>
                            <div style={{ margin: "30px 0", display: role ? "block" : "none" }}><select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Select Role</option>
                                <option value="Admin">Admin</option>
                                <option value="Alumni">Alumni</option>
                                <option value="Faculty">Faculty</option>
                                <option value="Student">Student</option>
                            </select></div>
                            <li onClick={checkDate}><span>Year of Joining</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viajoin ? "block" : "none"  }}><Select options={joinyears} /></div>
                            <li onClick={checkgradDate}><span>Year of Graduation</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viagrad ? "block" : "none"  }}><Select options={viagradjoin} /></div>
                            <li onClick={() => setViadep(!viadep)}><span>Division/Department</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viadep ? "block" : "none"  }}><Select options={departments} /></div>
                            <li onClick={() => setViacourse(!viacourse)}><span>Course/Degree</span></li>
                            <div style={{ margin: "25px 0", color: "#65686e", display: viacourse ? "block" : "none"  }}><Select options={courses} /></div>
                            <li><span>Current Location</span></li>
                            <li><span>Hometown</span></li>
                            <li><span>Company</span></li>
                            <li><span>Work Industry</span></li>
                            <li><span>Skills</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="content directory-content">
                <div style={{ margin: "0 3%", backgroundColor: "white" }}>
                    <div className="text-directory">1924 Members in community</div>
                    <div className="text1-directory">All Profiles</div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4" style={{ margin: "0 2%" }}>
                        <DirectoryCard img={Magnum} title="Prathmesh" content="DSA GOD" />
                        <DirectoryCard img={Magnum} title="Harsh Wardhan" content="DSA GOD" />
                        <DirectoryCard img={Magnum} title="Rishi" content="DSA GOD" />
                        <DirectoryCard img={Magnum} title="Rishi" content="DSA GOD" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directory;