"use client";

import { useEffect, useState } from "react";

type Language = "en" | "ta";

const content = {
  en: {
    notice: "Affordable ENT care for every family",
    appointments: "Appointments",
    nav: ["Services", "Conditions", "About", "Visit us"],
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
    patientFirst: "PATIENT-FIRST CARE",
    affordable: "Affordable",
    affordableNote: "Thoughtful ENT care for children and adults.",
    directions: "GET DIRECTIONS",
    openMaps: "Open in Google Maps",
    address: "ADDRESS",
    phone: "PHONE",
    email: "EMAIL",
    phoneNote: "Appointments and today’s clinic hours",
    emailNote: "General enquiries",
    footerLine: "Specialist ENT care for children and adults.",
    footerNav: ["Services", "Conditions", "About", "Contact"],
    disclaimer: "Information on this website is general and does not replace medical advice.",
    quickActions: "Quick appointment actions",
  },
  ta: {
    notice: "அனைத்து குடும்பங்களுக்கும் மலிவான ENT சிகிச்சை",
    appointments: "முன்பதிவு",
    nav: ["சேவைகள்", "பிரச்சினைகள்", "எங்களைப் பற்றி", "முகவரி"],
    callClinic: "கிளினிக்கை அழைக்கவும்",
    heroEyebrow: "சிறப்பு ENT சிகிச்சை · திண்டுக்கல்",
    heroTitle: ["சுலபமாக சுவாசியுங்கள்.", "நன்றாகக் கேளுங்கள்.", "நிறைவாக வாழுங்கள்."],
    heroIntro: "குழந்தைகள் மற்றும் பெரியவர்களுக்கான கவனமான காது, மூக்கு, தொண்டை சிகிச்சை—நவீன பரிசோதனைகள் மற்றும் குறைந்த பாதிப்புள்ள சிகிச்சை முறைகளுடன்.",
    appointmentButton: "முன்பதிவுக்கு அழைக்கவும்",
    servicesButton: "சேவைகளைப் பாருங்கள்",
    trust: [
      ["மலிவான சிகிச்சை", "ஒவ்வொரு குடும்பத்திற்கும்"],
      ["எல்லா வயதினருக்கும்", "குழந்தைகள் & பெரியவர்கள்"],
      ["நவீன வசதி", "Endoscopic சிகிச்சை"],
    ],
    heroNote: ["துல்லியமான சிகிச்சை", "அக்கறையான அணுகுமுறை"],
    servicesEyebrow: "நிபுணத்துவ சேவைகள்",
    servicesTitle: ["நவீன சிகிச்சை,", "உங்கள் அருகிலேயே."],
    servicesIntro: "விரிவான பரிசோதனை முதல் துல்லியமான அறுவை சிகிச்சை வரை, உங்கள் பிரச்சினையை கவனமாகக் கேட்டு தெளிவாக விளக்குவதிலிருந்தே ஒவ்வொரு சிகிச்சையும் தொடங்குகிறது.",
    careEyebrow: "தினசரி ENT பராமரிப்பு",
    careTitle: ["உங்கள் பிரச்சினைக்கு ஏற்ற", "சரியான சிகிச்சை."],
    careIntro: "அறிகுறிகள் அன்றாட வாழ்க்கையை பாதித்து கவலை ஏற்படுத்தலாம். முழுமையாகப் பரிசோதித்து, கண்டறிந்ததை தெளிவாக விளக்கி, அடுத்த படியைப் புரிந்துகொள்ள உதவுகிறோம்.",
    discuss: "உங்கள் அறிகுறிகளைப் பற்றி பேசுங்கள்",
    aboutEyebrow: "ஏன் SUBHA HEALTH",
    aboutTitle: ["நவீன சிகிச்சை.", "தனிப்பட்ட கவனம்."],
    aboutLead: "நல்ல சிகிச்சை தெளிவாகவும், வசதியாகவும், அவசரமின்றியும் இருக்க வேண்டும்.",
    aboutBody: "Subha Health ENT Clinic திண்டுக்கல்லில் காது, மூக்கு, தொண்டை பிரச்சினைகளுக்கான சிறப்பு சிகிச்சையை வழங்குகிறது. கவனமான மருத்துவப் பரிசோதனையுடன் நவீன diagnostic கருவிகள் மற்றும் நிபுணத்துவ அறுவை சிகிச்சை முறைகளை இணைக்கிறோம்.",
    principles: [
      ["முதலில் கேட்கிறோம்", "உங்கள் அறிகுறிகளும் கவலைகளும் ஒவ்வொரு ஆலோசனைக்கும் வழிகாட்டுகின்றன."],
      ["தெளிவாக விளக்குகிறோம்", "பரிசோதனை முடிவுகளும் சிகிச்சை வாய்ப்புகளும் எளிய மொழியில் விளக்கப்படும்."],
      ["துல்லியமாக சிகிச்சையளிக்கிறோம்", "உங்கள் நோய் கண்டறிதல், தேவை மற்றும் வசதிக்கேற்ப சிகிச்சை திட்டமிடப்படும்."],
    ],
    aboutVisual: ["முழுமையான அக்கறை.", "தனிப்பட்ட கவனம்."],
    ready: "உங்களுக்கு உதவ நாங்கள் தயார்",
    bandTitle: ["மீண்டும் இயல்பாக உணர", "உங்களுக்கு உதவுவோம்."],
    whatsapp: "WhatsApp-ல் தொடர்புகொள்ளவும்",
    visitEyebrow: "கிளினிக்கிற்கு வருகை தரவும்",
    contactTitle: ["எளிதாகக் கண்டுபிடிக்கலாம்.", "உதவ நாங்கள் இருக்கிறோம்."],
    contactCopy: "வருவதற்கு முன் அழைக்கவும். உங்களுக்கு வசதியான consultation நேரத்தைத் தேர்ந்தெடுக்க உதவுகிறோம்.",
    patientFirst: "நோயாளிக்கு முதலிடம்",
    affordable: "அனைவருக்கும் ஏற்ற கட்டணம்",
    affordableNote: "குழந்தைகள் மற்றும் பெரியவர்களுக்கான அக்கறையான ENT சிகிச்சை.",
    directions: "வழித்தடம் பெறுங்கள்",
    openMaps: "Google Maps-ல் திறக்கவும்",
    address: "முகவரி",
    phone: "தொலைபேசி",
    email: "மின்னஞ்சல்",
    phoneNote: "முன்பதிவு மற்றும் இன்றைய கிளினிக் நேரம்",
    emailNote: "பொதுவான விசாரணைகள்",
    footerLine: "குழந்தைகள் மற்றும் பெரியவர்களுக்கான சிறப்பு ENT சிகிச்சை.",
    footerNav: ["சேவைகள்", "பிரச்சினைகள்", "எங்களைப் பற்றி", "தொடர்பு"],
    disclaimer: "இந்த இணையதளத் தகவல்கள் பொதுவானவை; மருத்துவரின் ஆலோசனைக்கு மாற்றாகாது.",
    quickActions: "விரைவு முன்பதிவு வசதிகள்",
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
    { number: "01", type: "பரிசோதனைகள்", image: "/services/diagnostic-endoscopy.jpg", title: "Diagnostic endoscopies", text: "காது, மூக்கு மற்றும் தொண்டையைத் தெளிவாகப் பார்த்து பிரச்சினையை கண்டறிய உதவும் விரிவான பரிசோதனைகள்.", items: ["Video laryngoscopy", "Otoendoscopy"] },
    { number: "02", type: "ENDOSCOPIC சிகிச்சை", image: "/services/endoscopic-ent-surgery.jpg", title: "Endoscopic surgeries", text: "நோயின் தன்மை மற்றும் ஒவ்வொரு நோயாளியின் தேவைக்கேற்ப திட்டமிடப்படும் நவீன, குறைந்த பாதிப்புள்ள அறுவை சிகிச்சைகள்.", items: ["FESS", "DCR", "Septoplasty", "Microdebrider turbinectomy", "Polypectomy"] },
    { number: "03", type: "காது அறுவை சிகிச்சை", image: "/services/microscopic-ear-surgery.jpg", title: "Microscopic ear surgeries", text: "காதின் நுட்பமான பிரச்சினைகளுக்கு microscope உதவியுடன் செய்யப்படும் துல்லியமான அறுவை சிகிச்சைகள்.", items: ["Cortical mastoidectomy", "Stapes surgery"] },
    { number: "04", type: "COBLATION", image: "/services/coblation-surgery.jpg", title: "Coblation surgeries", text: "தேர்ந்தெடுக்கப்பட்ட soft-tissue பிரச்சினைகளுக்கு குறைந்த வெப்பநிலை radiofrequency முறையில் செய்யப்படும் சிகிச்சை.", items: ["Adenoidectomy", "Tonsillectomy"] },
    { number: "05", type: "குரல்வளை அறுவை சிகிச்சை", image: "/services/microlaryngeal-surgery.jpg", title: "Microlaryngeal surgery", text: "தேர்ந்தெடுக்கப்பட்ட vocal cord மற்றும் குரல்வளை பிரச்சினைகளுக்கான நிபுணத்துவ microsurgery.", items: [] },
    { number: "06", type: "சிறிய அறுவை சிகிச்சை", image: "/services/ear-lobe-repair.jpg", title: "Ear lobe repair", text: "பிளந்த, நீண்ட அல்லது கிழிந்த காது மடலை இயல்பான தோற்றத்துடன் சரிசெய்யும் சிகிச்சை.", items: [] },
  ],
} as const;

const concerns = {
  en: ["Ear pain & infections", "Hearing assessment", "Hearing aids", "Newborn hearing screening", "Vertigo & dizziness", "Sinus & nasal allergy", "Nasal polyps", "Tonsil concerns", "Snoring & sleep problems", "Voice & swallowing", "Migraine & headaches", "Paediatric ENT care"],
  ta: ["காது வலி & தொற்று", "கேட்கும் திறன் பரிசோதனை", "Hearing aids", "புதிதாகப் பிறந்த குழந்தைகளுக்கான hearing screening", "Vertigo & தலைசுற்றல்", "Sinus & மூக்கு allergy", "மூக்கில் polyps", "Tonsil பிரச்சினைகள்", "குறட்டை & தூக்கப் பிரச்சினைகள்", "குரல் & விழுங்குவதில் சிரமம்", "Migraine & தலைவலி", "குழந்தைகளுக்கான ENT சிகிச்சை"],
} as const;

const navTargets = ["#services", "#care", "#about", "#contact"];
const whatsappMessages = {
  en: "Hello Subha Health ENT Clinic, I would like to request an appointment.",
  ta: "வணக்கம் Subha Health ENT Clinic, consultation முன்பதிவு செய்ய விரும்புகிறேன்.",
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = content[language];
  const whatsappUrl = `https://wa.me/918610479562?text=${encodeURIComponent(whatsappMessages[language])}`;

  useEffect(() => {
    const saved = window.localStorage.getItem("subha-language") as Language | null;
    const preferred = saved === "ta" || saved === "en" ? saved : navigator.language.toLowerCase().startsWith("ta") ? "ta" : "en";
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
          <div className="fee-note"><span>{copy.patientFirst}</span><b>{copy.affordable}</b><small>{copy.affordableNote}</small></div>
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
