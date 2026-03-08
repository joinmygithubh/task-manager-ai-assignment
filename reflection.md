# Reflection: AI-Assisted Development Experience

**Name:** [Student Name]
**Date:** March 8, 2026
**Assignment:** Full Stack Task Manager with AI Tools

---

## Moments Where AI Saved Significant Time

### 1. Scaffolding the Express API Routes

**What happened:** Instead of manually writing boilerplate code for all four CRUD routes (GET, POST, PATCH, DELETE), I wrote a comment describing what I needed: `// Create a REST API with GET, POST, PATCH, DELETE routes for tasks with in-memory storage`. The AI immediately generated all four route handlers with proper Express syntax, error handling structure, and response formatting.

**Why it worked well:** The prompt was specific about the technology (Express), the operations needed (CRUD), and the data storage approach (in-memory array). By providing clear constraints, the AI had enough context to generate production-like code. This saved me approximately 20-30 minutes of typing repetitive route definitions and looking up Express documentation for status codes.

### 2. React Component Structure with Hooks

**What happened:** When building the main App component, I prompted: "Create a React component that fetches tasks from /api/tasks using useEffect, manages state with useState for tasks and filter, and includes error handling." The AI generated a complete component with proper hook usage, dependency arrays, and loading states.

**Why it worked well:** The prompt specified the exact hooks needed and the expected behavior. The AI understood the React patterns and generated code that followed current best practices (functional components, hooks). This was particularly valuable because it set up the entire state management architecture correctly on the first try, saving me from potential bugs with improper hook dependencies or stale closures.

---

## Moments Where AI Generated Wrong or Incomplete Code

### 1. Missing Input Validation and Sanitization

**What went wrong:** When I asked the AI to create the POST route for adding tasks, it generated code that accepted `req.body.title` directly without checking if it was empty, just whitespace, or unreasonably long. The initial code would have allowed users to create tasks with titles like "   " (just spaces).

**How I detected it:** During manual code review, I tested edge cases by imagining what would happen if I submitted an empty form or pasted very long text. I also thought about common security vulnerabilities (input validation) from my knowledge of OWASP guidelines.

**Lesson learned:** AI often generates the "happy path" code but misses defensive programming practices. It assumes valid input unless explicitly told otherwise. I learned that I need to always ask AI to include validation, or better yet, add it myself during review.

### 2. Direct State Mutation Instead of Immutable Updates

**What went wrong:** The AI's first version of the toggle complete function directly modified the task object: `task.completed = !task.completed`, then called `setTasks([...tasks])`. While this might appear to work, it violates React's principle of immutability and could cause subtle rendering bugs.

**How I detected it:** I remembered from React documentation that you should never mutate objects in state directly. When I saw the AI accessing a property with assignment (`=`), I recognized the pattern immediately. I tested by adding console.logs and noticed that React's change detection wasn't working optimally.

**Lesson learned:** AI doesn't always follow framework-specific best practices unless explicitly prompted. The code was "functionally correct" but violated React conventions. This taught me that I need to deeply understand the frameworks I'm using so I can catch these subtle issues that might not cause immediate errors but lead to bugs later.

---

## How AI Changed My Workflow

Working with an AI editor fundamentally changed my development process. Instead of starting with a blank file and typing everything line-by-line, I began with high-level prompts and then refined the output. This shifted my role from "writer" to "reviewer and architect."

**The good:** I spent less time on boilerplate and syntax, and more time thinking about architecture, user experience, and edge cases. For example, I didn't have to remember the exact syntax for CORS setup or Vite proxy configuration—the AI handled that while I focused on whether the overall structure made sense.

**The challenging:** I caught myself blindly accepting suggestions without fully understanding them, especially for parts of the code that "looked right." There were moments where I had to stop and ask myself, "Do I actually understand what this useEffect dependency array is doing?" This was humbling because it revealed gaps in my knowledge that I might have learned through manual implementation.

**Would I use it on a real project?** Yes, but with guardrails. For a real team project, I would:
- Use AI to generate initial scaffolding and boilerplate
- Always review generated code with a critical eye, especially security-sensitive parts
- Run tests and manual testing before accepting any AI suggestion
- Never commit AI-generated code I don't fully understand
- Use AI for exploration ("How would I implement OAuth?") without directly copying its output
- Pair AI with code review from experienced developers

---

## Advice for Junior Developers Using AI on Team Codebases

### 1. Never Commit Code You Can't Explain
If someone asked you to explain every line in the AI-generated code during a code review, could you? If not, either study it until you understand, or rewrite it in a way you do understand. Your teammates will depend on you to maintain and debug this code.

### 2. Watch for Outdated Patterns
AI models are trained on a mixture of old and new code. They might suggest class components when functional components are now standard, or use deprecated APIs. Always verify that the AI's suggestions match the current version of your framework and your team's conventions.

### 3. Security Cannot Be Automated Away
AI will rarely implement proper authentication, input sanitization, or rate limiting without explicit prompting—and even then, it might miss edge cases. For anything involving user input, secrets, authentication, or data validation, treat AI suggestions as a starting point and consult security best practices (like OWASP) yourself.

### 4. Test, Don't Trust
Just because the code runs doesn't mean it's correct. AI-generated code can have subtle bugs that only appear with specific inputs or race conditions. Write tests, try edge cases, and use debugging tools. The AI won't catch these for you.

### 5. Maintain Code Consistency
AI doesn't know your team's style guide, naming conventions, or architectural patterns. Before accepting a suggestion, ask: Does this match how we've built similar features? Would this fit with our existing codebase? Inconsistent code, even if individually correct, creates maintenance burden.

---

## Final Thoughts

This assignment taught me that AI is a powerful accelerator but not a replacement for understanding. The biggest value wasn't the code the AI wrote—it was the time it saved me, which I could redirect toward deeper thinking about architecture, user experience, and code quality.

The developers who will thrive with AI tools are those who use them to augment their skills, not replace them. I found that my knowledge of React, Express, and web security was essential for reviewing AI output critically. Ironically, understanding fundamentals became more important, not less, because I needed that knowledge to catch AI mistakes.

Going forward, I plan to use AI for:
- Quick prototyping and scaffolding
- Exploring unfamiliar libraries
- Generating test cases
- Refactoring repetitive code

But I will rely on my own judgment for:
- Architecture decisions
- Security-critical code
- Performance optimization
- Debugging complex issues

This balance—leveraging AI's speed while maintaining human oversight—feels like the right approach for professional development.
