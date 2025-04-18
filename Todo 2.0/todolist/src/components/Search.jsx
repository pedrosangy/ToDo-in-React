import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Search = ({ search, setSearch, handleKeyDown }) => {
  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{ padding: "20px", borderRadius: "10px" }}
    >
      <Typography
        variant="h6"
        color="fourth.main"
        fontWeight="bold"
        fontFamily={"monospace"}
      >
        Search Todos
      </Typography>

      <TextField
        id="outlined-basic"
        label="Search for Taks..."
        variant="outlined"
        sx={{
          maxWidth: "200px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#F2EFE7", // sua cor secundária
            },
            "&:hover fieldset": {
              borderColor: "#F2EFE7",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#F2EFE7",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#F2EFE7",
            "&.Mui-focused": {
              color: "#F2EFE7",
            },
          },
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown} // adiciona o evento de tecla
      />
    </Stack>
  );
};

export default Search;
