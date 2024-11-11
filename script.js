const map = L.map('worldMap').setView([20, 0], 2); // Position de la carte au centre du monde
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 5,
}).addTo(map);

// Groupement des localisations qui partagent les mêmes coordonnées
const locations = [
    {
        coords: [46.603354, 1.888334],
        popups: [
            { popup: " - France : Brignais : Développeur C++ / Qt", url: "#projects" },
            { popup: " - France : Villeurbanne : Stage en vision par ordinateur à Kitware SAS, Développement d'une plateforme d'annotations de données 3D", url: "#projects" }
        ]
    },
    {
        coords: [35.9049, -79.0484],
        popups: [
            { popup: " - États-Unis : Année de césure de recherche en imagerie médicale à UNC", url: "#projects" }
        ]
    },
];

locations.forEach(location => {
    const marker = L.circle(location.coords, {
        color: 'blue',
        fillColor: '#4b8fb1',
        fillOpacity: 0.5,
        radius: 500000
    }).addTo(map);

    // Construction du contenu du popup avec plusieurs liens si nécessaire
    const popupContent = location.popups.map(
        item => `<div><a href="#" onclick="navigateToPage('${item.url}')">${item.popup}</a></div>`
    ).join("");

    marker.bindPopup(popupContent);
});

function navigateToPage(url) {
    if (url.startsWith("#")) {
        // Navigation vers une section spécifique de la même page
        const targetElement = document.querySelector(url);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("L'élément cible n'existe pas : " + url);
        }
    } else {
        // Redirection vers une autre page
        window.location.href = url;
    }
}

let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".unc-item");
    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    // Appliquer une transformation pour afficher la bonne image
    const offset = -currentIndex * 100;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

let currentIndexReco = 0;

function changeSlideReco(direction) {
    const slides = document.querySelectorAll(".reco-item");
    currentIndexReco = (currentIndexReco + direction + slides.length) % slides.length;

    // Appliquer une transformation pour afficher la bonne image
    const offset = -currentIndexReco * 100;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

// Affiche l'image en zoom lorsqu'on clique dessus
function openZoom(imageSrc) {
    var zoomedContainer = document.getElementById("zoomed-container");
    var zoomedImage = document.getElementById("zoomed-image");
  
    zoomedImage.src = imageSrc;  // Changer la source de l'image
    zoomedContainer.style.display = "flex";  // Afficher le zoom
  }
  
  // Ferme l'image zoomée
  function closeZoom() {
    var zoomedContainer = document.getElementById("zoomed-container");
    zoomedContainer.style.display = "none";  // Cacher le zoom
  }
  
  // Ajouter un événement de clic aux images
  document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('click', function() {
      openZoom(this.src);  // Ouvrir l'image en plein écran
    });
  });
  