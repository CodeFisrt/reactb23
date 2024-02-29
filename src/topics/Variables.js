import React, { useState } from 'react';

const Variables = () => {
    //first Way
    debugger;
    let studentName = "Chetan";
    const isActive =  "Active";

    const [courseName, setCourseName] = useState("ReactJs");

    const [rollNo, setRollNo] = useState(121);

    const [isPresent, setIsPresent] = useState(false);

    const [currentDate, setCurrentDate] = useState(new Date());

    const [student, setStudent]= useState({name:'Chetan', city:'Nagpur',emial:'chetan@gmail.com'})

    const [cityList, setCityList] = useState(["Pune","Nagpur","Solpaur"])

    setTimeout(() => {
        debugger;
        studentName = "Rahul"; 
        setCourseName("Angular")
    }, 9000);

     
    return (
        <div>
            <p> {studentName}</p> 
            <p> { isActive} </p>
            <h2>{cityList} </h2>
            <h1> {student.name} - {student.city}</h1>
            <h3> { courseName} - {rollNo }
             - {isPresent.toString()} - 
             {currentDate.toString()} </h3>

             
        </div>
    );
};

export default Variables;