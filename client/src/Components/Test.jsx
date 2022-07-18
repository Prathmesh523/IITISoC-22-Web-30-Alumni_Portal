import React, { useEffect, useState } from "react";
import Axios from "axios";

function Test() {
    // const [users, setusers] = useState([]);
    // const [formvalue, setformvalue] = useState({
    //     name: "",
    //     age: "",
    //     username: ""
    // });

    // function handleChange(event) {
    //     setformvalue({
    //         ...formvalue,
    //         [event.target.name]: event.target.value
    //     })
    // };

    // useEffect(() => {
    //     Axios.get("http://localhost:8080/post").then((response) => {
    //         setusers(response.data);
    //     })
    // }, []);

    // const createUser = (e) => {
    //     e.preventDefault()
    //     Axios.post("http://localhost:8080/takeuser",
    //         formvalue
    //     ).then((res) => {
    //         setusers([
    //             ...users,
    //             formvalue
    //         ]);
    //     })
    // };
    // return (
    //     <div>
    //         <div>
    //             {users.map((user) => {
    //                 return (
    //                     <div>
    //                         <h1>Name: {user.name}</h1>
    //                         <h1>Age: {user.age}</h1>
    //                         <h1>Username: {user.username}</h1>
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //         <div>
    //             <form onSubmit={createUser}>
    //                 <input type="text" name="name" value={formvalue.name} onChange={handleChange} placeholder="Name..." />
    //                 <input type="number" name="age" value={formvalue.age} onChange={handleChange} placeholder="Age..." />
    //                 <input type="text" name="username" value={formvalue.username} onChange={handleChange} placeholder="Username..." />
    //                 <button type="submit">Submit</button>
    //             </form>
    //         </div>
    //     </div>
    // );
    const [file, setfiles] = useState(null);
    const [formvalue, setformvalue] = useState({
        name: "",
        age: ""
    });

    function handleChange(event) {
        setformvalue({
            ...formvalue,
            [event.target.name]: event.target.value
        });
    };

    const createUser = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('testimage', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        Axios.post("http://localhost:8080/takeuser",
            formData, config
        ).then((res) => {
            console.log("Succeed");
        })
    };

    return (
        <div className="App">
            <h1>Data uploading react</h1>
            <form onSubmit={createUser}  enctype="multipart/form-data">
                <input type="file" onChange={(e) => setfiles(e.target.files)} placeholder="Image..." />
                <input type="text" name="name" value={formvalue.name} onChange={handleChange} placeholder="Name..." />
                <input type="number" name="age" value={formvalue.age} onChange={handleChange} placeholder="Age..." />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Test;