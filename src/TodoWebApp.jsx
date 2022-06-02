import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import LogUserContainer from './LogUser/LogUserContainer';
import TodoContainer from './Todo/TodoContainer';

const TodoWebApp = () => {

  const isUserLogged = useSelector(state => state.auth.isUserLogged);

  return (
    <div className='bg-app container-fluid d-flex justify-content-center align-items-center'>
      <BrowserRouter>
        <Routes>
          {
            isUserLogged 
              ? <Route path='/' element={<TodoContainer />} />
              : <Route path='/' element={<LogUserContainer />} />
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default TodoWebApp;
