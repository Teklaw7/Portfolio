const translations = {
  en: {
    "index.title": "Timothée Teyssier Portfolio",
    "index.cv": "My CV",
    "index.role": "AI Engineer | Computer Vision, Generative AI",
    "index.school": "Graduate of CPE Lyon — Imaging, Modelling & Computer Science (IMI)",
    "index.photoAlt": "Profile photo",
        "unity.label": "Personal Project · 3D & Game Development",
    "unity.title": "Procedural World Generation — Unity",
    "unity.text": "Personal project exploring procedural generation of small 3D islands in Unity and C#. Experimented with terrain elevations, distinct terrain regions (water, sand, grass and mountains) and procedural placement of different tree types and 3D assets. This reflects my interest in 3D environments, game engines and procedural content generation.",
    "unity.imgAlt": "Illustrative low-poly procedural terrain scene",
    "unity.caption": "Illustrative reconstruction — not an original screenshot of the project.",
    "about.heading": "About me",
    "about.text": "AI Engineer based in Lyon, I design and deploy end-to-end AI solutions combining computer vision, machine learning and generative AI. My work spans model development and fine-tuning, retrieval-augmented generation (RAG), software integration and deployment in industrial applications.",
    "skills.heading": "Skills",
    "skills.ai": "AI & Machine Learning: ",
    "skills.llm": "LLMs & Generative AI: ",
    "skills.llmValue": "Qwen (VLM), Transformers, LoRA / QLoRA, Ollama, RAG, local LLM inference",
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
    "smp.title": "May 2025 – Present — AI Engineer | Computer Vision & Generative AI",
    "smp.intro": "At SMP Technik, I design and deploy end-to-end industrial AI solutions: <strong><a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-detectool/\" target=\"_blank\" rel=\"noopener noreferrer\">DetecTool</a></strong> for cutting-tool recognition; automated spindle drawing analysis integrated into <strong><a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-easygrind/\" target=\"_blank\" rel=\"noopener noreferrer\">EasyGrind</a></strong> and <strong><a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-broachexpert/\" target=\"_blank\" rel=\"noopener noreferrer\">Broach Expert</a></strong>; RAG assistants for technical support; and locally hosted email assistance for customer service and sales.",
    "smp.b1": "<a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-detectool/\" target=\"_blank\" rel=\"noopener noreferrer\">DetecTool</a> — dataset preparation, annotation, model training and evaluation; cutting-tool detection, segmentation and classification for desktop and mobile applications",
    "smp.b2": "Spindle drawing analysis — dataset preparation, annotation, training and evaluation of YOLO, Vision Transformer (ViT) and ResNet models; Qwen VLM fine-tuning with LoRA / QLoRA to extract technical information, followed by decoding and integration of structured data into <a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-easygrind/\" target=\"_blank\" rel=\"noopener noreferrer\">EasyGrind</a> and <a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-broachexpert/\" target=\"_blank\" rel=\"noopener noreferrer\">Broach Expert</a>",
    "smp.b3": "Technical documentation RAG — developed retrieval-augmented generation workflows over historical company files and procedures, helping technicians and after-sales teams verify instructions and find answers to technical questions",
    "smp.b4": "Local email assistant — developed a Docker-based module using Ollama to read, analyze and draft responses to customer support and sales emails, with LLM inference running locally on company PCs",
    "smp.b5": "MLOps & deployment — model optimization and quantization, TensorRT acceleration, inference integration, and deployment using Docker containers or virtual machines depending on application requirements",
    "smp.products": "Product pages: ",
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
    "kitware.text": "Contributed to <strong><a href=\"https://www.kitware.com/paralabel-a-paraview-plugin-for-3d-object-detection-annotation-at-scale/\" target=\"_blank\" rel=\"noopener noreferrer\">Paralabel</a></strong>, an open-source ParaView plugin for annotating large-scale 3D point cloud datasets for machine learning. Worked with 3D geometric transformations, coordinate systems, rotation matrices, and quaternions to manipulate and visualize spatial data. Contributed to C++/Qt/VTK development, unit testing, and validation, following collaborative software engineering practices including Git branching, merge requests, code reviews, and version tagging.",
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
    "map.toussieu": " - France: Toussieu: AI Engineer (Computer Vision & Generative AI) at SMP Technik",
    "map.lyon": " - France: Lyon: Software Developer (C++ / Qt) at Thelesys",
    "map.villeurbanne": " - France: Villeurbanne: Computer vision internship at Kitware SAS (Paralabel)",
    "map.unc": " - United States: Medical imaging research internship at UNC Chapel Hill"
  },
  fr: {
    "index.title": "Portfolio de Timothée Teyssier",
    "index.cv": "Mon CV",
    "index.role": "Ingénieur IA | Vision par ordinateur, IA générative",
    "index.school": "Diplômé de CPE Lyon — Image, Modélisation & Informatique (IMI)",
    "index.photoAlt": "Photo de profil",
        "unity.label": "Projet personnel · 3D & développement de jeux",
    "unity.title": "Génération procédurale de mondes — Unity",
    "unity.text": "Projet personnel de génération procédurale de petites îles en 3D avec Unity et C#. Expérimentation sur les reliefs, les différentes régions du terrain (eau, sable, herbe et montagnes) et le placement procédural de plusieurs types d’arbres et d’assets 3D. Ce projet reflète mon intérêt pour les environnements 3D, les moteurs de jeu et la génération de contenu procédural.",
    "unity.imgAlt": "Illustration d’un terrain procédural low-poly",
    "unity.caption": "Reconstitution illustrative — il ne s’agit pas d’une capture originale du projet.",
    "about.heading": "À propos de moi",
    "about.text": "Ingénieur IA basé à Lyon, je conçois et déploie des solutions d'intelligence artificielle de bout en bout, associant vision par ordinateur, machine learning et IA générative. Mes activités couvrent le développement et le fine-tuning de modèles, la mise en place de systèmes RAG, leur intégration logicielle et leur déploiement dans des applications industrielles.",
    "skills.heading": "Compétences",
    "skills.ai": "IA & Machine Learning : ",
    "skills.llm": "LLM & IA générative : ",
    "skills.llmValue": "Qwen (VLM), Transformers, LoRA / QLoRA, Ollama, RAG, inférence locale de LLM",
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
    "smp.title": "Mai 2025 – Aujourd'hui — Ingénieur IA | Vision par ordinateur & IA générative",
    "smp.intro": "Chez SMP Technik, je conçois et déploie des solutions d’IA industrielles de bout en bout : <strong><a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-detectool/\" target=\"_blank\" rel=\"noopener noreferrer\">DetecTool</a></strong> pour la reconnaissance d’outils de coupe ; analyse automatique de plans de broche intégrée à <strong><a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-easygrind/\" target=\"_blank\" rel=\"noopener noreferrer\">EasyGrind</a></strong> et <strong><a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-broachexpert/\" target=\"_blank\" rel=\"noopener noreferrer\">Broach Expert</a></strong> ; assistants RAG pour le support technique ; et assistance e-mail locale pour le SAV et le service commercial.",
    "smp.b1": "<a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-detectool/\" target=\"_blank\" rel=\"noopener noreferrer\">DetecTool</a> — préparation des datasets, annotation, entraînement et évaluation des modèles ; détection, segmentation et classification d’outils de coupe pour des applications desktop et mobiles",
    "smp.b2": "Analyse de plans de broche — préparation des datasets, annotation, entraînement et évaluation de modèles YOLO, Vision Transformer (ViT) et ResNet ; fine-tuning de Qwen VLM avec LoRA / QLoRA pour extraire les informations techniques, puis décodage et intégration des données structurées dans <a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-easygrind/\" target=\"_blank\" rel=\"noopener noreferrer\">EasyGrind</a> et <a href=\"https://www.smp-technik.fr/logiciels-2/logiciel-broachexpert/\" target=\"_blank\" rel=\"noopener noreferrer\">Broach Expert</a>",
    "smp.b3": "RAG documentaire — développement de systèmes de recherche augmentée dans les anciens dossiers et procédures de l’entreprise pour aider les techniciens et le SAV à vérifier les consignes et obtenir des réponses à leurs questions techniques",
    "smp.b4": "Assistant e-mail local — développement d’un module sous Docker utilisant Ollama pour lire, analyser et proposer des réponses aux e-mails du SAV et du service commercial, avec inférence LLM locale sur les PC de l’entreprise",
    "smp.b5": "MLOps & déploiement — optimisation et quantification des modèles, accélération avec TensorRT, intégration de l’inférence et déploiement via conteneurs Docker ou machines virtuelles selon les besoins applicatifs",
    "smp.products": "Pages des logiciels : ",
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
    "kitware.text": "Contribution à <strong><a href=\"https://www.kitware.com/paralabel-a-paraview-plugin-for-3d-object-detection-annotation-at-scale/\" target=\"_blank\" rel=\"noopener noreferrer\">Paralabel</a></strong>, un plugin open source de ParaView dédié à l’annotation de grands jeux de données de nuages de points 3D pour le Machine Learning. Travail sur les transformations géométriques 3D, les systèmes de coordonnées, les matrices de rotation et les quaternions pour manipuler et visualiser les données spatiales. Participation au développement C++/Qt/VTK, aux tests unitaires et à la validation, avec des pratiques collaboratives de génie logiciel : branches Git, merge requests, revues de code et gestion des versions par tags.",
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
    "map.toussieu": " - France : Toussieu : Ingénieur IA (vision par ordinateur et IA générative) chez SMP Technik",
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
