// Function to create a new task object
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Method to log the state of the task
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // Method to mark the task as completed
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

// Create two tasks
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

// Create an array to store tasks
const tasks = [task1, task2];

// Log the state of the first task
task1.logState(); // Clean Cat Litter has not been completed

// Mark the first task as completed
task1.markCompleted();

// Log the state of the first task again
task1.logState(); // Clean Cat Litter has been completed

// Optionally, you can log all tasks to see their current state
console.log(tasks);
