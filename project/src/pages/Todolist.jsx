/* eslint-disable react/jsx-key */
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function Todolist() {
  const [Todostate, setTodostate] = useState([]);

  const fetData = async () => {
    try {
      const response = await axios.get(
        `https://cc17-assessment-api.onrender.com/v1/todo?userId=34`
      );
      const dataTodo = response.data.data;
      console.log(dataTodo);
      setTodostate(dataTodo);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (todoID) => {
    try {
      const response = await axios.delete(
        `https://cc17-assessment-api.onrender.com/v1/todo/${todoID}?userId=34 `
      );
      console.log(response.data);
      const newTodo = [...Todostate];
      const findIndex = newTodo.findIndex((item) => item.id === todoID);
      if (findIndex !== -1) {
        newTodo.splice(findIndex, 1);
        setTodostate(newTodo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [input, setInput] = useState("");

  const handleChangInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = async () => {
    try {
      const response = await axios.post(
        `https://cc17-assessment-api.onrender.com/v1/todo?userId=34`,
        {
          title: input,
        }
      );
      console.log(response.data);

      setTodostate([response.data.data, ...Todostate]);
    } catch (error) {
      console.log(error);
    }
    setInput(" ");
  };

  const editData = async (todoID) => {
    try {
      const response = await axios.patch(
        `https://cc17-assessment-api.onrender.com/v1/todo/${todoID}?userId=34`,
        {
          title: input,
        }
      );
      console.log(response.data, todoID);
      const updateEditTodo = [...Todostate];
      const findIndex = updateEditTodo.findIndex((item) => item.id === todoID);
      if (findIndex !== -1) {
        updateEditTodo[findIndex].title = input;
        setInput(updateEditTodo);
      }
    } catch (error) {
      console.log(error);
    }
    setInput("");
  };

  useEffect(() => {
    fetData();
  }, []);

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
      padding={2}
    >
      <h1>TodoList</h1>
      <Box gap={1} display={"flex"}>
        <TextField label="input" size="small" onChange={handleChangInput} />
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={addTodo}
        >
          Add
        </Button>
      </Box>
      <ul>
        {Todostate?.map((item, index) => (
          <Box display={"flex"} gap={1} padding={1} key={index}>
            {item.title}
            <br />

            <Button
              onClick={() => editData(item.id)}
              variant="contained"
              size="small"
            >
              edit
            </Button>
            <Button
              onClick={() => deleteTodo(item.id)}
              variant="contained"
              color="error"
              size="small"
            >
              Del
            </Button>
          </Box>
        ))}
      </ul>

      <Button
        variant="contained"
        color="error"
        href="http://localhost:5173/login"
      >
        LOG OUT
      </Button>
    </Box>
  );
}

export default Todolist;
