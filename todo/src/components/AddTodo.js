import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Input, Button, ButtonToolbar, List, Panel } from "rsuite";

const AddTodo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [displayTodo, setDisplayTodo] = useState([]);

  useEffect(() => {
    const updatedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(updatedTodos);
    setDisplayTodo(updatedTodos);
  }, []);

  const addTodo = () => {
    if (newTodo.length > 0) {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setDisplayTodo(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setNewTodo("");
    } else {
      alert("please enter a task");
    }
  };

  const removeTodo = (index) => {
    const updatedList = displayTodo.filter((_, i) => i !== index);
    setDisplayTodo(updatedList);
    setTodos(updatedList); // Update state as well
    localStorage.setItem("todos", JSON.stringify(updatedList));
  };

  return (
    <>
      <Header />
      <div className="todo-body">
        <Input
          as="textarea"
          rows={3}
          placeholder="Add Todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e)}
          style={{ width: 900, fontSize: 16 }}
        />
        <ButtonToolbar>
          <Button
            color="blue"
            appearance="primary"
            style={{ marginLeft: 30, width: 150, height: 70 }}
            onClick={addTodo}
          >
            Add Todo
          </Button>
        </ButtonToolbar>
      </div>

      <div className="todo-list">
        <Panel header="Todos" bordered style={{ width: 800 }}>
          <List size="sm">
            {displayTodo.map((item, index) => (
              <List.Item
                key={index}
                index={index}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>{item}</div>
                <Button
                  color="red"
                  appearance="primary"
                  onClick={() => removeTodo(index)}
                >
                  Remove
                </Button>
              </List.Item>
            ))}
          </List>
        </Panel>
      </div>
    </>
  );
};

export default AddTodo;
