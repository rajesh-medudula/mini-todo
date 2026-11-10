import './List.css'

import { AddTask } from "./AddTask"
import { TaskCard } from './TaskCard'
import { EmptyList } from './EmptyList';

import { useTask } from '../context/TaskContext'

export function List() {
  const {tasks} = useTask();

  return (<section className="list">
    <div className='list__items'>
      <AddTask />
      {tasks.length ? <section className='tasks'>
        {tasks.map((task) => {
          return (<TaskCard key={task.id} task={task}/>)
        })}
      </section> : <EmptyList />}
    </div>
  </section>)
}