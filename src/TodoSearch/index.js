import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue,loading }) {
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}// Aqui se conecta al estado
      onChange={onSearchValueChange}   
      disabled={loading} //Deshabilita en input mientras esta cargando 
    />
  );
}

export { TodoSearch };
