// Vérifier si on est sur la page d'accueil (par exemple, "index.html")
if (!window.location.pathname.endsWith("index.html")) {
    // Créer le header
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="lang-switch" role="group" aria-label="Language">
            <button type="button" data-lang="en">EN</button>
            <button type="button" data-lang="fr">FR</button>
        </div>
        <nav>
            <ul>
                <li><a href="index.html" data-i18n="nav.home">Home</a></li>
                <li><a href="about.html" data-i18n="nav.about">About</a></li>
                <li><a href="experience.html" data-i18n="nav.experience">Experience</a></li>
                <li><a href="projects.html" data-i18n="nav.projects">Projects</a></li>
                <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
            </ul>
        </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
}
