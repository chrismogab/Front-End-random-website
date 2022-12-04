import { React } from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  Icon,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

// hstack yaane hotizontal stack
//vstack yaane vertical stack

function Todolist({ todos, deleteTodo }) {
  //aw fik thota if (!todos.length)......
  if (todos.length === 0) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        YOU HAVE NO TASKS
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      width="30%"
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default Todolist;
