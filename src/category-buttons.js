import { storedCategories } from "./get-storage";

function deleteCategories() {
    const oldButtons = document.querySelectorAll(".category-delete-button");
    oldButtons.forEach((button, i) => {
        button.replaceWith(button.cloneNode(true));
        });
    
    const freshButtons = document.querySelectorAll(".category-delete-button");
    freshButtons.forEach((button, i) => {
        button.addEventListener("click", event => {
            button.closest(".category").remove();
            storedCategories.splice(i,1)
            localStorage.setItem('categories', JSON.stringify(storedCategories));
            deleteCategories();
            console.log(storedCategories)
        });
    });
}

export { deleteCategories }