import React from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="To do" />
        <TaskColumn title="In progress" />
        <TaskColumn title="Done" />
      </main>
    </div>
  );
};

export default App;
