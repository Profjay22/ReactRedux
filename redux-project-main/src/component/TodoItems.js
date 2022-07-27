import React from 'react'
import "./TodoItem.css"
import Checkbox from "@material-ui/core/Checkbox"
import { useDispatch } from 'react-redux'
import { saveTodo, setCheck, setDelete} from '../features/todoSlice'
import {useSelector} from "react-redux"
import {selectTodoList} from "../features/todoSlice"

const TodoItems = ({name, done, id, setInput}) => {
    const dispatch = useDispatch()
    const editTodo = useSelector(selectTodoList)

    const handleCheck = () => {
        dispatch(setCheck(id))
        
    }

    const edit = () => {

    console.log(dispatch(setDelete(id)))
    setInput((editTodo.filter((edit)=> edit.id === id).map(items=> items.item))) 


    }
  return (
    <div className="todoItem">
        <Checkbox 
            checked={done}
            color='primary'
            onChange={handleCheck}
            inputProps={{"aria-label": "secondary checkbox"}}
        />

            <p className={done ? 'todoItem--done' : ''}>{name}</p>
            <button onClick={edit}> Edit </button>
    </div>
  )
}

export default TodoItems