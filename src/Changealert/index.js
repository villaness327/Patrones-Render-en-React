import React from 'react';
import { withStorageListener } from './withStorageListener';// Se importa el HOC
import './changealert.css';



//Componente
function Changealert({show,toggleShow}){

    if(show){  //Si show es verdadero, es porque hubo un cambio, entonces se muestra ek mensaje
        return (

            <div className='mensajeSincronizacionContainer'>
                   <div className='mensajeSincronizacion'>
                        <p>Hubieron algunos cambios es necesario la Actualización de la Información</p>
                            <button className='sincronizacionButton' onClick={()=>{
                            
                            toggleShow(); 
                            
                            }}>Cargar Información</button>

                   </div>


                
                
            </div>

        );

    }else{
            
        return null;

    }

       

}

const ChangeAlertWithStorageListener=withStorageListener(Changealert);
//Se crea una variable , y envuelve en el HOC componente Changealert


export {ChangeAlertWithStorageListener};
//Se exporta este vendria siendo el componente de verdad