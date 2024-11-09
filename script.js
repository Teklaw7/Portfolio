const map = L.map('worldMap').setView([20, 0], 2); // Position de la carte au centre du monde
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 5,
}).addTo(map);

const locations = [
    { 
        coords: [46.603354, 1.888334], 
        popup: "France : Projet en vision industrielle. <a href='projetFrance.html' target='_blank'>En savoir plus</a>" 
    },
    { 
        coords: [35.9049, -79.0484], 
        popup: "États-Unis : Année de césure de recherche en imagerie médicale à UNC. <a href='projetUNC.html' target='_blank'>En savoir plus</a>" 
    },
];

locations.forEach(location => {
    L.circle(location.coords, {
        color: 'blue',
        fillColor: '#4CAF50',
        fillOpacity: 0.5,
        radius: 500000
    }).addTo(map).bindPopup(location.popup);
});
