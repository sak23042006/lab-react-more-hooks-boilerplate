import React, { useReducer } from "react";

import TodoItem from "./TodoItem";

const todoReducer = (state,action) => {
    console.log('action: ', action);

    if(action.type == "Add"){
        return [
            ...state,{
                data:action.payload ,
                isHidden : false
            }
        ]
    }

    if (action.type == "CHANGFE_ISHIDDEN"){
        return (
            state.map((e,i)=>{
                return i == action.payload ? {...e,isHidden : !e.isHidden}:e
            })
        )
    }

    return state
}

const initialState = [
    {
        data:"first data" ,
        isHidden:false 
    }
]

const TodoApp = () =>{
    const [todo,dispatch] = useReducer(todoReducer,initialState)
    console.log('todo: ', todo);

    return (
        <div>
            <input type="text" onKeyDown={(e)=>{
                if(e.key == "Enter" && e.target.value!=""){
                    dispatch({type:"Add",payload:e.target.value})
                }
            }} />
        {todo.map((e,i)=>{
            return <TodoItem key={i} item={e} index={i} dispatch={dispatch} />
        })}
        </div>


    )


}

export default TodoApp