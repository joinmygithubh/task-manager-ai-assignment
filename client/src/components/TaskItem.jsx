// AI-generated, reviewed and modified
function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  const priorityColors = {
    low: '#4caf50',
    medium: '#ff9800',
    high: '#f44336'
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-left">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <div className="task-content">
          <span className="task-title">{task.title}</span>
          <span
            className="priority-badge"
            style={{ backgroundColor: priorityColors[task.priority] }}
          >
            {task.priority}
          </span>
        </div>
      </div>

      <button
        className="delete-button"
        onClick={() => onDeleteTask(task.id)}
        aria-label="Delete task"
      >
        🗑️
      </button>
    </div>
  )
}

export default TaskItem
