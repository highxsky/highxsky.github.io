function toggleMenu() {
  var navigationMenu = document.getElementById("navigation-menu");
  navigationMenu.classList.toggle("show");

  var content = document.getElementById("content");
  content.style.marginTop = navigationMenu.classList.contains("show") ? navigationMenu.clientHeight + "px" : "0";

  var navigationButton = document.querySelector(".navigation-button");
  navigationButton.classList.toggle("rotate");
}

function openModal(img) {
  var modal = document.getElementById("myModal");
  // var img = document.getElementById("myImage");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
