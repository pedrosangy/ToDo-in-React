import { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import OrderButtons from "./OrdemButtons";

const TodoForm = ({
  addTodo,
  search,
  setSearch,
  filter,
  setFilter,
  sort,
  setSort,
}) => {
  // Local state for input fields
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  // Handles task submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim() || !category.trim()) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "fourth.main",
          textAlign: "center",
          mt: 2,
          mb: 3,
        }}
      >
        TODO LIST
      </Typography>
      {/* Main form: left (add task) and right (search/filter/order) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 900,
          margin: "0 auto",
          gap: 4,
        }}
      >
        {/* Left column: add new task */}
        <Stack spacing={2} sx={{ width: "240px" }}>
          <TextField
            label="Create a new task..."
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Stack direction="row" spacing={1}>
            <TextField
              label="Category"
              variant="outlined"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ borderRadius: "19px", minWidth: "40px", minHeight: "40px" }}
              aria-label="Add task"
            >
              <CheckCircleIcon />
            </Button>
          </Stack>
        </Stack>

        {/* Right column: search, filter, and order */}
        <Stack spacing={2} sx={{ width: "240px" }}>
          <TextField
            label="Search..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Stack direction="row" spacing={1}>
            <FormControl variant="outlined" sx={{ minWidth: "90px" }}>
              <InputLabel>Filter</InputLabel>
              <Select
                value={filter}
                label="Filter"
                onChange={(e) => setFilter(e.target.value)}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="Incompleted">Incomplete</MenuItem>
              </Select>
            </FormControl>
            {/* Ordering buttons */}
            <OrderButtons sort={sort} setSort={setSort} />
          </Stack>
        </Stack>
      </Box>
    </form>
  );
};
export default TodoForm;
