import React from 'react';
import { useDispatch } from 'react-redux';
import { remTodo } from '../features/todo/todosReducer';

const TodoListItem = ({ todoTittle, todoID }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(remTodo(todoID));
  };

  return (
    <li className='input-group d-flex justify-content-between align-items-center bg-light rounded p-1'>
      <span>{todoTittle}</span>

      <button onClick={handleDelete} className='btn btn-danger'>
        <i className='bi bi-trash-fill'></i>
      </button>
    </li>
  );
};

export default TodoListItem;
