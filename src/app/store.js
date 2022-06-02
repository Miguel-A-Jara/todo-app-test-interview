import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/auth/loginReducer';
import todosReducer from '../features/todo/todosReducer';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: loginReducer
  },
});
