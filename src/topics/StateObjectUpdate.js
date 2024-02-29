import React, { useState } from 'react';

const StateObjectUpdate = () => {
    const [userObj, setUserObj] = useState({name:'',
    city:'',userName:'',password:''});

    const changeName = (event) => {
        setUserObj(prevObj => ({...prevObj, name :event.target.value }) )
    }
    const changeCity = (event)=> {
        setUserObj(prevObj => ({...prevObj, city :event.target.value }) )
    }
    const changeUserName = (event)=> {
        setUserObj(prevObj => ({...prevObj, userName :event.target.value }) )
    }
    const changePassword = (event)=> {
        setUserObj(prevObj => ({...prevObj, password :event.target.value }) )
    } 

    return (
        <div>
            {JSON.stringify(userObj)}
            <div className='row'>
                <div className='col-3'>
                    <label>Name</label>
                    <input type='text' onChange={(event)=> {changeName(event)}} className='form-control' />
                </div>
                <div className='col-3'>
                    <label>City</label>
                    <input type='text' onChange={(event)=>{changeCity(event)}} className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <label>User Name</label>
                    <input type='text' onChange={(event)=>{changeUserName(event)}} className='form-control' />
                </div>
                <div className='col-3'>
                    <label>Password</label>
                    <input type='text' onChange={(event)=>{changePassword(event)}} className='form-control' />
                </div>
            </div>
        </div>
    );
};

export default StateObjectUpdate;