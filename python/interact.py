from task_manager import add_task, mark_task_as_done, get_tasks

ACTIONS = ["add", "mark", "get", "exit"]
ACTION_PROMPT = f"What do you want to do? {ACTIONS}"


def get_user_action():
    return _check_action(input(ACTION_PROMPT))
    
def _check_action(action):
    if action not in ACTIONS:
        raise ValueError(f"Invalid action. It must be one of {ACTIONS}")
    else:
        return action

def user_interact():
    action = get_user_action()
    print(action)
    if action == "add":
        add_task(input("Task name: "), input("Due date: "))
        return True
    elif action == "mark":
        mark_task_as_done(input("Task name: "))
        return True
    elif action == "get":
        get_tasks()
        return True
    else:
        return False
