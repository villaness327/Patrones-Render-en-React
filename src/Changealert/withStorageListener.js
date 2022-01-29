import React from 'react';

//High Order Component (HOC)
function withStorageListener(WrappedComponent){

    return function WrappedComponentWithStorageListener(props){ //Componente de verdad, que envia las props
        
        const[storageChange, setStorageChange]=React.useState(false);
        //Estado que guarda un valor booleano, si hubo o no cambios en el storage

        window.addEventListener('storage',(change)=>{

           if(change.key==='TODOS_V1'){

             console.log('Hubo cambios en TODOS_V1');

             setStorageChange(true);  //Si hubo un cambio el estado cambia a true         
           }


        })

         const toogleShow=()=>{

            setStorageChange(false); //Estado falso, desaparece mensaje de cambios
         
            props.sincronizeTodos(); //funcion que hace un loading, y hace que se ejecute nuevamente el
            //React.useEffect de carga de todos



         }




        return (

             <WrappedComponent
             show={storageChange} //El mensaje de cambio se muestra solo si es estado es true
             toggleShow={()=>toogleShow()} //Funcion modificadora del estado para desaparecer el mensaje de cambio y sincronizar
            
             />

        )


    }



}


export {withStorageListener}