import React, { useReducer } from "react";

const reducer = (state , action) =>{
    
    let {type} = action ;

    if (type == "increase"){
        return state + 1
    }
    if (type == "decrease" && state > 0){
        return state - 1
    }

    return state
}

const initValue = 0

const UseReducer = () =>{
    const [count,dispatch]= useReducer(reducer, initValue)

    return (
        <div>
            <h1>use Reducer</h1>
            <button onClick={()=>dispatch({type:"increase"})}>+1</button>
            <h2>{count}</h2>
            <button onClick={()=>dispatch({type:"decrease"})}>-1</button>
        </div>
    )
}

export default UseReducer