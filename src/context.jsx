import React from 'react';

export const Context = React.createContext();

// export const Provider = ({ children }) => {
//   const [todos, setTodos] = useState([]);
// const [todosCounter, setTodosCounter] = useState(0);
// const [toggleAlls, setToggleAlls] = useState(false);

//   const [filterTodos, setFilterTodos] = useState([...todos]);

//   useEffect(() => {
//     setFilterTodos(todos);
//   });

//   useEffect(() => {
//     setFilterTodos(todos);
//     setTodosCounter(todos.filter(item => item.completed === false).length);
//   }, [todos]);

//   const chooseFilter = useCallback((type) => {
//     switch (type) {
//       case 'All':
//         setFilterTodos(todos);
//         break;
//       case 'Active':
//         setFilterTodos(todos.filter(todo => !todo.completed));
//         break;
//       case 'Completed':
//         setFilterTodos(todos.filter(todo => todo.completed));
//         break;
//       default:
//         break;
//     }
//   }, []);

//   const createNewTodo = useCallback((title) => {
//     if (!todos.some(x => x.title === title)) {
//       setTodos([...todos, {
//         id: +new Date(),
//         title,
//         completed: false,
//       }]);
//     }
//   }, []);

//   const toggleAll = useCallback(() => {
//     setToggleAlls(!toggleAlls);
//     setTodos(todos.map(todo => ({ ...todo, completed: toggleAlls })));
//   }, []);

//   const changeState = useCallback((bool, id) => {
//     setTodos(todos.map((todo) => {
//       if (todo.id === id) {
//         return ({ ...todo, completed: bool });
//       }

//       return todo;
//     }));
//   }, []);

//   const destroyTodo = useCallback((destroyId) => {
//     setTodos(todos.filter(todo => todo.id !== destroyId));
//   }, []);

//   const changeTitle = useCallback((newTitle, id) => {
//     setTodos(todos.map((todo) => {
//       if (todo.id === id) {
//         return ({ ...todo, title: newTitle });
//       }

//       return todo;
//     }));
//   }, []);

//   return (
//     <Context.Provider
//       value={{
//         todos,
//         setTodos,
//         todosCounter,
//         setTodosCounter,
//         toggleAlls,
//         setToggleAlls,
//         filterTodos,
//         setFilterTodos,
//         createNewTodo,
//         toggleAll,
//         chooseFilter,
//         changeState,
//         destroyTodo,
//         changeTitle,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// };
