import React from 'react';

const Events = () => {

    const showAlert = () => {
        alert("Welcome Batch 22");
    }

    const onNameChange = () => {
        console.log("Textbox changed")
    }

    const showMessage = (message) => {
        alert(message)
    }


 
    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <button className='btn btn-primary' onClick={showAlert}> Show Alert</button>
                </div>
                <div className='col-3'>
                    <input type='text' onChange={onNameChange} className='form-control' placeholder='ENter NMAme'/>
                </div>
                <div className='col-3'>
                    <button className='btn btn-primary' onClick={ () => {showMessage('Hi From 3rd Button') } }> Show </button>
                </div>
                <div className='col-3'>
                    <button className='btn btn-primary' onClick={ () => {showMessage("HI From 4th Button") }}> Show Alert</button>
                </div>
            </div>
        </div>
    );
};

export default Events;