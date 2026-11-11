import './List.css'

import { AddTask } from "./AddTask"
import { TaskCard } from './TaskCard'
import { EmptyList } from './EmptyList';

import { useTask } from '../context/TaskContext'

export function List() {
  const {tasks, searchValue, searchTasks} = useTask();
  const searchedTasks = searchTasks() || [];
  const currentTasks = searchValue ? searchedTasks : tasks || [];

  return (<section className="list">
    <div className='list__items'>
      {!searchValue ? (
  <>
    <AddTask />
    {currentTasks.length ? (
      <section className='tasks'>
        {currentTasks.map((task) => {
          return <TaskCard key={task.id} task={task} />
        })}
      </section>
    ) : (
      <EmptyList content={{title: "No Tasks!", subTitle: "Add tasks to track."}}/>
    )}
  </>
) : (<>
  {currentTasks.length ? (
      <section className='tasks'>
        {currentTasks.map((task) => {
          return <TaskCard key={task.id} task={task} />
        })}
      </section>
    ) : (
      <EmptyList content={{title: "No Tasks Found!", subTitle: ""}}/>
    )}
</>)}
    </div>
  </section>)
}