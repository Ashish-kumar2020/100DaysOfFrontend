import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Button, List, Panel } from "rsuite";
const AllTasks = () => {
  const [displayTodo, setDisplayTodo] = useState([]);
  useEffect(() => {
    const updateTodo = JSON.parse(localStorage.getItem("todos")) || [];
    setDisplayTodo(updateTodo);
  }, []);
  const removeTodo = (index) => {
    const updatedList = displayTodo.filter((_, i) => i !== index);
    setDisplayTodo(updatedList);
    // setTodos(updatedList); // Update state as well
    localStorage.setItem("todos", JSON.stringify(updatedList));
  };
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default AllTasks;
