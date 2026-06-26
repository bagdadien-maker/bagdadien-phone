const prixData = {
  iphone7:       { nom: "iPhone 7",        prix: ["Écran : 39 €", "Batterie : 29 €", "Caméra : 35 €", "Connecteur : 39 €"] },
  iphone7plus:   { nom: "iPhone 7 Plus",   prix: ["Écran : 45 €", "Batterie : 29 €", "Caméra : 39 €", "Connecteur : 39 €"] },
  iphone8:       { nom: "iPhone 8",        prix: ["Écran : 49 €", "Batterie : 35 €", "Caméra : 39 €", "Connecteur : 45 €"] },
  iphone8plus:   { nom: "iPhone 8 Plus",   prix: ["Écran : 55 €", "Batterie : 35 €", "Caméra : 45 €", "Connecteur : 45 €"] },
  XR:            { nom: "iPhone XR",       prix: ["Écran : 69 €", "Batterie : 45 €", "Caméra : 55 €", "Connecteur : 55 €"] },
  XS:            { nom: "iPhone XS",       prix: ["Écran : 79 €", "Batterie : 49 €", "Caméra : 59 €", "Connecteur : 59 €"] },
  xsmax:         { nom: "iPhone XS Max",   prix: ["Écran : 89 €", "Batterie : 49 €", "Caméra : 65 €", "Connecteur : 59 €"] },
  iphone11:      { nom: "iPhone 11",       prix: ["Écran : 79 €", "Batterie : 55 €", "Caméra : 65 €", "Connecteur : 65 €"] },
  iphone11pro:   { nom: "iPhone 11 Pro",   prix: ["Écran : 109 €", "Batterie : 59 €", "Caméra : 79 €", "Connecteur : 69 €"] },
  iphone11promax:{ nom: "iPhone 11 Pro Max",prix: ["Écran : 119 €", "Batterie : 59 €", "Caméra : 85 €", "Connecteur : 69 €"] },
  iphone12:      { nom: "iPhone 12",       prix: ["Écran : 99 €", "Batterie : 65 €", "Caméra : 79 €", "Connecteur : 75 €"] },
  iphone12pro:   { nom: "iPhone 12 Pro",   prix: ["Écran : 119 €", "Batterie : 69 €", "Caméra : 89 €", "Connecteur : 79 €"] },
  iphone12promax:{ nom: "iPhone 12 Pro Max",prix: ["Écran : 129 €", "Batterie : 69 €", "Caméra : 95 €", "Connecteur : 79 €"] },
  iphone13:      { nom: "iPhone 13",       prix: ["Écran : 129 €", "Batterie : 79 €", "Caméra : 95 €", "Connecteur : 89 €"] },
  iphone13pro:   { nom: "iPhone 13 Pro",   prix: ["Écran : 149 €", "Batterie : 85 €", "Caméra : 109 €", "Connecteur : 95 €"] },
  iphone13promax:{ nom: "iPhone 13 Pro Max",prix: ["Écran : 159 €", "Batterie : 85 €", "Caméra : 115 €", "Connecteur : 95 €"] },
  iphone14:      { nom: "iPhone 14 Plus",  prix: ["Écran : 149 €", "Batterie : 89 €", "Caméra : 109 €", "Connecteur : 99 €"] },
  iphone14pro:   { nom: "iPhone 14 Pro",   prix: ["Écran : 169 €", "Batterie : 95 €", "Caméra : 119 €", "Connecteur : 105 €"] },
  iphone14promax:{ nom: "iPhone 14 Pro Max",prix: ["Écran : 179 €", "Batterie : 95 €", "Caméra : 129 €", "Connecteur : 105 €"] },
  iphone15:      { nom: "iPhone 15",       prix: ["Écran : 169 €", "Batterie : 109 €", "Caméra : 129 €", "Connecteur : 119 €"] },
  iphone15pro:   { nom: "iPhone 15 Pro",   prix: ["Écran : 199 €", "Batterie : 119 €", "Caméra : 149 €", "Connecteur : 129 €"] },
  iphone15promax:{ nom: "iPhone 15 Pro Max",prix: ["Écran : 219 €", "Batterie : 119 €", "Caméra : 159 €", "Connecteur : 129 €"] },
  iphone16:      { nom: "iPhone 16",       prix: ["Écran : 189 €", "Batterie : 119 €", "Caméra : 149 €", "Connecteur : 135 €"] },
  iphone16pro:   { nom: "iPhone 16 Pro",   prix: ["Écran : 219 €", "Batterie : 129 €", "Caméra : 169 €", "Connecteur : 145 €"] },
  iphone16promax:{ nom: "iPhone 16 Pro Max",prix: ["Écran : 239 €", "Batterie : 129 €", "Caméra : 179 €", "Connecteur : 145 €"] },
  iphone17:      { nom: "iPhone 17",       prix: ["Écran : 209 €", "Batterie : 139 €", "Caméra : 169 €", "Connecteur : 155 €"] },
  iphone17pro:   { nom: "iPhone 17 Pro",   prix: ["Écran : 239 €", "Batterie : 149 €", "Caméra : 189 €", "Connecteur : 165 €"] },
  iphone17promax:{ nom: "iPhone 17 Pro Max",prix: ["Écran : 259 €", "Batterie : 149 €", "Caméra : 199 €", "Connecteur : 165 €"] },
};
function showModel(id) {
  const data = prixData[id];
  if (!data) return;
  
  document.getElementById("modal-content").innerHTML = `
    <h2>${data.nom}</h2>
    <ul style="margin-top:15px; list-style:none;">
      ${data.prix.map(p => `<li style="padding:8px 0; border-bottom:1px solid #eee;">${p}</li>`).join("")}
    </ul>
  `;
  document.getElementById("modal-overlay").classList.add("active");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
}

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
