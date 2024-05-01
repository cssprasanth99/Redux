import { useState } from "react";
import "./App.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  HStack,
  Input,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const todos = useSelector((store) => store);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState({
    title: "",
    status: false,
    id: "",
  });

  const handleInput = (e) => {
    setNewTodo({
      ...newTodo,
      title: e.target.value,
      id: Date.now().toString(), // Generate unique id (string) for each task
    });
  };

  const handleAddTodo = () => {
    if (newTodo.title.trim() !== "") {
      dispatch({ type: "ADD", payload: newTodo });
      setNewTodo({
        title: "",
        status: false,
        id: "",
      });
    }
  };

  const handleUpdateStatus = (taskId) => {
    const updatedTodo = todos.find((todo) => todo.id === taskId);
    if (updatedTodo) {
      const updatedTask = { ...updatedTodo, status: true }; // Update status to 'true' (completed)
      dispatch({ type: "UPDATE", payload: updatedTask });
    }
  };

  const handleDeleteTodo = (taskId) => {
    dispatch({ type: "DELETE", payload: { id: taskId } });
  };

  console.log(todos);

  return (
    <>
      <Card w="600px">
        <CardHeader>
          <Heading>Tasks</Heading>
          <br />
          <HStack>
            <Input
              variant="flushed"
              placeholder="Add task"
              value={newTodo.title}
              onChange={handleInput}
            />
            <Button colorScheme="blue" onClick={handleAddTodo}>
              Add
            </Button>
          </HStack>
        </CardHeader>
        <CardBody>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Title</Th>
                  <Th>Status</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {todos.length > 0 &&
                  todos.map((task, index) => (
                    <Tr key={task.id}>
                      <Td>{index + 1}</Td>
                      <Td>{task.title}</Td>
                      <Td>
                        <Button
                          colorScheme="teal"
                          size="sm"
                          onClick={() => handleUpdateStatus(task.id)}
                        >
                          {task.status ? "Completed" : "Mark as Complete"}
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          colorScheme="teal"
                          size="sm"
                          onClick={() => handleDeleteTodo(task.id)}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </>
  );
}

export default App;
