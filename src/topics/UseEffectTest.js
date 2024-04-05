import React, { useEffect, useState } from 'react';
import axios from 'axios'

const UseEffectTest = () => {
    const [name,setName] = useState("Chetan");
    const [courseName,setcourseName] = useState("Angular");
    const [userList,setUserList] = useState([])

    useEffect(()=>{
        console.log("1111");
        getAllUser()
    },[]);

    useEffect(()=>{
        console.log("Course Name UseEffect")
    },[courseName]);

    useEffect(()=>{
        console.log("3333")
    },[name]);

    useEffect(()=>{
        console.log("Both")
    },[name,courseName]);

    const getAllUser = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUserList(result.data)
    }
    
    return (
        <div>
            name = {name} <br/>
            courseName = {courseName} <br/>
            <button className='btn btn-primary' onClick={()=>{setName("Rahul")}}> Change Name</button>
            <button className='btn btn-primary' onClick={()=>{alert("Hii")}}> Show Alert</button>
            <button className='btn btn-primary' onClick={()=>{setcourseName("React")}}> Change Course </button>
        </div>
    );
};

export default UseEffectTest;