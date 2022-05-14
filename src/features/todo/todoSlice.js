import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodoItem: (state, action) => {
            state.todos.push(action.payload)
        },
        changeEvent: (state, action) => {
            const changeTodo = state.todos.find(e => e.id === action.payload.id)
            changeTodo.isCompleted = !changeTodo.isCompleted
        },
        deleteTodo: (state, action) => {
            state.todos.pop(action.payload)
        }
    }
})

export const { setTodoItem, changeEvent, deleteTodo } = todoSlice.actions
export default todoSlice.reducer