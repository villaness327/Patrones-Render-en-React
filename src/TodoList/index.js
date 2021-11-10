import React from 'react';
import { render } from 'react-dom';
import './TodoList.css'

function TodoList(props) {
  return (
    <section className="TodoList-container">
     
     {props.error && props.onError()}
     {props.loading && props.onLoading()}
     {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
     {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults()}

      <ul>
      {props.searchedTodos.map(todo=>props.render(todo))}
     </ul>
    </section>
  );
}

export { TodoList };
