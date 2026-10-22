const translations = {
  en: {
    "index.title": "Timothée Teyssier Portfolio",
    "index.cv": "My CV",
    "index.role": "Data Scientist | Machine Learning & Computer Vision",
    "index.school": "Graduate of CPE Lyon — Imaging, Modelling & Computer Science (IMI)",
    "index.photoAlt": "Profile photo",
    "about.heading": "About me",
    "about.text": "AI & Computer Vision engineer based in Lyon, I design and ship industrial machine-learning applications that combine computer vision, software engineering and end-to-end ML workflows — from dataset preparation and model training to evaluation and deployment in desktop and mobile products.",
    "skills.heading": "Skills",
    "skills.ai": "AI & Machine Learning: ",
    "skills.cv": "Computer Vision: ",
    "skills.databases": "Databases: ",
    "skills.analysis": "Data analysis & visualization: ",
    "skills.software": "Software engineering: ",
    "skills.web": "Web: ",
    "skills.cicd": "Testing & CI/CD: ",
    "skills.tools": "Tools & environments: ",
    "skills.languagesLabel": "Languages: ",
    "skills.languagesValue": "French (native), English (C1)",
    "exp.heading": "Professional Experience",
    "smp.title": "May 2025 – Present — AI & Computer Vision Engineer",
    "smp.intro": "At SMP Technik, I build industrial AI applications that combine computer vision, machine learning and software engineering. My main product is <strong>DetecTool</strong>, an AI recognition solution for new and used metal-cutting tools (drills and mills).",
    "smp.b1": "End-to-end ML workflows: annotation, dataset prep, training and optimization",
    "smp.b2": "Multi-stage pipelines for tool detection, segmentation and classification",
    "smp.b3": "AI tool to analyze spindle drawings and extract their key technical elements",
    "smp.b4": "Model evaluation with precision, recall, F1-score and confusion matrices",
    "smp.b5": "AI inference integrated into desktop/mobile apps, databases and MQTT",
    "smp.event": "In May 2026, we presented DetecTool at the Grinding Hub trade fair in Munich.",
    "smp.foretsAlt": "Metal-cutting drills used with DetecTool",
    "smp.foretsCaption": "Drills (forets) — metal-cutting tools recognized by DetecTool",
    "smp.fraisesAlt": "Mills used with DetecTool",
    "smp.fraisesCaption": "Mills (fraises) — metal-cutting tools recognized by DetecTool",
    "smp.hubAlt": "SMP Technik booth at Grinding Hub Munich 2026",
    "smp.hubCaption": "DetecTool presented at Grinding Hub, Munich — May 2026",
    "thelesys.title": "October 2024 – May 2025 — Software Developer",
    "thelesys.text": "Developed a C++ / Qt application enabling communication between electronic components through UDS services and multithreading, working with real-time data from electronic systems and sensors. Worked in Agile (Scrum) with a 5-developer team: daily stand-ups, sprints, and iterative delivery.",
    "thelesys.client": "Client: ",
    "kitware.title": "February 2024 – July 2024 — C++/Qt Software Engineering Intern",
    "kitware.text": "Contributed to <strong>Paralabel</strong>, an open-source annotation platform for large 3D machine-learning datasets (ParaView plugin), including unit-test development and validation. Applied software development best practices through Git branching, pull requests, code reviews, and version management with tags.",
    "kitware.gatien": "Gatien Ferret (Computer Vision Team Lead)",
    "kitware.loic": "Loic Tetrel (Lead Developer)",
    "kitware.imgAlt": "Paralabel view",
    "unc.title": "August 2022 – August 2023 — Medical Imaging Research Intern (Kitware / UNC Chapel Hill)",
    "unc.intro": "This research internship focused on large-scale medical datasets, with the goal of advancing healthcare and giving researchers better tools to understand the brain.",
    "unc.b1": "Neuronal fiber classification with deep learning (PyTorch) — training, experimentation and evaluation with Dr. Juan Carlos Prieto and Dr. Martin Styner",
    "unc.b2": "Contribution to DTIPlayground, a medical imaging tool used by researchers",
    "unc.b3": "Development of a Python Image_Filter module for Diffusion Tensor Imaging (DTI) filtering",
    "unc.impact": "The aim was to support researchers as effectively as possible in their work and help push medical imaging research forward.",
    "unc.img1Alt": "Axial DTI brain scan",
    "unc.img1Caption": "DTI — brain white-matter fiber directions",
    "unc.img2Alt": "MRI and DTI medical imaging panel",
    "unc.img2Caption": "MRI & DTI — large medical imaging datasets",
    "unc.img3Alt": "Brain fiber visualization",
    "unc.img3Caption": "Fiber tractography visualization",
    "unc.img4Alt": "Brain fiber classification result",
    "unc.img4Caption": "Neuronal fiber classification results",
    "unc.dtiLink": "=> DTIPlayground",
    "personal.heading": "Personal Projects",
    "tennis.title": "December 2023 to January 2024 - 3D reconstruction of a tennis ball trajectory",
    "tennis.text": "This project was carried out with Luc Anchling to reconstruct the 3D trajectory of a tennis ball using two cameras. It includes a camera calibration task to determine the 3D position of the tennis ball relative to a common reference frame for both cameras. It also includes a task to detect and track the tennis ball on both cameras even when the ball is partially occluded. The project was completed successfully, enabling the creation of a Unity video game (hitting 3D blocks with the tennis ball) as well as analysis of the ball's trajectory: speed, bounce point, and more.",
    "mole.title": "In progress - Web platform to diagnose a mole",
    "mole.text": "As part of improving online health tools, I am currently working on an innovative web application to detect potentially cancerous moles. The application currently relies on an advanced algorithmic approach to analyze photos of moles, without artificial intelligence for now. The goal is to provide an initial visual assessment to detect early warning signs of skin cancer, mainly melanoma.",
    "intl.heading": "International Experience",
    "github.text": "You can visit my GitHub profile for more details on my projects and contributions.",
    "github.link": "Visit my GitHub profile",
    "common.supervisors": "Internship supervisors: ",
    "common.collaborators": "Collaborators: ",
    "common.recommendations": "Recommendations: ",
    "common.sourceCode": "=> Source code",
    "common.contact": "Contact me: timothee.teyssier@cpe.fr",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "map.toussieu": " - France: Toussieu: AI & Computer Vision Engineer at SMP Technik",
    "map.lyon": " - France: Lyon: Software Developer (C++ / Qt) at Thelesys",
    "map.villeurbanne": " - France: Villeurbanne: Computer vision internship at Kitware SAS (Paralabel)",
    "map.unc": " - United States: Medical imaging research internship at UNC Chapel Hill"
  },
  fr: {
    "index.title": "Portfolio de Timothée Teyssier",
    "index.cv": "Mon CV",
    "index.role": "Data Scientist | Machine Learning & Vision par Ordinateur",
    "index.school": "Diplômé de CPE Lyon — Image, Modélisation & Informatique (IMI)",
    "index.photoAlt": "Photo de profil",
    "about.heading": "À propos de moi",
    "about.text": "Ingénieur IA & Vision par Ordinateur basé à Lyon, je conçois et déploie des applications industrielles de machine learning qui allient vision par ordinateur, génie logiciel et workflows ML de bout en bout — de la préparation des datasets et l'entraînement des modèles jusqu'à l'évaluation et le déploiement dans des produits desktop et mobile.",
    "skills.heading": "Compétences",
    "skills.ai": "IA & Machine Learning : ",
    "skills.cv": "Vision par ordinateur : ",
    "skills.databases": "Bases de données : ",
    "skills.analysis": "Analyse de données & visualisation : ",
    "skills.software": "Génie logiciel : ",
    "skills.web": "Web : ",
    "skills.cicd": "Tests & CI/CD : ",
    "skills.tools": "Outils & environnements : ",
    "skills.languagesLabel": "Langues : ",
    "skills.languagesValue": "Français (natif), Anglais (C1)",
    "exp.heading": "Expériences Professionnelles",
    "smp.title": "Mai 2025 – Présent — Ingénieur IA & Vision par Ordinateur",
    "smp.intro": "Chez SMP Technik, je développe des applications IA industrielles alliant vision par ordinateur, machine learning et génie logiciel. Mon produit principal est <strong>DetecTool</strong>, une solution de reconnaissance IA pour outils de coupe métalliques neufs et usagés (forets et fraises).",
    "smp.b1": "Workflows ML de bout en bout : annotation, préparation des datasets, entraînement et optimisation",
    "smp.b2": "Pipelines multi-étapes pour la détection, la segmentation et la classification d'outils",
    "smp.b3": "Outil IA d'analyse de plans de broche et d'extraction des éléments techniques essentiels",
    "smp.b4": "Évaluation des modèles : précision, rappel, F1-score et matrices de confusion",
    "smp.b5": "Inférence IA intégrée aux apps desktop/mobile, bases de données et MQTT",
    "smp.event": "En mai 2026, nous avons présenté DetecTool au salon Grinding Hub à Munich.",
    "smp.foretsAlt": "Forets métalliques utilisés avec DetecTool",
    "smp.foretsCaption": "Forets — outils de coupe métalliques reconnus par DetecTool",
    "smp.fraisesAlt": "Fraises rotatives carbure utilisées avec DetecTool",
    "smp.fraisesCaption": "Fraises — outils de coupe métalliques reconnus par DetecTool",
    "smp.hubAlt": "Stand SMP Technik au Grinding Hub Munich 2026",
    "smp.hubCaption": "DetecTool présenté au Grinding Hub, Munich — mai 2026",
    "thelesys.title": "Octobre 2024 – Mai 2025 — Développeur logiciel",
    "thelesys.text": "Développement d'une application C++ / Qt permettant la communication entre composants électroniques via les services UDS et le multithreading, en travaillant avec des données temps réel issues de systèmes électroniques et de capteurs. Travail en méthode Agile (Scrum) au sein d'une équipe de 5 développeurs : daily stand-ups, sprints et livraisons itératives.",
    "thelesys.client": "Client : ",
    "kitware.title": "Février 2024 – Juillet 2024 — Stagiaire ingénieur logiciel C++/Qt",
    "kitware.text": "Contribution à <strong>Paralabel</strong>, plateforme d'annotation open source pour de grands jeux de données 3D destinés au machine learning (plugin ParaView), incluant le développement et la validation de tests unitaires. Application des bonnes pratiques de développement : branches Git, pull requests, revues de code et gestion de versions avec tags.",
    "kitware.gatien": "Gatien Ferret (Responsable équipe vision par ordinateur)",
    "kitware.loic": "Loic Tetrel (Lead Développeur)",
    "kitware.imgAlt": "Vue de Paralabel",
    "unc.title": "Août 2022 – Août 2023 — Stagiaire recherche en imagerie médicale (Kitware / UNC Chapel Hill)",
    "unc.intro": "Ce stage de recherche portait sur de grands jeux de données médicaux, dans le but de faire avancer la santé et de donner aux chercheurs de meilleurs outils pour comprendre le cerveau.",
    "unc.b1": "Classification de fibres neuronales par deep learning (PyTorch) — entraînement, expérimentation et évaluation avec le Dr Juan Carlos Prieto et le Dr Martin Styner",
    "unc.b2": "Contribution à DTIPlayground, un outil d'imagerie médicale destiné aux chercheurs",
    "unc.b3": "Développement d'un module Python Image_Filter pour le filtrage d'images Diffusion Tensor Imaging (DTI)",
    "unc.impact": "L'objectif était d'aider les chercheurs au maximum dans leurs travaux et de faire avancer la recherche en imagerie médicale.",
    "unc.img1Alt": "Coupe axiale DTI du cerveau",
    "unc.img1Caption": "DTI — directions des fibres de substance blanche",
    "unc.img2Alt": "Panneau d'imagerie médicale IRM et DTI",
    "unc.img2Caption": "IRM & DTI — grands jeux de données médicales",
    "unc.img3Alt": "Visualisation de fibres cérébrales",
    "unc.img3Caption": "Visualisation de tractographie de fibres",
    "unc.img4Alt": "Résultat de classification de fibres cérébrales",
    "unc.img4Caption": "Résultats de classification des fibres neuronales",
    "unc.dtiLink": "=> DTIPlayground",
    "personal.heading": "Projets Personnels",
    "tennis.title": "De Décembre 2023 à Janvier 2024 - Reconstruction de la trajectoire 3D d'une balle de tennis",
    "tennis.text": "Ce projet a été réalisé avec Luc Anchling dans le but de reconstruire la trajectoire 3D d'une balle de tennis grâce à deux caméras. Ce projet comporte une tâche de calibrage des caméras permettant de connaître la position 3D de la balle de tennis par rapport à un référentiel commun aux deux caméras. Il comporte également une tâche permettant de détecter et de traquer la balle de tennis sur les deux caméras même si la balle est partiellement obstruée. Ce projet a été menée à bien permettant la création d'un jeu vidéo sous unity (Toucher certains blocs en 3D à partir de la balle de tennis) mais également à analyser la trajectoire de la balle : vitesse, point de chute...",
    "mole.title": "En cours - Plateforme web permettant de diagnostiquer un grain de beauté",
    "mole.text": "Dans le cadre de l'amélioration des outils de santé en ligne, je travaille en ce moment sur une application web innovante permettant de détecter la présence de grains de beauté potentiellement cancéreux. Cette application s’appuie sur une approche algorithmique avancée pour analyser les photos des grains de beauté, en l’absence d'intelligence artificielle pour l'instant. L’objectif est d’offrir une première évaluation visuelle afin de détecter les signes avant-coureurs du cancer de la peau, principalement le mélanome.",
    "intl.heading": "Expériences Internationales",
    "github.text": "Vous pouvez consulter mon profil GitHub pour plus de détails sur mes projets et contributions.",
    "github.link": "Visiter mon profil GitHub",
    "common.supervisors": "Maîtres de stage : ",
    "common.collaborators": "Collaborateurs : ",
    "common.recommendations": "Recommandations : ",
    "common.sourceCode": "=> Lien vers le code source",
    "common.contact": "Contactez-moi : timothee.teyssier@cpe.fr",
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "map.toussieu": " - France : Toussieu : Ingénieur IA & Vision par Ordinateur chez SMP Technik",
    "map.lyon": " - France : Lyon : Développeur logiciel (C++ / Qt) chez Thelesys",
    "map.villeurbanne": " - France : Villeurbanne : Stage vision par ordinateur chez Kitware SAS (Paralabel)",
    "map.unc": " - États-Unis : Stage recherche en imagerie médicale à UNC Chapel Hill"
  }
};

function getLang() {
  return localStorage.getItem("portfolio-lang") || "en";
}

function t(key) {
  const lang = getLang();
  return translations[lang][key] || translations.en[key] || key;
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (!value) return;
    el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    const value = translations[lang][key];
    if (!value) return;
    el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    const value = translations[lang][key];
    if (!value) return;
    el.setAttribute("alt", value);
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
  });
  document.dispatchEvent(new CustomEvent("languagechange", { detail: lang }));
}

function setLang(lang) {
  localStorage.setItem("portfolio-lang", lang);
  applyLang(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(getLang());
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });
});
