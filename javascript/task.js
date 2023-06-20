const ALLOWED_STATUSES = ["Not Done", "In Progress", "Done"]; // Define using const. Lists are same as Python but are called Arrays

// Class is same as Python but use constructor. There is no need for self and no need to pass self to methods. We use this instead of self to refer to itself.
// Javascript uses brackets instead of indentation to define blocks of code.

class Task { 
    constructor(name, dueDate, status = "Not Done") {
      this.name = name;
      this.dueDate = dueDate;
      this.status = status;
      this._checkStatus();
    }
  
    _checkStatus() {
      if (!ALLOWED_STATUSES.includes(this.status)) {
        throw new Error("Invalid status value.");
      }
    }
  
    toString() {
      return `${this.name} - ${this.dueDate} - ${this.status}`;
    }
  
    toDict() {
      return {
        "name": this.name,
        "dueDate": this.dueDate,
        "status": this.status
      };
    }
  
    static fromDict(taskDict) {
      return new Task(taskDict.name, taskDict.dueDate, taskDict.status); //New is used to ensure the method constructs a new Task instead the existing one
    }
  }

// Export the class so that it can be used in other files. You don't need this in Python, but you need it in Javascript to know what to export
module.exports = Task;
