import Sidebar from './components/Sidebar'
import TaskCard from './components/TaskCard'
import './WorkspacePage.css'

const MENU_ITEMS = ['Board', 'Backlog', 'Sprints', 'Pull Requests', 'Settings']

const TASKS = [
  {
    id: 1,
    title: 'Implement JWT refresh token rotation',
    priority: 'High',
    dueDate: 'Nov 28',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Add unit tests for billing webhook handler',
    priority: 'Medium',
    dueDate: 'Nov 30',
    status: 'Todo',
  },
  {
    id: 3,
    title: 'Fix pagination offset bug in /api/projects',
    priority: 'High',
    dueDate: 'Nov 25',
    status: 'Done',
  },
  {
    id: 4,
    title: 'Upgrade Vite and React Router dependencies',
    priority: 'Low',
    dueDate: 'Dec 03',
    status: 'Todo',
  },
  {
    id: 5,
    title: 'Optimize PostgreSQL index for audit logs',
    priority: 'High',
    dueDate: 'Nov 29',
    status: 'In Progress',
  },
  {
    id: 6,
    title: 'Document local Docker Compose setup',
    priority: 'Low',
    dueDate: 'Nov 24',
    status: 'Done',
  },
]

function WorkspacePage() {
  return (
    <div className="workspace-layout">
      <Sidebar appName="DevBoard" menuItems={MENU_ITEMS} />
      <main className="workspace-main">
        <h1 className="workspace-heading">Workspace Tasks</h1>
        <section className="task-grid" aria-label="Task list">
          {TASKS.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              priority={task.priority}
              dueDate={task.dueDate}
              status={task.status}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export default WorkspacePage
