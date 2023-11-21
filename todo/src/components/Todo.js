import React from "react";
// import Header from "./Header";
import Body from "./Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./AddTodo";

const Todo = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/addtodo" element={<AddTodo />} />
      </Routes>
    </Router>
  );
};

export default Todo;
