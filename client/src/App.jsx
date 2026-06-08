import { useEffect, useMemo, useState } from "react";

const RESUME_PATH = "/assets/resume/Shivakumara_D_K_Resume_2026-06-04.pdf";
const ATS_PATH = "/assets/resume/ats-profile.txt";

const profile = {
  name: "Shivakumara D K",
  role: "Software Developer",
  location: "Bangalore, Karnataka, India",
  email: "shivudk8970@gmail.com",
  phone: "+91 9591081735",
  linkedin: "https://www.linkedin.com/in/shivudk78a09225a",
  github: "https://github.com/Shivudk",
  leetcode: "https://leetcode.com/u/shivu_d_k",
  summary:
    "Computer Science engineering graduate with hands-on experience in Java, Kotlin, Android development, React, Node.js, Firebase, REST APIs, MongoDB, MySQL, and practical software engineering workflows."
};

const metrics = [
  { value: "3", label: "Production-style projects", detail: "Android, healthcare, and operations workflows" },
  { value: "7.95", label: "CGPA / 10.0", detail: "B.E. Computer Science, May 2026" },
  { value: "4", label: "Internship months", detail: "Android, Firebase, UI/UX, testing" },
  { value: "MERN", label: "Portfolio stack", detail: "React frontend with Express and MongoDB API" }
];

const recruiterSignals = [
  "Open to Software Developer, MERN Developer, Android Developer, and Java Developer roles.",
  "Hands-on Android internship with Kotlin, Jetpack Compose, Firebase, Google Cloud Labs, and GenAI tools.",
  "Project depth across real-time mobile workflows, full-stack healthcare, blockchain concepts, and donation operations.",
  "ATS-aligned keywords across Java, Kotlin, React, Node.js, MongoDB, MySQL, REST APIs, OOP, DBMS, OS, and DSA."
];

const skills = [
  { name: "Java", description: "OOP, backend logic, problem solving", category: "Programming", level: 86 },
  { name: "Kotlin", description: "Android apps and Compose UI", category: "Programming", level: 82 },
  { name: "JavaScript", description: "React interfaces and Node APIs", category: "Programming", level: 80 },
  { name: "C", description: "Programming fundamentals", category: "Programming", level: 68 },
  { name: "React.js", description: "Component-driven frontend development", category: "MERN", level: 78 },
  { name: "Node.js", description: "REST APIs and server logic", category: "MERN", level: 78 },
  { name: "Express.js", description: "Backend routing and middleware", category: "MERN", level: 76 },
  { name: "MongoDB", description: "Document data modeling and CRUD", category: "MERN", level: 74 },
  { name: "Android Development", description: "Kotlin, Android Studio, app workflows", category: "Mobile", level: 84 },
  { name: "Jetpack Compose", description: "Modern Android UI development", category: "Mobile", level: 82 },
  { name: "Firebase", description: "Realtime Database, FCM, app backend", category: "Cloud", level: 80 },
  { name: "Google Cloud", description: "GCP labs and Google AI Studio exposure", category: "Cloud", level: 72 },
  { name: "MySQL", description: "Relational data and queries", category: "Data", level: 76 },
  { name: "REST APIs", description: "Client-server communication", category: "MERN", level: 80 },
  { name: "DSA", description: "Coding practice and problem solving", category: "CS Core", level: 78 },
  { name: "Software Core", description: "OOP, DBMS, OS, computer networks", category: "CS Core", level: 80 }
];

const skillGroups = ["All", "MERN", "Programming", "Mobile", "Cloud", "Data", "CS Core"];

const projects = [
  {
    name: "Gram Waste Tracker",
    type: "Android + Firebase",
    image: "/assets/projects/gram-waste.svg",
    categories: ["All", "Mobile", "Realtime"],
    problem:
      "Waste collection workflows often depend on manual communication between residents, administrators, and vehicle drivers, which makes ticket status unclear.",
    solution:
      "Designed a real-time Android workflow where residents report issues, admins assign and monitor tickets, and drivers update collection status from the field.",
    summary:
      "Real-time Android application for residents, admins, and tractor drivers to report, assign, track, and close waste collection tickets.",
    features: [
      "Role-based dashboards for residents, admins, and tractor drivers.",
      "Firebase Realtime Database and Firebase Cloud Messaging for live status updates and push alerts.",
      "Google Maps SDK for GPS tracking and photo-based blackspot reporting."
    ],
    outcomes: ["3 user roles", "Realtime ticket updates", "Field-ready GPS workflow"],
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "FCM", "Google Maps SDK", "Android Studio"]
  },
  {
    name: "Medi-Fusion",
    type: "Full-Stack Healthcare",
    image: "/assets/projects/medi-fusion.svg",
    categories: ["All", "Full Stack", "Blockchain"],
    problem:
      "Healthcare records need structured role-based access while preserving trust, traceability, and tamper resistance for sensitive medical information.",
    solution:
      "Built a hybrid platform using Node.js and Express.js for application workflows, MySQL for structured metadata, and Solidity for immutable record storage concepts.",
    summary:
      "Healthcare platform connecting database workflows with tamper-resistant medical record storage and role-based portals.",
    features: [
      "Node.js and Express.js backend bridging application workflow and record layers.",
      "Solidity smart contract layer for secure, tamper-resistant medical record storage.",
      "Patient, doctor, and hospital portals with appointment, prescription, and record tracking flows.",
      "OCR-assisted document parsing for uploaded physical medical documents."
    ],
    outcomes: ["3 portal types", "Smart-contract record layer", "OCR workflow"],
    stack: ["Node.js", "Express.js", "Solidity", "MySQL", "JavaScript", "OCR"]
  },
  {
    name: "Ashram Donation Management System",
    type: "Full-Stack Operations",
    image: "/assets/projects/ashram-donation.svg",
    categories: ["All", "Full Stack"],
    problem:
      "Manual donation records can create duplicate entries, reporting delays, and limited donor-history visibility for small organizations.",
    solution:
      "Developed a full-stack donation management application with secure donor registration, authenticated access, record storage, and reporting-oriented data handling.",
    summary:
      "Donation management system for donor registration, secure record storage, authenticated access, and reporting.",
    features: [
      "RESTful CRUD APIs for donor record management.",
      "Session-based authentication for controlled access.",
      "MongoDB-backed records designed to reduce manual data entry errors."
    ],
    outcomes: ["CRUD workflows", "Authentication", "MongoDB records"],
    stack: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"]
  }
];

const projectFilters = ["All", "Full Stack", "Mobile", "Blockchain", "Realtime"];

const experience = {
  role: "Android App Development Intern",
  company: "MindMatrix (CL Infotech Pvt. Ltd.)",
  location: "Bangalore, India",
  date: "February 2026 - May 2026",
  label: "VTU-recognized internship",
  rating: "Excellent performance rating",
  details: [
    "Built Android application modules with Kotlin, Jetpack Compose, and Android Studio.",
    "Designed UI/UX screens, functional prototypes, and reusable interface components.",
    "Integrated Firebase services for real-time application workflows.",
    "Used Google Cloud Labs and Google AI Studio to explore GenAI-assisted app development.",
    "Participated in testing, debugging, performance tuning, and application optimization.",
    "Followed structured Android development workflows through project-based learning."
  ],
  tools: [
    "Kotlin",
    "Jetpack Compose",
    "Android Studio",
    "Firebase",
    "Google Cloud Labs",
    "Google AI Studio",
    "Generative AI",
    "UI/UX Prototyping",
    "Testing",
    "Debugging"
  ]
};

const education = {
  degree: "Bachelor of Engineering in Computer Science",
  college: "The Oxford College of Engineering",
  location: "Bangalore, India",
  date: "November 2022 - May 2026",
  cgpa: "7.95 / 10.0"
};

const certifications = [
  { type: "Certification", name: "Android App Development Using Gen AI" },
  { type: "Workshop", name: "AI Tools Workshop - Be 10X" },
  { type: "Certification", name: "Certificate in Java Development" },
  { type: "Internship", name: "Octanet Internship" },
  {
    type: "Community",
    name: "SecurityBoat Community Meetup",
    detail: "AI Security, Privacy, Trust, Accountability, DPDPA, and GDPR"
  }
];

const atsKeywords = [
  "Java",
  "Kotlin",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Android Development",
  "Jetpack Compose",
  "Firebase",
  "Google Cloud Platform",
  "Google AI Studio",
  "Git",
  "GitHub",
  "Data Structures",
  "Algorithms",
  "OOP",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Full Stack Developer",
  "MERN Developer"
];

const languages = ["Kannada", "English", "Telugu", "Tamil"];

function Icon({ name }) {
  const icons = {
    arrow: ["M5 12h14", "m13 5 6-5-6-5"],
    check: ["M20 6 9 17l-5-5"],
    close: ["M6 6l12 12", "M18 6 6 18"],
    code: ["m8 9-4 3 4 3", "m16 9 4 3-4 3", "m14 5-4 14"],
    database: ["M4 6c0 1.7 3.6 3 8 3s8-1.3 8-3-3.6-3-8-3-8 1.3-8 3z", "M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6", "M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"],
    download: ["M12 3v12", "m7 10 5 5 5-5", "M5 21h14"],
    external: ["M7 17 17 7", "M9 7h8v8", "M5 5h6", "M5 5v14h14v-6"],
    github: [
      "M9 19c-4 1.5-4-2-5-2.5",
      "M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.7 4.7 0 0 0 18.7 7a4.3 4.3 0 0 0-.1-3.4s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 3.3 5.4 3.6 5.4 3.6A4.3 4.3 0 0 0 5.3 7 4.7 4.7 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22"
    ],
    mail: ["M4 6h16v12H4z", "m4 8 8 5 8-5"],
    menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
    mobile: ["M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z", "M11 18h2"],
    moon: ["M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8z"],
    shield: ["M12 3 20 6v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6z"],
    sun: ["M12 3v2", "M12 19v2", "M4.2 4.2l1.4 1.4", "M18.4 18.4l1.4 1.4", "M3 12h2", "M19 12h2", "M4.2 19.8l1.4-1.4", "M18.4 5.6l1.4-1.4", "M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0"]
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[name].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    function update() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
      });
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

function useRevealMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll("[data-reveal]");

    if (reducedMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    targets.forEach((target, index) => {
      target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);
}

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const links = ["About", "Experience", "Projects", "Skills", "Education", "ATS", "Contact"];

  useEffect(() => {
    function closeOnResize() {
      if (window.innerWidth > 760) setOpen(false);
    }

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Shivakumara D K home">
          <span className="brand-mark">SD</span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>
        <div className="nav-actions">
          <div className={`nav-links ${open ? "is-open" : ""}`} id="primary-navigation">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
                {link}
              </a>
            ))}
          </div>
          <a className="nav-resume" href={RESUME_PATH} download>
            Resume
          </a>
          <button
            className="icon-button"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "light"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-gridline" aria-hidden="true" />
      <div className="shell hero-shell">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">MERN portfolio for software developer roles</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">Java, Android, and full-stack developer turning real workflows into polished software.</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-pills" aria-label="Profile highlights">
            <span>Open to Software Developer roles</span>
            <span>B.E. CSE graduate, May 2026</span>
            <span>Android + MERN stack</span>
            <span>Excellent internship rating</span>
          </div>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#projects">
              View Project Case Studies <Icon name="arrow" />
            </a>
            <a className="button" href={RESUME_PATH} download>
              <Icon name="download" /> Download Resume
            </a>
          </div>
          <div className="system-map" aria-label="MERN portfolio system summary">
            <span>React UI</span>
            <span>Express API</span>
            <span>MongoDB</span>
            <span>Resume ATS</span>
          </div>
        </div>
      </div>

      <div className="shell metric-strip" data-reveal aria-label="Portfolio metrics">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RecruiterSnapshot() {
  return (
    <section className="section snapshot" id="about">
      <div className="shell split-heading" data-reveal>
        <div>
          <p className="eyebrow">Recruiter snapshot</p>
          <h2>Clear signal for entry-level software roles.</h2>
        </div>
        <p>
          A compact hiring view of role fit, project depth, technical keywords, and practical proof points for fast recruiter
          screening.
        </p>
      </div>
      <div className="shell snapshot-grid">
        <article className="feature-card feature-card-wide" data-reveal>
          <span className="card-label">Best fit</span>
          <h3>Software Developer / MERN Developer / Android Developer</h3>
          <p>
            Strongest in Java, Kotlin, React, Node.js, Express.js, MongoDB, Firebase, Android UI, REST APIs, and role-based
            product workflows.
          </p>
          <div className="card-actions">
            <a className="button small primary" href={RESUME_PATH} download>
              Resume PDF
            </a>
            <a className="button small" href="#contact">
              Contact
            </a>
          </div>
        </article>
        <article className="feature-card" data-reveal>
          <Icon name="shield" />
          <h3>Proof points</h3>
          <ul className="check-list">
            {recruiterSignals.slice(1, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="feature-card" data-reveal>
          <Icon name="database" />
          <h3>MERN upgrade</h3>
          <p>
            This portfolio now runs as a React frontend with an Express API and MongoDB-ready contact-message model for a
            credible full-stack deployment story.
          </p>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="shell split-heading" data-reveal>
        <div>
          <p className="eyebrow">{experience.label}</p>
          <h2>Android internship presented as a delivery story.</h2>
        </div>
        <p>
          {experience.role} at {experience.company}, {experience.location}. {experience.date}. {experience.rating}.
        </p>
      </div>
      <div className="shell experience-grid">
        <article className="experience-card" data-reveal>
          <div className="experience-top">
            <div>
              <span className="card-label">{experience.rating}</span>
              <h3>{experience.role}</h3>
              <p>{experience.company}</p>
            </div>
            <time>{experience.date}</time>
          </div>
          <div className="responsibility-grid">
            {experience.details.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </article>
        <aside className="tool-panel" data-reveal>
          <h3>Tools and concepts</h3>
          <div className="chip-cloud">
            {experience.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
          <div className="proof-stack">
            <div>
              <strong>01</strong>
              <p>Modern Android UI development with Kotlin and Compose.</p>
            </div>
            <div>
              <strong>02</strong>
              <p>Firebase-backed realtime application workflows.</p>
            </div>
            <div>
              <strong>03</strong>
              <p>Testing, debugging, optimization, and structured delivery habits.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const visibleProjects = useMemo(
    () => projects.filter((project) => project.categories.includes(filter)),
    [filter]
  );

  return (
    <section className="section projects" id="projects">
      <div className="shell split-heading" data-reveal>
        <div>
          <p className="eyebrow">Project case studies</p>
          <h2>Projects that connect software engineering with real workflows.</h2>
        </div>
        <p>
          Each project is framed with problem, solution, features, stack, and recruiter signal so the work is easy to scan
          and easy to discuss in interviews.
        </p>
      </div>
      <div className="shell filter-row" role="toolbar" aria-label="Filter projects" data-reveal>
        {projectFilters.map((item) => (
          <button
            className={filter === item ? "is-active" : ""}
            key={item}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="shell project-stack">
        {visibleProjects.map((project, index) => (
          <article className="project-case" key={project.name} data-reveal>
            <div className="project-visual">
              <img src={project.image} alt={`${project.name} preview`} loading="lazy" decoding="async" width="960" height="600" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="project-body">
              <div className="project-title">
                <div>
                  <p className="eyebrow">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                  <Icon name="github" /> GitHub
                </a>
              </div>
              <p className="project-summary">{project.summary}</p>
              <div className="case-grid">
                <section>
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </section>
                <section>
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </section>
              </div>
              <div className="outcome-row" aria-label={`${project.name} impact metrics`}>
                {project.outcomes.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <section className="feature-list">
                <h4>Key features</h4>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>
              <div className="stack-row" aria-label={`${project.name} technology stack`}>
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const [group, setGroup] = useState("All");
  const visibleSkills = group === "All" ? skills : skills.filter((skill) => skill.category === group);

  return (
    <section className="section skills" id="skills">
      <div className="shell split-heading" data-reveal>
        <div>
          <p className="eyebrow">Technical skills</p>
          <h2>MERN-centered stack with Android and Java fundamentals.</h2>
        </div>
        <p>Skill levels reflect practical exposure from internship work, academic projects, and hands-on software builds.</p>
      </div>
      <div className="shell filter-row" role="toolbar" aria-label="Filter technical skills" data-reveal>
        {skillGroups.map((item) => (
          <button
            className={group === item ? "is-active" : ""}
            key={item}
            type="button"
            aria-pressed={group === item}
            onClick={() => setGroup(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="shell skills-grid">
        {visibleSkills.map((skill) => (
          <article className="skill-card" key={skill.name} data-reveal>
            <span className="skill-icon">{skill.name.slice(0, 2)}</span>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <div className="meter" aria-label={`${skill.name} proficiency ${skill.level}%`}>
              <i style={{ width: `${skill.level}%` }} />
            </div>
            <small>{skill.category}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education" id="education">
      <div className="shell education-grid">
        <article className="education-card" data-reveal>
          <p className="eyebrow">Education</p>
          <h2>{education.degree}</h2>
          <p>
            {education.college}, {education.location}
          </p>
          <div className="education-meta">
            <span>{education.date}</span>
            <strong>CGPA: {education.cgpa}</strong>
          </div>
        </article>
        <article className="cert-card" data-reveal>
          <p className="eyebrow">Certifications and learning</p>
          <h2>Continuous learning across Android, Java, AI tools, and security.</h2>
          <div className="cert-list">
            {certifications.map((cert) => (
              <span key={cert.name}>
                <strong>{cert.type}</strong>
                {cert.name}
                {cert.detail ? <small>{cert.detail}</small> : null}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function AtsSection() {
  return (
    <section className="section ats" id="ats">
      <div className="shell ats-grid">
        <div data-reveal>
          <p className="eyebrow">ATS and recruiter compatibility</p>
          <h2>Keyword-rich, readable, and download-ready.</h2>
          <p>
            The page keeps visible recruiter keywords, a PDF resume, and a plain-text ATS profile aligned with the same
            project and skill story.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={ATS_PATH} download>
              <Icon name="download" /> Download ATS Text
            </a>
            <a className="button" href={RESUME_PATH} download>
              Resume PDF
            </a>
          </div>
        </div>
        <div className="keyword-cloud" data-reveal aria-label="ATS keyword list">
          {atsKeywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Message could not be sent.");
      }

      setStatus(result.message);
      form.reset();
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="shell contact-grid">
        <div className="contact-panel" data-reveal>
          <p className="eyebrow">Contact</p>
          <h2>Open to Software Developer and Android Developer opportunities.</h2>
          <p>{profile.location}</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Icon name="external" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <Icon name="external" />
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer">
              LeetCode <Icon name="external" />
            </a>
          </div>
          <div className="language-row" aria-label="Languages">
            {languages.map((language) => (
              <span key={language}>{language}</span>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} data-reveal>
          <div className="form-grid">
            <label>
              Name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
          </div>
          <label>
            Subject
            <input name="subject" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="button primary" type="submit" disabled={isSending}>
            <Icon name="mail" /> {isSending ? "Sending" : "Send Message"}
          </button>
          <p className="form-status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useTheme();
  const progress = useScrollProgress();
  useRevealMotion();

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to main content
      </a>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <RecruiterSnapshot />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <AtsSection />
        <Contact />
      </main>
      <footer>
        <div className="shell footer-inner">
          <p>Designed and built for {profile.name}.</p>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </>
  );
}
