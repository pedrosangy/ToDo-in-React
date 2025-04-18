import { useState } from "react";
import "./App.css";
import Todo from "./components/todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/filter";

function App() {
  // hooks servem para facilitar a reutilizacao de metodos
  //  ou funcoes dentro de um codigo. quando quiser ver apenas o valor atual
  // chame "todos" e quando quiser alterar o valor chame "setTodos"
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("asc");

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidades x no sistema ",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Buy eggs",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Buy bread",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    //essa funcao cria um novo modelo de To Do e adiciona ele ao array de ToDo's
    // assim quando formos criar um novo To Do, ele sera chamado e apenas usar a props text e category
    // que esta sendo atualizado dentro do component TodoForm
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random(), 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodo);
  };
  //essa funcao remove o To Do que foi selecionado com base no id
  const removeTodo = (id) => {
    const newTodos = [...todos];
    // filtra todos os To Do's que não tem o id que foi selecionado e deixa,
    //  caso for igual ao selecionado , ele é removido ou seja, null.
    const filterTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filterTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      // se o todo id for igual o id no array de dado , o tod. isCompleted q atualmente e false, passa a ser true ou seja , alterna
      //  dando a possibilidade de quando clicar dnv voltar a ser false voltando ao que era antes
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>To Do List.</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) => 
            //se a escolha for all retorna true e nao faz nada, se a opcao for completed retorna todos que estao riscados
            // se nao retorna os que nao estao riscados
            filter === "All"
              ? true
              : filter === "completed"
              ? todo.isCompleted
              : !isCompleted
          )
          .filter((todo) =>
            // se o texto do todo for igual ao texto que foi pesquisado no "search", ele sera exibido
            // colocando tudo em maiusculo para padronizar
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          //localeCompare compara duas palavras e ve qual vem primeiro alfabeticamente
          //metodo sort ordena em positivo ou negativo, sendo positivo sempre depois de negativo
          // se o resultado da comparacao usando localeCompare for positivo , ou seja a palavra A vier depois de palavra B alfabeticamentee
          // o metodo sort coloca a palavra A depois de B, assim colcando em ordem alfabetica.
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
            .map((todo) => (
              <Todo
                // toda vez que importar um componente filho,
                //  é necessário passar as props das funcoes
                // que o elemento filho esta usando do elemtento pai,
                // como "removoTodo" e etc

                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
