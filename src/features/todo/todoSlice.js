import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        setTodoItem: (state, action) =>{
            state.todos.push(action.payload)
        }
    }
})

export const {setTodoItem} = todoSlice.actions
export default todoSlice.reducer