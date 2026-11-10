import './List.css'

import { AddTask } from "./AddTask"
import { TaskCard } from './TaskCard'
import { EmptyList } from './EmptyList';

import { useTask } from '../context/TaskContext'

export function List() {
  const {tasks, searchValue, searchTasks} = useTask();

  return (<section className="list">
    <div className='list__items'>
      {!searchValue ? (
  <>
    <AddTask />
    {tasks.length ? (
      <section className='tasks'>
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />
        })}
      </section>
    ) : (
      <EmptyList content={{title: "No Tasks!", subTitle: "Add tasks to track."}}/>
    )}
  </>
) : (<>
  {searchTasks().length ? (
      <section className='tasks'>
        {searchTasks().map((task) => {
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