import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLogged: false,
  userName: '',
};

const loginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logUser: (state, action) => {
      return { isUserLogged: true, userName: action.payload };
    },

    logOut: (state, action) => {
      return initialState;
    },
  },
});

export const { logUser, logOut } = loginReducer.actions;

export default loginReducer.reducer;
