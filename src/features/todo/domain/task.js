export const createTaskEnity = ({title}) => {
  if (!title.trim()) {
    return;
  }

  return {
    id: crypto.randomUUID(),
    title: title,
    isEditing: false,
    isCompleted: false,
  }
}