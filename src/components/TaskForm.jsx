import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("todo");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Add a task"
          onChange={(e) => handleTaskChange(e)}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>

          <div>
            <select className="task_status" onChange={handleStatusChange}>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              {" "}
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
