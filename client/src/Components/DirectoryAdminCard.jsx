import React from "react";
import PersonIcon from '@mui/icons-material/Person';

function DirectoryAdminCard(props) {
    return (
        <tr>
            <td id="checkBoxTd"> <input type="checkbox" id="checkImputTab" /> </td>
            <td>
                <div className="nameImgTd">
                    <div className="userImg"><PersonIcon style={{fontSize: "2em"}} /></div>
                    {props.name}
                </div>
            </td>
            <td> {props.email} </td>
            <td> {props.company} </td>
            <td> {props.designation} </td>
        </tr>
    );
}

export default DirectoryAdminCard;