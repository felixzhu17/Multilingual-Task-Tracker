from task import Task
from storage import load_tasks, save_tasks
from validator import is_valid_task_name, is_valid_due_date

TASK_FILE = "tasks.json"

def add_task(name, due_date, task_file=TASK_FILE):
    """
    Add a task to the list of tasks
    """
    tasks = load_tasks(task_file)
    is_valid_task_name(name, tasks)
    is_valid_due_date(due_date)
    tasks.append(Task(name, due_date))
    save_tasks(tasks, task_file)

def mark_task_as_done(name, task_file=TASK_FILE):
    """
    Mark a task as done
    """
    tasks = load_tasks(task_file)
    found = False
    for task in tasks:
        if task.name == name:
            task.status = "Done"
            found = True
    
    if not found:
        print(f"{name} not found")
    else:
        save_tasks(tasks, task_file)

def get_tasks(task_file=TASK_FILE):
    """
    Get all tasks
    """
    tasks = load_tasks(task_file)
    for task in tasks:
        print(task)
