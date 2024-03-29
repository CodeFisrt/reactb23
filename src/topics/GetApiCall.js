import React, { useState } from 'react';
import axios from 'axios'

const GetApiCall = () => {

    const cityList = ['Pune','Solapur','Nagpur','Thane','Mumbai'];
    const stateList = ['Maharashtra','Punjab','Goa','Delhi'];

    const studentList = [
        {studid:11,name:'Sachin',city:'Mumbai',contact:'9988776655' },
        {studid:12,name:'Rahul',city:'Bhopal',contact:'1122334455' },
        {studid:13,name:'Ramesh',city:'Pune',contact:'3344556677' },
        {studid:14,name:'Aditya',city:'Mumbai',contact:'667788990' }
    ]
    const [userList,setUserList] = useState([]);
    const [productList, setProductList] = useState([])

    const getAllUsers  = async () =>{
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        debugger;
        setUserList(result.data);
    }
    const getAllProducts = async () => {
        const response =  await axios.get("https://freeapi.gerasim.in/api/BigBasket/GetAllProducts");
        debugger;
        setProductList(response.data.data)
    }
    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                        <ul>
                            {
                                cityList.map((city,index)=>{
                                    return (<li >{index+1}-{city} </li>)
                                })
                            }
                        </ul> 
                </div>
                <div className='col-3'>
                    <select className='form-select'>
                            {
                               stateList.map((stateName)=>{
                                return (<option  >{stateName}</option>)
                               }) 
                            }
                    </select>
                </div>
                <div className='col-3'>
                    <select className='form-select'>
                            {
                                studentList.map((stud)=>{
                                    return (<option key={stud.studid.toString()} value={stud.studid}>{stud.name}</option>)
                                })
                            }
                    </select>
                </div>
            </div>
            <button  className='btn btn-primary' onClick={getAllProducts}>Load Products</button>
            <div className='row'> 
                <div className='col-6'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th> Sku</th>
                                <th> Name</th>
                                <th> Price</th>
                                <th> ShortName</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               productList.map((product,index)=>{
                                return(<tr>
                                    <td>{index+1}</td>
                                    <td> {product.productSku}</td>
                                    <td> {product.productName}</td>
                                    <td> {product.productPrice}</td>
                                    <td> {product.productShortName}</td>
                                </tr>)
                               }) 
                            }
                        </tbody>
                    </table>
                </div>
                </div>
            <div className='row'>
                <div className='col-6'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentList.map((student,index)=>{
                                    return (<tr>
                                        <td> {index+1 }</td>
                                        <td>{student.name}</td>
                                        <td>{student.city}</td>
                                        <td>{student.contact}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='col-6'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>email</th>
                                <th>website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList.map((student,index)=>{
                                    return (<tr>
                                        <td> {index+1 }</td>
                                        <td>{student.name}</td>
                                        <td>{student.username}</td>
                                        <td>{student.email}</td>
                                        <td>{student.website}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <button className='btn btn-primary' onClick={getAllUsers}>Load User</button>
                </div>
            </div>
             
        </div>
    );
};

export default GetApiCall;