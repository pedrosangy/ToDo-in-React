import { Typography, Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  filter,
  search,
  sort,
  removeTodo,
  completeTodo,
}) => {
  // Filter, search, and sort todos
  const filteredTodos = todos
    .filter((todo) =>
      filter === "All"
        ? true
        : filter === "completed"
        ? todo.isCompleted
        : !todo.isCompleted
    )
    .filter(
      (todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase()) ||
        todo.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "asc"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text)
    );

  // Show message if no todos found
  if (filteredTodos.length === 0)
    return (
      <Typography
        sx={{ width: "100%", textAlign: "center", mt: 4, color: "#999" }}
      >
        Nenhuma tarefa encontrada!
      </Typography>
    );

  // Render todos horizontally with animation
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
      }}
    >
      <AnimatePresence>
        {filteredTodos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <TodoItem
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </Box>
  );
};

export default TodoList;
