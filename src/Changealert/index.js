import React from 'react';
import { useStorageListener } from './useStorageListener';
import './changealert.css';



//Componente
function Changealert({ sincronize }){ //Se recibe la funcion de sincronizado desde el componente App

    const {show,toggleShow}=useStorageListener(sincronize);//Llamado al custom HOOK, y se envia la funcion
    //de sincronizado

    if(show){  //Si show es verdadero, es porque hubo un cambio, entonces se muestra ek mensaje
       
        return (

            <div className="mensajeSincronizacionContainer">
                   <div className="mensajeSincronizacion">
                        <p>Hubieron algunos cambios es necesario la Actualización de la Información</p>
                        <button 
                        className="sincronizacionButton" 
                        onClick={toggleShow}
                        >                            
                        Cargar Información
                        </button>
                   </div>               
                
            </div>

        );

    }else{
            
        return null;

    }      

}

export {Changealert};
//Se exporta eel componente