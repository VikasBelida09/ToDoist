import { collatedTasks } from "../Constants";
export const collatedTasksExists = (selectedProject) =>
  collatedTasks.find((task) => task.key === selectedProject);
