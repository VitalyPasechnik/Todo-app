import React, { useState, useEffect } from 'react';
import { Context } from './context';
import { TodoApp } from './components/TodoApp';
import { TodoList } from './components/TodoList';
import { TodosFilter } from './components/TodosFilter';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState(todos);
  const [toggleAlls, setToggleAlls] = useState(false);

  // const { todos, setTodos } = useContext(Context);
  // const { filterTodos, setFilterTodos } = useContext(Context);
  const [todosCounter, setTodosCounter] = useState(0);

  const chooseFilter = (type) => {
    switch (type) {
      case 'All':
        setFilterTodos(todos);
        break;
      case 'Active':
        setFilterTodos(todos.filter(todo => !todo.completed));
        break;
      case 'Completed':
        setFilterTodos(todos.filter(todo => todo.completed));
        break;
      default:
        break;
    }
  };

  const createNewTodo = (title) => {
    if (!todos.some(x => x.title === title)) {
      setTodos([...todos, {
        id: +new Date(),
        title,
        completed: false,
      }]);
    }
  };

  const toggleAll = (bool) => {
    setTodos(todos.map(todo => ({ ...todo, completed: bool })));
  };

  const changeState = (bool, id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return ({ ...todo, completed: bool });
      }

      return todo;
    }));
  };

  const destroyTodo = (destroyId) => {
    setTodos(todos.filter(todo => todo.id !== destroyId));
  };

  const changeTitle = (newTitle, id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return ({ ...todo, title: newTitle });
      }

      return todo;
    }));
  };

  useEffect(() => {
    setFilterTodos(todos);
    setTodosCounter(todos.filter(item => item.completed === false).length);
  }, [todos]);

  return (
    <Context.Provider value={{
      todos,
      setTodos,
      todosCounter,
      setTodosCounter,
      toggleAlls,
      setToggleAlls,
      filterTodos,
      setFilterTodos,
      createNewTodo,
      toggleAll,
      chooseFilter,
      changeState,
      destroyTodo,
      changeTitle,
    }}
    >
      <section className="todoapp">

        <TodoApp createNewTodo={title => createNewTodo(title)} />

        {filterTodos.length > 0 && (
          <>
            <TodoList
              items={todos}
              toggleAll={bool => toggleAll(bool)}
              changeState={(bool, id) => changeState(bool, id)}
              destroyTodo={destroyId => destroyTodo(destroyId)}
              changeTitle={(newTitle, id) => changeTitle(newTitle, id)}

            />

            <footer className="footer">
              <span
                className="todo-count"
                data-cy="todosCounter"
              >
                {todosCounter}
                {' '}
                items left
              </span>

              <TodosFilter chooseFilter={type => chooseFilter(type)} />

              <button
                type="button"
                className="clear-completed"
                onClick={() => setTodos(todos.filter(todo => !todo.completed))}
              >
                Clear completed
              </button>
            </footer>
          </>
        )}
      </section>
    </Context.Provider>
  );
};
