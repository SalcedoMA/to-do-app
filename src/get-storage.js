const storedTasks = JSON.parse(localStorage.getItem("tasks"));
const storedCategories = JSON.parse(localStorage.getItem("categories"));

export { storedTasks, storedCategories }