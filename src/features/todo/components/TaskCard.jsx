import "./TaskCard.css";

import { getGlobalIcon } from "../../../assets/icons";
import { useTask } from "../context/TaskContext";
import { useState } from "react";

export function TaskCard({ task }) {
  const { markTaskComplete, setEditTask, editTask, deleteTask } = useTask();

  const [taskTitle, setTaskTitle] = useState(task.title);

  const handleInput = (e) => {
    const title = e.target.value;

    setTaskTitle(title);
  }

  return (
    <label className="task">
      <input
        className="task__checkbox"
        type="checkbox"
        onChange={() => markTaskComplete(task.id)}
        checked={task.isCompleted} disabled={task.isEditing}
      />
      <span className="task__custom-checkbox">
        {task.isCompleted && getGlobalIcon("check")}
      </span>
      {task.isEditing ? (
        <input
          type="text"
          className="task__title task__title--input"
          onChange={(e) => (handleInput(e))}
          value={taskTitle}
          placeholder="Enter Text"
        />
      ) : (
        <div className="task__title">
          <span>
            {task.title}
          </span>
        </div>
      )}
      {!task.isCompleted && (task.isEditing ? <button className="task__save-edit-btn" onClick={() => {
        editTask(task.id, taskTitle);
        setEditTask(task.id);
      }}>
        {getGlobalIcon("save")}
      </button> : <button className="task__edit-btn" onClick={() => (setEditTask(task.id))}>
        {getGlobalIcon("edit")}
      </button>)}
      {task.isCompleted && <button className="task__delete-btn" onClick={() => deleteTask(task.id)}>
        {getGlobalIcon("trash")}
      </button>}
    </label>
  );
}
