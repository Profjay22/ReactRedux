import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [
        {
            description: 'Create a new Task',
            isDone: false,
            id: Date.now()
        },
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
                    if(item.isDone === true){
                        item.isDone = false
                    }else if(item.isDone === false){
                        item.isDone = true
                    }
                }
            })
        }
    }
});

export const {saveTodo, setCheck} = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer