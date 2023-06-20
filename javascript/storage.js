const fs = require('fs'); //Import file system module
const Task = require('./task'); //Import the Task class from task.js

const FILE_NAME = 'tasks.json';

function loadTasks() {
    try {
      const data = fs.readFileSync(FILE_NAME, 'utf-8');
      return unserializeTasks(JSON.parse(data));
    } catch (error) {
      if (error.code === 'ENOENT') {
        // File not found, return empty array
        return [];
      } else {
        throw error;
      }
    }
  }
  
function saveTasks(tasks) {
    const data = JSON.stringify(serializeTasks(tasks));
    fs.writeFileSync(FILE_NAME, data, 'utf-8');
}

function serializeTasks(tasks) {
  return tasks.map(task => task.toDict()); //Lambda function
}

function unserializeTasks(taskDicts) {
  return taskDicts.map(taskDict => Task.fromDict(taskDict));
}

module.exports = { loadTasks, saveTasks };
