import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logUser } from '../features/auth/loginReducer';

const LogUserContainer = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //Si el nombre es menor a 2 caracteres, no hacemos nada
    if (userName.trim().length <= 2) return;

    dispatch(logUser(userName));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white p-4 rounded d-flex flex-column justify-content-around gap-4'
    >
      <h1>Todo App - Login</h1>
      <input
        type='text'
        name='userName'
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        maxLength='15'
        className='fs-3'
      />

      <button className='btn btn-violet text-white fs-5'>Login</button>
    </form>
  );
};

export default LogUserContainer;
