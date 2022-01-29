import React from 'react';
import { useLocalStorage } from './useLocalStorage';



function useTodos() { //Custom hook
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem:sincronizeTodos,
    setItem,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);   //Custom HOOK

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length; //Numero de todos completados

  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos; // todos los todos que esten almacenados, no se a buscado nada
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase(); //Array de todos a minuscula
      const searchText = searchValue.toLowerCase();//Lo que se buscó a minuscula
      return todoText.includes(searchText);//Retorna la coincidencia de busqueda
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {  // Se cambia de false a true , es decir a completado
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  


return{   //Se devuelven las propiedades como un objeto.
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      sincronizeTodos,
    }
}

export {useTodos};
