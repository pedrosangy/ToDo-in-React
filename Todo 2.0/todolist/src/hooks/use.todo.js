import { useState, useEffect } from "react";

const useTodos = () => {
  // Load todos from localStorage on first render
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo to the list
  const addTodo = (text, category) => setTodos([
    ...todos,
    { id: Date.now(), text, category, isCompleted: false }
  ]);

  // Remove a todo by id
  const removeTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));

  // Toggle completion status of a todo
  const completeTodo = (id) =>
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));

  // Expose todos state and actions
  return { todos, addTodo, removeTodo, completeTodo };
};

export default useTodos;
