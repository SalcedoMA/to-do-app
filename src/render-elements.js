import { expandDropdowns } from "./expand-category-buttons";
import { deleteTasks } from "./task-buttons";
import { addTaskToDOM, addCategoryToDOM } from "./add-new-elements";
import { storedTasks, storedCategories } from "./get-storage";
import { deleteCategories } from "./category-buttons";

class DisplayElements {
    static renderTasks() {
        const taskContainer = document.querySelector(".todo-container")
        taskContainer.innerHTML = "";
        for (let task of storedTasks) {
            addTaskToDOM(task);
        }
        deleteTasks();
    }

    static renderCategories() {
        const categoryContainer = document.querySelector(".categories-container")
        categoryContainer.innerHTML = "";
        for (let category of storedCategories) {
            addCategoryToDOM(category);
        }
        expandDropdowns();
        deleteCategories();
    }

    static renderAll() {
        this.renderTasks();
        this.renderCategories();
    }
}




export { DisplayElements }