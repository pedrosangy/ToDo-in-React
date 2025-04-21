import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Search = ({ search, setSearch,   }) => {
  return (
    <TextField
      label="Search..."
      variant="outlined"
       
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
  );
};

export default Search;
