import React, { useState } from "react";
import axios from "axios";

const UserList = () => {
    const [userObj, setUserObj] = useState({
        UserId: 0,
        Name: "",
        Email: "",
        Password: "",
        ContactNo: "",
        Role: "",
    });
    const [userList, setUserList] = useState([])
    
    const updateFormValue = (event, key) => {
        setUserObj((prevObj) => ({ ...prevObj, [key]: event.target.value }));
    };
    const getAllUser = async () => {
        const response =  await axios.get("https://freeapi.gerasim.in/api/EventBooking/GetAllUsers");
        setUserList(response.data.data)
    }
    const saveUser = async () => {
        const result = await axios.post(
            "https://freeapi.gerasim.in/api/EventBooking/CreateUser",
            userObj
        );
        debugger;
        if (result.data.result) {
            alert("User Created Success");
            getAllUser()
        } else {
            alert(result.data.message);
        }
    };

    return (
        <div>
            <div className="card">
                <div className="card-header bg-success">Create User</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-8">
                            <button className="btn btn-sm btn-primary" onClick={getAllUser}>Load User</button>
                            <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th> Name</th>
                                <th> Email</th>
                                <th> Contact</th>
                                <th> Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               userList.map((product,index)=>{
                                return(<tr>
                                    <td>{index+1}</td>
                                    <td> {product.name}</td>
                                    <td> {product.email}</td>
                                    <td> {product.contactNo}</td>
                                    <td> {product.password}</td>
                                </tr>)
                               }) 
                            }
                        </tbody>
                    </table>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-4">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            updateFormValue(event, "Name");
                                        }}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-4">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            updateFormValue(event, "Email");
                                        }}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-4">
                                    <label>Contact No</label>
                                    <input
                                        type="text"
                                        onChange={(event) => {
                                            updateFormValue(event, "ContactNo");
                                        }}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label>Role</label>
                                    <select
                                        className="form-select"
                                        onChange={(event) => {
                                            updateFormValue(event, "Role");
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
                                        onChange={(event) => {
                                            updateFormValue(event, "Password");
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
                                    <button className="btn btn-success" onClick={saveUser}>
                                        Save User
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {JSON.stringify(userObj)}
                </div>
            </div>
        </div>
    );
};

export default UserList;
