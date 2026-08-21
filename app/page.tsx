"use client";

import { useEffect, useState } from "react";

type Language = "en" | "ta";

const content = {
  en: {
    notice: "Affordable ENT care for every family",
    appointments: "Appointments",
    nav: ["Services", "Gallery", "Conditions", "About", "Visit us"],
    callClinic: "Call clinic",
    heroEyebrow: "SPECIALIST ENT CARE · DINDIGUL",
    heroTitle: ["Breathe easier.", "Hear better.", "Live fully."],
    heroIntro: "Thoughtful ear, nose and throat care for children and adults—with modern diagnostics and minimally invasive treatment.",
    appointmentButton: "Call for an appointment",
    servicesButton: "Explore services",
    trust: [
      ["Affordable care", "for every family"],
      ["All ages", "children & adults"],
      ["Advanced", "endoscopic care"],
    ],
    heroNote: ["Precision care", "with a human touch"],
    servicesEyebrow: "SPECIALIST SERVICES",
    servicesTitle: ["Advanced care,", "close to home."],
    servicesIntro: "From detailed examination to precision surgery, every treatment starts with listening carefully and explaining clearly.",
    galleryEyebrow: "A CLOSER LOOK",
    galleryTitle: ["Care with clarity.", "Comfort at every step."],
    galleryIntro: "Representative imagery of the examinations, conversations and precision-led care that shape a thoughtful ENT visit.",
    galleryNote: "Representative care imagery · Not photographs of the clinic",
    careEyebrow: "EVERYDAY ENT CARE",
    careTitle: ["The right care for", "the way you feel."],
    careIntro: "Symptoms can be disruptive and worrying. We assess the full picture, explain what we find, and help you understand the next step.",
    discuss: "Discuss your symptoms",
    aboutEyebrow: "WHY SUBHA HEALTH",
    aboutTitle: ["Modern treatment.", "Personal attention."],
    aboutLead: "Good care should feel clear, comfortable and unhurried.",
    aboutBody: "Subha Health ENT Clinic provides focused care for ear, nose and throat concerns in Dindigul. We combine careful clinical assessment with modern diagnostic tools and specialist surgical techniques.",
    principles: [
      ["Listen first", "Your symptoms and concerns guide every consultation."],
      ["Explain clearly", "Findings and options are discussed in easy-to-understand language."],
      ["Treat precisely", "Care is tailored to your diagnosis, needs and comfort."],
    ],
    aboutVisual: ["Care that sees", "the whole person."],
    ready: "READY WHEN YOU ARE",
    bandTitle: ["Let’s help you feel", "like yourself again."],
    whatsapp: "Message on WhatsApp",
    visitEyebrow: "VISIT THE CLINIC",
    contactTitle: ["Easy to find.", "Here to help."],
    contactCopy: "Call before you visit and we’ll help you choose a convenient consultation time.",
    patientFirst: "CARE FOR EVERY FAMILY",
    affordable: "Specialist care, within reach.",
    affordableNote: "Clear advice, thoughtful treatment and accessible ENT care for children and adults.",
    directions: "GET DIRECTIONS",
    openMaps: "Open in Google Maps",
    address: "ADDRESS",
    phone: "PHONE",
    email: "EMAIL",
    phoneNote: "Appointments and today’s clinic hours",
    emailNote: "General enquiries",
    footerLine: "Specialist ENT care for children and adults.",
    footerNav: ["Services", "Gallery", "Conditions", "About", "Contact"],
    disclaimer: "Information on this website is general and does not replace medical advice.",
    quickActions: "Quick appointment actions",
  },
  ta: {
    notice: "அனைவரும் அணுகக்கூடிய தரமான ENT சிகிச்சை",
    appointments: "முன்பதிவு",
    nav: ["சிகிச்சைகள்", "படத் தொகுப்பு", "ENT பிரச்சினைகள்", "எங்களைப் பற்றி", "தொடர்புக்கு"],
    callClinic: "தொடர்புக்கு அழைக்கவும்",
    heroEyebrow: "சிறப்பு காது, மூக்கு, தொண்டை சிகிச்சை · திண்டுக்கல்",
    heroTitle: ["சுலபமாக சுவாசியுங்கள்.", "நன்றாகக் கேளுங்கள்.", "நிறைவாக வாழுங்கள்."],
    heroIntro: "குழந்தைகள் முதல் பெரியவர்கள் வரை அனைவருக்கும் அக்கறையுடன் வழங்கப்படும் ENT மருத்துவச் சேவை. நவீன பரிசோதனை வசதிகளும், தேவைக்கேற்ற சிகிச்சை முறைகளும் ஒரே இடத்தில்.",
    appointmentButton: "முன்பதிவு செய்ய அழைக்கவும்",
    servicesButton: "சிகிச்சை வசதிகளைப் பாருங்கள்",
    trust: [
      ["நம்பகமான பராமரிப்பு", "குடும்பம் முழுவதற்கும்"],
      ["அனைத்து வயதினருக்கும்", "குழந்தைகள் முதல் பெரியவர்கள் வரை"],
      ["நவீன தொழில்நுட்பம்", "Endoscopy சிகிச்சை வசதிகள்"],
    ],
    heroNote: ["துல்லியமான சிகிச்சை", "கனிவான கவனிப்புடன்"],
    servicesEyebrow: "சிறப்பு மருத்துவச் சேவைகள்",
    servicesTitle: ["நவீன ENT சிகிச்சை,", "உங்கள் அருகிலேயே."],
    servicesIntro: "உங்கள் உடல்நிலையை முழுமையாகக் கேட்டறிந்து, பரிசோதனை முடிவுகளைத் தெளிவாக விளக்கிய பிறகே உரிய சிகிச்சையைத் திட்டமிடுகிறோம்.",
    galleryEyebrow: "சிகிச்சை அணுகுமுறை",
    galleryTitle: ["தெளிவான பரிசோதனை.", "ஒவ்வொரு கட்டத்திலும் அக்கறை."],
    galleryIntro: "கவனமான பரிசோதனை, தெளிவான ஆலோசனை மற்றும் துல்லியமான ENT சிகிச்சை அணுகுமுறையை விளக்கும் பிரதிநிதித்துவப் படங்கள்.",
    galleryNote: "சிகிச்சையை விளக்கும் பிரதிநிதித்துவப் படங்கள் · கிளினிக்கின் நேரடி புகைப்படங்கள் அல்ல",
    careEyebrow: "பொதுவான ENT பிரச்சினைகள்",
    careTitle: ["அறிகுறியை மட்டும் அல்ல,", "காரணத்தையும் கவனிக்கிறோம்."],
    careIntro: "காது, மூக்கு, தொண்டை தொடர்பான பிரச்சினைகள் அன்றாட வாழ்க்கையைப் பாதிக்கலாம். காரணத்தை முறையாகக் கண்டறிந்து, உங்களுக்கு ஏற்ற அடுத்த படியை எளிமையாக விளக்குகிறோம்.",
    discuss: "உங்கள் அறிகுறிகள் குறித்து ஆலோசிக்க அழைக்கவும்",
    aboutEyebrow: "SUBHA HEALTH-ஐ ஏன் தேர்வு செய்ய வேண்டும்?",
    aboutTitle: ["நவீன மருத்துவம்.", "தனிப்பட்ட அக்கறை."],
    aboutLead: "நல்ல மருத்துவ அனுபவம் என்பது தெளிவான விளக்கமும், கனிவான அணுகுமுறையும், அவசரமில்லாத கவனிப்பும் ஆகும்.",
    aboutBody: "திண்டுக்கல்லில் காது, மூக்கு, தொண்டை பிரச்சினைகளுக்கான சிறப்பு ஆலோசனை மற்றும் சிகிச்சையை Subha Health ENT Clinic வழங்குகிறது. கவனமான மருத்துவப் பரிசோதனையுடன் நவீன diagnostic வசதிகளையும் நிபுணத்துவ அறுவை சிகிச்சை முறைகளையும் இணைக்கிறோம்.",
    principles: [
      ["கவனமாகக் கேட்டறிவோம்", "உங்கள் அறிகுறிகளையும் கவலைகளையும் புரிந்துகொள்வதே ஆலோசனையின் முதல் படி."],
      ["எளிமையாக விளக்குவோம்", "பரிசோதனை முடிவுகளும் சிகிச்சை வாய்ப்புகளும் புரியும் மொழியில் விளக்கப்படும்."],
      ["தேவைக்கேற்ற சிகிச்சை", "உங்கள் உடல்நிலை, தேவை மற்றும் வசதிக்கேற்ப சிகிச்சை திட்டமிடப்படும்."],
    ],
    aboutVisual: ["முழுமையான மருத்துவ கவனம்.", "ஒவ்வொருவருக்கும் தனிப்பட்ட அக்கறை."],
    ready: "உங்கள் நலனுக்காக நாங்கள் இங்கே",
    bandTitle: ["உங்கள் அன்றாட வாழ்க்கை", "மீண்டும் இயல்பு பெற உதவுவோம்."],
    whatsapp: "WhatsApp மூலம் தொடர்புகொள்ளவும்",
    visitEyebrow: "கிளினிக்கிற்கு வருகை",
    contactTitle: ["எளிதாக வந்தடையலாம்.", "உதவ நாங்கள் இருக்கிறோம்."],
    contactCopy: "வருகைக்கு முன் அழைக்கவும். உங்களுக்கு வசதியான ஆலோசனை நேரத்தை உறுதிசெய்ய உதவுவோம்.",
    patientFirst: "ஒவ்வொரு குடும்பத்திற்கும் அக்கறையான சிகிச்சை",
    affordable: "தரமான ENT சிகிச்சை, அனைவருக்கும் ஏற்ற வகையில்.",
    affordableNote: "உங்கள் தேவையைப் புரிந்துகொண்டு, தெளிவாக விளக்கி, குழந்தைகள் முதல் பெரியவர்கள் வரை ஒவ்வொருவருக்கும் உரிய கவனிப்பை வழங்குகிறோம்.",
    directions: "செல்லும் வழியைப் பாருங்கள்",
    openMaps: "Google Maps-ல் திறக்கவும்",
    address: "முகவரி",
    phone: "தொலைபேசி",
    email: "மின்னஞ்சல்",
    phoneNote: "முன்பதிவு மற்றும் கிளினிக் நேர விவரங்களுக்கு",
    emailNote: "பொதுவான தகவல்களுக்கு",
    footerLine: "குழந்தைகள் முதல் பெரியவர்கள் வரை அனைவருக்கும் சிறப்பு ENT மருத்துவச் சேவை.",
    footerNav: ["சிகிச்சைகள்", "படத் தொகுப்பு", "ENT பிரச்சினைகள்", "எங்களைப் பற்றி", "தொடர்பு"],
    disclaimer: "இந்த இணையதளத்தில் உள்ளவை பொதுவான தகவல்கள் மட்டுமே; நேரடி மருத்துவர் ஆலோசனைக்கு மாற்றாகாது.",
    quickActions: "விரைவாகத் தொடர்புகொள்ள",
  },
} as const;

const services = {
  en: [
    { number: "01", type: "DIAGNOSTICS", image: "/services/diagnostic-endoscopy.jpg", title: "Diagnostic endoscopies", text: "Detailed examinations that help us assess the ear, nose and throat clearly.", items: ["Video laryngoscopy", "Otoendoscopy"] },
    { number: "02", type: "ENDOSCOPIC CARE", image: "/services/endoscopic-ent-surgery.jpg", title: "Endoscopic surgeries", text: "Modern minimally invasive procedures planned around the condition and the individual.", items: ["FESS", "DCR", "Septoplasty", "Microdebrider turbinectomy", "Polypectomy"] },
    { number: "03", type: "EAR SURGERY", image: "/services/microscopic-ear-surgery.jpg", title: "Microscopic ear surgeries", text: "Precision procedures performed under magnification for delicate conditions of the ear.", items: ["Cortical mastoidectomy", "Stapes surgery"] },
    { number: "04", type: "COBLATION", image: "/services/coblation-surgery.jpg", title: "Coblation surgeries", text: "Low-temperature radiofrequency treatment for selected soft-tissue procedures.", items: ["Adenoidectomy", "Tonsillectomy"] },
    { number: "05", type: "VOICE SURGERY", image: "/services/microlaryngeal-surgery.jpg", title: "Microlaryngeal surgery", text: "Specialist microsurgery for selected vocal-cord and laryngeal conditions.", items: [] },
    { number: "06", type: "MINOR PROCEDURE", image: "/services/ear-lobe-repair.jpg", title: "Ear lobe repair", text: "Careful correction of split, stretched or torn ear lobes with attention to a natural result.", items: [] },
  ],
  ta: [
    { number: "01", type: "பரிசோதனைகள்", image: "/services/diagnostic-endoscopy.jpg", title: "Diagnostic endoscopies", text: "காது, மூக்கு, தொண்டை பகுதிகளை நேரடியாகப் பார்த்து பிரச்சினையைத் துல்லியமாகக் கண்டறிய உதவும் பரிசோதனைகள்.", items: ["Video laryngoscopy", "Otoendoscopy"] },
    { number: "02", type: "ENDOSCOPY அறுவை சிகிச்சை", image: "/services/endoscopic-ent-surgery.jpg", title: "Endoscopic surgeries", text: "Endoscope உதவியுடன், நோயின் தன்மைக்கும் நோயாளியின் தேவைக்கும் ஏற்ப துல்லியமாக செய்யப்படும் நவீன அறுவை சிகிச்சைகள்.", items: ["FESS", "DCR", "Septoplasty", "Microdebrider turbinectomy", "Polypectomy"] },
    { number: "03", type: "காது அறுவை சிகிச்சை", image: "/services/microscopic-ear-surgery.jpg", title: "Microscopic ear surgeries", text: "காதின் நுண்ணிய அமைப்புகளுக்கான சிகிச்சைகளை, Microscope பெரிதாக்கும் வசதியுடன் துல்லியமாகச் செய்யும் முறைகள்.", items: ["Cortical mastoidectomy", "Stapes surgery"] },
    { number: "04", type: "COBLATION", image: "/services/coblation-surgery.jpg", title: "Coblation surgeries", text: "குறைந்த வெப்பத்தில் இயங்கும் radiofrequency தொழில்நுட்பத்தைப் பயன்படுத்தி செய்யப்படும் தேர்ந்தெடுக்கப்பட்ட soft-tissue சிகிச்சைகள்.", items: ["Adenoidectomy", "Tonsillectomy"] },
    { number: "05", type: "குரல்வளை அறுவை சிகிச்சை", image: "/services/microlaryngeal-surgery.jpg", title: "Microlaryngeal surgery", text: "Vocal cord மற்றும் குரல்வளை தொடர்பான தேர்ந்தெடுக்கப்பட்ட பிரச்சினைகளுக்கான நுணுக்கமான அறுவை சிகிச்சை.", items: [] },
    { number: "06", type: "சிறிய அறுவை சிகிச்சை", image: "/services/ear-lobe-repair.jpg", title: "Ear lobe repair", text: "கிழிந்த அல்லது நீண்டுபோன காது மடலை இயல்பான தோற்றம் கிடைக்கும் வகையில் கவனமாகச் சரிசெய்யும் சிகிச்சை.", items: [] },
  ],
} as const;

const concerns = {
  en: ["Ear pain & infections", "Hearing assessment", "Hearing aids", "Newborn hearing screening", "Vertigo & dizziness", "Sinus & nasal allergy", "Nasal polyps", "Tonsil concerns", "Snoring & sleep problems", "Voice & swallowing", "Migraine & headaches", "Paediatric ENT care"],
  ta: ["காது வலி & தொற்று", "கேட்கும் திறன் பரிசோதனை", "காது கேட்கும் கருவி (Hearing aid)", "புதிதாகப் பிறந்த குழந்தைகளுக்கான hearing screening", "Vertigo & தலைச்சுற்றல்", "Sinus & மூக்கு ஒவ்வாமை", "மூக்கில் Polyps", "Tonsil பிரச்சினைகள்", "குறட்டை & தூக்கப் பிரச்சினைகள்", "குரல் மாற்றம் & விழுங்குவதில் சிரமம்", "Migraine & தலைவலி", "குழந்தைகளுக்கான ENT மருத்துவம்"],
} as const;

const galleryImages = {
  en: [
    { image: "/gallery/ear-examination.jpg", alt: "Clinician performing a focused ear examination", title: "Focused examination", text: "Clinical assessment with modern diagnostic tools.", credit: "Pexels", source: "https://www.pexels.com/photo/a-doctor-doing-an-ear-examination-5206942/" },
    { image: "/gallery/otoendoscopy-examination.jpg", alt: "Close view of an ear examination with an otoscope", title: "Precision-led ENT care", text: "Close attention to the details that guide treatment.", credit: "Pexels", source: "https://www.pexels.com/photo/a-patient-having-ear-examination-5206951/" },
    { image: "/gallery/doctor-consultation.jpg", alt: "Doctor having a clear consultation with a patient", title: "Clear consultation", text: "Time to listen, explain findings and discuss the next step.", credit: "Unsplash", source: "https://unsplash.com/photos/doctor-consults-with-patient-in-modern-office-7-l5EL7YHI4" },
  ],
  ta: [
    { image: "/gallery/ear-examination.jpg", alt: "காதைப் பரிசோதிக்கும் மருத்துவர்", title: "கவனமான பரிசோதனை", text: "நவீன diagnostic கருவிகளுடன் மேற்கொள்ளப்படும் மருத்துவ மதிப்பீடு.", credit: "Pexels", source: "https://www.pexels.com/photo/a-doctor-doing-an-ear-examination-5206942/" },
    { image: "/gallery/otoendoscopy-examination.jpg", alt: "Otoscope மூலம் செய்யப்படும் காது பரிசோதனை", title: "துல்லியமான ENT கவனம்", text: "சிகிச்சைத் திட்டத்தை வழிநடத்தும் ஒவ்வொரு விவரத்திற்கும் அக்கறை.", credit: "Pexels", source: "https://www.pexels.com/photo/a-patient-having-ear-examination-5206951/" },
    { image: "/gallery/doctor-consultation.jpg", alt: "நோயாளியுடன் ஆலோசனை மேற்கொள்ளும் மருத்துவர்", title: "தெளிவான ஆலோசனை", text: "அறிகுறிகளைக் கேட்டறிந்து, கண்டறிவுகளை விளக்கி, அடுத்த கட்டத்தைப் பேசுவதற்கான நேரம்.", credit: "Unsplash", source: "https://unsplash.com/photos/doctor-consults-with-patient-in-modern-office-7-l5EL7YHI4" },
  ],
} as const;

const navTargets = ["#services", "#gallery", "#care", "#about", "#contact"];
const whatsappMessages = {
  en: "Hello Subha Health ENT Clinic, I would like to request an appointment.",
  ta: "வணக்கம் Subha Health ENT Clinic, ஆலோசனைக்கு முன்பதிவு செய்ய விரும்புகிறேன்.",
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = content[language];
  const whatsappUrl = `https://wa.me/918610479562?text=${encodeURIComponent(whatsappMessages[language])}`;

  useEffect(() => {
    const saved = window.localStorage.getItem("subha-language") as Language | null;
    const preferred = saved === "ta" || saved === "en" ? saved : navigator.language.toLowerCase().startsWith("ta") ? "ta" : "en";
    // The saved language exists only in the browser, after the static page hydrates.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguage(preferred);
    document.documentElement.lang = preferred;
  }, []);

  function chooseLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    window.localStorage.setItem("subha-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  return (
    <main>
      <div className="notice-bar"><p>{copy.notice}</p><a href="tel:+918610479562">{copy.appointments}: +91 86104 79562</a></div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Subha Health ENT Clinic home">
          <img className="brand-mark" src="/subha-health-logo.png" alt="" aria-hidden="true" />
          <span><strong>SUBHA HEALTH</strong><small>ENT CLINIC · DINDIGUL</small></span>
        </a>
        <nav aria-label={language === "ta" ? "முதன்மை வழிசெலுத்தல்" : "Primary navigation"}>
          {copy.nav.map((label, index) => <a href={navTargets[index]} key={navTargets[index]}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label="Choose language">
            <button type="button" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => chooseLanguage("en")}>EN</button>
            <button type="button" className={language === "ta" ? "active" : ""} aria-pressed={language === "ta"} onClick={() => chooseLanguage("ta")}>தமிழ்</button>
          </div>
          <a className="header-call" href="tel:+918610479562">{copy.callClinic} <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{copy.heroEyebrow}</p>
          <h1>{copy.heroTitle[0]}<br />{copy.heroTitle[1]}<br /><em>{copy.heroTitle[2]}</em></h1>
          <p className="hero-intro">{copy.heroIntro}</p>
          <div className="hero-actions">
            <a className="button primary" href="tel:+918610479562">{copy.appointmentButton} <span>→</span></a>
            <a className="button secondary" href="#services">{copy.servicesButton}</a>
          </div>
          <div className="trust-row" aria-label={language === "ta" ? "கிளினிக் சிறப்பம்சங்கள்" : "Clinic highlights"}>
            {copy.trust.map(([title, text]) => <span key={title}><b>{title}</b>{text}</span>)}
          </div>
        </div>
        <div className="hero-art" aria-label={language === "ta" ? "சிறப்பு காது, மூக்கு, தொண்டை சிகிச்சை" : "Specialist ear, nose and throat care"}>
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="profile-line" aria-hidden="true"><span>◯</span><i>∿</i></div>
          <div className="art-core"><img src="/subha-health-logo.png" alt="Subha Health ENT Clinic logo" /></div>
          <p>{copy.heroNote[0]}<br />{copy.heroNote[1]}</p>
        </div>
      </section>

      <section className="services section-dark" id="services">
        <div className="section-heading light">
          <div><p className="eyebrow">{copy.servicesEyebrow}</p><h2>{copy.servicesTitle[0]}<br /><em>{copy.servicesTitle[1]}</em></h2></div>
          <p>{copy.servicesIntro}</p>
        </div>
        <div className="service-grid" aria-label={language === "ta" ? "சிறப்பு ENT சேவைகள்" : "Specialist ENT services"}>
          {services[language].map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-image" style={{ backgroundImage: `url(${service.image})` }} aria-hidden="true" /><div className="service-shade" aria-hidden="true" />
              <div className="service-topline"><span className="service-number">{service.number}</span><span className="service-type">{service.type}</span></div>
              <div className="service-content"><h3>{service.title}</h3><p>{service.text}</p>{service.items.length > 0 && <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="gallery-heading">
          <div><p className="eyebrow">{copy.galleryEyebrow}</p><h2>{copy.galleryTitle[0]}<br /><em>{copy.galleryTitle[1]}</em></h2></div>
          <p>{copy.galleryIntro}</p>
        </div>
        <div className="gallery-grid">
          {galleryImages[language].map((item, index) => (
            <figure className={`gallery-card gallery-card-${index + 1}`} key={item.image}>
              <div className="gallery-image"><img src={item.image} alt={item.alt} loading="lazy" /></div>
              <figcaption><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></figcaption>
            </figure>
          ))}
        </div>
        <div className="gallery-meta"><p>{copy.galleryNote}</p><p>{language === "ta" ? "படங்கள்:" : "Photography:"} {galleryImages[language].map((item, index) => <span key={item.image}>{index > 0 && " · "}<a href={item.source} target="_blank" rel="noreferrer">{item.credit}</a></span>)}</p></div>
      </section>

      <section className="care" id="care">
        <div className="care-intro"><p className="eyebrow">{copy.careEyebrow}</p><h2>{copy.careTitle[0]}<br /><em>{copy.careTitle[1]}</em></h2><p>{copy.careIntro}</p><a className="text-link" href="tel:+918610479562">{copy.discuss} <span>→</span></a></div>
        <div className="concern-list">{concerns[language].map((concern, index) => <div className="concern" key={concern}><span>{String(index + 1).padStart(2, "0")}</span><p>{concern}</p><i>↗</i></div>)}</div>
      </section>

      <section className="about" id="about">
        <div className="about-visual" aria-hidden="true"><div className="about-circle"><img src="/subha-health-logo.png" alt="" /><b>EAR</b><span>NOSE</span><em>THROAT</em></div><p>{copy.aboutVisual[0]}<br />{copy.aboutVisual[1]}</p></div>
        <div className="about-copy">
          <p className="eyebrow">{copy.aboutEyebrow}</p><h2>{copy.aboutTitle[0]}<br /><em>{copy.aboutTitle[1]}</em></h2><p className="large-copy">{copy.aboutLead}</p><p>{copy.aboutBody}</p>
          <div className="principles">{copy.principles.map(([title, text], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </div>
      </section>

      <section className="appointment-band">
        <p className="eyebrow">{copy.ready}</p><h2>{copy.bandTitle[0]}<br /><em>{copy.bandTitle[1]}</em></h2>
        <div className="band-actions"><a className="button pale" href="tel:+918610479562">{copy.callClinic}: +91 86104 79562 <span>→</span></a><a className="button outline-light" href={whatsappUrl} target="_blank" rel="noreferrer">{copy.whatsapp}</a></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-heading">
          <p className="eyebrow">{copy.visitEyebrow}</p><h2>{copy.contactTitle[0]}<br /><em>{copy.contactTitle[1]}</em></h2><p className="contact-copy">{copy.contactCopy}</p>
          <div className="contact-actions"><a className="button primary" href="tel:+918610479562">{copy.callClinic} <span>→</span></a><a className="button secondary" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div>
          <div className="care-promise">
            <div className="care-promise-mark"><img src="/subha-health-logo.png" alt="" aria-hidden="true" /></div>
            <div className="care-promise-copy"><span>{copy.patientFirst}</span><b>{copy.affordable}</b><small>{copy.affordableNote}</small></div>
          </div>
        </div>
        <div className="contact-visual">
          <div className="map-frame"><iframe title={language === "ta" ? "திண்டுக்கல்லில் Subha Health ENT Clinic அமைந்துள்ள வரைபடம்" : "Map showing Subha Health ENT Clinic in Dindigul"} src="https://www.google.com/maps?q=Subha+Health+ENT+Clinic+Dindigul&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="map-cta" href="https://www.google.com/maps/search/?api=1&query=Subha+Health+ENT+Clinic+Dindigul" target="_blank" rel="noreferrer"><span>{copy.directions}</span><b>{copy.openMaps}</b><i>↗</i></a></div>
          <div className="visit-details"><div><span>{copy.address}</span><p>65, Krishna Rao 3rd Street,<br />Pandian Nagar, Nehruji Nagar,<br />Dindigul, Tamil Nadu 624001</p></div><div><span>{copy.phone}</span><p><a href="tel:+918610479562">+91 86104 79562</a></p><small>{copy.phoneNote}</small></div><div><span>{copy.email}</span><p className="email-address"><a href="mailto:subhahealthentdgl@gmail.com">subhahealthentdgl@gmail.com</a></p><small>{copy.emailNote}</small></div></div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img className="brand-mark" src="/subha-health-logo.png" alt="" aria-hidden="true" /><span><strong>SUBHA HEALTH</strong><small>ENT CLINIC · DINDIGUL</small></span></a>
        <p className="footer-contact">{copy.footerLine}<br /><a href="mailto:subhahealthentdgl@gmail.com">subhahealthentdgl@gmail.com</a></p>
        <div className="footer-links">{copy.footerNav.map((label, index) => <a href={navTargets[index]} key={navTargets[index]}>{label}</a>)}</div>
        <small>© {new Date().getFullYear()} Subha Health ENT Clinic. {copy.disclaimer}</small>
      </footer>

      <div className="mobile-actions" aria-label={copy.quickActions}><a href="tel:+918610479562">{copy.callClinic}</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div>
    </main>
  );
}
