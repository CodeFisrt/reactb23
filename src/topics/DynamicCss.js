import React, { useState } from 'react';

const DynamicCss = () => {
    const backColor = 'red';
    const colorObj = {
        'color':'white',
        'backgroundColor':'red',
        'font-size': '29px'
    };

    const[isActive,setActive] = useState(false);
    
    
    return (
        <div>
             <div className='row'>
                <div className='col-3'>
                    <div  style={{backgroundColor:backColor}}>
                        DIV-1
                    </div>
                </div>
                <div className='col-3'>
                    <div  style={colorObj}>
                        DIv 2
                        <input type='text'   placeholder='enyter Class NAme'/>
                    </div>
                </div>
                <div className='col-3'>
                    <div style={{backgroundColor: isActive?'blue':'red' }} >
                        <input type='checkbox' 
                        onChange={(event)=>{setActive(event.target.checked)}}  
                        placeholder='enyter Class NAme'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicCss;