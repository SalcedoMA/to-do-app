import "./styles.css";
import { createDialog, newTask, newCategory } from "./newtask-buttons";
import { addNewTask } from "./newForm";
import { DisplayTasks, DisplayCategories } from "./insert-new-items";


const body = document.querySelector("body");
DisplayTasks.render();
DisplayCategories.render();
