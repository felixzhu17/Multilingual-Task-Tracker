const DATE_REGEX = /\d{4}-\d{2}-\d{2}/; //Regex objects are automatically created in JavaScript when you use the /regex/ syntax

function is_valid_task_name(name, tasks) {
  if (!name) {
    throw new Error("The task name cannot be empty");
  }
  for (const task of tasks) { //Loop using for ... of
    if (task.name === name) {
      throw new Error("The task name already exists");
    }
  }
}

function is_valid_due_date(due_date) {
  if (!due_date) {
    throw new Error("The due date cannot be empty");
  }
  if (!DATE_REGEX.test(due_date)) {
    throw new Error("The due date must be in the format YYYY-MM-DD");
  }
}

module.exports = { is_valid_task_name, is_valid_due_date };