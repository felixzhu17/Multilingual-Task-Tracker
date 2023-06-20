ALLOWED_STATUSES = ["Not Done", "In Progress", "Done"]


class Task:
    def __init__(self, name, due_date, status="Not Done"):
        self.name = name
        self.due_date = due_date
        self.status = status

    def __repr__(self):
        return f"{self.name} - {self.due_date} - {self.status}"


    def to_dict(self):
        return {
            "name": self.name,
            "due_date": self.due_date,
            "status": self.status
        }

    @classmethod
    def from_dict(cls, task_dict):
        return cls(task_dict["name"], task_dict["due_date"], task_dict["status"])

    def _check_status(self):
        if self.status not in ALLOWED_STATUSES:
            raise ValueError("Invalid status value.")
    
