import React, { useState } from 'react';
import classNames from 'classnames/bind';

export const TodoItem = ({
  id,
  title,
  completed,
  changeState,
  destroyTodo,
  changeTitle,
}) => {
  const [editing, setEdit] = useState(false);
  const [query, setQuery] = useState(title);

  const editTodo = () => {
    setEdit(!editing);
  };

  return (
    <>
      <li className={classNames({ completed }, { editing })}>
        {completed ? (
          <div className="view">
            <input
              type="checkbox"
              className="toggle"
              id="toggle-completed"
              onClick={e => changeState(e.target.checked, id)}
            />
            <label
              htmlFor="toggle-completed"
              onDoubleClick={editTodo}
            >
              {title}
            </label>
            <button
              type="button"
              className="destroy"
              onClick={() => destroyTodo(id)}
            />
          </div>
        ) : (
          <>
            <div className="view">
              <input
                type="checkbox"
                className="toggle"
                id="toggle-view"
                onChange={e => changeState(e.target.checked, id)}
              />
              <label
                htmlFor="toggle-view"
                onDoubleClick={() => editTodo(!editing)}
              >
                { title }
              </label>
              <button
                type="button"
                className="destroy"
                onClick={() => destroyTodo(id)}
              />
            </div>
            <input
              type="text"
              className="edit"
              id="editTodo"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={(e) => {
                switch (e.key) {
                  case 'Enter':
                    e.preventDefault();
                    changeTitle(query, id);
                    setEdit(!editing);
                    break;
                  case 'Escape':
                    setEdit(!editing);
                    break;
                  case 'Mousedown':
                    setEdit(!editing);
                    break;
                  default:
                    break;
                }
              }}
            />
          </>
        )}
      </li>
    </>
  );
};
