import { Button, Input, HStack } from "@chakra-ui/react";
import { React, useState } from "react";
import { nanoid } from "nanoid";

function Addtodo({ addTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(content);
    const todo = {
      id: nanoid(),
      //install npm i nanoid
      body: content,
    };
    console.log(todo);
    addTodo(todo);
  }
  const [content, setContent] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        {/* hay li fo2 mt hiye padding 8x4 hiye 32 px */}
        <Input
          variant="filled"
          placeholder="Please input new task"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          {" "}
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default Addtodo;
