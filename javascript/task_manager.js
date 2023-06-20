const Task = require('./task');
const { loadTasks, saveTasks } = require('./storage');
const { is_valid_task_name, is_valid_due_date } = require('./validator');

const TASK_FILE = 'tasks.json';

function addTask(name, due_date, task_file = TASK_FILE) {
  const tasks = loadTasks(task_file);
  is_valid_task_name(name, tasks);
  is_valid_due_date(due_date);
  tasks.push(new Task(name, due_date));
  saveTasks(tasks, task_file);
}

function markTaskAsDone(name, task_file = TASK_FILE) {
  const tasks = loadTasks(task_file);
  let found = false;
  for (const task of tasks) {
    if (task.name === name) {
      task.status = 'Done';
      found = true;
      break; // Exit the loop since the task is found
    }
  }

  if (!found) {
    console.log(`${name} not found`); //F strings are ${} in JavaScript
  } else {
    saveTasks(tasks, task_file);
  }
}

function getTasks(task_file = TASK_FILE) {
  const tasks = loadTasks(task_file);
  for (const task of tasks) {
    console.log(task);
  }
}

module.exports = { addTask, markTaskAsDone, getTasks};