import React, { useState } from 'react';

const HIdeShow = () => {

    const [isDiv1Visible, setDiv1] = useState(false);
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');


    const changdeDivVisibility = (show) => {
        setDiv1(show)
    }
    const changeNum1 =(event)=> {
        setNum1(event.target.value)
    }
    const changeNum2 =(event)=> {
        setNum2(event.target.value)
    }

    return (
        <div>
             {isDiv1Visible ? 'Yes':'No'} 
            <div className='row'>
                <div className='col-3'>
                    {
                        isDiv1Visible == true &&  <div className='bg-primary p-3'> DIV-1 - 
                        </div>
                    } 
                </div>
                <div className='col-3'>
                    {
                        num1 == num2 &&  <div className='bg-success p-3'>
                         <h2>Both value  Are Same </h2>
                        </div>
                    } 
                    {
                        num1 != num2 && <div className='bg-danger p-3'>
                       <h2 className='text-success'>Both value  Are Different </h2>
                       </div>
                    }
                </div>
            </div>
            <div className='row'>
                <div className='col-3 text-center pt-2'>
                     <button className='btn btn-danger' onClick={()=>{changdeDivVisibility(false)}}>Hide</button>
                     <button className='btn btn-primary' onClick={()=>{changdeDivVisibility(true)}}>Show</button>
                </div>
                <div className='col-3 text-center pt-2'>
                     <input type='text' onChange={(event)=> {changeNum1(event)}} placeholder='ENtre num 1' />
                     <input type='text' onChange={(event)=> {changeNum2(event)}} placeholder='ENtre num 2' />
                </div>
            </div>
        </div>
    );
};

export default HIdeShow;