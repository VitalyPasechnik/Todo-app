import React, { useState } from 'react';

export const TodoApp = ({ createNewTodo }) => {
  const [query, setQuery] = useState('');
  // const [query, setQuery] = useContext(Context);

  return (
    <header className="header">
      <h1>todos</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        if (query.length > 0) {
          createNewTodo(query);
          setQuery('');
        }
      }}
      >
        <input
          type="text"
          className="new-todo"
          data-cy="createTodo"
          placeholder="What needs to be done?"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};
