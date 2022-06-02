import { createSlice, current } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.unshift({
        todoTittle: action.payload,
        todoID: new Date().getTime(),
      });
    },

    remTodo: (state, action) => {
      return state.filter((todo) => todo.todoID !== action.payload);
    },

    clearAll: (state, action) => {
      return initialState;
    },
  },
});

export const { addTodo, remTodo, clearAll } = todoSlice.actions;

export default todoSlice.reducer;
