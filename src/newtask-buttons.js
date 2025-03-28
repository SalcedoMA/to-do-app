class CreateDialog {
    constructor() {
      this.newPlusButton = document.querySelector("#new-task");
      this.taskCreateOptions = document.querySelector(".task-create-ops");
  
      this.initEventListeners();
    }
  
    initEventListeners() {
      this.newPlusButton.addEventListener("click", () => {
        this.taskCreateOptions.showModal();
      });
  
      this.taskCreateOptions.addEventListener("click", (event) => this.closeDialog(event));

  
    }
  
    closeDialog(event) {
      if (event.target === this.taskCreateOptions) {
        this.taskCreateOptions.close();
      }
    }
  }
  
class  NewTask extends CreateDialog {
  constructor() {
    super()
    this.taskDialButton = document.querySelector("#task-dial-button");
    this.taskFormContainer = document.querySelector(".task-form-container");
    this.taskCloseButton = document.querySelector("#task-close");
    this.initTaskListeners();
  }

  initTaskListeners() {
    // Open main task form
    this.taskDialButton.addEventListener("click", () => {
      this.taskFormContainer.showModal();
      this.taskCreateOptions.close();
    });

    // Close task form
    this.taskCloseButton.addEventListener("click", () => {
      this.taskFormContainer.close();
    });
  }

}

class  NewCategory extends CreateDialog {
  constructor() {
    super()
    this.categoryDialButton = document.querySelector("#category-dial-button");
    this.categoryFormContainer = document.querySelector(".category-form-container");
    this.categoryCloseButton = document.querySelector("#category-close");
    this.initCategoryListeners();
  }

  initCategoryListeners() {
    // Open main task form
    this.categoryDialButton.addEventListener("click", () => {
      this.categoryFormContainer.showModal();
      this.taskCreateOptions.close();
    });

    // Close task form
    this.categoryCloseButton.addEventListener("click", () => {
      this.categoryFormContainer.close();
    });
  }
}

// Initialize the class
const createDialog = new CreateDialog();
const newTask = new NewTask();
const newCategory = new NewCategory();

export { createDialog, newTask, newCategory };