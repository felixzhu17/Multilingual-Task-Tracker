# Multilingual-Task-Tracker

This program will allow users to add tasks, mark them as done, and view the list of tasks. Each task will have a name, due date, and status (done or not done).

This task involves the following modules:

1. **`main`**: The entry point of our application. It handles user input and controls the flow of the application.
2. **`task_manager`**: Responsible for managing the tasks. This includes adding a new task, marking a task as done, and getting the list of tasks.
3. **`task`**: Represents a task. Each task has a name, due date, and status.
4. **`storage`**: Handles saving and loading the tasks from a file. Each time the application starts, it should load the existing tasks from a file, and each time a task is added or updated, it should save the tasks back to the file.
5. **`formatter`**: Responsible for formatting the tasks for display. It should be able to format a single task and a list of tasks.
6. **`validator`**: Validates the user's input. It checks whether the task name and due date are valid and whether a task with the given name exists when trying to mark a task as done.
