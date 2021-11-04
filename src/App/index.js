import React from 'react';
import { TodoProvider } from '../TodoContext';
//import { TodoProvider } from '../TodoContext';
//import { AppUI } from './AppUI';

function App(){ //Componente Padre, donde se renderiza la Aplicacion

  const [state,setState]=React.useState('Estado compartido');
  //El estado se comparte en el componente padre

    return (

      
                   <React.Fragment>

                       <TodoHeader>
                           <TodoCounter state={state}/>          
                           <TodoSearch state={state}/>
                       </TodoHeader>    

                       <TodoList>                        
                           <TodoItem state={state}/>
                       </TodoList>  

                   </React.Fragment>

         //Composicion de componentes          
       
    )
}



function TodoHeader({children}){

    return (
        <header>
            {children} 
        </header>  
    )
}

function TodoList({children}){
  return(
       <section>
         {children}
       </section>

  );  
}


function TodoCounter(props){
  
  return(

    <p>TodoCounter: {props.state} </p>

  );
}

function TodoSearch(props){

   return(

    <p>TodoSearch : {props.state}</p>
   
    );
}


function TodoItem(props){

  return(

    <p>TodoItem {props.state}</p>

  );

}



















/*function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}*/

export default App;
