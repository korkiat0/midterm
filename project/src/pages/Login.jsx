import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleChangUser = (e) => setUserName(e.target.value);
  const handleChangPassWord = (e) => setPassword(e.target.value);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (username === "qwerty" && password === "1234") {
      navigate("/todolist");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={2}
      width={500}
      margin="0 auto "
      border={2}
      padding={5}
    >
      <h1>Welcome</h1>
      <TextField label="username" value={username} onChange={handleChangUser} />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handleChangPassWord}
      />
      <Button variant="contained" onClick={handleSubmitLogin}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
