import React from 'react';
import  Input  from './component/input';
import Filter from './component/Filter';
import TodoItems from './component/TodoItems';
import './App.css';
import {useSelector} from "react-redux"
import { useState } from 'react';
import {selectTodoList} from "./features/todoSlice"




// const todoList = [{
//   item: 'todo',
//   done:false,
//   id: 6123
// },
// {
//   item: 'todo2',
//   done:true,
//   id: 612345
// }

// ]

function App() {
  const [filter, setFilterer] = useState([])
  const [input, setInput] = useState('')
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">

      <div>
        <Filter setFilterer = {setFilterer}/>
      </div>

      <div className="app_container">
        <div className="app_todoContainer">
          {
            filter.map((item)=>{
             return <TodoItems
             key = {item.id}
              name={item.item} done={item.done} id={item.id}

              setInput = {setInput}
              />
            })
          }
        </div>
        <Input input={input} setInput = {setInput}/>
      </div>
      
    </div>
  );
}

export default App;
