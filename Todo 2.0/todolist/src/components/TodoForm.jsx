import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
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
      <Stack
        spacing={2}
        direction="flex"
        sx={{ padding: "20px", borderRadius: "10px", alignItems: "center" }}
      >
        <Stack direction="row" spacing={2}>
          <TextField
            id="outlined-basic"
            label="Create a new task..."
            variant="outlined"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{
              maxWidth: "200px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "fourth.main",
                },
                "&:hover fieldset": {
                  borderColor: "fourth.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "fourth.main",
                },
              },
              "& .MuiOutlinedInput-input": {
                color: "#fff",
              },
              "& .MuiInputLabel-root": {
                color: "fourth.main",
                "&.Mui-focused": {
                  color: "fourth.main",
                },
              },
            }}
          />

          <TextField
            label="Category"
            variant="outlined"
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
            sx={{
              maxWidth: "150px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "fourth.main",
                },
                "&:hover fieldset": {
                  borderColor: "fourth.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "fourth.main",
                },
              },
              "& .MuiOutlinedInput-input": {
                color: "#fff",
              },
              "& .MuiInputLabel-root": {
                color: "fourth.main",
                "&.Mui-focused": {
                  color: "fourth.main",
                },
              },
            }}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              minWidth: "35px",
              padding: "0px",
              height: "35px",
              alignSelf: "center",
              borderRadius: "19px",
              backgroundColor: "secondary.main",
              boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            <CheckCircleIcon fontSize="medium" />
          </Button>
        </Stack>
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
            mb: 4,
          }}
        >
          TODO LIST
        </Typography>

        
      </Stack>
    </form>
  );
};

export default TodoForm;
