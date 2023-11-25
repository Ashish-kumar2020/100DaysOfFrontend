import React from "react";
// import Header from "./Header";
import Body from "./Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./AddTodo";
import AllTasks from "./AllTasks";
import TodayTask from "./TodayTask";
import TodoCalendar from "./TodoCalendar";

const Todo = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/alltasks" element={<AllTasks />} />
        <Route path="/todaytasks" element={<TodayTask />} />
        <Route path="/upcomingtask" element={<TodoCalendar />} />
      </Routes>
    </Router>
  );
};

export default Todo;
