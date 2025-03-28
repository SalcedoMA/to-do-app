import editIcon from "./images/edit.svg";
import deleteIcon from "./images/delete.svg";
import inventoryIcon from "./images/inventory.svg";
import arrowDown from "./images/arrowdown.svg";
import { expandDropwdowns } from "./expand-category-buttons";

const userTasks = JSON.parse(localStorage.getItem("tasks"));
const categories = JSON.parse(localStorage.getItem("categories"));



class DisplayTasks {
    static render() {
        const taskContainer = document.querySelector(".todo-container")
        const taskArray = userTasks;
        taskContainer.innerHTML = "";
        for (let task of userTasks) {
            taskContainer.innerHTML += `<div class="todo-card">
                                                <div class="todo-info">
                                                    <div class="todo-header">
                                                        <h2 class="todo-title">${task["title"]}</h2>
                                                        <p class="todo-duedate">Due: ${task["due-date"]}</p>
                                                    </div>
                                                    <p class="todo-description">${task["description"]}</p>
                                                </div>
                                                <div class="todo-footer">
                                                    <h3 class="todo-category">${task["category"]}</h3>
                                                    <div class="todo-actions">
                                                        <button type="button" class="action-button"><img src="${editIcon}" alt=""></img></button>
                                                        <button type="button" class="action-button"><img src="${deleteIcon}" alt=""></img></button>
                                                    </div>
                                                </div>
                                            </div>`
            
        }
    }
}

class DisplayCategories {
    static render() {
        const categoriesContainer = document.querySelector(".categories-container")
        categoriesContainer.innerHTML = "";
        for (let category of categories) {
            categoriesContainer.innerHTML +=   `<div class="category">
                                                    <h2 class="section-title"><img src="${inventoryIcon}" alt=""> ${category} <button type="button" class="dropdown-button"><img src="${arrowDown}" alt=""></button></h2>
                                                    <div class="dropdown-wrapper">
                                                        <ul class="category-dropdown">
                                                            <li class="category-item">Placeholder 1</li>
                                                            <li class="category-item">Placeholder 2</li>
                                                            <li class="category-item">Placeholder 3</li>
                                                        </ul>
                                                    </div>
                                                </div>`
            
        }
        expandDropwdowns();
    }
}


export { userTasks, categories, DisplayTasks, DisplayCategories }