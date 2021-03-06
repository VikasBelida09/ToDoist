import React from "react";
import Checkbox from "./Checkbox";
import { useTasks } from "../hooks";
const Tasks = (props) => {
  const { tasks } = useTasks("1");
  console.log(tasks);
  let projectName = "";
  return (
    <div className="tasks" data-testid="tasks">
      <h2>{projectName}</h2>
      <ul className="task__list">
        {tasks.map((task) => (
          <li key={task.id}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
