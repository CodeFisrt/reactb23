import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
    const [userObj, setUserObj] = useState({
        userId: 0,
        name: "",
        email: "",
        password: "",
        contactNo: "",
        role: "",
    });
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        console.log("UseEffect");
        getAllUser();
    }, []);

    const updateFormValue = (event, key) => {
        setUserObj((prevObj) => ({ ...prevObj, [key]: event.target.value }));
    };
    const getAllUser = async () => {
        const response = await axios.get(
            "https://freeapi.gerasim.in/api/EventBooking/GetAllUsers"
        );
        setUserList(response.data.data);
    };
    const saveUser = async () => {
        const result = await axios.post(
            "https://freeapi.gerasim.in/api/EventBooking/CreateUser",
            userObj
        );
        debugger;
        if (result.data.result) {
            alert("User Created Success");
            getAllUser();
        } else {
            alert(result.data.message);
        }
    };
    const onEdit = (userObj) => {
        setUserObj(userObj)
    }
 
    const updateUser = async () => {
        const result = await axios.post(
            "https://freeapi.gerasim.in/api/EventBooking/UpdateUser",
            userObj
        );
        debugger;
        if (result.data.result) {
            alert("User Updated Success");
            getAllUser();
        } else {
            alert(result.data.message);
        }
    }
    const onDelete = async (userId) => {
        const result = await axios.get(
            "https://freeapi.gerasim.in/api/EventBooking/DeleteUserById?id=" +userId );
        debugger;
        if (result.data.result) {
            alert("User Deleted Success");
            getAllUser();
        } else {
            alert(result.data.message);
        }
    }
    return (
        <div>
            <div className="card">
                <div className="card-header bg-success">Create User</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-12 table-responsive">
                                <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Sr</th>
                                        <th> Name</th> 
                                        <th> Contact</th>
                                        <th> Password</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userList.map((user, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td> {user.name}</td> 
                                                <td> {user.contactNo}</td>
                                                <td> {user.password}</td>
                                                <td>
                                                    <button className="btn btn-success" onClick={()=>{onEdit(user)}}>Edit</button>
                                                    <button className="btn btn-success" onClick={()=>{onDelete(user.userId)}}>Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-4">
                            {JSON.stringify(userObj)}
                            <div className="row">
                                <div className="col-4">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        value={userObj.name}
                                        onChange={(event) => {
                                            updateFormValue(event, "name");
                                        }}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-4">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        value={userObj.email}
                                        onChange={(event) => {
                                            updateFormValue(event, "email");
                                        }}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-4">
                                    <label>Contact No</label>
                                    <input
                                        type="text"
                                        value={userObj.contactNo}
                                        onChange={(event) => {
                                            updateFormValue(event, "contactNo");
                                        }}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label>Role</label>
                                    <select    value={userObj.role}
                                        className="form-select"
                                        onChange={(event) => {
                                            updateFormValue(event, "role");
                                        }}
                                    >
                                        <option>Admin</option>
                                        <option>Sale</option>
                                        <option>Super Admin</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label>Password</label>
                                    <input
                                        type="text"
                                        value={userObj.password}
                                        onChange={(event) => {
                                            updateFormValue(event, "password");
                                        }}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-4">
                                    <button className="btn btn-primary">Reset</button>
                                </div>
                                <div className="col-4">
                                    {
                                        userObj.userId == 0 &&  <button className="btn btn-success" onClick={saveUser}>
                                        Save User
                                    </button>
                                    } 
                                    {
                                        userObj.userId != 0 &&  <button className="btn btn-warning" onClick={updateUser}>
                                        Update User
                                    </button>
                                    }
                                   
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
