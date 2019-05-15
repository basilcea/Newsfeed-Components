// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

const toggleMenu = ()=> {
  // Toggle the "menu--open" class on your menu refence.

  if (menu.classList.contains("menu--open")) {
    TweenMax.fromTo('.menu', .8, { x:0,display:'block'},{x:-350})
  } else {
    TweenMax.fromTo('.menu', .8, {x:-100},{x:0})
  }
  menu.classList.toggle("menu--open");
};


// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener("click", () => {
  toggleMenu();
});
