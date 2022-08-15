import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { successlogin } from "../actions";
import CheckIcon from '@mui/icons-material/Check';


function DirectoryCard(props) {
    const dispatch = useDispatch();
    const userinfo = useSelector(state => state.user);
    const navigate = useNavigate();
    const [present, setpresent] = useState(false);
    useEffect(() => {
        if (userinfo.user && userinfo.user.network) {
            userinfo.user.network.map(user => {
                if (user._id === props.info._id) {
                    setpresent(true)
                }
            });
            if(userinfo.user._id === props.info._id){
                setpresent(true);
            }
        }
    },[]);
    async function handleAdd() {
        if (!present) {
            await Axios.post("http://localhost:8080/add-network", { username: userinfo.user.username, data: props.info }).then((response) => {
                dispatch(successlogin(response.data));
            });
            navigate("/profile");
        }
    }
    return (
        <div className="col mb-4">
            <div className="card h-100">
                <img src={props.img} className="card-img-top directory-card-img" alt="..."></img>
                <div className="card-body">
                    <h6 className="cardtitle">{props.title}</h6>
                    <p className="cardtext">{props.content1}</p>
                    <p className="cardtext">{props.content2 && props.content2.substring(0, 20)}</p>
                    <p className="cardtext">{props.content3}</p>
                </div>
                <div style={{ display: ((props.status === "admin" || props.status === "alumni") && !present) ? "block" : "none" }} onClick={handleAdd} className="add-user"><PersonAddIcon style={{ fontSize: "1.2em" }} /> Add To Network</div>
                <div style={{ display: ((props.status === "admin" || props.status === "alumni") && present) ? "block" : "none" }} className="add-user"><CheckIcon style={{ fontSize: "1.2em" }} /> In Your Network</div>
            </div>
        </div>
    );
}

export default DirectoryCard;