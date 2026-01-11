// Initialize Lucide icons
lucide.createIcons();

// Project Data organized by category
const projectsByCategory = {
    sql: [
        {
            id: "sql1",
            title: "Automatisation de rapports de ventes commerciales",
            category: "SQL Analytics (Chinook)",
            image: "sql_pro1.png",
            description: "Manipulation de la base de données relationnelle <a href='https://github.com/lerocha/chinook-database/blob/master/ChinookDatabase/DataSources/Chinook_Sqlite_AutoIncrementPKs.sqlite' target='_blank' style='color: var(--accent); text-decoration: underline;'>Chinook</a> pour mettre en place un système de reporting automatisé. L’objectif était de centraliser la logique métier directement dans SQL afin de produire des indicateurs fiables, cohérents et exploitables par n'importe quel outil de visualisation.",
            context_title: "Contexte et problématique métier",
            context: "Une entreprise souhaite disposer d’un reporting automatisé offrant une vision claire et actualisée de ses performances de ventes, pour suivre l’évolution du chiffre d’affaires dans le temps, identifier les produits les plus rentables, détecter les produits sous-performants et mieux comprendre le comportement de ses clients (fréquence d’achat, contribution au CA), afin de faciliter la prise de décisions éclairées en matière de pricing, de promotions et de stratégie commerciale (actions marketing).",
            method_title: "Contexte & méthodologie",
            method: `
                <p>Pour répondre à ces besoins, j’ai commencé par analyser le modèle relationnel de la base de données Chinook, en identifiant les tables clés liées aux ventes, aux produits, aux clients et aux dates de facturation. Cette étape m’a permis de comprendre les relations entre les entités et de définir les dimensions métiers nécessaires à l’analyse : le temps, les produits et les clients.</p>
                
                <div class="tech-stack-mini" style="margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; border: 1px solid rgba(255,255,255,0.1);">
                    <strong>Technologies utilisées :</strong>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">
                        <img src="sql_logo_custom.png" alt="SQL Logo" style="height: 20px; width: auto;"/> SQL
                    </span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">
                        <img src="db_browser_sqlite_icon.png" alt="SQLite Logo" style="height: 20px; width: auto;"/> DB Browser for SQLite
                    </span>
                </div>

                <p>J’ai ensuite développé des requêtes SQL analytiques reposant sur des jointures multi-tables et des agrégations avancées (SUM, AVG, COUNT) afin de calculer les principaux indicateurs de performance commerciale (chiffre d'affaires, quantités vendues, etc.). Afin de rendre le reporting durable et facilement exploitable, j’ai conçu plusieurs vues SQL métiers qui centralisent la logique de calcul des KPI. Ces vues constituent un mini data mart de ventes, structuré autour d’indicateurs standards et directement consommable par des outils comme Excel ou Power BI. Cette approche permet de séparer clairement la logique métier, implémentée en SQL, de la couche de visualisation, garantissant ainsi la cohérence des indicateurs quel que soit l’outil de restitution utilisé.</p>
                
                <p>Les analyses mises en place couvrent plusieurs dimensions clés de la performance commerciale :</p>
                <ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; text-align: left;">
                    <li><strong>Suivi des ventes mensuelles et trimestrielles</strong> : Identification des périodes de forte activité, mise en évidence de la saisonnalité et comparaison des performances d’un trimestre à l’autre.</li>
                    <li><strong>Analyse produits</strong> : Identification des produits les plus rentables et sous-performants. Utilisation d’une <strong>analyse de type Pareto (80/20)</strong> pour prioriser les efforts marketing et optimiser les assortiments.</li>
                    <li><strong>Analyse clients</strong> : Identification des meilleurs clients par CA et fréquence. Mise en place d’une <strong>segmentation RFM</strong> pour fidéliser les clients à forte valeur et anticiper le risque de départ (churn).</li>
                </ul>
                
                <p>L’ensemble de ces analyses offre une vision complète et actionnable de la performance commerciale, permettant d’orienter les décisions stratégiques (pricing, promotions, ciblage marketing).</p>
            `,
            skills_extra_title: "✅ Compétences démontrées",
            skills_extra: "Ce projet illustre ma capacité à utiliser SQL comme un véritable outil d’analyse et de pilotage métier, et non comme un simple langage de requêtage. En centralisant la logique analytique dans des vues SQL automatisées, j’ai modélisé un data mart simple et conçu une solution de reporting robuste, évolutive et directement exploitable dans un contexte professionnel de Business Intelligence.",
            github: "https://github.com/moulhatah99/Portfolio_data/tree/main/SQL/Chinook%20database",
            conclusion: "Vous pouvez retrouver l'intégralité des analyses et des requêtes SQL détaillées que j'ai écrites sur cette base Chinook directement dans mon dépôt GitHub.",
            screenshots: [
                { src: "sql_query_screenshot_last_quarter_1767912709930.png", label: "Script SQL - Vue qui affiche automatiquement le rapport des Ventes du dernier trimestre" },
                { src: "sql_rfm_scores_aesthetic_table_1767913419709.png", label: "Résultat SQL - Analyse RFM (Récence, Fréquence, Montant) des clients" }
            ]
        }
    ],
    excel: [
        {
            id: "excel1",
            title: "Pilotage de la Performance Commerciale & Segmentation Clients",
            category: "Excel Expert / Dashboarding",
            image: "excel_pro1.png",
            gallery_title: "Résultat Dashboard",
            description: "Ce projet illustre la transformation de données de vente brutes ('Global Superstore') en un système de pilotage décisionnel interactif. L'objectif est d'offrir une vision claire de la rentabilité et de la fidélité client pour orienter la stratégie commerciale.",
            context_title: "Problématique Métier & Enjeux Stratégiques",
            context: "L'entreprise faisait face à une difficulté de lecture de ses marges réelles et à une méconnaissance de la valeur de sa base client. La problématique était de transformer plus de 9 000 transactions en indicateurs de performance (KPI) fiables pour répondre à des questions business critiques : Quelle est la marge brute réelle par mois ? Quels segments clients (Champions vs À risque) prioriser ? Quelles sont les zones géographiques déficitaires ?",
            method_title: "Méthodologie & Réalisations Techniques",
            method: `
                <p>J'ai exploité la puissance de la suite Power de Microsoft Excel pour construire une solution automatisée et robuste :</p>
                
                <div class="tech-stack-mini" style="margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; border: 1px solid rgba(255,255,255,0.1);">
                    <strong>Pipeline technique :</strong>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Power Query (Nettoyage & ETL)</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">TCD & Graphiques Croisés</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Analyse Géographique & Churn</span>
                </div>

                <ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; text-align: left;">
                    <li><strong>Nettoyage & Préparation (Power Query)</strong> : Connexion aux données brutes, normalisation des types de données, gestion des doublons et formatage rigoureux des dates de commande.</li>
                    <li><strong>Analyses Géographiques Précises</strong> : Mise en place d'une cartographie dynamique permettant de zoomer sur la performance par État (ex: Californie, Texas) au-delà des simples régions.</li>
                    <li><strong>Segmentation & Distribution Clients</strong> : Modélisation d'une répartition globale de la base client (Profils rentables, à potentiel, à risque) via des graphiques de répartition pour une vision macro.</li>
                    <li><strong>Détection du Churn</strong> : Identification proactive des TOP 5 clients à risque de départ (Churn) pour permettre des actions de fidélisation ciblées.</li>
                    <li><strong>Interface Décisionnelle Multi-Axes</strong> : Conception d'un dashboard interactif permettant de filtrer instantanément par Catégorie, Année, Région et Segment Client.</li>
                </ul>
            `,
            skills_extra_title: "✅ Questions Business Répondues",
            skills_extra: "Le dashboard permet désormais de répondre précisément : Quel est le taux de marge moyen des Champions ? Quels sont les produits les plus rentables par rapport aux volumes vendus ? Qui sont les clients prioritaires à contacter pour éviter leur départ (Churn) ?",
            github: "https://github.com/moulhatah99/Portfolio_data/blob/main/Excel/SampleSuperstore/superstore.xlsx",
            conclusion: "Le fichier Excel complet incluant les requêtes Power Query et le Dashboard final est disponible sur mon GitHub.",
            screenshots: [
                { src: "excel_superstore_dashboard_final.png", label: "Dashboard Final - Analyse Sales, Geography & Churn" }
            ]
        }
    ],
    pbi: [
        {
            id: "pbi1",
            title: "Dashboard Stratégique Global",
            category: "Power BI",
            image: "pbi_pro1.png",
            description: "Rapport 360° pour la direction générale avec indicateurs financiers et opérationnels.",
            method: "Connexion à des sources hybrides (SQL + Cloud) et développement de mesures DAX temporelles.",
            results: "Une seule source de vérité pour tous les départements, éliminant les silos de données.",
            github: "https://github.com/votre-compte/pbi-global"
        },
        {
            id: "pbi2",
            title: "Analyse des Stocks & Supply Chain",
            category: "Power BI",
            image: "pbi_pro2.png",
            description: "Optimisation de la rotation des stocks et réduction des ruptures.",
            method: "Intégration des données logistiques et calcul des niveaux de stock de sécurité dynamiques.",
            results: "Réduction des surstocks de 20% en 6 mois.",
            github: "https://github.com/votre-compte/pbi-inventory"
        }
    ],
    python: [
        {
            id: "py1",
            title: "Analyse Exploratoire (EDA) RH",
            category: "Python Data Science",
            image: "py_pro1.png",
            description: "Étude statistique des facteurs influençant le climat social et la rétention.",
            method: "Nettoyage de données brutes avec Pandas et visualisation Seaborn/Matplotlib.",
            results: "Identification de signaux faibles précédant les démissions chez les cadres.",
            github: "https://github.com/votre-compte/py-hr-eda"
        },
        {
            id: "py2",
            title: "Web Scraping & Analyse Immo",
            category: "Python Data Science",
            image: "py_pro2.png",
            description: "Automatisation de la veille tarifaire sur les portails immobiliers.",
            method: "Scraping avec BeautifulSoup et agrégation des prix au m² par quartier.",
            results: "Détection quotidienne d'opportunités d'achat sous le prix du marché.",
            github: "https://github.com/votre-compte/py-immo-scrape"
        }
    ],
    ml: [
        {
            id: "ml1",
            title: "Clustering K-Means Clients",
            category: "Machine Learning",
            image: "ml_pro1.png",
            description: "Segmentation non supervisée pour la personnalisation de masse.",
            method: "Preprocessing des données et optimisation de l'algorithme K-Means via la méthode Elbow.",
            results: "Définition de 5 personnas types pour des campagnes marketing ultra-personnalisées.",
            github: "https://github.com/votre-compte/ml-clustering"
        }
    ]
};

// Selection logic
const themeDetailOverlay = document.getElementById('themeDetailOverlay');
const overlayThemeTitle = document.getElementById('overlayThemeTitle');
const projectsSubGrid = document.getElementById('projects-sub-grid');
const closeThemeOverlay = document.getElementById('closeThemeOverlay');

const themeNames = {
    sql: "SQL - Base de données",
    excel: "Excel Expert",
    pbi: "Power BI",
    python: "Python Data Science",
    ml: "Machine Learning"
};

// Handle Theme Clicks
document.querySelectorAll('.theme-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const theme = trigger.getAttribute('data-theme');
        showCategory(theme);
    });
});

function showCategory(category) {
    const projects = projectsByCategory[category];
    if (!projects) return;

    // Prepare content
    projectsSubGrid.innerHTML = '';
    overlayThemeTitle.innerText = themeNames[category];

    // Scroll back to top of overlay
    themeDetailOverlay.scrollTop = 0;

    projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'project-card-list-view visible';
        card.innerHTML = `
            <h3>${proj.title}</h3>
            <div class="project-img-container-list">
                <img src="${proj.image}" alt="${proj.title}">
            </div>
            <div class="project-description-list">
                <p>${proj.description}</p>
                <button class="btn btn-primary open-modal-dynamic" data-id="${proj.id}" data-cat="${category}">
                    Voir les détails du projet
                </button>
            </div>
        `;
        projectsSubGrid.appendChild(card);
    });

    // Reattach Modal Logic
    projectsSubGrid.querySelectorAll('.open-modal-dynamic').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.getAttribute('data-id');
            const cat = btn.getAttribute('data-cat');
            const data = projectsByCategory[cat].find(p => p.id === id);
            openModal(data);
        });
    });

    // Show Overlay
    themeDetailOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeThemeOverlay.addEventListener('click', () => {
    themeDetailOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Modal Logic
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

function openModal(data) {
    if (data) {
        let screenshotsHtml = '';
        if (data.screenshots) {
            screenshotsHtml = `
                <div class="modal-gallery">
                    <h4><i data-lucide="image" size="18"></i> ${data.gallery_title || 'Extraits & Requêtes'}</h4>
                    <div class="gallery-grid">
                        ${data.screenshots.map(s => `
                            <div class="gallery-item">
                                <span>${s.label}</span>
                                <img src="${s.src}" alt="${s.label}">
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        modalBody.innerHTML = `
            <div class="modal-img-container main-img">
                <img src="${data.image}" alt="${data.title}" class="modal-img">
            </div>
            <div class="modal-info">
                <span class="badge">${data.category}</span>
                <h2>${data.title}</h2>
                
                <div class="info-section">
                    <h4><i data-lucide="info" size="18"></i> Description</h4>
                    <p>${data.description}</p>
                </div>

                ${data.context ? `
                <div class="info-section">
                    <h4><i data-lucide="target" size="18"></i> ${data.context_title || 'Contexte & Problématique'}</h4>
                    <p style="text-align: left;">${data.context}</p>
                </div>` : ''}
                
                <div class="info-section">
                    <h4><i data-lucide="layers" size="18"></i> ${data.method_title || 'Méthodologie'}</h4>
                    <div style="text-align: left; line-height: 1.8;">${data.method}</div>
                </div>
                
                ${data.results ? `
                <div class="info-section">
                    <h4><i data-lucide="trending-up" size="18"></i> Résultats Clés</h4>
                    <p style="text-align: left;">${data.results}</p>
                </div>` : ''}

                ${screenshotsHtml}

                ${data.skills_extra ? `
                <div class="info-section skills-highlight" style="margin-top: 3rem; padding: 2rem; background: rgba(124, 58, 237, 0.05); border-radius: 24px; border-left: 5px solid var(--accent);">
                    <h4 style="color: var(--text-dark); margin-bottom: 1rem;">${data.skills_extra_title}</h4>
                    <p style="text-align: left; margin: 0; font-size: 1.1rem; line-height: 1.7;">${data.skills_extra}</p>
                </div>` : ''}
                
                ${data.conclusion ? `
                <div class="info-section modal-conclusion">
                    <p><em>${data.conclusion}</em></p>
                </div>` : ''}

                <div class="modal-links">
                    <a href="${data.github}" target="_blank" class="btn btn-primary">
                        <i data-lucide="github"></i> Voir sur GitHub
                    </a>
                </div>
            </div>
        `;
        lucide.createIcons();
        modal.style.display = 'block';
        modal.scrollTop = 0;
    }
}

closeModal.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '1rem 0';
        header.style.backgroundColor = 'rgba(26, 11, 46, 0.98)'; /* Violet sombre --header-violet */
    } else {
        header.style.padding = '1.5rem 0';
        header.style.backgroundColor = 'var(--header-violet)';
    }
});

// Scroll Spy Logic
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

// Observation des éléments pour animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

function updateActiveLink() {
    let current = "";
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Si le haut de la section est dans la partie supérieure de l'écran
        if (rect.top <= 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

    // Par défaut, si on est tout en haut, activer Accueil
    if (window.scrollY < 100) {
        navLinks[0].classList.add("active");
    }
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink); // Au chargement
updateActiveLink(); // Immédiatement

document.querySelectorAll('.theme-trigger, .skill-card, .service-item, .hero-content, .hero-image').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});
