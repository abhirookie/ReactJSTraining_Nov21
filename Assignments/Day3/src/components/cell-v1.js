import React from 'react';

const Cell = (props)=>{
    let value= props.value;
    let up_val=""
    const handleClick=()=>{
        if (props.value=="") {
            if (props.v=="O"||props.v=="") {
                up_val="X"
            }
            if (props.v=="X"||props.v=="") {
                up_val="O"
            }
        } else{
            up_val=props.value
        }
        props.onClk([up_val,props.id]);
       // console.log('Value Change to',value);
    }
    //const value=props.value||"_";
    return <button onClick={handleClick} className='cell'>{value}</button>;
};

export default Cell;