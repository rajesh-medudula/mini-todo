import { createContext, useContext, useEffect, useState } from "react";
import { saveTasks } from "../data/data";
import { getTasks } from "../data/data";

const TaskContext = createContext(null);

export function TaskProvider({children}) {
  
  const [tasks, setTasks] = useState(() => {
    return getTasks();
  });

  // add task
  const addTask = (task) => {
    if (!task) return;

    setTasks((prevTasks) => {
      return [...prevTasks, task];
    })
  }

  // mark task
  const markTaskComplete = (id) => {
    const task = tasks.find((task) => (task.id === id));

    if (!task) return;
    
    task.isCompleted = !task.isCompleted;
    const updatedTasks = [...tasks];
    setTasks(updatedTasks);
  }

  useEffect(() => {
    if (!tasks) return;

    saveTasks(tasks);
  });

  // edit task
  const setEditTask = (id) => {
    const task = tasks.find((task) => (task.id === id));

    if (!task) return;

    task.isEditing = !task.isEditing;
    const updatedTasks = [...tasks];
    setTasks(updatedTasks);
  }

  const editTask = (id, title) => {
    const task = tasks.find((task) => (task.id === id));

    if (!task) return;

    task.title = title;
    const updatedTasks = [...tasks];
    setTasks(updatedTasks);
  } 

  // delete task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => (task.id !== id));

    setTasks(updatedTasks);
  }
  
  
  return <TaskContext.Provider value={{tasks, addTask, markTaskComplete, setEditTask, editTask , deleteTask}}>
    {children}
  </TaskContext.Provider>
}

export function useTask() {
  return useContext(TaskContext);
}