const STORAGE_KEY = "mini-todo-list#193u74";

export const getAppData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  return savedData ? JSON.parse(savedData) : {};
};

export const saveAppData = (appData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
};

export const getTasks = () => getAppData().tasks ?? [];

export const saveTasks = (tasks) => {
  saveAppData({ ...getAppData(), tasks });
};

export const getTaskById = (id) => {
  return getTasks().find((task) => task.id === id);
};