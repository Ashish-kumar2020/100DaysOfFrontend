import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Input, Button } from "rsuite";
import Header from "./Header";

const TodoCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newTodoDate, setNewTodoDate] = useState(null);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    // Load todos from local storage when component mounts
    try {
      const storedTodos = JSON.parse(localStorage.getItem("todoss")) || [];
      setEvents(storedTodos);
    } catch (error) {
      console.error("Error loading todos from local storage:", error);
    }
  }, []); // Run only on mount

  const saveToLocalStorage = (updatedEvents) => {
    // Save todos to local storage
    try {
      localStorage.setItem("todoss", JSON.stringify(updatedEvents));
    } catch (error) {
      console.error("Error saving todos to local storage:", error);
    }
  };

  const handleDateClick = (arg) => {
    setNewTodoDate(arg.date);
  };

  const handleTitleChange = (value) => {
    setNewTodoTitle(value);
  };

  const handleAddTodo = () => {
    if (newTodoTitle.trim() && newTodoDate) {
      const newEvent = {
        title: newTodoTitle,
        date: newTodoDate,
      };
      setEvents((prevEvents) => {
        const updatedEvents = [...prevEvents, newEvent];
        saveToLocalStorage(updatedEvents);
        return updatedEvents;
      });
      setNewTodoTitle("");
      setNewTodoDate(null);
    }
  };

  const handleEventClick = (info) => {
    const shouldDelete = window.confirm(
      `Do you want to delete the todo: "${info.event.title}"?`
    );
    if (shouldDelete) {
      const updatedEvents = events.filter(
        (event) => event !== info.event.toPlainObject()
      );
      setEvents(updatedEvents);
      saveToLocalStorage(updatedEvents);
    }
  };

  return (
    <div>
      <Header />
      {newTodoDate && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Selected Date: {newTodoDate.toDateString()}</p>
          <Input
            type="text"
            placeholder="Enter Todo"
            value={newTodoTitle}
            onChange={handleTitleChange}
            style={{ width: "600px", margin: "30px" }}
          />
          <Button appearance="primary" onClick={handleAddTodo}>
            Add Todo
          </Button>
        </div>
      )}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        height="600px"
      />
    </div>
  );
};

export default TodoCalendar;
