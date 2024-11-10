const map = L.map('worldMap').setView([20, 0], 2); // Position de la carte au centre du monde
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 5,
}).addTo(map);

const locations = [
    {
        coords: [46.603354, 1.888334],
        popup: "France : Projet en vision industrielle",
        url: "projetFrance.html" // Page de destination pour ce projet
    },
    {
        coords: [35.9049, -79.0484],
        popup: "États-Unis : Année de césure de recherche en imagerie médicale à UNC",
        url: "projetUNC.html" // Page de destination pour ce projet
    },
];

locations.forEach(location => {
    const marker = L.circle(location.coords, {
        color: 'blue',
        fillColor: '#4CAF50',
        fillOpacity: 0.5,
        radius: 500000
    }).addTo(map);

    marker.bindPopup(`<a href="#" onclick="navigateToPage('${location.url}')">${location.popup}</a>`);
});

// Fonction de redirection vers la page dans le même onglet
function navigateToPage(url) {
    window.location.href = url; // Redirection dans le même onglet
}