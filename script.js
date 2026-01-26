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
            id: "pbi_rh",
            title: "RH Strategic Hub : Pilotage 360° du Capital Humain",
            category: "Power BI / HR Analytics",
            image: "pbi_rh_hub_new.png",
            gallery_title: "Tableaux de bord stratégiques (Multi-Pages)",
            description: "Système décisionnel complet structuré en 3 piliers stratégiques (Performance, Inclusion, Rétention), offrant une vision granulaire de la gestion RH via une interface interactive 'Dark Mode' haut de gamme.",
            context_title: "1. Vision & Objectifs Métier",
            context: `
                <p>Ce projet vise à centraliser toute la donnée RH (207 collaborateurs) pour permettre aux décideurs d'identifier les drivers de performance, de garantir l'équité salariale et d'optimiser les stratégies de rétention des talents.</p>
                <p style="margin: 1rem 0; font-style: italic; color: #c4b5fd;">"Transformer des données administratives en leviers de croissance humaine et financière."</p>
            `,
            method_title: "2. Expertise BI & Technique",
            method: `
                <p>Le projet repose sur une modélisation Star Schema optimisée et des calculs DAX avancés pour des KPIs en temps réel.</p>
                <div class="tech-stack-mini" style="margin: 1.5rem 0; padding: 1.2rem; background: rgba(255,255,255,0.05); border-radius: 12px; display: flex; flex-direction: column; gap: 0.8rem; border: 1px solid rgba(139, 92, 246, 0.2);">
                    <strong>Indicateurs Clés Modélisés :</strong>
                    <code style="font-size: 0.8rem; color: #c4b5fd;">Turnover Rate : 33.23% (Analyse des tendances de départ).</code>
                    <code style="font-size: 0.8rem; color: #c4b5fd;">Masse Salariale : $14.63M (Visualisation par performance).</code>
                    <code style="font-size: 0.8rem; color: #c4b5fd;">Satisfaction & Engagement : 4.11/5 (Score moyen collaborateur).</code>
                </div>
            `,
            skills_extra_title: "3. Analyse des Piliers Stratégiques",
            skills_extra: `
                <div style="display: flex; flex-direction: column; gap: 1.2rem; text-align: left;">
                    <p><strong>Executive Performance</strong> : Monitoring des coûts, productivité par département (Production leader avec 126 agents) et évolution historique des recrutements.</p>
                    <p><strong>Equity Audit (Inclusion)</strong> : Audit de l'équité par genre et âge (56% Femmes / 44% Hommes), assurant une politique de rémunération juste et transparente.</p>
                    <p><strong>Retention & Recruitments</strong> : Diagnostic des motifs de départ (Another position, Salary) et optimisation des canaux de sourcing (Indeed & LinkedIn en tête).</p>
                </div>
            `,
            github: "https://github.com/moulhatah99/Portfolio_data",
            conclusion: "Un outil de pilotage robuste permettant de transformer la gestion humaine en un avantage compétitif mesurable.",
            screenshots: [
                { src: "pbi_rh_hub_new.png", label: "Portail d'accueil : Indice de santé RH & Navigation" },
                { src: "pbi_rh_executive_new.png", label: "Performance View : Coûts, Engagement & Effectifs" },
                { src: "pbi_rh_inclusion_new.png", label: "Equity Audit : Diversité & Équilibre Salarial" },
                { src: "pbi_rh_retention_new.png", label: "Retention Insights : Churn & Sources de Recrutement" }
            ]
        },
        {
            id: "pbi_supply",
            title: "Supply chain : gestion de stocks & suivi de livraisons",
            category: "Power BI / Supply Chain",
            image: "pbi_supply_chain.png",
            gallery_title: "Architecture Logistique",
            description: "Développement d'un système de monitoring en temps réel de la chaîne d'approvisionnement pour optimiser les niveaux de stocks et la ponctualité des livraisons.",
            context_title: "Défis de la Supply Chain",
            context: "La réduction des coûts de stockage tout en évitant les ruptures est le défi majeur traité ici. L'objectif est de fournir une visibilité totale sur les délais transporteurs et la rotation des inventaires.",
            method_title: "Ingénierie des Données Supply",
            method: `
                <p>Mise en place d'un pipeline de monitoring logistique :</p>
                <div class="tech-stack-mini" style="margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; border: 1px solid rgba(255,255,255,0.1);">
                    <strong>Outils :</strong>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Calcul de Stock Sécu</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Analyse OTIF</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Forecasting</span>
                </div>
                <ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; text-align: left;">
                    <li><strong>Optimisation de Stock</strong> : Calcul automatique des seuils de réapprovisionnement et alertes sur les surstocks.</li>
                    <li><strong>Performance Transporteur</strong> : Suivi du taux 'On-Time In-Full' (OTIF) pour évaluer la fiabilité des partenaires logistiques.</li>
                    <li><strong>Visibilité End-to-End</strong> : Tracking des flux depuis l'entrepôt jusqu'au client final.</li>
                </ul>
            `,
            skills_extra_title: "📈 Gains Opérationnels",
            skills_extra: "Réduction des délais de livraison et optimisation des flux de trésorerie bloqués dans les stocks dormants.",
            github: "https://github.com/moulhatah99/Portfolio_data",
            conclusion: "Ce projet est en cours de finalisation et sera bientôt disponible en version complète."
        },
        {
            id: "pbi_sales",
            title: "Suivi des performances de ventes",
            category: "Power BI / Business Intel",
            image: "pbi_pro1.png",
            gallery_title: "Sales Insights",
            description: "Dashboard 360° offrant une analyse granulaire du chiffre d'affaires, des marges et de la croissance géographique.",
            context_title: "Pilotage Commercial",
            context: "Besoin d'une vue unifiée des ventes globales pour identifier les régions leaders et les produits moteurs de croissance.",
            method_title: "Analyse Multidimensionnelle",
            method: `
                <p>Construction d'une interface de pilotage haute performance :</p>
                <div class="tech-stack-mini" style="margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; border: 1px solid rgba(255,255,255,0.1);">
                    <strong>Fonctionnalités :</strong>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Comparaison YoY</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Cartographie Interactive</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Drill-through</span>
                </div>
                <ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; text-align: left;">
                    <li><strong>Analyse Temporelle</strong> : Comparaison Year-over-Year (YoY) pour mesurer la croissance réelle.</li>
                    <li><strong>Visualisation Géographique</strong> : Map interactive pour explorer les performances par pays et par ville.</li>
                    <li><strong>Top/Bottom Products</strong> : Focus sur les meilleures ventes et les stocks à faible rotation.</li>
                </ul>
            `,
            skills_extra_title: "✅ Vision Stratégique",
            skills_extra: "Détection rapide des opportunités de marché et optimisation des budgets publicitaires vers les zones les plus rentables.",
            github: "https://github.com/moulhatah99/Portfolio_data",
            conclusion: "L'outil est utilisé pour les revues mensuelles de performance commerciale."
        }
    ],
    python: [
        {
            id: "py1",
            title: "Analyse Exploratoire (EDA) & Statistiques RH",
            category: "Python / Data Science",
            image: "py_pro1.png",
            gallery_title: "Visualisations & Stats",
            description: "Étude approfondie des facteurs d'influence sur le climat social et la satisfaction des collaborateurs via des méthodes statistiques.",
            context_title: "Contexte Social",
            context: "Identification de signaux faibles précédant les démissions et compréhension des corrélations entre ancienneté, formation et promotion.",
            method_title: "Pipeline de Data Science",
            method: `
                <p>Mise en œuvre d'un cadre d'analyse mathématique rigoureux :</p>
                <div class="tech-stack-mini" style="margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; border: 1px solid rgba(255,255,255,0.1);">
                    <strong>Stack Python :</strong>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Pandas / Numpy</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Seaborn / Plotly</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Scipy (Stats)</span>
                </div>
                <ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; text-align: left;">
                    <li><strong>Data Cleaning</strong> : Traitement des valeurs manquantes et normalisation des variables catégorielles.</li>
                    <li><strong>Exploration Graphique</strong> : Conception de graphiques complexes (Heatmaps, Violin plots) pour détecter les outliers.</li>
                    <li><strong>Tests Statistiques</strong> : Validation des hypothèses via des tests de corrélation (P-value) pour assurer la robustesse des insights.</li>
                </ul>
            `,
            skills_extra_title: "💡 Insights Clés",
            skills_extra: "Détection de corrélations inattendues entre le temps de trajet et le taux de churn, permettant une révision des politiques de télétravail.",
            github: "https://github.com/moulhatah99/Portfolio_data",
            conclusion: "Le notebook Jupyter complet est disponible sur GitHub."
        },
        {
            id: "py2",
            title: "Web Scraping & Analyse du Marché Immobilier",
            category: "Python / Automatisation",
            image: "py_pro2.png",
            gallery_title: "Extraction de Données",
            description: "Outil automatisé de veille tarifaire collectant des données immobilières pour identifier des opportunités d'investissement.",
            context_title: "Veille Concurrentielle",
            context: "Nécessité de benchmarker les prix au m² en temps réel pour détecter les biens sous-évalués.",
            method_title: "Ingénierie de Scraping",
            method: `
                <p>Développement d'un agent d'extraction robuste :</p>
                <div class="tech-stack-mini" style="margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; border: 1px solid rgba(255,255,255,0.1);">
                    <strong>Technos :</strong>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">BeautifulSoup / Selenium</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Requests</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Matplotlib</span>
                </div>
                <ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; text-align: left;">
                    <li><strong>Extraction Multi-sources</strong> : Récupération automatisée des annonces sur plusieurs portails majeurs.</li>
                    <li><strong>Parsing & Structuration</strong> : Transformation du HTML brut en bases de données SQL exploitables.</li>
                    <li><strong>Analyse de Tendances</strong> : Dashboarding rapide des prix médians par quartier et diagnostic d'anomalies.</li>
                </ul>
            `,
            skills_extra_title: "🚀 Performance",
            skills_extra: "Extraction quotidienne de plus de 1000 annonces en moins de 10 minutes grâce à l'optimisation des requêtes.",
            github: "https://github.com/moulhatah99/Portfolio_data",
            conclusion: "Le script est prêt pour une intégration en production."
        }
    ],
    ml: [
        {
            id: "ml1",
            title: "Clustering K-Means & Segmentation Clients",
            category: "Machine Learning / Marketing",
            image: "ml_pro1.png",
            gallery_title: "Segmentation Algorithmique",
            description: "Mise en place d'un modèle non supervisé pour regrouper les clients selon leurs comportements d'achat réels.",
            context_title: "Hyper-personnalisation",
            context: "Passer d'un marketing de masse à une approche ciblée en comprenant les nuances de la base client.",
            method_title: "Cycle de Modélisation ML",
            method: `
                <p>Application rigoureuse du workflow Machine Learning :</p>
                <div class="tech-stack-mini" style="margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 12px; display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; border: 1px solid rgba(255,255,255,0.1);">
                    <strong>Stack ML :</strong>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Scikit-learn</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">K-Means ++</span>
                    <span style="display: flex; align-items: center; gap: 0.4rem; color: var(--primary-text); padding: 0.4rem 0.8rem; font-size: 0.9rem;">Elbow Method</span>
                </div>
                <ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; text-align: left;">
                    <li><strong>Feature Engineering</strong> : Création de variables de comportement (Récence, Fréquence, Panier moyen).</li>
                    <li><strong>Optimisation de Modèle</strong> : Utilisation de la méthode du coude (Elbow) et du score de Silhouette pour déterminer le nombre optimal de clusters.</li>
                    <li><strong>Analyse de Profils</strong> : Caractérisation métier de chaque groupe pour définir des actions marketing spécifiques.</li>
                </ul>
            `,
            skills_extra_title: "⭐ Résultats",
            skills_extra: "Définition de 5 personas types, permettant une augmentation de 15% du taux de conversion des campagnes emailing.",
            github: "https://github.com/moulhatah99/Portfolio_data",
            conclusion: "Le modèle est prêt à être déployé pour des prédictions en temps réel."
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
