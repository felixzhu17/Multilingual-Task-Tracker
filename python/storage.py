import json
from task import Task

def serialize_tasks(tasks):
    return [i.to_dict() for i in tasks]

def unserialize_tasks(tasks):
    return [Task.from_dict(i) for i in tasks]

def load_tasks(task_file):
    """
    Load tasks from the file
    """
    try:
        with open(task_file, 'r') as f:
            return unserialize_tasks(json.load(f))
    except FileNotFoundError:
        return []

def save_tasks(tasks, task_file):
    """
    Save tasks to the file
    """
    with open(task_file, 'w') as f:
        json.dump(serialize_tasks(tasks), f)