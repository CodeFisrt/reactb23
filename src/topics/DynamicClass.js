import React, { useState } from 'react';

const DynamicClass = () => {
    const primaryClass = 'bg-primary';
    const [div2ClassName,setDiv2Class] = useState('');
    const [isSucessClass,setDiv3Class] = useState(false);

    const onClassNameChange = (event)=> {
        setDiv2Class(event.target.value)
    }
    const onDiv3ClassNameChange = (event)=> {
        setDiv3Class(event.target.checked)
    }
    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <div className={`p-3 ${primaryClass}`}>
                        DIV-1
                    </div>
                </div>
                <div className='col-3'>
                    <div className={`p-3 ${div2ClassName}`}>
                        <input type='text'
                         onChange={(event)=>{onClassNameChange(event)}} 
                         placeholder='enyter Class NAme'/>
                    </div>
                </div>
                <div className='col-3'>
                    <div className={`${isSucessClass ? 'bg-success' : 'bg-danger'} p-3 `}>
                        <input type='checkbox' 
                        onChange={(event)=>{onDiv3ClassNameChange(event)}} 
                        placeholder='enyter Class NAme'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicClass;