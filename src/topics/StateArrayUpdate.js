import React, { useState } from 'react';

const StateArrayUpdate = () => {

    const[cityList, setCityList] = useState([]);

    const [stateName, setStateName] = useState('');

    const changeState = (event)=> {
        setStateName(event.target.value);
    }

    const addCity = ()=> {
        setCityList(prevList => ([...prevList,stateName]))
    }
    return (
        <div>
           {stateName}-- {cityList}
            <div className='row'>
                <div className='col-3'>
                    <input type='text' onChange={(event)=> {changeState(event)}} className='form-control' placeholder='ENter City'/>
                </div>
                <div className='col-2'>
                    <button className='btn btn-primary' onClick={addCity}>Add City</button>
                </div>
            </div>
            
        </div>
    );
};

export default StateArrayUpdate;