// Vérifier si on est sur la page d'accueil (par exemple, "index.html")
if (!window.location.pathname.endsWith("index.html")) {
    // Créer le header
    const header = document.createElement("header");
    header.innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="about.html">À propos</a></li>
                <li><a href="experience.html">Expérience</a></li>
                <li><a href="projects.html">Projets</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
}
