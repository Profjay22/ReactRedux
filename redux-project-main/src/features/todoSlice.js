import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [
        
    ]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,

    reducers: {
        saveTodo: (state, action)=>{
            state.todoList.push(action.payload)
        },
        setCheck: (state,action)=>{
            state.todoList.map(item=>{
                if(action.payload===item.id){
                    if(item.done === true){
                        item.done = !item.done
                    }else if(item.done === false){
                        item.done = !item.done
                    }
                }
            })
        },
        setDelete:(state, action)=> {
             return {todoList : state.todoList.filter((item)=> item.id !== action.payload)}
        }
    }
});

export const {saveTodo, setCheck, setDelete} = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer
