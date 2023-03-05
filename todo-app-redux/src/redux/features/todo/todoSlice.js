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
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ title }) => {
        return {
          payload: {
            id: Math.floor(Math.random() * 100),
            title,
            completed: false,
          },
        };
      },
    },
    isCompleted: (state, action) => {
      const i = state.findIndex(
        (todoItem) => todoItem.id === action.payload.id
      );
      state[i].completed = action.payload.completed;
    },
    removeTodo: (state, action) => {
      return state.filter((todoItem) => todoItem.id !== action.payload.id);
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
