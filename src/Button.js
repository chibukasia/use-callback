import React from "react";

function Text ({counter, text, handleClick}){
    console.log('Text is renderd ' + counter)
    return <button onClick={handleClick}>{`${text}`}</button>
}

export default React.memo(Text);