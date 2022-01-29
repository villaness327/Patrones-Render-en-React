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
import { EmptySearchResults } from '../EmptySearchResults';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { Changealert } from '../Changealert';
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
    sincronizeTodos,
    

  } = useTodos(); //Llamada al custom hook "useTodos", y se reciben las propiedades


  return (
    <React.Fragment>

      <Todoheader loading={loading}>
          <TodoCounter
              totalTodos={totalTodos}
              completedTodos={completedTodos}
         
          />
          
          <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}        
          /> 
      </Todoheader>   

     <TodoList

       error={error}
       loading={loading}
       searchedTodos={searchedTodos}
       totalTodos={totalTodos}
         
        onError={()=><TodosError />}
        onLoading={()=><TodosLoading />}
        onEmptyTodos={()=><EmptyTodos />}
        onEmptySearchResults={()=><EmptySearchResults searchValue={searchValue}/>}


       
  
      // //Render Props 
       render={todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}  

//::::::::::::::::::::::Hasta aqui se envia todo como props::::::::::::::::::::
   >
                 
{ /*::::::::::::::::::::::::::::.Aqui se envia como children::::::::::::::::::::::::::: */
          
          // todo=>(
          //     <TodoItem
          //         key={todo.text}
          //         text={todo.text}
          //         completed={todo.completed}
          //         onComplete={() => completeTodo(todo.text)}
          //         onDelete={() => deleteTodo(todo.text)}
          //   />
          // )
}

     
    </TodoList>  

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

      <Changealert      
      sincronize={sincronizeTodos}   
      />

    </React.Fragment>
  );
}



export default App;
