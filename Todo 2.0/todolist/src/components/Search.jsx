import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Filter from "./Filter";

const Search = ({ search, setSearch, filter, setFilter, setSort }) => {
  return (
    <Stack>
      <TextField
        label="Search..."
        variant="outlined"
        required
        onChange={(e) => setCategory(e.target.value)}
        sx={{
          marginTop: "25px",
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
      <Stack>
        
      </Stack>
    </Stack>
  );
};

export default Search;
