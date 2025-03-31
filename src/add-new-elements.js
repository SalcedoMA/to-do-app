import editIcon from "./images/edit.svg";
import deleteIcon from "./images/delete.svg";
import inventoryIcon from "./images/inventory.svg";
import arrowDown from "./images/arrowdown.svg";

function addTaskToDOM(task) {
    const taskContainer = document.querySelector(".todo-container");
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
                                                    <button type="button" class="task-edit-button"><img src="${editIcon}" alt=""></img></button>
                                                    <button type="button" class="task-delete-button"><img src="${deleteIcon}" alt=""></img></button>
                                                </div>
                                            </div>
                                        </div>`
}

function addCategoryToDOM(category) {
    const categoryContainer = document.querySelector(".categories-container");
    categoryContainer.innerHTML += `<div class="category">
                                        <div class="section-title">
                                            <img src="${inventoryIcon}" alt="">
                                            <h2>${category}</h2>
                                            <button type="button" class="dropdown-button"><img src="${arrowDown}" alt=""></button>
                                            <button type="button" class="category-delete-button"><img src="${deleteIcon}" alt=""></button>
                                        </div>
                                        <div class="dropdown-wrapper">
                                            <ul class="category-dropdown">
                                                <li class="category-item">Placeholder 1</li>
                                                <li class="category-item">Placeholder 2</li>
                                                <li class="category-item">Placeholder 3</li>
                                            </ul>
                                        </div>
                                    </div>`
}



export { addTaskToDOM, addCategoryToDOM }