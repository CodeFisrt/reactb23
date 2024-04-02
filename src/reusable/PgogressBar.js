import React from "react";

const PgogressBar = (props) => {
    debugger; 
  return (
    <div>
      <div className="progress">
        <div className={`progress-bar ${props.bgColor}`}  style={{ width: props.progressValue+'%' }}></div>
      </div>
    </div>
  );
};

export default PgogressBar;
