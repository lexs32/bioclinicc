export const IMAGES = {
  exterior:
    "https://dtvoeevhaseb5.cloudfront.net/user-uploads/6fe0c236-cd72-4b61-bdfa-e16b1f68d613.png",
  reception:
    "https://dtvoeevhaseb5.cloudfront.net/user-uploads/18a7ab61-a82e-4832-b6cc-bc31aaf02451.png",
  technician:
    "https://dtvoeevhaseb5.cloudfront.net/user-uploads/378b9a14-c630-429a-965f-dae9e793b1bb.png",
};

export const COPY = {
  fr: {
    dir: "ltr",
    lang: "FR",
    nav: {
      home: "Accueil",
      about: "À propos",
      analyses: "Analyses",
      reviews: "Avis patients",
      contact: "Contact",
      portal: "Portail patient",
    },
    hero: {
      headline: "Analyses médicales précises à Rabat.",
      subheadline:
        "Prenez rendez-vous pour un prélèvement à domicile ou consultez vos résultats en ligne 24/7.",
      cta_primary: "Réserver un prélèvement à domicile",
      cta_secondary: "Connexion portail patient",
    },
    proof: {
      label: "Chiffres clés",
      stat1_number: "+25 000",
      stat1_label: "patients pris en charge par an",
      stat2_number: "2h",
      stat2_label: "délai moyen Fast Track pour les analyses critiques",
      stat3_number: "Standards Nationaux",
      stat3_label: "laboratoire conventionné CNSS",
      stat4_number: "800+",
      stat4_label: "analyses disponibles sur site",
    },
    reviews: {
      label: "Avis patients",
      heading: "Ce que disent les patients.",
      source: "Avis vérifiés de notre fiche Google Maps",
      verified: "Vérifié",
    },
    gallery: {
      label: "Locaux",
      heading: "Dans le laboratoire.",
      cap1: "Entrée principale — Avenue de France, Agdal",
      cap2: "Espace d'accueil — enregistrement patient",
      cap3: "Plateau technique — personnel qualifié",
    },
    catalogue: {
      label: "Analyses",
      heading: "Catalogue partiel.",
      sub: "Toutes les analyses sont réalisées sur site, avec un rendu rapide. Catalogue complet disponible à l'accueil.",
      col_code: "Code",
      col_name: "Analyse",
      col_cat: "Catégorie",
      col_delay: "Délai",
    },
    footer: {
      tagline:
        "Laboratoire d'analyses médicales de proximité au service des patients de Rabat depuis 2010.",
      address_label: "Adresse",
      address: "Avenue de France, Agdal — Rabat 10080, Maroc",
      phone_label: "Téléphone",
      phone_main: "+212 537 68 25 25",
      phone_emergency: "+212 537 68 25 25",
      email_label: "Email",
      email: "contact@bioclinic.ma",
      hours_label: "Horaires d'ouverture",
      hours: [
        { days: "Lundi – Vendredi", time: "07:00 – 19:00" },
        { days: "Samedi", time: "08:00 – 14:00" },
        { days: "Urgences", time: "24 / 7" },
      ],
      links_label: "Liens rapides",
      links: [
        { label: "Portail résultats en ligne", href: "#" },
        { label: "Réserver un prélèvement à domicile", href: "#" },
        { label: "Catalogue des analyses", href: "#" },
        { label: "Mentions légales & Confidentialité", href: "#" },
      ],
      compliance: "Conventionné CNSS · Fiche Google Maps vérifiée",
      copy: "© 2026 Laboratoire BIOCLINIC. Tous droits réservés.",
    },
  },
};

export const TESTIMONIALS = [
  {
    text: "Équipe professionnelle, résultats rapides et précis. Je recommande vivement Bioclinic pour leur sérieux et leur accueil.",
    name: "Yasmine El Mansouri",
    role: "Patient vérifié",
    date: "Il y a 2 semaines",
    color: "#4285F4", // Google Blue
  },
  {
    text: "Service excellent, même pour le prélèvement à domicile. Très pratique, le technicien est arrivé à l'heure exacte.",
    name: "Karim Benjelloun",
    role: "Patient régulier",
    date: "Il y a 1 mois",
    color: "#EA4335", // Google Red
  },
  {
    text: "Laboratoire très accueillant et moderne. Une expérience irréprochable du début à la fin, résultats reçus rapidement.",
    name: "Sofia Alaoui",
    role: "Première visite",
    date: "Il y a 3 semaines",
    color: "#FBBC05", // Google Yellow
  },
  {
    text: "Mon médecin m'a recommandé Bioclinic et je comprends pourquoi. Personnel compétent, locaux propres, résultats envoyés le soir même.",
    name: "Omar Benchekroun",
    role: "Patient vérifié",
    date: "Il y a 2 mois",
    color: "#34A853", // Google Green
  },
  {
    text: "Le service de prélèvement à domicile est une vraie bonne idée. Rapide, propre, et les résultats étaient disponibles en ligne.",
    name: "Nadia Chraibi",
    role: "Patient vérifié",
    date: "Il y a 4 semaines",
    color: "#673AB7", // Deep Purple
  },
];

export const ANALYSES_CATALOGUE = [
  {
    code: "HEM-01",
    name: "Numération formule sanguine (NFS)",
    delay: "2h",
    category: "Hématologie",
  },
  {
    code: "BIO-12",
    name: "Glycémie à jeun",
    delay: "1h",
    category: "Biochimie",
  },
  {
    code: "BIO-24",
    name: "Bilan lipidique complet",
    delay: "4h",
    category: "Biochimie",
  },
  {
    code: "HOR-08",
    name: "TSH / T3 / T4",
    delay: "6h",
    category: "Hormonologie",
  },
  {
    code: "MIC-33",
    name: "ECBU — Cyto-bactériologique des urines",
    delay: "48h",
    category: "Microbiologie",
  },
  {
    code: "IMM-11",
    name: "CRP ultra-sensible",
    delay: "2h",
    category: "Immunologie",
  },
  {
    code: "BIO-44",
    name: "Créatinine & Clairance GFR",
    delay: "3h",
    category: "Biochimie",
  },
  {
    code: "HOR-19",
    name: "Beta-HCG qualitatif & quantitatif",
    delay: "4h",
    category: "Hormonologie",
  },
];
