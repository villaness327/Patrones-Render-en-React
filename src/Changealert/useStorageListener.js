import React from 'react';


function useStorageListener(sincronize){ //Se recibe la funcion que sincroniza desde el componenente Changealert

    
        
        const[storageChange, setStorageChange]=React.useState(false);
        //Estado que guarda un valor booleano, si hubo o no cambios en el storage

        window.addEventListener('storage',(change)=>{

           if(change.key==='TODOS_V1'){

             console.log('Hubo cambios en TODOS_V1');

             setStorageChange(true);  //Si hubo un cambio en el Storage el estado cambia a true         
           }


        })

         const toggleShow=()=>{

          setStorageChange(false); //Estado falso, desaparece mensaje de cambios

          sincronize(); //funcion que hace un loading, y hace que se ejecute nuevamente el
          //React.useEffect de carga de todos
         }




        return {  //se devuelve un objeto

          show:storageChange, 
          toggleShow, //funcion        

        }
    }

export {useStorageListener}