import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../features/auth/loginReducer';
import TodoAppForm from './TodoAppForm';
import TodoList from './TodoList';

const TodoContainer = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName);

  const handleLogOut = () => {
    dispatch(logOut());
  }

  return (
    <div className='bg-white rounded p-4 d-flex flex-column gap-4'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center py-2'>
            Welcome! <span className='fw-bold'>{userName}</span>
          </h2>
        </div>
        <div className='col-12 d-flex justify-content-center align-items-center'>
          <button 
          onClick={handleLogOut}
          className='btn btn-danger'>Log Out</button>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <TodoAppForm />
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
