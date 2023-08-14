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
        title,
        completed: false,
      };

      state.push(newTodo);
    },
    isCompleted: (state, action) => {
      const id = action.payload.id;

      const i = state.findIndex((todoItem) => todoItem.id === id);
      state[i].completed = action.payload.completed;
    },
    removeTodo: (state, action) => {
      const id = action.payload.id;

      return state.filter((todoItem) => todoItem.id !== id);
    },
    clearTodos: (state) => {
      return state.filter(
        (todoItem) => todoItem.completed && !todoItem.completed
      );
    },
  },
});

export const { addTodo, clearTodos, isCompleted, removeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
