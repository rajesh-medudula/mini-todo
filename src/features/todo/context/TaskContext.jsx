import { createContext, useContext, useEffect, useState } from "react";
import { saveTasks } from "../data/data";
import { getTasks } from "../data/data";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    return getTasks();
  });

  // search task
  const [searchValue, setSearchValue] = useState("");

  const searchTasks = () => {
    const cleanedSearch = searchValue.trim().toLowerCase();

    return tasks.filter((task) => {
      const title = task.title ? task.title.toLowerCase() : "";
      return title.includes(cleanedSearch);
    });
  };



  // add task
  const addTask = (task) => {
    if (!task) return;

    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  // mark task
  const markTaskComplete = (id) => {
    const task = tasks.find((task) => task.id === id);

    if (!task) return;

    task.isCompleted = !task.isCompleted;
    const updatedTasks = [...tasks];
    setTasks(updatedTasks);
  };

  useEffect(() => {
    if (!tasks) return;
      saveTasks(tasks);
  }, [tasks]);

  // edit task
  const setEditTask = (id) => {
    const task = tasks.find((task) => task.id === id);

    if (!task) return;

    task.isEditing = !task.isEditing;
    const updatedTasks = [...tasks];
    setTasks(updatedTasks);
  };

  const editTask = (id, title) => {
    const task = tasks.find((task) => task.id === id);

    if (!task) return;

    task.title = title;
    const updatedTasks = [...tasks];
    setTasks(updatedTasks);
  };

  // delete task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        searchValue,
        searchTasks,
        setSearchValue,
        addTask,
        markTaskComplete,
        setEditTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTask() {
  return useContext(TaskContext);
}
