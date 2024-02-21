// Defining object
const toDoList = {
    categories: [],
    tasks: []
  };
  
  // Function to add a category
  const addCategory = (categoryname) => {
    const newCategory = {
      name: categoryname,
    };
    toDoList.categories.push(newCategory);
  };
  
  // Function to add task to a given category
  const addTask = (categoryname, taskname) => {
    const category = toDoList.categories.find(category => category.name === categoryname);
    
    if (category) {
      const newTask = {
        tName: taskname,
        completed: false
      };
      category.tasks.push(newTask);
      toDoList.tasks.push(newTask);
    } else {
      console.log('Category not found.');
    }
  };
  
  // Function to display tasks in their categories
  const tasksByCategory = () => {
    toDoList.categories.forEach(category => {
      console.log(`${category.name}:`);
      category.tasks.forEach(task => {
        console.log(`${task.tName},`);
      });
      console.log("");
    });
  };
  
  // Function to mark task as complete
  const markComplete = (taskname) => {
    const task = toDoList.tasks.find(task => task.tName === taskname);
    
    if (task) {
      task.completed = true;
    } else {
      console.log('Task not found!');
    }
  };
  
  // Function to remove task
  const removeTask = (taskname) => {
    toDoList.tasks = toDoList.tasks.filter(task => task.tName !== taskname);
    toDoList.categories.forEach(category => {
      category.tasks = category.tasks.filter(task => task.tName !== taskname);
    });
  };
  
  // Adding categories
  addCategory('School Work');
  addCategory('Home Core');
  
  // Adding tasks
  addTask('Home Core', 'Cooking');
  addTask('Home Core', 'Mopping');
  addTask('Home Core', 'Washing');
  addTask('School Work', 'Studying');
  addTask('School Work', 'Exam');
  addTask('School Work', 'Revision');
  addTask('School Work', 'Break');
  
  // Display tasks by category
  tasksByCategory();
  
  // Marking tasks as complete
  markComplete('Cooking');
  markComplete('Exam');
  
  // Removing a task
  removeTask('Revision');
  
  // Display tasks by category after removing a task
  tasksByCategory();
  //display object 
  console.log(toDoList);
