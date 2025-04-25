import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import theme from "./theme";
import useTodos from "./hooks/use.todo"; 
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  // Custom hook for todos state management
  const { todos, addTodo, removeTodo, completeTodo } = useTodos([
    {
      id: 1,
      text: "Criar funcionalidades x no sistema",
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

  // UI filter, search, and sort states
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("asc");

  return (
    // Applies the custom MUI theme globally
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          bgcolor: "primary.main",
          minHeight: "100vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      > 
        {/* Main app wrapper for responsive max width */}
        <Box sx={{ width: "100%", maxWidth: 1050 }}>
          {/* Task add/search/filter form */}
          <TodoForm
            addTodo={addTodo}
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
          />
          {/* Task list display area with background and padding */}
          <Box
            sx={{
              width: "100%",
              minHeight: "350px",
              mt: 2,
              backgroundColor: "#F2EFE7",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              p: 2,
            }}
          >
            {/* Renders all tasks based on filter/search/sort */}
            <TodoList
              todos={todos}
              filter={filter}
              search={search}
              sort={sort}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default App;
