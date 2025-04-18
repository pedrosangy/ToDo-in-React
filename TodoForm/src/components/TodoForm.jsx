import { useState } from "react";

// Whenever using props, always use ({...})
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    // Primeiro, ele para de atualizar a página e cria uma nova condição caso não escreva nada nos inputs
    e.preventDefault();
    if (!value || !category) return;

    // Aqui está chamando a função addTodo do componente pai e passando os valores
    addTodo(value, category);
    // Depois que tudo for feito, ele atualiza o state para limpar os campos
    setValue("");
    setCategory("");
  }; 

  return (
    <div className="todo-form">
      <h2>Create Task:</h2>
      {/* onSubmit é usado para dar um evento quando o formulário é submetido, colocando dentro das chaves */}
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          placeholder="Task"
          value={value}
          // Essa função faz com que o valor do input seja atualizado pelo que está sendo escrito
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="work">Work</option>
          <option value="study">Study</option>
          <option value="reading">Reading</option>
        </select>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};


export default TodoForm;
