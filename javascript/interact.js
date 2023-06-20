const readline = require('readline');
const { addTask, markTaskAsDone, getTasks } = require('./task_manager');

const ACTIONS = ["add", "mark", "get", "exit"];
const ACTION_PROMPT = `What do you want to do? ${ACTIONS}\n`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function get_user_action() {
  return new Promise((resolve) => {
    rl.question(ACTION_PROMPT, (action) => {
      resolve(_check_action(action.trim().toLowerCase()));
    });
  });
}

function _check_action(action) {
  if (!ACTIONS.includes(action)) {
    throw new Error(`Invalid action. It must be one of ${ACTIONS}`);
  } else {
    return action;
  }
}

async function user_interact() {
  const action = await get_user_action();
  console.log(action);
  if (action === "add") {
    const taskName = await askQuestion("Task name: ");
    const dueDate = await askQuestion("Due date: ");
    addTask(taskName, dueDate);
    return true;
  } else if (action === "mark") {
    const taskName = await askQuestion("Task name: ");
    markTaskAsDone(taskName);
    return true;
  } else if (action === "get") {
    getTasks();
    return true;
  } else {
    rl.close();
    return false;
  }
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

module.exports = { user_interact };
