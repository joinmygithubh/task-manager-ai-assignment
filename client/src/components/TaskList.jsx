// AI-generated, reviewed and modified
import TaskItem from './TaskItem'

function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks found. Add a task to get started!</p>
      </div>
    )
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  )
}

export default TaskList
