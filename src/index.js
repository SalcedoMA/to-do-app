import "./styles.css";
import"./store-new-elements.js";
import { createDialog, newTask, newCategory } from "./newtask-buttons";
import { DisplayElements } from "./render-elements.js";


const body = document.querySelector("body");
DisplayElements.renderAll();
