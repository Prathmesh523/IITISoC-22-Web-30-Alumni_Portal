import React from "react";
import { useLocation } from 'react-router-dom';
import "./css/storiesin.css";
import B from "./images/Photo.jpeg";

function StoriesIn() {
    const location = useLocation();
    const story = location.state;
    return (
        <div>
            <div class="storiesView">
                <div class="storiesViewtitle">
                    <a href="/stories" id="allCampusFeedLink">All Campus Feeds {">"}</a>
                    <p id="allCampusFeed">{story.title}</p>
                </div>
            </div>
            <div class="stroyContent">
                <div class="stroyContentMain">
                    <div class="SCTopImage">
                        <img src={story.photo} class="topImageitself" />
                    </div>
                    <div class="titleMain">
                        <p id="titleText">{story.title}</p>
                    </div>
                    <div class="dateSeen">
                        <p id="dateText"><i class="fa fa-calendar dateSymbol"></i> {story.publishDate.substring(0,10)} </p>
                    </div>
                    <div class="contentText">
                        <p id="subText">{story.description}</p> 
                        <hr />
                            <div class="showPiece">{story.category}</div>
                    </div>
                    <p id="postText">Posted By</p>
                    <div className="cards1111">
            <div className="propic">
                <img src={B} alt="" className="propic1" />
            </div>
            <div className="cont">
                <p className="namee">{story.by}</p>
                <p className="descri">Alumni Member</p>
            </div>
            
        </div>
                </div>
            </div>
        </div>
    );
}

export default StoriesIn;