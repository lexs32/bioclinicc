const fs = require('fs');
const path = 'c:/Users/LexS/Downloads/anything (1)/anything/apps/web/src/app/page.jsx';
let content = fs.readFileSync(path, 'utf8');

// Define new clinical departments block
const newDepts = `const CLINICAL_DEPARTMENTS = [
  {
    name: "Hématologie Clinique",
    platform: "Automates Sysmex XN",
    desc: "Numération formule sanguine complète, étude de la coagulation et typage cellulaire pour le diagnostic des troubles sanguins.",
    tests: "NFS, Vitesse de sédimentation, Bilan d'hémostase (TP/TCA)",
    speed: "Même jour (Fast-track 2h)",
  },
  {
    name: "Biochimie & Métabolisme",
    platform: "Roche Cobas 6000/8000",
    desc: "Analyses enzymatiques, lipidiques et métaboliques complètes permettant le suivi de la fonction rénale, hépatique et cardiovasculaire.",
    tests: "Glycémie à jeun, Cholestérol (HDL/LDL), Créatinine, Urée, Bilan rénal",
    speed: "Même jour (Fast-track 1h)",
  },
  {
    name: "Immunologie & Hormonologie",
    platform: "Roche Cobas e601",
    desc: "Dosage ultrasensible d'hormones, marqueurs tumoraux, sérologies virales et marqueurs inflammatoires majeurs.",
    tests: "Thyroïde (TSH/T4), CRP ultra-sensible, Beta-HCG, Vitamine D",
    speed: "Même jour (4 heures)",
  },
  {
    name: "Microbiologie & Parasitologie",
    platform: "Enceintes de sécurité classe II / Bactec",
    desc: "Mise en culture bactériologique, identification de germes pathogènes et réalisation d'antibiogrammes pour guider l'antibiothérapie.",
    tests: "ECBU (Urine), Coproculture, Prélèvements mycologiques, Frottis",
    speed: "24 à 48 heures (cultures)",
  },
];`;

// Find where CLINICAL_DEPARTMENTS starts and ends
const startIdx = content.indexOf('const CLINICAL_DEPARTMENTS = {');
if (startIdx !== -1) {
  const endIdx = content.indexOf('};', startIdx) + 2;
  content = content.substring(0, startIdx) + newDepts + content.substring(endIdx);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully replaced CLINICAL_DEPARTMENTS programmatically.');
} else {
  console.log('Could not find CLINICAL_DEPARTMENTS in page.jsx');
}
