import React from "react";
import { Button, ButtonToolbar } from "rsuite";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="todo-body">
        <ButtonToolbar>
          <Button
            color="green"
            appearance="primary"
            style={{ width: 200, height: 100, borderRadius: 22 }}
            onClick={() => {
              navigate("/addtodo");
            }}
          >
            ADD TASK
          </Button>
          <Button
            color="cyan"
            appearance="primary"
            style={{ width: 200, height: 100, borderRadius: 22 }}
            disabled
            onClick={() => {
              navigate("/todaytasks");
            }}
          >
            TODAY
          </Button>
          <Button
            color="yellow"
            appearance="primary"
            style={{ width: 200, height: 100, borderRadius: 22 }}
            onClick={() => {
              navigate("/alltasks");
            }}
          >
            ALL TASKS
          </Button>
          <Button
            color="red"
            appearance="primary"
            style={{ width: 200, height: 100, borderRadius: 22 }}
            onClick={() => {
              navigate("/upcomingtask");
            }}
          >
            UPCOMMING
          </Button>
        </ButtonToolbar>
      </div>
    </>
  );
};

export default Body;
