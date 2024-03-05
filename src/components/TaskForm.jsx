import React from "react";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input type="text" className="task_input" placeholder="Add a task" />
        <div className="task_form_bottom_line">
          <button className="tag">HTML</button>
          <button className="tag">CSS</button>
          <button className="tag">JavaScript</button>
          <button className="tag">React</button>

          <select className="task_status">
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <button type="submit" className="task_submit"> + Add Task</button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
