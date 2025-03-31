import { storedTasks } from "./get-storage";

function deleteTasks() {
    const oldButtons = document.querySelectorAll(".task-delete-button");
    oldButtons.forEach((button, i) => {
        button.replaceWith(button.cloneNode(true));
        });
    
    const freshButtons = document.querySelectorAll(".task-delete-button");
    freshButtons.forEach((button, i) => {
        button.addEventListener("click", event => {
            button.closest(".todo-card").remove();
            storedTasks.splice(i,1)
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
            deleteTasks();
            console.log(storedTasks)
        });
    });
}

export { deleteTasks }