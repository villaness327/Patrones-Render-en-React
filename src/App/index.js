import React from 'react';


import { Todoheader } from '../Todoheader';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

//Importacion de componentes


function App() {//Componente Padre, donde se renderiza la Aplicacion

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,

  } = useTodos(); //Llamada al custom hook "useTodos"


  return (
    <React.Fragment>

      <Todoheader>
          <TodoCounter>
              totalTodos={totalTodos}
              completedTodos={completedTodos}
          </TodoCounter> 

          <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
          />
      </Todoheader>   

     <TodoList

       error={error}
       loading={loading}
       searchedTodos={searchedTodos}

  
        onError={()=><TodosError />}
        onLoading={()=><TodosLoading />}
        onEmptyTodos={()=><EmptyTodos />}

        render={todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        />  

      {!!openModal && (
        <Modal>
          <TodoForm

             addTodo={addTodo}
             setOpenModal={setOpenModal}
          
          />  
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}



export default App;
