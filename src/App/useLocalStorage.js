import React from 'react';

function useLocalStorage(itemName, initialValue) {
  
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
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

        setLoading(false); //Loading false, por que ya se cargó


      } catch(error) {

        setError(error); //Se setea el error en el estado.
      }
    }, 3000);
  }); //Se ejecuta solo 1 vez
  
  const saveItem = (newItem) => {
    try {

      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);

    } catch(error) {
      
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
