// AI-generated, reviewed and modified
import { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // AI-generated, reviewed and modified
  // Fetch tasks from API
  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('/api/tasks')

      if (!response.ok) {
        throw new Error('Failed to fetch tasks')
      }

      const result = await response.json()
      setTasks(result.data || [])
    } catch (err) {
      setError(err.message)
      console.error('Error fetching tasks:', err)
    } finally {
      setLoading(false)
    }
  }

  // AI-generated, reviewed and modified
  const handleAddTask = async (taskData) => {
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to add task')
      }

      const result = await response.json()
      setTasks([...tasks, result.data])
      return { success: true }
    } catch (err) {
      console.error('Error adding task:', err)
      return { success: false, error: err.message }
    }
  }

  // AI-generated, reviewed and modified
  const handleToggleComplete = async (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) return

    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !task.completed }),
      })

      if (!response.ok) {
        throw new Error('Failed to update task')
      }

      const result = await response.json()
      setTasks(tasks.map(t => t.id === id ? result.data : t))
    } catch (err) {
      console.error('Error toggling task:', err)
      alert('Failed to update task')
    }
  }

  // AI-generated, reviewed and modified
  const handleDeleteTask = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return
    }

    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete task')
      }

      setTasks(tasks.filter(t => t.id !== id))
    } catch (err) {
      console.error('Error deleting task:', err)
      alert('Failed to delete task')
    }
  }

  // AI-generated, reviewed and modified
  // Filter tasks based on current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true // 'all'
  })

  const taskStats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Task Manager</h1>
        <p className="subtitle">Built with AI-Assisted Development</p>
      </header>

      <main className="app-main">
        <TaskForm onAddTask={handleAddTask} />

        <div className="task-stats">
          <span>Total: {taskStats.total}</span>
          <span>Active: {taskStats.active}</span>
          <span>Completed: {taskStats.completed}</span>
        </div>

        <FilterBar
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        {loading && <div className="loading">Loading tasks...</div>}

        {error && <div className="error">Error: {error}</div>}

        {!loading && !error && (
          <TaskList
            tasks={filteredTasks}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
          />
        )}
      </main>
    </div>
  )
}

export default App
