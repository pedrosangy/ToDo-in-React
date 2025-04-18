import { useState } from "react";
import "@fontsource/roboto/400.css";
import { Box, Container, Typography } from "@mui/material";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import Search from "./components/Search";
import Filter from "./components/Filter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#233142",
    },
    secondary: {
      main: "#455D7A",
    },
    third: {
      main: "#F95959",
    },
    fourth: {
      main: "#E3E3E3",
    },
  },
});

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("asc");

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar jshjuijhnkpdofjihfhfhoh",
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
      text: "Buy breashgdfhejwkdihdfhhfhd",
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
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          bgcolor: "primary.main",
          height: "90vh",
          padding: "20px",
          mt: "20px",
          borderRadius: "10px",
        }}
      >
        <TodoForm addTodo={addTodo} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              width: "1000px",
              height: "300px",

              backgroundColor: "#F2EFE7",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "45px",
                gap: "10px",
                padding: "10px",
                alignContent: "flex-start",
                height: "100%",
                boxSizing: "border-box",
                overflowY: "auto",
                scrollbarWidth: "thin", // Firefox
                "&::-webkit-scrollbar": { width: "6px" }, // Chrome
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#455D7A",
                  borderRadius: "10px",
                },
              }}
            >
              {todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
