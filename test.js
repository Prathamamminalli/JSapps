class TodoApp {
    constructor() {
      this.todos = []; // Initialize an empty list of todos
    }
  
    // Add a new todo item
    addTodo(task) {
      const todo = { task, completed: false };
      this.todos.push(todo);
      console.log(`Added: "${task}"`);
      this.displayTodos();
    }
  
    // Remove a todo item by index
    removeTodo(index) {
      if (index >= 0 && index < this.todos.length) {
        const removed = this.todos.splice(index, 1);
        console.log(`Removed: "${removed[0].task}"`);
        this.displayTodos();
      } else {
        console.log("Invalid index");
      }
    }
  
    // Mark a todo item as completed
    toggleComplete(index) {
      if (index >= 0 && index < this.todos.length) {
        this.todos[index].completed = !this.todos[index].completed;
        console.log(`Toggled completion for: "${this.todos[index].task}"`);
        this.displayTodos();
      } else {
        console.log("Invalid index");
      }
    }
  
    // Display all todos
    displayTodos() {
      console.clear();
      console.log("To-Do List:");
      this.todos.forEach((todo, index) => {
        console.log(
          `${index + 1}. [${todo.completed ? "✔" : " "}] ${todo.task}`
        );
      });
    }
  }
  
  // Using the TodoApp
  const myTodoApp = new TodoApp();
  myTodoApp.addTodo("Learn JavaScript");
  myTodoApp.addTodo("Build a to-do app");
  myTodoApp.toggleComplete(0); // Mark the first task as complete
  myTodoApp.removeTodo(1); // Remove the second task
  