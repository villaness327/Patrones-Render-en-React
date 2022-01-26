import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App/index.js';
import './index.css';


function App(props){

    return(

       <h1>¡{props.saludo} {props.nombre} !</h1>
    );
}


function withSaludo(WrappedComponent){ 

      return function WrappedComponentWithSaludo(saludo){

          return function ComponenteDeVerdad(props){
            //La props que recibe vienen del componente AppWithSaludo

                return(
                    <React.Fragment>
                      <WrappedComponent 
                      {...props}
                      saludo={saludo}
                      /> 
                      <p>texto agregado</p>
                    </React.Fragment>
                )
          }
     }
}


const AppWithSaludo=withSaludo(App)('Buenas noches'); 
//Se envuelve el componente App en un HOC, y tambien 
//se envia el parametro para la funcion WrappedComponentWithSaludo

//AppWithSaludo se transforma en un componente
ReactDOM.render(
  <AppWithSaludo nombre="Eduardo"/>,
  document.getElementById('root')
);
