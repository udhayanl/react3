const STATUS_CLASS_MAP = {
  Todo: 'status-todo',
  'In Progress': 'status-in-progress',
  Done: 'status-done',
}

function StatusBadge({ status }) {
  const statusClass = STATUS_CLASS_MAP[status] || 'status-todo'

  return <span className={`status-badge ${statusClass}`}>{status}</span>
}

export default StatusBadge
