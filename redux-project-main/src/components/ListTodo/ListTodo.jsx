import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'
import './ListTodo.css'
import { useSelector } from 'react-redux'
import { selectTodoList } from '../../features/todoSlice'


function ListTodo() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app__todoContainer">
      <div>
        {
          todoList.map((item, index)=>(
            <TodoItem 
              key={index}
              description={item.description}
              isDone={item.isDone}
              id={item.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ListTodo