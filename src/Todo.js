import { React, useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import Todolist from "./Todolist";
import Addtodo from "./Addtodo";
import { VStack, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { toBeDisabled } from "@testing-library/jest-dom/dist/matchers";
// run npm i reat-icons
// npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

function Todo() {
  const initialTodos = [
    {
      id: 1,
      body: "Study React.js",
    },
    {
      id: 2,
      body: "Walk the dog! ",
    },
    {
      id: 3,
      body: "Finish work",
    },
    {
      id: 4,
      body: " Apply for jobs",
    },
  ];
  const [todos, settodos] = useState(initialTodos);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    settodos(newTodos);
  }

  function addTodo(todo) {
    settodos([...todos, todo]);
  }
  return (
    <VStack>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <Todolist todos={todos} deleteTodo={deleteTodo} />
      <Addtodo addTodo={addTodo} />
    </VStack>
  );
}

export default Todo;
