import React from "react";

function Counter ({counter, heading, handleClick}){
    console.log('Counter increment ' + counter)

    return (
        <div>
            <h1>{heading}</h1>
            <h2>{counter}</h2>
        </div>
     
    )
}

export default React.memo(Counter);