function expandDropdowns() {
    const dropdownButtons = document.querySelectorAll(".dropdown-button");
    const dropdownWrappers = document.querySelectorAll(".dropdown-wrapper");
    
    dropdownButtons.forEach((button, i) => {
      button.addEventListener("click", () => {
        button.classList.toggle("rotated");
        dropdownWrappers[i].classList.toggle("is-open");
      });
    });
  }


export { expandDropdowns };