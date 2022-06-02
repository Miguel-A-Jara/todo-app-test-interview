import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todosReducer';

const TodoAppForm = () => {

  const dispatch = useDispatch();

  const initState = '';
  const [formValue, setFormValue] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Si el titulo es menor a 2 caracteres, no hacemos nada
    if(formValue.trim().length <= 2) return;

    dispatch(addTodo(formValue));
    setFormValue(initState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='fw-bold mb-4'>Todo App</h1>
      <div className='row'>
        <div className='col d-flex gap-2'>
          <input
            type='text'
            placeholder='Add your new todo'
            className='form-control'
            name='todoTittle'
            autoComplete='off'
            maxLength='20'
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button className='btn btn-violet text-white fs-4'>
            <i className='bi bi-plus'></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoAppForm;
