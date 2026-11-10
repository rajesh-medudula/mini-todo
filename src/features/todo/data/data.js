const appData = localStorage.getItem("mini-todo-list#193u74");

export const getAppData = () => {
  return appData ? JSON.parse(appData) : [];
};

export const saveAppData = (appData) => {
 localStorage.setItem("mini-todo-list#193u74", JSON.stringify(appData)); 
};

export const getTasks = () => {
  const appData = getAppData();

  return appData ? appData.tasks : [];
}

export const saveTasks = (tasks) => {
  const appData = getAppData();

  const newAppData = {...appData, tasks: [...tasks]};
  saveAppData(newAppData);
}

export const getTaskById = (id) => {
  const tasks = getTasks();

  const match = tasks.find((task) => (task.id === id));

  return match;
}