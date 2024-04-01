import React, { useEffect, useState } from "react";
import axios from "axios";
const Patient = () => {

    const [patientList, setPatientList] = useState([]);
    const [isFormSubmitted, setIsFormSubmited] = useState(false);
    const [newPatient, setNewPatient] = useState({
        "patientId": 0,
        "name": "",
        "mobileNo": "",
        "city": "",
        "age": 0,
        "gender": ""
    })
    const apiUrl = "https://freeapi.gerasim.in/api/HospitalAppointment/";

    useEffect(()=>{
        getAllPatients();
    },[])

    const updateFormValue = (event,key) => {
        setNewPatient(prevObj => ( {...prevObj,[key]:event.target.value}))
    }

    const getAllPatients = async () => {
        const result = await axios.get(`${apiUrl}GetAllPatients`);
        setPatientList(result.data.data);
    }
   
    const addNewPatient = async () => {
        debugger;
        setIsFormSubmited(true)
        if(newPatient.name != '' && newPatient.age != ''
         && newPatient.gender != '' && newPatient.mobileNo != '' && newPatient.city != '') {
            const result = await axios.post(`${apiUrl}AddNewPatient`,newPatient);
            debugger;
             if(result.data.result) {
                alert('Patient Created Successfully');
                getAllPatients()
             } else {
                alert(result.data.message)
             }
         }
       
    }


  return (
    <div>
        {JSON.stringify(newPatient)}
      <div className="row">
        <div className="col-8">
          <div className="card">
            <div className="card-header bg-primary">Patient List</div>
            <div className="card-body">
              <div className="row">
                {
                    patientList.map((item,index)=> {
                        return (<div className="col-3 pt-2">
                        <div className="card">
                          <div className="card-body">
                            <h6 className="card-title">{item.name}</h6>
                            <small className="card-text">
                              mobileNo:  {item.mobileNo} 
                            </small>
                            <br></br>
                            <small>
                            City: {item.city}
                            </small>
                            <br></br>
                            <a href="#" className="card-link">
                              Edit
                            </a>
                            <a href="#" className="card-link">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>)
                    })
                }
                
               
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-header bg-primary">New Patient</div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <label>Name</label>
                  <input type="text" onChange={(event)=>{updateFormValue(event,'name')}} className="form-control" />
                  {
                   isFormSubmitted && newPatient.name == '' &&  <div className="text-danger">
                                This is required
                         </div>
                  }
                 
                </div>
                <div className="col-6">
                  <label>Mobile No</label>
                  <input type="text" onChange={(event)=>{updateFormValue(event,'mobileNo')}} className="form-control" />
                  {
                   isFormSubmitted && newPatient.mobileNo == '' &&  <div className="text-danger">
                                This is required
                         </div>
                  }
                </div>
                <div className="col-6">
                  <label>City</label>
                  <input type="text" onChange={(event)=>{updateFormValue(event,'city')}} className="form-control" />
                  {
                   isFormSubmitted && newPatient.city == '' &&  <div className="text-danger">
                                This is required
                         </div>
                  }
                </div>
                <div className="col-6">
                  <label>Age</label>
                  <input type="text" onChange={(event)=>{updateFormValue(event,'age')}} className="form-control" />
                  {
                   isFormSubmitted && newPatient.age == '' &&  <div className="text-danger">
                                This is required
                         </div>
                  }
                </div>
                <div className="col-12">
                  <label>Gender</label>
                  <br />
                  <input type="radio" name="gender" onChange={(event)=>{updateFormValue(event,'gender')}} value={"Male"} /> Male
                  <input type="radio" name="gender" onChange={(event)=>{updateFormValue(event,'gender')}} value={"Female"} /> Fe-Male
                  {
                   isFormSubmitted && newPatient.gender == '' &&  <div className="text-danger">
                                This is required
                         </div>
                  }
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-6 text-center">
                  <button className="btn btn-secondary">Reset</button>
                </div>
                <div className="col-6 text-center">
                  <button className="btn btn-success" onClick={addNewPatient}>Create Patient</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
