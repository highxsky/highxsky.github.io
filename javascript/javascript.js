function myFunction() {
  var navigationMenu = document.getElementById("navigation_menu");
  navigationMenu.classList.toggle("show");

  var content = document.getElementById("content"); // Assuming "content" is the content below the menu
  content.style.marginTop = navigationMenu.classList.contains("show") ? navigationMenu.clientHeight + "px" : "0";

  var navigationButton = document.querySelector(".navigation_button");
  navigationButton.classList.toggle("rotate");
}