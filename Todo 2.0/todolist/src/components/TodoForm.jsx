import {
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useState } from "react";

const TodoForm = ({
  addTodo,
  search,
  setSearch,
  filter,
  setFilter,
  sort,
  setSort,
}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TÍTULO CENTRALIZADO */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "fourth.main",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          textAlign: "center",
          mt: 2,
          mb: 2,
        }}
      >
        TODO LIST
      </Typography>
      {/* ÁREA DE CAMPOS */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 4,
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {/* COLUNA ESQUERDA */}
        <Stack spacing={2} sx={{ width: "250px" }}>
          <TextField
            label="Create a new task..."
            variant="outlined"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "fourth.main" },
                "&:hover fieldset": { borderColor: "fourth.main" },
                "&.Mui-focused fieldset": { borderColor: "fourth.main" },
              },
              "& .MuiOutlinedInput-input": { color: "#fff" },
              "& .MuiInputLabel-root": {
                color: "fourth.main",
                "&.Mui-focused": { color: "fourth.main" },
              },
            }}
          />
          <Stack direction="row" spacing={2}>
            <TextField
              label="Category"
              variant="outlined"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "fourth.main" },
                  "&:hover fieldset": { borderColor: "fourth.main" },
                  "&.Mui-focused fieldset": { borderColor: "fourth.main" },
                },
                "& .MuiOutlinedInput-input": { color: "#fff" },
                "& .MuiInputLabel-root": {
                  color: "fourth.main",
                  "&.Mui-focused": { color: "fourth.main" },
                },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                borderRadius: "19px",
                backgroundColor: "secondary.main",
                boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                minWidth: "40px",
                minHeight: "40px",
                alignSelf: "center",
              }}
            >
              <CheckCircleIcon fontSize="medium" />
            </Button>
          </Stack>
        </Stack>

        {/* ESPAÇO FLEXÍVEL NO MEIO */}
        <Box sx={{ flex: 1 }} />

        {/* COLUNA DIREITA */}
        <Stack spacing={2} sx={{ width: "250px" }}>
          <TextField
            label="Search..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "fourth.main" },
                "&:hover fieldset": { borderColor: "fourth.main" },
                "&.Mui-focused fieldset": { borderColor: "fourth.main" },
              },
              "& .MuiOutlinedInput-input": { color: "#fff" },
              "& .MuiInputLabel-root": {
                color: "fourth.main",
                "&.Mui-focused": { color: "fourth.main" },
              },
            }}
          />
          <Stack direction="row" spacing={1}>
            <FormControl
              variant="outlined"
              sx={{
                minWidth: "110px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "fourth.main" },
                  "&:hover fieldset": { borderColor: "fourth.main" },
                  "&.Mui-focused fieldset": { borderColor: "fourth.main" },
                  color: "#fff", // <-- cor do texto selecionado!
                },
                "& .MuiInputLabel-root": {
                  color: "fourth.main",
                  "&.Mui-focused": { color: "fourth.main" },
                },
                "& .MuiSelect-select": {
                  color: "#fff", // <-- cor do valor selecionado!
                  backgroundColor: "transparent",
                },
                "& .MuiSvgIcon-root": {
                  color: "#fff", // cor da setinha do select
                },
              }}
            >
              <InputLabel>Filter</InputLabel>
              <Select
                value={filter}
                label="Filter"
                onChange={(e) => setFilter(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: "primary.main", // cor de fundo do dropdown
                      color: "#fff", // cor do texto dos itens
                    },
                  },
                }}
              >
                <MenuItem value="All" sx={{ color: "#fff" }}>
                  All
                </MenuItem>
                <MenuItem value="completed" sx={{ color: "#fff" }}>
                  Completed
                </MenuItem>
                <MenuItem value="Incompleted" sx={{ color: "#fff" }}>
                  Incomplete
                </MenuItem>
              </Select>
            </FormControl>

            <Button
              size="small"
              color="secondary"
              variant={sort === "asc" ? "contained" : "outlined"}
              onClick={() => setSort("asc")}
            >
              Asc
            </Button>
            <Button
              size="small"
              color="secondary"
              variant={sort === "desc" ? "contained" : "outlined"}
              onClick={() => setSort("desc")}
            >
              Desc
            </Button>
          </Stack>
        </Stack>
      </Box>
    </form>
  );
};

export default TodoForm;
