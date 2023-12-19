import React from "react";

const TodoItem =({item:{data,isHidden},index,dispatch})=>{
    return(<div style={
        {background:"lightgreen",
        width:"80vw",
        marginTop:"20px",
        fontSize:"25px",
        paddingBottom:"10px",
        color:"white",
        borderRadius:"10px"}
    }>
        <h3 style={{filter:`${isHidden ? "blur(5px)" : "blur(0px)"}`}} >{isHidden ? "This Content is Hidden" : data}</h3>
        <button onClick={()=>{
            dispatch({type:"CHANGFE_ISHIDDEN",payload:index})
        }}>Toggle</button>
    </div>)
}

export default TodoItem

