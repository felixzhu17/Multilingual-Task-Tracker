import re

DATE_REGEX = r"\d{4}-\d{2}-\d{2}"

def is_valid_task_name(name, tasks):
    """
    Check if the task name is valid
    """
    if not name:
        raise ValueError("The task name cannot be empty")
    for task in tasks:
        if task.name == name:
            raise ValueError("The task name already exists")

def is_valid_due_date(due_date):
    if not due_date:
        raise ValueError("The due date cannot be empty")
    if not re.match(DATE_REGEX, due_date):
        raise ValueError ("The due date must be in the format YYYY-MM-DD")