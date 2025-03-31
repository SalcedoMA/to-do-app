import { storedTasks, storedCategories } from "./get-storage.js";
import { newTask, newCategory } from "./newtask-buttons.js";
import { addTaskToDOM, addCategoryToDOM } from "./add-new-elements.js";
import { deleteTasks } from "./task-buttons.js";
import { deleteCategories } from "./category-buttons.js";

// localStorage.setItem('categories', "[]");
const taskForm = document.getElementById('new-task-form');
const categoryForm = document.getElementById('new-category-form');

function createNewTask(event) {
    const task = {}
    const taskFormElements = Array.from(taskForm.elements);
    taskFormElements.forEach(element => {
        if (element.name) { // Only store elements with names
          task[element.name] = element.value;
        }
    });
    storedTasks.push(task);
    addTaskToDOM(task);
    taskForm.reset();
    newTask.taskFormContainer.close();
    deleteTasks();
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
    // console.log('Stored Data:', task);     // Log the object (or use it as needed)
    // console.log(userTasks)
}

function createNewCategory(event) {
    const categoryName = document.getElementById('category-name').value;
    storedCategories.push(categoryName);
    addCategoryToDOM(categoryName);
    categoryForm.reset();
    newCategory.categoryFormContainer.close();
    deleteCategories();
    localStorage.setItem('categories', JSON.stringify(storedCategories));
    // console.log('Stored Data:', categoryName);     // Log the object (or use it as needed)
    // console.log(categories)   
}

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewTask();
});

categoryForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewCategory();
});