import React from "react";

function DirectoryAdminCard(props) {
    return (
        <tr>
            <td id="checkBoxTd"> <input type="checkbox" id="checkImputTab" /> </td>
            <td>
                <div className="nameImgTd">
                    <img src={props.img} className="userImg" />
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