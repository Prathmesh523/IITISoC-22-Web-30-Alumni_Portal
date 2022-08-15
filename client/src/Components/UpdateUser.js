import Axios from "axios";

export const updateuser = ( formdata ) => async ( dispatch ) => {
    try {
        const data = await Axios.post("http://localhost:8080/settings-data", formdata);

        return data;

    } catch ( error ) {
        console.log(error);      
    }
}