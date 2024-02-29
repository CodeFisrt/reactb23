import React, { useState } from 'react';

const StateDyanamincForm = () => {
    const [userObj, setUserObj] = useState({name:'',city:'',userName:'',password:''}); 
    
    const updateFromValue = (event,key) => {
        debugger;
        setUserObj(prevObj => ({...prevObj, [key] :event.target.value }) )
    }

    return (
        <div>
            {JSON.stringify(userObj)}
            <div className='row'>
                <div className='col-3'>
                    <label>Name</label>
                    <input type='text' onChange={(event)=> {updateFromValue(event,'name')}} className='form-control' />
                </div>
                <div className='col-3'>
                    <label>City</label>
                    <input type='text' onChange={(event)=>{updateFromValue(event,'city')}} className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <label>User Name</label>
                    <input type='text' onChange={(event)=>{updateFromValue(event,'userName')}} className='form-control' />
                </div>
                <div className='col-3'>
                    <label>Password</label>
                    <input type='text' onChange={(event)=>{updateFromValue(event,'password')}} className='form-control' />
                </div>
            </div>
        </div>
    );
};

export default StateDyanamincForm;