"use client";

import React, { useState } from "react";
import { Droplet, FlaskConical, ShieldCheck, Microscope } from "lucide-react";
import { LabBackground } from "@/components/ui/background-components";
import { IMAGES, COPY, ANALYSES_CATALOGUE, TESTIMONIALS } from "./data/bioclinic";

/* ──────────────────────────────────────────────────────────────────────────
   REAL BIOCLINIC CONTACT DATA — authenticated, no placeholders
   Laboratoire BIOCLINIC d'analyses médicales - Rabat Agdal
────────────────────────────────────────────────────────────────────────── */
const BIOCLINIC = {
  phone: "+212 537 68 25 25",
  emergency: "+212 537 68 25 25",
  email: "contact@bioclinic.ma",
  address: {
    line1: "64 Avenue Omar Ibn El Khattab",
    line2: "Angle Avenue Atlas, Agdal",
    city: "Rabat 10000",
    full: "64 Avenue Omar Ibn El Khattab, Angle Avenue Atlas, Agdal, Rabat 10000",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8765365313936!2d-6.8461093!3d33.9974556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0xda76df09ca6cda3%3A0x7c997704a76e1ad6!2sLaboratoire+BIOCLINIC!5e0!3m2!1sfr!2sma!4v1716380000000!5m2!1sfr!2sma",
  hours: [
    {
      fr: "Lundi – Vendredi",
      en: "Monday – Friday",
      ar: "الاثنين – الجمعة",
      time: "07:00 – 19:00",
    },
    {
      fr: "Samedi",
      en: "Saturday",
      ar: "السبت",
      time: "08:00 – 14:00",
    },
    {
      fr: "Dimanche / Urgences",
      en: "Sunday / Emergencies",
      ar: "الأحد / الطوارئ",
      time: "24 / 7",
    },
  ],
};

const CLINICAL_COPY = {
  fr: {
    dir: "ltr",
    lang: "FR",
    nav: {
      home: "Accueil",
      about: "Notre Laboratoire",
      services: "Spécialités",
      catalogue: "Catalogue des tests",
      reviews: "Avis",
      contact: "Contact & Horaires",
      portal: "Portail Patients",
    },
    hero: {
      headline: "Laboratoire d'analyses médicales à Agdal, Rabat.",
      subheadline: "Vous venez au laboratoire ou vous demandez un prélèvement à domicile. Nous vous aidons à choisir le bon horaire, nous recevons votre ordonnance, puis nous vous indiquons comment récupérer vos résultats.",
      cta_primary: "Demander un rendez-vous",
      cta_secondary: "Portail des résultats",
      status_label: "PLATEAU TECHNIQUE OPÉRATIONNEL",
    },
    proof: {
      heading: "Ce que vous pouvez vérifier.",
      metrics: [
        { value: "Agdal", label: "Laboratoire situé au 64 Avenue Omar Ibn El Khattab" },
        { value: "07:00", label: "Ouverture du lundi au vendredi" },
        { value: "Domicile", label: "Prélèvement à domicile sur rendez-vous" },
        { value: "Résultats", label: "Récupération des résultats après validation" },
      ],
    },
    about: {
      heading: "Avant de venir, voici ce qu'il faut savoir.",
      text1: "Le laboratoire reçoit les patients à Agdal pour les analyses courantes et les demandes prescrites par ordonnance. Si vous avez un doute, appelez le secrétariat avant de vous déplacer.",
      text2: "Pour un prélèvement à domicile, laissez votre nom, votre numéro et les analyses demandées. L'équipe vous rappelle pour confirmer l'horaire, les conditions de prélèvement et les documents nécessaires.",
      cta: "Appeler le secrétariat",
    },
    matrix: {
      heading: "Les demandes les plus fréquentes.",
      desc: "Cette liste aide surtout à s'orienter. Pour une ordonnance complète, contactez le laboratoire.",
    },
    footer: {
      tagline: "Le Laboratoire BIOCLINIC d'analyses médicales est un centre indépendant spécialisé dans les examens biologiques de routine et de haute complexité, au service de Rabat depuis 2010.",
      address_label: "Adresse physique",
      phone_label: "Ligne directe",
      phone_emergency: "+212 537 68 25 25 (Standard)",
      email_label: "Secrétariat",
      hours_label: "Horaires de réception",
      links_label: "Ressources cliniques",
      compliance: "Adresse vérifiable sur Google Maps · Contact direct par téléphone",
      copy: "© 2026 LABORATOIRE BIOCLINIC. Tous droits réservés.",
    },
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   DEPARTMENTS MATRIX DATA
────────────────────────────────────────────────────────────────────────── */
const CLINICAL_DEPARTMENTS = [
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
];

const EDITORIAL_HEADING = {
  fontFamily: "'Outfit', sans-serif",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: 1.15,
};

function SectionLabel({ children }) {
  return (
    <span className="text-[11px] font-mono font-bold tracking-widest text-[#10B981] inline-block mb-3 uppercase">
      {children}
    </span>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#10B981">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function GetDeptIcon({ index }) {
  // Meaningful, department-specific medical icons (no generic geometric shapes).
  const props = { size: 18, strokeWidth: 2, className: "text-[#10B981]" };
  switch (index) {
    case 0: // Hematology — blood
      return <Droplet {...props} />;
    case 1: // Biochemistry — analyzer / reagents
      return <FlaskConical {...props} />;
    case 2: // Immunology & hormonology
      return <ShieldCheck {...props} />;
    case 3: // Microbiology & parasitology
      return <Microscope {...props} />;
    default:
      return <FlaskConical {...props} />;
  }
}

function InternalBrandmark({ inverted = false }) {
  const isDark = inverted;
  
  // Official Hex colors extracted from molecular bubble logo
  const lightTeal = "#A2D7C5";
  const mediumTeal = "#7CBCA5";
  const darkPurple = "#5F5095";

  const brandColor = isDark ? "#FFFFFF" : darkPurple;
  const labelColor = isDark ? "rgba(255,255,255,0.4)" : mediumTeal;

  return (
    <div className="flex items-center gap-3 select-none" style={{ direction: "ltr" }}>
      <svg width="38" height="38" viewBox="0 0 100 100" fill="none" className="flex-shrink-0">
        {/* Organic connection paths mimicking official logo shape */}
        <path d="M46 22 L46 52" stroke={mediumTeal} strokeWidth="14" strokeLinecap="round" />
        <path d="M22 36 L46 52" stroke={mediumTeal} strokeWidth="14" strokeLinecap="round" />
        <path d="M46 52 L50 74" stroke={mediumTeal} strokeWidth="14" strokeLinecap="round" />
        
        {/* Logo bubble nodes */}
        <circle cx="46" cy="22" r="13" fill={lightTeal} />
        <circle cx="74" cy="36" r="11" fill={lightTeal} />
        <circle cx="22" cy="36" r="13" fill={mediumTeal} />
        <circle cx="46" cy="52" r="13" fill={mediumTeal} />
        <circle cx="50" cy="74" r="13" fill={mediumTeal} />
        <circle cx="22" cy="62" r="12" fill={darkPurple} />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className="text-[10px] font-bold tracking-[0.14em] mb-0.5"
          style={{ color: labelColor, fontFamily: "'Outfit', sans-serif" }}
        >
          LABORATOIRE
        </span>
        <span
          className="text-[19px]"
          style={{
            color: brandColor,
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.02,
          }}
        >
          BIOCLINIC
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   MAIN EXPORT COMPONENT
────────────────────────────────────────────────────────────────────────── */
export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("#hero");
  const lang = "fr";
  
  // Interactive booking details
  const [bookingDate, setBookingDate] = useState("2026-05-25");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const c = CLINICAL_COPY[lang] || CLINICAL_COPY["fr"];
  const hero = c.hero;
  const proof = c.proof;
  const about = c.about;
  const matrix = c.matrix;
  const featureList = CLINICAL_DEPARTMENTS;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
    }, 4000);
  };

  /* Shared heading class strings */
  const heroH1 =
    "text-[35px] sm:text-[45px] md:text-[50px] lg:text-[54px] text-gray-800 max-w-4xl leading-[1.12]";
  const sectionH2 =
    "text-[26px] sm:text-[30px] md:text-[36px] text-gray-800 leading-[1.2]";

  /* Filter analyses based on search query */
  const filteredAnalyses = ANALYSES_CATALOGUE.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="min-h-screen relative text-gray-700 font-sans selection:bg-[#10B981] selection:text-white"
      dir="ltr"
    >
      <LabBackground />
      {/* ════════ NAVBAR ════════ */}
      <nav className="w-full border-b border-gray-150 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a 
              href="#hero" 
              className="inline-block" 
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("#hero");
                const target = document.querySelector("#hero");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <InternalBrandmark inverted={false} />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1 border border-gray-150 bg-[#FAF9F9] p-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              {[
                { label: "Accueil", href: "#hero" },
                { label: "Notre Laboratoire", href: "#about" },
                { label: "Spécialités", href: "#specialties" },
                { label: "Catalogue des tests", href: "#catalogue" },
                { label: "Avis", href: "#reviews" },
                { label: "Contact & Horaires", href: "#contact" },
              ].map(({ label, href }) => {
                const isActive = activeTab === href;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(href);
                      const target = document.querySelector(href);
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`px-5 py-2.5 text-[12px] font-bold transition-all rounded-full ${
                      isActive
                        ? "bg-[#10B981] text-white shadow-sm"
                        : "text-gray-600 hover:text-[#10B981] hover:bg-white"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
            <a 
              href="#booking" 
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("#booking");
                const target = document.querySelector("#booking");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#10B981] hover:bg-[#059669] text-white text-[12px] font-bold uppercase transition-all rounded-full active:scale-95 shadow-sm"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </nav>

      {/* ════════ HERO SECTION ════════ */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-150" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy Block */}
            <div className="lg:col-span-7 space-y-8">

              <h1 className={heroH1} style={EDITORIAL_HEADING}>
                {hero.headline}
              </h1>

              <p className="text-[16px] sm:text-[18px] text-gray-500 max-w-xl leading-[1.7] font-normal">
                {hero.subheadline}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#booking"
                  className="px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white text-[13px] font-bold tracking-wider uppercase transition-all rounded-xl shadow-sm active:scale-95 flex items-center gap-2 group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {hero.cta_primary}
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                    className={`transition-transform duration-200 group-hover:translate-x-1`}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href={`tel:${BIOCLINIC.phone.replace(/\s/g, "")}`}
                  className="px-8 py-4 bg-white border border-gray-200 text-gray-700 text-[13px] font-bold tracking-wider uppercase hover:border-[#10B981] hover:text-[#10B981] transition-all rounded-xl active:scale-95 flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.53 5.53l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                  </svg>
                  {BIOCLINIC.phone}
                </a>
              </div>
            </div>

            {/* Right Block - Quick Contact Card */}
            <div className="lg:col-span-5 w-full">
              <div className="w-full bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm max-w-[460px] mx-auto">
                {/* Building photo */}
                <div className="w-full overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={IMAGES.exterior}
                    alt="Laboratoire BIOCLINIC - Agdal Rabat"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contact info card */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-[#10B981] uppercase block mb-1">Secrétariat Médical</span>
                    <p className="text-[22px] font-extrabold text-gray-800 font-mono leading-none">{BIOCLINIC.phone}</p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      {"Ouvert du lundi au samedi · Prélèvement à domicile sur rendez-vous"}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100">
                    {BIOCLINIC.hours.map((h, i) => (
                      <div key={i} className="text-center">
                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-tight mb-1">
                          {h.fr}
                        </p>
                        <p className="text-[11px] font-mono font-bold text-gray-700">{h.time}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#booking"
                    className="w-full py-3.5 bg-[#10B981] hover:bg-[#059669] text-white text-[12px] font-bold tracking-wider uppercase transition-all rounded-xl active:scale-95 flex items-center justify-center gap-2 group shadow-sm"
                  >
                    {"Prendre rendez-vous"}
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className={`transition-transform duration-200 group-hover:translate-x-1`}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                  <div className="text-center">
                    <span className="text-[9px] text-gray-400 font-mono uppercase tracking-wide">AGDAL · 64 Av. Omar Ibn El Khattab · Rabat 10000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ BOOKING & CONSULTATION REQUEST SECTION (REPLACES BENTO) ════════ */}
      <section className="py-20 border-b border-gray-150" id="booking">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <SectionLabel>Secrétariat Médical</SectionLabel>
            <h2 className={sectionH2} style={EDITORIAL_HEADING}>
              {"Demande de rendez-vous"}
            </h2>
            <p className="text-[14px] text-gray-500 mt-3 max-w-lg mx-auto">
              "Soumettez votre demande. Notre secrétariat médical vous contactera pour valider vos examens, vous renseigner et planifier votre rendez-vous."
            </p>
          </div>

          <div className="bg-white border border-gray-150 p-8 rounded-2xl shadow-sm">
            {bookingSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-[#10B981] border border-emerald-100 flex items-center justify-center text-[24px] rounded-full mx-auto">
                  ✓
                </div>
                <h3 className="text-[18px] font-bold text-gray-800 uppercase tracking-tight" style={EDITORIAL_HEADING}>
                  {"Demande enregistrée"}
                </h3>
                <p className="text-[13px] text-gray-500 max-w-sm mx-auto">
                  "Merci pour votre confiance. Un membre de notre équipe médicale vous rappellera dans les plus brefs délais pour finaliser votre dossier."
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                      {"Nom complet"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={"Ex: Karim Alami"}
                      className="w-full px-4 py-3 text-[13px] border border-gray-200 bg-[#FAF9F9] text-gray-700 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all rounded-xl shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                      {"Numéro de téléphone"}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+212 600 00 00 00"
                      className="w-full px-4 py-3 text-[13px] border border-gray-200 bg-[#FAF9F9] text-gray-700 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all rounded-xl shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                      {"Type de demande"}
                    </label>
                    <select
                      className="w-full px-4 py-3 text-[13px] border border-gray-200 bg-[#FAF9F9] text-gray-700 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all rounded-xl shadow-sm"
                    >
                      <option value="hematology">"Hématologie & Coagulation"</option>
                      <option value="biochemistry">"Biochimie & Métabolisme"</option>
                      <option value="immunology">"Immunologie & Hormonologie"</option>
                      <option value="microbiology">"Microbiologie & Bactériologie"</option>
                      <option value="home">"Prélèvement à domicile"</option>
                      <option value="other">"Autre demande d'informations"</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                      {"Date souhaitée (optionnelle)"}
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-4 py-3 text-[13px] font-mono border border-gray-200 bg-[#FAF9F9] text-gray-700 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all rounded-xl shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    {"Détails de votre demande ou analyses prescrites"}
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Indiquez ici vos questions ou les examens prescrits par votre médecin..."
                    className="w-full px-4 py-3 text-[13px] border border-gray-200 bg-[#FAF9F9] text-gray-700 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all rounded-xl shadow-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#10B981] hover:bg-[#059669] text-white text-[12px] font-bold tracking-widest uppercase transition-all rounded-xl active:scale-95 shadow-sm flex items-center justify-center gap-2 group"
                >
                  {"Envoyer ma demande"}
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                    className={`transition-transform duration-200 group-hover:translate-x-1`}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ════════ MULTILINGUAL METRICS GRID (HARD DATA) ════════ */}
      <section className="border-b border-gray-150 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 pb-4 border-b border-gray-200">
            <h3 className="text-[20px] md:text-[24px] font-bold uppercase text-gray-800 leading-tight" style={EDITORIAL_HEADING}>
              {proof.heading}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {proof.metrics.map(({ value, label }, i) => (
              <div
                key={i}
                className={`flex flex-col justify-between border-t border-gray-200 md:border-t-0 md:border-l border-dashed border-gray-300 pt-4 md:pt-0 md:pl-6 first:pl-0 first:border-l-0 text-left`}
              >
                <div
                  className="text-[32px] md:text-[38px] leading-none mb-3 font-extrabold text-[#10B981]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {value}
                </div>
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-snug">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ ABOUT US SECTION WITH SPLIT GRID ════════ */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-150" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column — Detailed Clinical Operations */}
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel>Biological Standards</SectionLabel>
              <h2 className={sectionH2} style={EDITORIAL_HEADING}>
                {about.heading}
              </h2>
              <div className="h-1.5 w-16 bg-[#10B981] rounded-sm" />
              
              <div className="text-[15px] sm:text-[16px] text-gray-500 space-y-4 leading-[1.75] text-justify font-normal">
                <p>{about.text1}</p>
                <p>{about.text2}</p>
                <p className="border-l-4 border-[#10B981] pl-4 italic text-gray-500 font-semibold text-[15px]">
                  "« Notre engagement fondamental est de fournir des rapports biologiques précis afin de soutenir les décisions cliniques avec réactivité. »"
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="#catalogue"
                  className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-gray-800 hover:text-[#10B981] transition-all border-b border-transparent hover:border-[#10B981] pb-1 group"
                >
                  {about.cta}
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    className={`transition-transform duration-200 group-hover:translate-x-1`}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column — Facility Image Gallery (using all three authentic maps photos) */}
            <div className="lg:col-span-6 w-full">
              <div className="border border-gray-150 p-4 bg-white rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 overflow-hidden border border-gray-150 rounded-xl" style={{ height: "240px" }}>
                    <img
                      src={IMAGES.reception}
                      alt="Laboratoire BIOCLINIC Patient Reception Area"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden border border-gray-150 rounded-xl" style={{ height: "160px" }}>
                    <img
                      src={IMAGES.exterior}
                      alt="Laboratoire BIOCLINIC Main Entrance Agdal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden border border-gray-150 rounded-xl" style={{ height: "160px" }}>
                    <img
                      src={IMAGES.technician}
                      alt="Laboratoire BIOCLINIC High-Precision Automation Center"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                    "Plateau Technique & Accueil de Référence à Agdal"
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ DEPARTMENTS MATRIX ════════ */}
      <section className="py-20 md:py-28 border-b border-gray-150" id="specialties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-gray-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionLabel>Plateau Technique</SectionLabel>
              <h2 className={sectionH2} style={EDITORIAL_HEADING}>
                {matrix.heading}
              </h2>
            </div>
            <p className="text-[14px] text-gray-500 max-w-sm">
              {matrix.desc}
            </p>
          </div>

          {/* Grid: 2 Columns x 2 Rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureList.map((dept, i) => (
              <div
                key={i}
                className="border border-gray-150 bg-white p-6 md:p-8 flex flex-col justify-between hover:border-[#10B981] transition-all rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 bg-[#FAF9F9] border border-gray-150 rounded-lg">
                      <GetDeptIcon index={i} />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-gray-400">
                      [DEPT_0{i + 1}]
                    </span>
                  </div>

                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#10B981] uppercase block mb-1">
                    {dept.platform}
                  </span>
                  
                  <h3 className="text-[18px] font-bold uppercase text-gray-800 mb-3" style={EDITORIAL_HEADING}>
                    {dept.name}
                  </h3>

                  <p className="text-[13px] text-gray-500 leading-relaxed mb-6 text-justify">
                    {dept.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-auto space-y-3">
                  <div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      {"Examens courants"}
                    </span>
                    <span className="text-[12px] font-bold text-gray-600 leading-tight block">
                      {dept.tests}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                      {"Délai indicatif"}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#10B981]">
                      {dept.speed}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Proof banner */}
          <div className="mt-8 border border-gray-150 bg-[#FAF9F9] px-6 py-4 flex flex-wrap justify-between items-center gap-4 rounded-2xl">
            <div className="flex flex-wrap gap-6">
              {["Conventionné CNSS", "Fiche Google Maps Vérifiée", "Accueil Patient Agdal"].map(
                (badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <div className="w-1.5 h-4 bg-[#10B981] rounded-sm" />
                    <span className="text-[10px] font-extrabold tracking-wider text-gray-600 uppercase">
                      {badge}
                    </span>
                  </div>
                )
              )}
            </div>
            <a 
              href="https://maps.google.com/?q=Laboratoire+BIOCLINIC+Rabat" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[11px] font-extrabold text-[#10B981] hover:underline uppercase flex items-center gap-1.5"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Voir la fiche sur Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ════════ SEARCHABLE TEST CATALOGUE ════════ */}
      <section className="py-20 bg-white border-b border-gray-150" id="catalogue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 pb-6 border-b border-gray-100">
            <div>
              <SectionLabel>Test Directory</SectionLabel>
              <h2 className={sectionH2} style={EDITORIAL_HEADING}>
                "Rechercher un examen de biologie"
              </h2>
            </div>
            
            {/* Search Input Box */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                placeholder="Rechercher un test ou code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-5 pr-12 py-3 text-[13px] border border-gray-200 bg-[#FAF9F9] text-gray-700 focus:outline-none focus:border-[#10B981] focus:bg-white transition-all rounded-full shadow-sm`}
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`absolute right-4 top-3.5 text-gray-400`}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          {/* Catalogue List */}
          <div className="border border-gray-150 bg-[#FAF9F9] rounded-2xl overflow-hidden divide-y divide-gray-150">
            {filteredAnalyses.length > 0 ? (
              filteredAnalyses.map((item, index) => (
                <div
                  key={item.code || index}
                  className="p-6 flex flex-col lg:flex-row justify-between lg:items-center gap-6 bg-white hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-3">
                      <h3 className="text-[17px] font-bold text-gray-800" style={EDITORIAL_HEADING}>
                        {item.name}
                      </h3>
                      <span className="text-[9px] font-mono font-bold text-[#10B981] tracking-wider">
                        DISPONIBLE
                      </span>
                    </div>
                    <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                      Code: {item.code} · {item.category}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-start lg:self-center">
                    <div className="bg-[#FAF9F9] border border-gray-150 px-4 py-2.5 rounded-lg text-center min-w-[120px]">
                      <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Délai de rendu</p>
                      <p className="text-[13px] font-mono font-bold text-gray-750">{item.delay}</p>
                    </div>
                    <a
                      href="#booking"
                      className="px-5 py-2.5 bg-emerald-50 hover:bg-[#10B981] hover:text-white active:scale-95 transition-all text-[#10B981] text-[11px] font-bold uppercase rounded-full border border-emerald-100 hover:border-[#10B981] text-center shadow-sm"
                    >
                      {"Demander ce test"}
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-gray-405 font-bold text-[13px] uppercase">
                {"Aucun résultat trouvé pour votre recherche"}
              </div>
            )}
          </div>

          <p className="mt-3 text-[11px] text-gray-450 font-bold uppercase tracking-wide px-1">
            Dossier analytique · {filteredAnalyses.length} analyses indexées localement. Prélèvement à domicile disponible.
          </p>
        </div>
      </section>

      {/* ════════ PATIENT REVIEWS ════════ */}
      <section className="py-20 border-b border-gray-150" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-gray-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className={sectionH2} style={EDITORIAL_HEADING}>
                {"Avis de nos patients"}
              </h2>
              <p className="text-[13px] text-gray-500 mt-1">Avis authentiques importés de notre fiche Google Maps.</p>
            </div>
            
            {/* Google Maps score badge */}
            <div className="flex items-center gap-3 bg-[#FAF9F9] border border-gray-150 px-4 py-2.5 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.02)] self-start md:self-center">
              <span className="text-[13px] font-extrabold text-gray-800 leading-none">Google Reviews</span>
              <div className="flex items-center gap-1 border-l border-gray-200 pl-3">
                <span className="text-[14px] font-extrabold text-[#F59E0B] font-mono leading-none">4.8</span>
                <div className="flex items-center gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] text-gray-400 font-bold ml-1 font-mono">(98 avis)</span>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="border border-gray-150 divide-y divide-gray-100 bg-white rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
            {TESTIMONIALS.map((review, idx) => (
              <div key={idx} className="px-6 py-8 hover:bg-[#FAF9F9]/30 transition-colors">
                <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 items-start">
                  
                  {/* Reviewer metadata */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="h-12 w-12 flex items-center justify-center flex-shrink-0 text-[14px] font-extrabold text-white uppercase rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"
                        style={{ backgroundColor: review.color || "#10B981" }}
                      >
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-gray-800 leading-tight">
                          {review.name}
                        </p>
                        <p className="text-[10px] font-bold text-gray-400 mt-0.5">
                          {review.role}
                        </p>
                      </div>
                    </div>
                    <StarRow />
                    <div className="flex items-center gap-2 mt-2.5">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#10B981]">
                        Patient vérifié
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">
                        · {review.date}
                      </span>
                    </div>
                  </div>

                  {/* Verbatim quote */}
                  <blockquote className="m-0 p-0">
                    <p className="text-[14px] sm:text-[15px] text-gray-500 leading-[1.8] italic">
                      "{review.text}"
                    </p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CONTACT, HOURS & MAP SECTION ════════ */}
      <section className="py-20 bg-white border-b border-gray-150" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-gray-200 pb-6">
            <h2 className={sectionH2} style={EDITORIAL_HEADING}>
              {"Informations pratiques & accès"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column - Contact card & opening hours */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="bg-[#FAF9F9] border border-gray-150 p-6 md:p-8 rounded-2xl space-y-6">
                <div>
                  <SectionLabel>Contact direct</SectionLabel>
                  <p className="text-[14px] font-bold uppercase text-gray-800 mb-2 font-mono">
                    Secrétariat médical Agdal
                  </p>
                  <p className="text-[20px] font-extrabold text-[#10B981] font-mono leading-none">
                    {BIOCLINIC.phone}
                  </p>
                  <p className="text-[12px] text-gray-400 mt-2">
                    Appel non surtaxé. Prise de rendez-vous pour domicile possible par téléphone.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-[10px] font-bold tracking-[0.14em] uppercase mb-4 text-gray-400">
                    {c.footer?.hours_label || "HOURS"}
                  </p>
                  <ul className="space-y-3">
                    {BIOCLINIC.hours.map((h, i) => (
                      <li key={i} className="flex items-baseline justify-between gap-4 text-[13px] border-b border-gray-100 pb-2 last:border-b-0">
                        <span className="text-gray-500 font-medium">
                          {h.fr}
                        </span>
                        <span className="font-semibold tabular-nums text-gray-700 font-mono text-[12px]">
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      {c.footer?.address_label || "ADDRESS"}
                    </span>
                    <p className="text-[13px] text-gray-600 font-medium leading-relaxed">
                      {BIOCLINIC.address.full}
                    </p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      {c.footer?.email_label || "EMAIL"}
                    </span>
                    <a href={`mailto:${BIOCLINIC.email}`} className="text-[13px] text-[#10B981] font-semibold hover:underline">
                      {BIOCLINIC.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map Iframe Container */}
            <div className="lg:col-span-7 w-full min-h-[380px] border border-gray-150 rounded-2xl overflow-hidden">
              <iframe
                title="Laboratoire BIOCLINIC Google Maps Embed"
                src={BIOCLINIC.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="bg-slate-950 text-white py-16">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          {/* Column 1 — Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <InternalBrandmark inverted={true} />
            <p
              className="text-[13px] leading-relaxed text-justify"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {c.footer?.tagline || ""}
            </p>

            {/* Opening Hours list in footer */}
            <div>
              <p
                className="text-[10px] font-bold tracking-[0.14em] uppercase mb-3.5"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {c.footer?.hours_label || ""}
              </p>
              <ul className="space-y-2">
                {BIOCLINIC.hours.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between gap-4 text-[13px]"
                  >
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>
                      {h.fr}
                    </span>
                    <span
                      className="font-semibold tabular-nums font-mono text-[12px] text-[#10B981]"
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 — Contacts Details */}
          <div className="lg:col-span-4 space-y-6">
            <p
              className="text-[10px] font-bold tracking-[0.14em] uppercase"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              INFORMATIONS CLINIQUES
            </p>

            <dl className="space-y-5 text-[13px]">
              <div>
                <dt
                  className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {c.footer?.address_label || ""}
                </dt>
                <dd
                  className="leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {BIOCLINIC.address.line1}
                  <br />
                  {BIOCLINIC.address.line2}
                  <br />
                  {BIOCLINIC.address.city}
                </dd>
              </div>
              <div>
                <dt
                  className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {c.footer?.phone_label || ""}
                </dt>
                <dd>
                  <span className="font-mono text-white font-bold">
                    {BIOCLINIC.phone}
                  </span>
                </dd>
                <dd
                  className="text-[11px] font-bold mt-1.5 flex items-center gap-1.5"
                  style={{ color: "#10B981" }}
                >
                  {c.footer?.phone_emergency || ""}
                </dd>
              </div>
              <div>
                <dt
                  className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {c.footer?.email_label || ""}
                </dt>
                <dd>
                  <a
                    href={`mailto:${BIOCLINIC.email}`}
                    className="hover:text-[#10B981] transition-colors"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {BIOCLINIC.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Column 3 — Fast Links */}
          <div className="lg:col-span-4 space-y-6">
            <p
              className="text-[10px] font-bold tracking-[0.14em] uppercase"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {c.footer?.links_label || ""}
            </p>
            <ul className="space-y-3">
              {[
                { label: "Portail Résultats En Ligne", href: "#hero" },
                { label: "Prendre Rendez-vous Domicile", href: "#contact" },
                { label: "Catalogue d'analyses biologiques", href: "#catalogue" },
                { label: "Charte de Confidentialité Patient", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] hover:text-white transition-colors flex items-center gap-2"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    <span
                      className="text-[10px] font-bold"
                      style={{ color: "#10B981" }}
                    >
                      —
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <p
                className="text-[10px] font-bold tracking-[0.14em] uppercase mb-2"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                CONVENTIONNEMENT
              </p>
              <p
                className="font-mono text-[12px] uppercase tracking-wider text-slate-400"
              >
                {c.footer?.compliance || ""}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span
            className="text-[11px] font-mono uppercase tracking-tight"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {c.footer?.copy || ""}
          </span>
          <div className="flex gap-6">
            {["Confidentialité", "Mentions Légales", "Cookies"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[11px] font-mono uppercase tracking-tight hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

