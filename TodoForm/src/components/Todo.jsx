import React from "react";

// Sempre que criar um componente e quiser usar dados de outro componente, deve-se passar como props
// Como exemplo: "const Todo = ({ todo, removeTodo, completeTodo })"

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return ( 
    <div
      className="todo"
      // Faz com que a linha que for isCompleted tenha o textDecoration mudado, caso contrário não acontece nada "".
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content"> 
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div> 
  );
};

export default Todo;