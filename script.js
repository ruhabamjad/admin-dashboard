let nav = document.querySelector(".header");
let collapse = document.querySelector(".collapse");

collapse.addEventListener("click", (e) => {
    nav.classList.toggle("show-nav");
});