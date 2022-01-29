import React from 'react';

function useLocalStorage(itemName, initialValue) {
  
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [sincronizedItem,setSincronizedItem]=React.useState(true);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {

        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
          
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);

        setLoading(false); //Loading false, para que termine de mostrar meensaje de carga
        setSincronizedItem(true); //Todo queda sincronizado

      } catch(error) {

        setError(error); //Se setea el error en el estado.
      }
    }, 3000);
  },[sincronizedItem]); //se ejecuta cada vez que el estado de sincronizacion cambia
  
  const saveItem = (newItem) => {
    try {

      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);

    } catch(error) {
      
      setError(error);
    }
  };


const sincronizeItem=()=>{

  setLoading(true); // estado de loadin
  setSincronizedItem(false); //Cambia el estado por lo tanto el React.useEffect de carga de todos se ejecuta nuevamente

}



  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

export { useLocalStorage };
