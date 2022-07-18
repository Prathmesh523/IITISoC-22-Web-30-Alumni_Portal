import React, {useState} from "react";
import "./css/events.css";
import {useLocation} from 'react-router-dom';
import useWindowSize from "./WindowSize";
import StoriesCards from "./StoriesCards";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { useNavigate } from "react-router-dom";

function Stories(props){
    const [navappear, setNavappear] = useState(false);
    const size = useWindowSize();
    const location = useLocation();
    const user = "admin";
    const navigate = useNavigate();
    return (
        <div className="eventpage">
            <div className="side-nav">
                <div className="input-group mb-4">
                    <input type="text" className="form-control shadow-none" placeholder="Search by title..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-success" type="button" id="button-addon2"><SearchIcon /></button>
                    <div style={{display: (size.width >= 801) ? "none": "block"}} className="temp-button"><button className="btn btn-secondary" onClick={() => {setNavappear(!navappear)}} type="button"><LegendToggleIcon /></button></div>
                </div>
                <div style={{display: (size.width <= 800) ? (navappear ? "block" : "none") : "block"}}>
                <p style={{fontSize: "1.2rem", marginBottom: "20px"}}>CATEGORIES</p>
                <nav id="sideEvents">
                    <ul>
                        <li><span>All Stories</span></li>
                        <li><span>Categories</span></li>
                    </ul>
                </nav>
                <div className="eventsname"><a href={void(0)} className="eventsname-link" onClick={() => navigate("/stories", {state: "NEWSLETTER"})}>Newsletters</a></div>
                <div className="eventsname"><a href={void(0)} className="eventsname-link" onClick={() => navigate("/stories", {state: "STORY"})}>Alumni Stories</a></div>
                <div className="eventsname"><a href={void(0)} className="eventsname-link" onClick={() => navigate("/stories", {state: "STORY"})}>Institute Updates</a></div>
                <div className="eventsname"><a href={void(0)} className="eventsname-link" onClick={() => navigate("/stories", {state: "STORY"})}>Alumni Achievements</a></div>
                </div>
            </div>
            <div className="content">
            <button style={{ display: (user === "admin") ? "block" : "none" }} onClick={() => navigate("/create", {state: location.state})} className="btn add-event-button"><AddIcon /> CREATE {location.state}</button>
                <StoriesCards img="" heading="Friends for Life: 2 Stories of True Friendship from IITI Campus!" content="Friendship Day Special: View all featured Friendship Stories from Alumni over the years. Wishing you all a Very Happy Friendships Day!" tag="Alumni Stories" />
                <StoriesCards img="" heading="Friends for Life: 2 Stories of True Friendship from IITI Campus!" content="Friendship Day Special: View all featured Friendship Stories from Alumni over the years. Wishing you all a Very Happy Friendships Day!" tag="Alumni Stories" />
                <StoriesCards img="" heading="Friends for Life: 2 Stories of True Friendship from IITI Campus!" content="Friendship Day Special: View all featured Friendship Stories from Alumni over the years. Wishing you all a Very Happy Friendships Day!" tag="Alumni Stories" />
                <StoriesCards img="" heading="Friends for Life: 2 Stories of True Friendship from IITI Campus!" content="Friendship Day Special: View all featured Friendship Stories from Alumni over the years. Wishing you all a Very Happy Friendships Day!" tag="Alumni Stories" />
                <StoriesCards img="" heading="Friends for Life: 2 Stories of True Friendship from IITI Campus!" content="Friendship Day Special: View all featured Friendship Stories from Alumni over the years. Wishing you all a Very Happy Friendships Day!" tag="Alumni Stories" />
            </div>
        </div>
    );
}

export default Stories;