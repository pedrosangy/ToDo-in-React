import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { useState } from "react";

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
    <Stack
      spacing={2}
      direction="column"
      sx={{ padding: "20px", borderRadius: "10px", alignItems: "center" }}
    >
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
      <Stack sx={{ display: "flex", gap: 2 }} direction="row" onChange={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Create a new task..."
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          sx={{
            maxWidth: "200px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "fourth.main", // sua cor secundária
              },
              "&:hover fieldset": {
                borderColor: "fourth.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "fourth.main",
              },
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
          <CheckCircleIcon fontSize="medium" color="third.main" />
        </Button>
      </Stack>
      
    </Stack>
  );
};
 
export default TodoForm;
