const services = [
  { number: "01", type: "DIAGNOSTICS", image: "/services/diagnostic-endoscopy.jpg", title: "Diagnostic endoscopies", text: "Detailed examinations that help us assess the ear, nose and throat clearly.", items: ["Video laryngoscopy", "Otoendoscopy"] },
  { number: "02", type: "ENDOSCOPIC CARE", image: "/services/endoscopic-ent-surgery.jpg", title: "Endoscopic surgeries", text: "Modern minimally invasive procedures planned around the condition and the individual.", items: ["FESS", "DCR", "Septoplasty", "Microdebrider turbinectomy", "Polypectomy"] },
  { number: "03", type: "EAR SURGERY", image: "/services/microscopic-ear-surgery.jpg", title: "Microscopic ear surgeries", text: "Precision procedures performed under magnification for delicate conditions of the ear.", items: ["Cortical mastoidectomy", "Stapes surgery"] },
  { number: "04", type: "COBLATION", image: "/services/coblation-surgery.jpg", title: "Coblation surgeries", text: "Low-temperature radiofrequency treatment for selected soft-tissue procedures.", items: ["Adenoidectomy", "Tonsillectomy"] },
  { number: "05", type: "VOICE SURGERY", image: "/services/microlaryngeal-surgery.jpg", title: "Microlaryngeal surgery", text: "Specialist microsurgery for selected vocal-cord and laryngeal conditions.", items: [] },
  { number: "06", type: "MINOR PROCEDURE", image: "/services/ear-lobe-repair.jpg", title: "Ear lobe repair", text: "Careful correction of split, stretched or torn ear lobes with attention to a natural result.", items: [] },
];

const concerns = [
  "Ear pain & infections", "Hearing assessment", "Hearing aids", "Newborn hearing screening",
  "Vertigo & dizziness", "Sinus & nasal allergy", "Nasal polyps", "Tonsil concerns",
  "Snoring & sleep problems", "Voice & swallowing", "Migraine & headaches", "Paediatric ENT care",
];

export default function Home() {
  return (
    <main>
      <div className="notice-bar">
        <p>Consultation fee ₹200</p>
        <a href="tel:+918610479562">Appointments: +91 86104 79562</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Subha Health ENT Clinic home">
          <img className="brand-mark" src="/subha-health-logo.png" alt="" aria-hidden="true" />
          <span><strong>SUBHA HEALTH</strong><small>ENT CLINIC · DINDIGUL</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#care">Conditions</a>
          <a href="#about">About</a>
          <a href="#contact">Visit us</a>
        </nav>
        <a className="header-call" href="tel:+918610479562">Call clinic <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">SPECIALIST ENT CARE · DINDIGUL</p>
          <h1>Breathe easier.<br />Hear better.<br /><em>Live fully.</em></h1>
          <p className="hero-intro">Thoughtful ear, nose and throat care for children and adults—with modern diagnostics and minimally invasive treatment.</p>
          <div className="hero-actions">
            <a className="button primary" href="tel:+918610479562">Call for an appointment <span>→</span></a>
            <a className="button secondary" href="#services">Explore services</a>
          </div>
          <div className="trust-row" aria-label="Clinic highlights">
            <span><b>₹200</b> consultation</span>
            <span><b>All ages</b> children &amp; adults</span>
            <span><b>Advanced</b> endoscopic care</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Specialist ear, nose and throat care">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="profile-line" aria-hidden="true"><span>◯</span><i>∿</i></div>
          <div className="art-core"><img src="/subha-health-logo.png" alt="Subha Health ENT Clinic logo" /></div>
          <p>Precision care<br />with a human touch</p>
        </div>
      </section>

      <section className="services section-dark" id="services">
        <div className="section-heading light">
          <div><p className="eyebrow">SPECIALIST SERVICES</p><h2>Advanced care,<br /><em>close to home.</em></h2></div>
          <p>From detailed examination to precision surgery, every treatment starts with listening carefully and explaining clearly.</p>
        </div>
        <div className="service-grid" aria-label="Specialist ENT services">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-image" style={{ backgroundImage: `url(${service.image})` }} aria-hidden="true" />
              <div className="service-shade" aria-hidden="true" />
              <div className="service-topline"><span className="service-number">{service.number}</span><span className="service-type">{service.type}</span></div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                {service.items.length > 0 && <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="care" id="care">
        <div className="care-intro">
          <p className="eyebrow">EVERYDAY ENT CARE</p>
          <h2>The right care for the way you <em>feel.</em></h2>
          <p>Symptoms can be disruptive and worrying. We assess the full picture, explain what we find, and help you understand the next step.</p>
          <a className="text-link" href="tel:+918610479562">Discuss your symptoms <span>→</span></a>
        </div>
        <div className="concern-list">
          {concerns.map((concern, index) => (
            <div className="concern" key={concern}><span>{String(index + 1).padStart(2, "0")}</span><p>{concern}</p><i>↗</i></div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-visual" aria-hidden="true">
          <div className="about-circle"><img src="/subha-health-logo.png" alt="" /><b>EAR</b><span>NOSE</span><em>THROAT</em></div>
          <p>Care that sees<br />the whole person.</p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">WHY SUBHA HEALTH</p>
          <h2>Modern treatment.<br /><em>Personal attention.</em></h2>
          <p className="large-copy">Good care should feel clear, comfortable and unhurried.</p>
          <p>Subha Health ENT Clinic provides focused care for ear, nose and throat concerns in Dindigul. We combine careful clinical assessment with modern diagnostic tools and specialist surgical techniques.</p>
          <div className="principles">
            <div><span>01</span><h3>Listen first</h3><p>Your symptoms and concerns guide every consultation.</p></div>
            <div><span>02</span><h3>Explain clearly</h3><p>Findings and options are discussed in easy-to-understand language.</p></div>
            <div><span>03</span><h3>Treat precisely</h3><p>Care is tailored to your diagnosis, needs and comfort.</p></div>
          </div>
        </div>
      </section>

      <section className="appointment-band">
        <p className="eyebrow">READY WHEN YOU ARE</p>
        <h2>Let&apos;s help you feel<br /><em>like yourself again.</em></h2>
        <div className="band-actions">
          <a className="button pale" href="tel:+918610479562">Call +91 86104 79562 <span>→</span></a>
          <a className="button outline-light" href="https://wa.me/918610479562?text=Hello%20Subha%20Health%20ENT%20Clinic%2C%20I%20would%20like%20to%20request%20an%20appointment." target="_blank" rel="noreferrer">Message on WhatsApp</a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-heading">
          <p className="eyebrow">VISIT THE CLINIC</p>
          <h2>Easy to find.<br /><em>Here to help.</em></h2>
        </div>
        <div className="contact-details">
          <div className="detail"><span>ADDRESS</span><p>65, Krishna Rao 3rd Street,<br />Pandian Nagar, Nehruji Nagar,<br />Dindigul, Tamil Nadu 624001</p></div>
          <div className="detail"><span>PHONE</span><p><a href="tel:+918610479562">+91 86104 79562</a></p><small>Tap to call for appointments and today&apos;s clinic hours.</small></div>
          <div className="detail"><span>CONSULTATION</span><p>₹200</p><small>Call the clinic to confirm availability before visiting.</small></div>
          <a className="direction-card" href="https://www.google.com/maps/search/?api=1&query=Subha+Health+ENT+Clinic+Dindigul" target="_blank" rel="noreferrer">
            <span>GET DIRECTIONS</span><b>Open in Google Maps</b><i>↗</i>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <img className="brand-mark" src="/subha-health-logo.png" alt="" aria-hidden="true" />
          <span><strong>SUBHA HEALTH</strong><small>ENT CLINIC · DINDIGUL</small></span>
        </a>
        <p>Specialist ear, nose and throat care for children and adults.</p>
        <div className="footer-links"><a href="#services">Services</a><a href="#care">Conditions</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <small>© {new Date().getFullYear()} Subha Health ENT Clinic. Information on this website is general and does not replace medical advice.</small>
      </footer>

      <div className="mobile-actions" aria-label="Quick appointment actions">
        <a href="tel:+918610479562">Call clinic</a>
        <a href="https://wa.me/918610479562?text=Hello%20Subha%20Health%20ENT%20Clinic%2C%20I%20would%20like%20to%20request%20an%20appointment." target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </main>
  );
}
