import {
  Box,
  IconButton,
  Typography,
  Stack,
  Modal,
  Button,
} from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

const TodoItem = ({ todo, removeTodo, completeTodo }) => {
  // State for modal open/close
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* Card displaying the todo info */}
      <Box
        sx={{
          width: "180px",
          minHeight: "120px",
          padding: "14px",
          borderRadius: "10px",
          backgroundColor: "#455D7A",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          overflow: "hidden",
          marginRight: "10px",
          position: "relative",
        }}
      >
        {/* Expand actions modal */}
        <IconButton
          size="small"
          onClick={() => setOpen(true)}
          aria-label="Show actions"
          sx={{
            color: "#fff",
            background: "transparent",
            position: "absolute",
            top: "5px",
            right: "5px",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>

        {/* Task text, with strikethrough if completed */}
        <Typography
          variant="h6"
          color="fourth.main"
          sx={{
            wordWrap: "break-word",
            fontSize: "1rem",
            marginBottom: 1,
            textDecoration: todo.isCompleted ? "line-through" : "none",
          }}
        >
          {todo.text}
        </Typography>

        {/* Task category */}
        <Typography variant="body2" sx={{ color: "#FFEB00", mb: 1 }}>
          ({todo.category})
        </Typography>

        {/* Completion icon (color depends on status) */}
        <DoneAllIcon
          sx={{
            position: "absolute",
            right: "10px",
            bottom: "5px",
            color: todo.isCompleted ? "#06D001" : "#A0A0A0",
            opacity: todo.isCompleted ? 1 : 0.3,
          }}
        />
      </Box>

      {/* Modal for actions (complete/remove) */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 240,
            bgcolor: "background.paper",
            border: "2px solid #455D7A",
            borderRadius: "10px",
            boxShadow: 24,
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6">Actions</Typography>
          <Stack direction="column" spacing={1}>
            {/* Complete task button */}
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                completeTodo(todo.id);
                setOpen(false);
              }}
              startIcon={<CheckCircleIcon />}
            >
              Complete
            </Button>
            {/* Remove task button */}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                removeTodo(todo.id);
                setOpen(false);
              }}
              startIcon={<RemoveCircleIcon />}
            >
              Remove
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
export default TodoItem;
