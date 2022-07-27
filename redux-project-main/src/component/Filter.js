import React from 'react'
import {useState, useEffect} from "react"
import {useSelector} from "react-redux"
import {selectTodoList} from "../features/todoSlice"


function Filter({setFilterer}) {
    const Todo = useSelector(selectTodoList)
    const[status, setStatus] = useState("")



        useEffect(()=>{
            filterHandler()
        }, [Todo, status])


  

    const statusHandler = (e) => {
    setStatus(e.target.value)
    }

    const filterHandler = () => {
       
        switch(status){

            case("completed"):
            setFilterer(Todo.filter((todos)=>{
                return todos.done === true
            }))
            break;

            case("Uncompleted"):
            setFilterer(Todo.filter((todos)=> todos.done === false))
            break;

            default:
            setFilterer(Todo)
            break;

        }


    }
  return (
    <div>
<label for="cars">Filter by status</label>
<select name="cars" id="cars" onChange={statusHandler}>
    <option value="all">All</option>   
    <option value="completed">Completed</option>
    <option value="Uncompleted">Not Completed</option>
    
  </select>

    </div>
  )
}

export default Filter