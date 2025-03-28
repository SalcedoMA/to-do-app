import "./styles.css";
import { createDialog, newTask, newCategory } from "./newtask-buttons";
import { addNewTask } from "./newForm";
import { expandDropwdowns } from "./expand-category-buttons";

const body = document.querySelector("body");
expandDropwdowns();