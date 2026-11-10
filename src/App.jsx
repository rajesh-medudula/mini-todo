import './styles/index.css'

import { Header } from './components/Header/Header'
import { List } from './features/todo/components/List'
import { TaskProvider } from './features/todo/context/TaskContext'

function App() {
  return (
    <div>
      <TaskProvider>
        <Header />
        <List />
      </TaskProvider>
    </div>
  )
}

export default App
