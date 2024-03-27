import React from 'react';

const DynamicAttribute = () => {
    const myName = "Chetan";
    const inputType = "checkbox";
    const myPlaceholder= "Enter Name";
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <input type='text' value={myName}/>
                </div>
                <div className='col-2'>
                    <input type={inputType} />
                </div>
                <div className='col-2'>
                    <input type='text' placeholder={myPlaceholder} />
                </div>
            </div>
        </div>
    );
};

export default DynamicAttribute;