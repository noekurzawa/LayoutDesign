const menuButton = document.querySelector(".menu");
const menu = document.querySelector("aside");

function showMenu() {
  menu.classList.toggle('active');

  if(menu.classList.contains('active')) {
    menuButton.style.left = '260px';
  } else {
    menuButton.style.left = '0';
  }
}
menuButton.addEventListener("click", showMenu);


function hideMenu() {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menu.style.position = "absolute";
  } else {
    menu.style.position = "fixed";
  }
}

li.addEventListener("click", hideMenu);