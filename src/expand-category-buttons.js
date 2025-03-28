
function expandDropwdowns() {
    const dropdownButtons = document.querySelectorAll(".dropdown-button");
    for (let button of dropdownButtons) {
        const wrapper = button.closest("div").querySelector(".dropdown-wrapper")
        button.addEventListener("click", () => {
            wrapper.classList.toggle("is-open");
        })
    }
}

export { expandDropwdowns };