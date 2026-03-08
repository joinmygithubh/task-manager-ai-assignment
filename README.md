# Task Manager - AI-Assisted Development Assignment

A full-stack task management application built with React and Express, developed as part of a hands-on assignment exploring AI-assisted development practices.

## 🎯 Project Overview

This project demonstrates:
- Building a complete CRUD application with AI assistance
- Critical evaluation of AI-generated code
- Best practices for reviewing and refining AI suggestions
- Full-stack development with modern JavaScript

## 🚀 Features

- ✅ Create new tasks with title and priority (low, medium, high)
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks with confirmation
- ✅ Filter tasks by status (All, Active, Completed)
- ✅ Real-time task statistics
- ✅ Responsive design with clean UI
- ✅ Full error handling and input validation

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite (build tool)
- CSS3 (custom styling)

**Backend:**
- Node.js
- Express.js
- In-memory data storage (no database required)
- CORS enabled for local development

## 📋 Prerequisites

Before running this project, make sure you have installed:
- Node.js (v16 or higher)
- npm (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

## 🔧 Installation & Setup

### 1. Clone or Download the Repository

```bash
# If using git
git clone <repository-url>
cd task-manager-ai-assignment

# Or simply extract the ZIP file and navigate to the folder
cd task-manager-ai-assignment
```

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Install Frontend Dependencies

```bash
cd client
npm install
cd ..
```

## ▶️ Running the Application

### Option 1: Run Both Server and Client Concurrently (Recommended)

From the root directory:

```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend dev server on `http://localhost:3000`

### Option 2: Run Server and Client Separately

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run client
```

## 🌐 Accessing the Application

Once both servers are running, open your browser and navigate to:

```
http://localhost:3000
```

You should see the Task Manager interface with sample tasks.

## 📁 Project Structure

```
task-manager-ai-assignment/
├── server/
│   └── index.js              # Express API server
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx      # Form to add new tasks
│   │   │   ├── TaskList.jsx      # List container component
│   │   │   ├── TaskItem.jsx      # Individual task component
│   │   │   └── FilterBar.jsx     # Filter buttons component
│   │   ├── App.jsx               # Main application component
│   │   ├── App.css               # Application styles
│   │   ├── index.css             # Global styles
│   │   └── main.jsx              # React entry point
│   ├── index.html                # HTML template
│   ├── vite.config.js            # Vite configuration
│   └── package.json              # Frontend dependencies
├── code-review.md                # AI code review findings
├── reflection.md                 # Development reflection
├── package.json                  # Backend dependencies
└── README.md                     # This file
```

## 🔌 API Endpoints

The backend exposes the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create a new task |
| PATCH | `/api/tasks/:id` | Update a task (toggle complete) |
| DELETE | `/api/tasks/:id` | Delete a task |
| GET | `/api/health` | Health check endpoint |

### Example API Usage

**Create a Task:**
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn React", "priority": "high"}'
```

**Get All Tasks:**
```bash
curl http://localhost:5000/api/tasks
```

## 🧪 Testing the Application

### Manual Testing Checklist

- [ ] Add a new task with different priorities
- [ ] Mark a task as complete
- [ ] Unmark a completed task
- [ ] Delete a task (should show confirmation)
- [ ] Filter by "All" / "Active" / "Completed"
- [ ] Try to submit an empty task (should show error)
- [ ] Check that stats update correctly

### Edge Cases to Test

- Submit a task with only spaces (should be rejected)
- Create multiple tasks and verify unique IDs
- Toggle completion status multiple times
- Delete all tasks and verify empty state

## 📚 Assignment Documentation

This project includes comprehensive documentation as required by the assignment:

1. **code-review.md** - Detailed analysis of AI-generated code issues, including:
   - Missing React keys in lists
   - Incomplete error handling
   - Input sanitization problems
   - State mutation issues
   - Edge case handling

2. **reflection.md** - Personal reflection on AI-assisted development, covering:
   - Where AI saved time
   - Where AI made mistakes
   - How AI changed the workflow
   - Advice for junior developers

## 🤖 AI Usage Notes

Throughout this codebase, sections marked with `// AI-generated, reviewed and modified` indicate code that was initially generated by AI assistance tools (like Cursor or GitHub Copilot) and then reviewed and refined by hand.

Key learnings:
- AI excels at boilerplate and standard patterns
- AI often misses edge cases and security considerations
- Human review is essential for production-quality code
- Understanding fundamentals is crucial for effective AI collaboration

## 🐛 Troubleshooting

### Port Already in Use

If port 5000 or 3000 is already in use:

**For Backend:**
```bash
PORT=5001 npm run server
```
Then update `vite.config.js` proxy target to `http://localhost:5001`

**For Frontend:**
Update `vite.config.js` server port to 3001

### CORS Issues

If you encounter CORS errors, ensure:
1. Backend is running on port 5000
2. `cors` package is installed
3. Vite proxy is configured correctly in `vite.config.js`

### Dependencies Not Installing

Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

## 🎓 Learning Outcomes

By working with this project, you will learn:
- Full-stack JavaScript development
- RESTful API design
- React state management with hooks
- Form handling and validation
- Error handling in async operations
- Critical evaluation of AI-generated code
- Code review best practices

## 📝 License

MIT License - feel free to use this project for learning purposes.

## 👤 Author

[Your Name]
[Your GitHub Profile]

**Assignment:** Full Stack Developer Task - AI-Assisted Development
**Date:** March 2026

---

## 📧 Submission Checklist

Before submitting, ensure:
- ✅ All features work as expected
- ✅ Code is commented with AI-usage markers
- ✅ `code-review.md` has at least 3 genuine issues
- ✅ `reflection.md` is thoughtful and honest
- ✅ README.md has clear setup instructions
- ✅ Code is pushed to GitHub
- ✅ Repository is public

**Questions?** Review the assignment document or contact your instructor.

Good luck! 🚀
