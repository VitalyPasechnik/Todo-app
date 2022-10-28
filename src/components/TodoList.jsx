import React, { useState } from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({
  items,
  changeState,
  toggleAll,
  destroyTodo,
  changeTitle,
}) => {
  const [toggleAlls, setToggleAlls] = useState(false);

  return (
    <section className="main">
      <input
        type="checkbox"
        id="toggle-all"
        data-cy="toggleAll"
        className="toggle-all"
        onChange={(bool) => {
          setToggleAlls(!toggleAlls);
          toggleAll(toggleAlls);
        }}
      />
      <label htmlFor="toggle-all">
        Mark all as complete
      </label>

      <ul
        className="todo-list"
        data-cy="todoList"
      >
        {items.map(todo => (
          <TodoItem
            key={todo.id}
            changeState={(bool, id) => changeState(bool, id)}
            changeTitle={(newTitle, id) => changeTitle(newTitle, id)}
            id={todo.id}
            title={todo.title}
            destroyTodo={destroyId => destroyTodo(destroyId)}
            completed={todo.completed}
          />
        ))}
      </ul>
    </section>
  );
};
