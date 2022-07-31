import React from "react";
import { useLocation } from 'react-router-dom';
import "./css/storiesin.css";
import B from "./images/B.png";

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
                    <div class="posted">
                        <div class="postedByAd">
                            <div class="adminImg">
                                <img src={B} class="adminBlue" />
                            </div>
                            <div class="adminInfo">
                                <p id="iitiAdText">{story.by}</p>
                                <p id="adText">{story.status}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default StoriesIn;