import React, { useState } from 'react'
import "./input.css"
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';
 

const Input = ({setInput, input}) => {
    
    const dispatch = useDispatch()
    const addTodo = () => {
        console.log(`Adding ${input}`)
        dispatch( saveTodo({
            item: input,
            done:false,
            id:Date.now()
        }))

        setInput('')
        
    }
  return (
    <div className="input">
        <input type="text" value={input} onChange={e=>setInput(e.target.value ) }/>
        <button onClick={addTodo}>ADD!</button>

    </div>
  )
}

export default  Input