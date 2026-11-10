import "./AddTask.css";

import { getGlobalIcon } from "../../../assets/icons";
import { useTask } from "../context/TaskContext";
import { createTaskEnity } from "../domain/task";
import { useState } from "react";

export function AddTask() {
  const { addTask } = useTask();

  const [title, setTitle] = useState("");

  const newTask = createTaskEnity({title: title});

  const addTaskToList = () => {
    addTask(newTask);
    setTitle("");
  }

  return (
    <section className="add-task">
      <label className="add-task__label" htmlFor="add-task__input">
        Create Task
      </label>
      <div className="add-task__content">
        <input
          id="add-task__input"
          type="text"
          placeholder="Enter Task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="add-task__btn" onClick={addTaskToList}>{getGlobalIcon("plus")}</button>
      </div>
    </section>
  );
}
