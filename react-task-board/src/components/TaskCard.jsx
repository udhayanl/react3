import StatusBadge from './StatusBadge'

function TaskCard({ title, priority, dueDate, status }) {
  return (
    <article className="task-card">
      <div className="task-card-header">
        <h3 className="task-title">{title}</h3>
        <StatusBadge status={status} />
      </div>
      <div className="task-meta">
        <p className="task-detail">
          <span className="task-label">Priority:</span> {priority}
        </p>
        <p className="task-detail">
          <span className="task-label">Due:</span> {dueDate}
        </p>
      </div>
    </article>
  )
}

export default TaskCard
