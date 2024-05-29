let menu_btn = document.querySelector("#menu");
let nav2 = document.querySelector("#nav2");
let arrow_down = document.querySelector('#arrow_down');
let down_arrow_menu = document.querySelector('#down_arrow_menu');


menu_btn.addEventListener("click", () => {
  nav2.classList.toggle("translate-x-0");
  nav2.classList.toggle("-translate-x-full");
});

arrow_down.addEventListener('click', () => {
    down_arrow_menu.classList.toggle("hidden");
})