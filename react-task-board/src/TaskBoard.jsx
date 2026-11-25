import Sidebar from './Sidebar'
import TaskCard from './TaskCard'
import './TaskBoard.css'
function TaskBoard() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <h1>Tasks</h1>
        <div className="cards">
          <TaskCard title="Finish DSA lab assignment" status="Todo" />
          <TaskCard title="Build React portfolio page" status="In Progress" />
          <TaskCard title="Study OS process scheduling" status="Todo" />
          <TaskCard title="Push Git homework repo" status="Done" />
        </div>
      </main>
    </div>
  )
}
export default TaskBoard
