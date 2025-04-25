import { Button, ButtonGroup } from "@mui/material";

// Buttons to control alphabetical sort order
const OrderButtons = ({ sort, setSort }) => (
  <ButtonGroup size="small" variant="outlined">
    {/* Ascending order button */}
    <Button
      variant={sort === "asc" ? "contained" : "outlined"}
      color="secondary"
      sx={{
        border: sort === "asc" ? undefined : "1px solid #455D7A",
        color: sort === "asc" ? "#fff" : "#455D7A",
        backgroundColor: sort === "asc" ? "#455D7A" : "transparent",
      }}
      onClick={() => setSort("asc")}
      aria-label="Order ascending"
    >
      Asc
    </Button>
    {/* Descending order button */}
    <Button
      variant={sort === "desc" ? "contained" : "outlined"}
      color="secondary"
      sx={{
        border: sort === "desc" ? undefined : "1px solid #455D7A",
        color: sort === "desc" ? "#fff" : "#455D7A",
        backgroundColor: sort === "desc" ? "#455D7A" : "transparent",
      }}
      onClick={() => setSort("desc")}
      aria-label="Order descending"
    >
      Desc
    </Button>
  </ButtonGroup>
);

export default OrderButtons;
