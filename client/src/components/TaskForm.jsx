// AI-generated, reviewed and modified
import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('medium')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  // AI-generated, reviewed and modified
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim()) {
      setError('Task title cannot be empty')
      return
    }

    setSubmitting(true)
    setError('')

    const result = await onAddTask({ title, priority })

    if (result.success) {
      setTitle('')
      setPriority('medium')
    } else {
      setError(result.error || 'Failed to add task')
    }

    setSubmitting(false)
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          className="task-input"
          placeholder="Enter a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={submitting}
        />

        <select
          className="priority-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          disabled={submitting}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          type="submit"
          className="add-button"
          disabled={submitting}
        >
          {submitting ? 'Adding...' : 'Add Task'}
        </button>
      </div>

      {error && <div className="form-error">{error}</div>}
    </form>
  )
}

export default TaskForm
