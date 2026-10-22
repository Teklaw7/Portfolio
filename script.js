const map = L.map("worldMap").setView([20, 0], 2);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 5,
}).addTo(map);

const locations = [
  {
    coords: [46.603354, 1.888334],
    popups: [
      { key: "map.toussieu", url: "#projects" },
      { key: "map.lyon", url: "#projects" },
      { key: "map.villeurbanne", url: "#projects" },
    ],
  },
  {
    coords: [35.9049, -79.0484],
    popups: [{ key: "map.unc", url: "#projects" }],
  },
];

function buildPopupContent(location) {
  return location.popups
    .map(
      (item) =>
        `<div><a href="#" onclick="navigateToPage('${item.url}')">${t(item.key)}</a></div>`
    )
    .join("");
}

const markers = locations.map((location) => {
  const marker = L.circle(location.coords, {
    color: "#1a9bb5",
    fillColor: "#1a9bb5",
    fillOpacity: 0.45,
    radius: 500000,
  }).addTo(map);

  marker.bindPopup(buildPopupContent(location));
  return { marker, location };
});

document.addEventListener("languagechange", () => {
  markers.forEach(({ marker, location }) => {
    marker.setPopupContent(buildPopupContent(location));
  });
});

function navigateToPage(url) {
  if (url.startsWith("#")) {
    const targetElement = document.querySelector(url);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.location.href = url;
  }
}

function openZoom(imageSrc) {
  const zoomedContainer = document.getElementById("zoomed-container");
  const zoomedImage = document.getElementById("zoomed-image");
  zoomedImage.src = imageSrc;
  zoomedContainer.style.display = "flex";
}

function closeZoom() {
  document.getElementById("zoomed-container").style.display = "none";
}

document
  .querySelectorAll("img:not(.company-logo):not(.profile-photo)")
  .forEach((img) => {
    img.addEventListener("click", function () {
      openZoom(this.src);
    });
  });

/* Scroll reveal for bento tiles */
const revealTiles = () => {
  const tiles = document.querySelectorAll(".tile");
  if (!("IntersectionObserver" in window)) {
    tiles.forEach((t) => t.classList.add("is-visible"));
    setTimeout(() => map.invalidateSize(), 50);
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (entry.target.classList.contains("tile-map")) {
            setTimeout(() => map.invalidateSize(), 80);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
  );
  tiles.forEach((tile) => observer.observe(tile));
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", revealTiles);
} else {
  revealTiles();
}
