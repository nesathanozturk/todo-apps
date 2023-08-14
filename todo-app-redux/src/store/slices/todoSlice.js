import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "Make a Project",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Redux Toolkit",
      completed: false,
    },
    {
      id: 3,
      title: "Play Game",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.floor(Math.random() * 100),
        title: action.payload.title,
        completed: false,
      };

      state.push(newTodo);
    },
    isCompleted: (state, action) => {
      const { id, completed } = action.payload;

      const todoItem = state.find((todoItem) => todoItem.id === id);

      if (todoItem) {
        todoItem.completed = completed;
      }
    },
    removeTodo: (state, action) => {
      const id = action.payload;

      return state.filter((todoItem) => todoItem.id !== id);
    },
    clearTodos: (state, action) => {
      const id = action.payload;

      return state.filter((todoItem) => todoItem.id && id);
    },
  },
});

export const { addTodo, clearTodos, isCompleted, removeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
