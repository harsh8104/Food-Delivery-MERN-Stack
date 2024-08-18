import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  styled,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const tomatoTheme = createTheme({
  palette: {
    primary: {
      main: "#FF6347",
      light: "#FF8C7F",
      dark: "#CC4F3A",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4CAF50", 
      light: "#81C784",
      dark: "#388E3C",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFF5F5",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const MessageContainer = styled(Paper)(({ theme }) => ({
  height: "60vh",
  overflowY: "auto",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: "15px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}));

const MessageBubble = styled(Paper)(({ theme, isAdmin }) => ({
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(1),
  maxWidth: "70%",
  alignSelf: isAdmin ? "flex-end" : "flex-start",
  backgroundColor: isAdmin
    ? theme.palette.primary.light
    : theme.palette.secondary.light,
  color: isAdmin
    ? theme.palette.primary.contrastText
    : theme.palette.secondary.contrastText,
  borderRadius: isAdmin ? "20px 20px 0 20px" : "20px 20px 20px 0",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.dark,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.dark,
    },
  },
}));

const AdminChat = () => {
  const socket = useMemo(() => io("https://full-stack-1f9p.onrender.com"), []);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server as Admin");
    });

    socket.on("receive-message", ({ message, sender, timestamp }) => {
      setChat((prevChat) => [...prevChat, { message, sender, timestamp }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const timestamp = new Date().toISOString();
      socket.emit("send-message", { message, sender: "Admin", timestamp });
      setMessage("");
    }
  };

  return (
    <ThemeProvider theme={tomatoTheme}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          align="center"
          sx={{ color: "primary.main", fontWeight: "bold", my: 3 }}
        >
          Admin Chat Interface
        </Typography>
        <MessageContainer elevation={3}>
          <List>
            {chat.map((chatMsg, index) => (
              <React.Fragment key={index}>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    flexDirection:
                      chatMsg.sender === "Admin" ? "row-reverse" : "row",
                  }}
                >
                  <MessageBubble
                    isAdmin={chatMsg.sender === "Admin"}
                    elevation={1}
                  >
                    <ListItemText
                      primary={chatMsg.message}
                      secondary={
                        <Typography
                          variant="caption"
                          component="span"
                          sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                        >
                          {chatMsg.sender} •{" "}
                          {new Date(chatMsg.timestamp).toLocaleTimeString()}
                        </Typography>
                      }
                    />
                  </MessageBubble>
                </ListItem>
                {index < chat.length - 1 && (
                  <Divider
                    variant="inset"
                    component="li"
                    sx={{ borderColor: "rgba(0, 0, 0, 0.08)" }}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        </MessageContainer>
        <Box
          component="form"
          onSubmit={sendMessage}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <StyledTextField
            fullWidth
            label="Type a message"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            sx={{ mr: 1 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            sx={{ height: "56px", borderRadius: "28px", px: 3 }}
          >
            Send
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AdminChat;
