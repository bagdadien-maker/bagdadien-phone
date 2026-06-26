function showModel(id) {
  const models = document.querySelectorAll(".model");
  models.forEach(model => model.style.display = "none");

  document.getElementById(id).style.display = "block";
}

// iPhone affiché par défaut
showModel("iphone8");

// On sélectionne tous les boutons du menu
const navButtons = document.querySelectorAll(".nav-btn");

// On écoute le clic sur chaque bouton
navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const page = button.getAttribute("data-page");
    window.location.href = page;
  });
});
const currentPage = window.location.pathname.split("/").pop();

navButtons.forEach(button => {
  if (button.getAttribute("data-page") === currentPage) {
    button.classList.add("active");
  }
});
