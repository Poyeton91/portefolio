const projectDetails = {
    'git-argus': {
        meta: 'Stage · LISN / équipe GALaC', title: 'Git Argus',
        lead: 'Un outil d’aide à l’analyse de dépôts Git, conçu pour rendre leur activité et leur évolution plus faciles à comprendre.',
        description: 'Développé au LISN pour répondre notamment aux besoins des enseignants, Git Argus récupère des dépôts GitLab et rassemble leurs informations dans un tableau de bord. Il aide à explorer le travail réalisé sans prétendre évaluer automatiquement les étudiants.',
        work: 'Conception et développement de l’application de bout en bout : préparation des dépôts, fusion des identités d’un même contributeur, choix des fichiers à analyser, indicateurs clés, graphiques d’activité et explorateur de code. L’auteur des lignes est calculé à la demande. Des modules indépendants permettent d’ajouter des analyses.',
        tech: 'Python · FastAPI · PyDriller · Git · GitLab · JavaScript · Chart.js',
        interest: 'Ce stage de deuxième année de BUT Informatique m’a permis de partir d’un besoin concret, d’étudier les outils existants puis de concevoir une application évolutive en autonomie, avec des échanges réguliers avec mon tuteur.',
        cover: 'images/git-argus/git_argus_cover.jpg',
        images: [
            'images/git-argus/image_01.png',
            'images/git-argus/image_23.png',
            'images/git-argus/image_24.png',
            'images/git-argus/image_25.png'
        ],
    },
    'database': {
        meta: '02 \u00b7 Site web', title: 'La Brasa \u2014 Carte num\u00e9rique',
        lead: 'Carte num\u00e9rique de restaurant, en quatre langues et accessible par QR code. Le personnel peut modifier la carte depuis Google Sheets, sans toucher au code.',
        description: 'Le site est h\u00e9berg\u00e9 sur GitHub Pages et r\u00e9cup\u00e8re les donn\u00e9es de l\u2019onglet \u00ab Carte \u00bb via GViz/CSV. Le navigateur g\u00e9n\u00e8re ensuite les cat\u00e9gories et les plats affich\u00e9s.',
        work: 'La carte est disponible en catalan, espagnol, fran\u00e7ais et anglais. Les cat\u00e9gories, prix, descriptions, disponibilit\u00e9s et allerg\u00e8nes sont g\u00e9r\u00e9s dans Google Sheets. Le site est pens\u00e9 pour un usage mobile.',
        tech: 'HTML5 \u00b7 CSS3 \u00b7 JavaScript \u00b7 Google Sheets (GViz/CSV) \u00b7 GitHub Pages \u00b7 QR code',
        interest: 'Le contenu est s\u00e9par\u00e9 de l\u2019interface : le restaurant peut faire \u00e9voluer la carte sans intervention technique ni backend d\u00e9di\u00e9.',
        interestTitle: 'Mise \u00e0 jour simplifi\u00e9e',
        cover: 'images/brasa-carte/la_brasa_cover.jpg',
        images: [
            'images/brasa-carte/qrcode_acces%20carte.jpg',
            'images/brasa-carte/screen1site.jpg',
            'images/brasa-carte/screen2site.jpg',
            'images/brasa-carte/screen3site.jpg',
            'images/brasa-carte/screen_bdd_excel.jpg'
        ],
        url: 'https://labrasademar.github.io/la-brasa-menu/'
    },
    'tiny-bank': {
        meta: '03 · Février 2020', title: 'Tiny Bank',
        lead: 'Un programme Python de gestion de trésorerie, centré sur la manipulation de données et la logique applicative.',
        description: 'Tiny Bank est un projet de programmation qui permet de gérer des opérations liées à une trésorerie à travers une application simple.',
        work: 'Développement du programme et mise en place de la logique nécessaire pour gérer les différentes opérations de trésorerie.',
        tech: 'Python · programmation · logique applicative',
        interest: 'Un projet ancien mais intéressant pour montrer les premières bases de conception d’un outil répondant à un besoin précis.',
        images: [],
    },
    'cahier-des-charges': {
        meta: '04 · Janvier 2025', title: 'Cahier des charges',
        lead: 'Un travail de conception complet autour d’une maison d’édition fictive, avec une forte dimension analyse et gestion de projet.',
        description: 'Le projet consiste à formaliser les besoins et le fonctionnement d’une organisation fictive afin de préparer la conception d’une solution.',
        work: 'Recueil et formalisation des besoins, étude du projet et utilisation de méthodes de modélisation pour structurer la solution envisagée.',
        tech: 'Analyse · UML · gestion de projet · PERT / GANTT',
        interest: 'C’est le projet qui illustre le mieux mon intérêt pour la partie gestion et conception, en complément du développement.',
        images: [],
    },
    'trading': {
        meta: '05 · En réflexion', title: 'Simulateur de trading',
        lead: 'Un projet en réflexion autour de la simulation et de l’apprentissage du fonctionnement des marchés.',
        description: 'L’objectif est de faire évoluer l’idée vers un outil permettant de simuler des situations de trading dans un cadre pédagogique.',
        work: 'Réflexion sur le fonctionnement de l’outil, les fonctionnalités à proposer et la manière de transformer l’idée en projet concret.',
        tech: 'Conception · simulation · réflexion fonctionnelle',
        interest: 'Ce projet montre aussi mon envie d’explorer des sujets variés et de construire des outils utiles au-delà des exercices purement techniques.',
        images: [],
    }
};

const modal = document.getElementById('project-modal');
const modalPanel = modal.querySelector('.project-modal-panel');
const closeButton = modal.querySelector('.project-modal-close');
let lastFocusedElement = null;

function openProject(slug) {
    const project = projectDetails[slug];
    if (!project) return;
    lastFocusedElement = document.activeElement;
    document.getElementById('project-modal-meta').textContent = project.meta;
    document.getElementById('project-modal-title').textContent = project.title;
    document.getElementById('project-modal-lead').textContent = project.lead;
    document.getElementById('project-modal-description').textContent = project.description;
    document.getElementById('project-modal-work').textContent = project.work;
    document.getElementById('project-modal-tech').textContent = project.tech;
    document.getElementById('project-modal-interest-title').textContent = project.interestTitle || 'Pourquoi ce projet';
    document.getElementById('project-modal-interest').textContent = project.interest;
    const projectUrl = document.getElementById('project-modal-url');
    projectUrl.href = project.url || '';
    projectUrl.style.display = project.url ? 'inline-flex' : 'none';

    const coverWrap = document.getElementById('project-modal-cover-wrap');
    const cover = document.getElementById('project-modal-cover');
    coverWrap.style.display = project.cover ? 'block' : 'none';
    if (project.cover) {
        cover.src = project.cover;
        cover.alt = `Couverture de ${project.title}`;
    }

    const gallery = document.getElementById('project-modal-gallery');
    gallery.replaceChildren();
    (project.images || []).forEach(path => {
        const image = document.createElement('img');
        image.src = path;
        image.alt = `Photo de ${project.title}`;
        image.loading = 'lazy';
        image.onerror = () => image.remove();
        gallery.appendChild(image);
    });
    gallery.style.display = gallery.childElementCount ? 'flex' : 'none';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    closeButton.focus();
}

function closeProject() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastFocusedElement) lastFocusedElement.focus();
}

document.querySelectorAll('.project[data-project]').forEach(project => {
    project.addEventListener('click', () => openProject(project.dataset.project));
    project.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openProject(project.dataset.project);
        }
    });
});
document.querySelectorAll('.experience-project-link[data-project]').forEach(button => {
    button.addEventListener('click', () => openProject(button.dataset.project));
});
closeButton.addEventListener('click', closeProject);
modal.addEventListener('click', event => {
    if (event.target === modal) closeProject();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeProject();
});
