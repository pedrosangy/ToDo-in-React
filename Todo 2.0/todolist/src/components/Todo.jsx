import { Box, IconButton, Modal, Stack, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useState } from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "150px",
          minHeight: "135px",
          padding: "15px",
          borderRadius: "10px",
          backgroundColor: "#455D7A",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          boxSizing: "border-box",
          overflow: "hidden",
          marginRight: "5px",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          color="fourth.main"
          sx={{
            wordWrap: "break-word",
            overflow: "hidden",
            fontSize: "1rem",
          }}
        >
          {todo.text}
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: "third.main" }}>
          ({todo.category})
        </Typography>
      </Box>

      <IconButton
        color="primary"
        onClick={handleOpen}
        sx={{
          backgroundColor: "white",
          "&:hover": { backgroundColor: "#e0e0e0" },
        }}
      >
        <MoreHorizIcon />
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 250,
            bgcolor: "background.paper",
            border: "2px solid #455D7A",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            Ações
          </Typography>
          <Stack direction="column" spacing={1} alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                completeTodo(todo.id);
                handleClose();
              }}
              startIcon={<CheckCircleIcon />}
            >
              Completar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                removeTodo(todo.id);
                handleClose();
              }}
              startIcon={<RemoveCircleIcon />}
            >
              Remover
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default Todo;
