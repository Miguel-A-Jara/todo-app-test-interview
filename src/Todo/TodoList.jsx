import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAll } from '../features/todo/todosReducer';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleClearALl = () => {
    dispatch(clearAll());
  };

  return (
    <ul className='list-group list-group-flush d-flex flex-column gap-2'>
      {todos.map((todo) => (
        <TodoListItem
          todoTittle={todo.todoTittle}
          todoID={todo.todoID}
          key={todo.todoID}
        />
      ))}

      {todos.length > 0 && (
        <div className='row'>
          <div className='col d-flex justify-content-between'>
            <span className=''>You have {todos.length} pending task(s)</span>
            <button
              onClick={handleClearALl}
              className='btn btn-violet text-white'
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </ul>
  );
};

export default TodoList;
