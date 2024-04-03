import axios from "axios";

const getUserList = async () => {
    debugger
    try {
        const response = await axios.get(
            "https://freeapi.gerasim.in/api/EventBooking/GetAllUsers"
        );
        debugger
        return response.data;
         
    } catch (error) {
        debugger;
        alert("API Error")
    }
   
};

const createUser = async (data) => {
    debugger;
    try { 
        const result = await axios.post(
            "https://freeapi.gerasim.in/api/EventBooking/CreateUser",
            data
        );
        debugger;
        return result.data;
    } catch (error) {
        debugger;
    }
   
};

export {getUserList,createUser}

 