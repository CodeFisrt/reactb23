import React, { useState } from 'react';

const StateWithPremitive = () => {

    const [firstName, setfirstName] = useState("Chetan");
    const [selectedState, setselectedState] = useState("");
    const [isActive, setisActtive] = useState(false);

    const chanegName = () => {
        setfirstName("Aditya")
    }

    const setNewName = (event) => {
        setfirstName(event.target.value);
    }

    const changeState = (event) => { 
        setselectedState(event.target.value)
    }

    const changeIsActive = (event) => {
        setisActtive(event.target.checked)
    }

    return (
        <div>
            <h1> {firstName} -- {selectedState} -- {isActive ? 'Yes': 'No'} </h1>
            <div className='row'>
                <div className='col-2'>
                    <button className='btn btn-primary' onClick={chanegName} >Change Name</button>
                </div>
                <div className='col-2'>
                     <input type='text' onChange={ (event) => {setNewName(event)}} />
                </div>
                <div className='col-2'>
                    <select className='form-control' onChange={(data) => {changeState(data)}}>
                        <option >MAh</option>
                        <option >Goa</option>
                        <option >Punjab</option>
                        <option >MP</option>
                    </select>
                </div>
                <div className='col-2'>
                     <input type='checkbox' onChange={ (event) => {changeIsActive(event)}} />
                </div>
            </div>
            
        </div>
    );
};

export default StateWithPremitive;