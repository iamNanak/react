import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text: "Hello world!"}]
}

export const todoSlice = createSlice({
    name: 'todo',     //name of the Slice
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state,action) =>{
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, text:action.payload.text} : todo)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions  // exporting individual reducers because they use in components

export default todoSlice.reducer   // exporting to use in store