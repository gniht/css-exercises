const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");
const hello = document.querySelector(".hello");


menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");    
       
  }  
})

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.remove("visible")
  }
})