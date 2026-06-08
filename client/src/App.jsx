import { useMemo, useState } from "react";

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
    "Computer Science graduate with hands-on experience in Java, Kotlin, Android development, React, Node.js, Firebase, REST APIs, MongoDB, MySQL, and practical software engineering workflows."
};

const metrics = [
  ["3", "Major projects"],
  ["7.95", "CGPA / 10.0"],
  ["4", "Internship months"],
  ["MERN", "Current stack"]
];

const skills = [
  ["Java", "OOP, backend logic, problem solving", "Programming", 86],
  ["Kotlin", "Android apps and Compose UI", "Programming", 82],
  ["JavaScript", "React interfaces and Node APIs", "Programming", 80],
  ["React.js", "Component-driven frontend development", "MERN", 78],
  ["Node.js", "REST APIs and server logic", "MERN", 78],
  ["Express.js", "Backend routing and middleware", "MERN", 76],
  ["MongoDB", "Document data modeling", "MERN", 74],
  ["Android Development", "Kotlin, Android Studio, app workflows", "Mobile", 84],
  ["Firebase", "Realtime app backend workflows", "Cloud", 80],
  ["Data Structures", "Coding practice and problem solving", "CS Core", 78],
  ["DBMS", "Relational and document data concepts", "CS Core", 76],
  ["REST APIs", "Client-server communication", "MERN", 80]
];

const projects = [
  {
    name: "Gram Waste Tracker",
    type: "Android + Firebase",
    image: "/assets/projects/gram-waste.svg",
    categories: ["All", "Mobile", "Realtime"],
    summary:
      "Real-time Android application for residents, admins, and tractor drivers to report, assign, track, and close waste collection tickets.",
    features: [
      "Role-based dashboards for residents, admins, and drivers.",
      "Firebase Realtime Database and Cloud Messaging for live status updates.",
      "Google Maps SDK for GPS tracking and blackspot reporting."
    ],
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "FCM", "Google Maps SDK"]
  },
  {
    name: "Medi-Fusion",
    type: "Full-Stack Healthcare",
    image: "/assets/projects/medi-fusion.svg",
    categories: ["All", "Full Stack", "Blockchain"],
    summary:
      "Healthcare platform connecting database workflows with tamper-resistant medical record storage and role-based portals.",
    features: [
      "Node.js and Express.js backend for application workflows.",
      "Solidity smart contract layer for secure record storage.",
      "Patient, doctor, and hospital portals with appointment and prescription flows."
    ],
    stack: ["Node.js", "Express.js", "Solidity", "MySQL", "OCR"]
  },
  {
    name: "Ashram Donation Management System",
    type: "Full-Stack Operations",
    image: "/assets/projects/ashram-donation.svg",
    categories: ["All", "Full Stack"],
    summary:
      "Donation management system for donor registration, secure record storage, authenticated access, and reporting.",
    features: [
      "RESTful CRUD APIs for donor record management.",
      "Session-based authentication for controlled access.",
      "MongoDB-backed records to reduce manual data entry errors."
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"]
  }
];

const experience = {
  role: "Android App Development Intern",
  company: "MindMatrix (CL Infotech Pvt. Ltd.)",
  date: "February 2026 - May 2026",
  details: [
    "Built Android application modules with Kotlin, Jetpack Compose, and Android Studio.",
    "Integrated Firebase services for real-time application workflows.",
    "Used Google Cloud Labs and Google AI Studio for GenAI-assisted prototyping.",
    "Worked on UI/UX screens, debugging, testing, and application optimization."
  ]
};

function Icon({ name }) {
  const icons = {
    arrow: ["M5 12h14", "m13 5 6-5-6-5"],
    download: ["M12 3v12", "m7 10 5 5 5-5", "M5 21h14"],
    mail: ["M4 6h16v12H4z", "m4 8 8 5 8-5"],
    github: [
      "M9 19c-4 1.5-4-2-5-2.5",
      "M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.7 4.7 0 0 0 18.7 7a4.3 4.3 0 0 0-.1-3.4s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 3.3 5.4 3.6 5.4 3.6A4.3 4.3 0 0 0 5.3 7 4.7 4.7 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22"
    ]
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[name].map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">SD</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>
        <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="kicker">MongoDB. Express. React. Node.js.</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">Software Developer building practical MERN, Android, and Java-based applications.</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-pills" aria-label="Profile highlights">
            <span>Open to Software Developer roles</span>
            <span>B.E. CSE graduate, May 2026</span>
            <span>Android + MERN stack</span>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects <Icon name="arrow" />
            </a>
            <a className="button" href={RESUME_PATH} download>
              <Icon name="download" /> Resume
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Portfolio metrics">
          <div className="availability">Ready for entry-level software roles</div>
          <div className="metric-grid">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="profile-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer">
              LeetCode
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="shell split-heading">
        <div>
          <p className="kicker">About</p>
          <h2>Focused on useful software, clean workflows, and steady execution.</h2>
        </div>
        <p>
          Shivakumara combines Android internship experience with a MERN project structure, Java fundamentals, REST API
          thinking, and database-backed application design.
        </p>
      </div>
      <div className="shell about-grid">
        <article>
          <h3>Best fit</h3>
          <p>Software Developer, MERN Developer, Android Developer, or Java Developer roles.</p>
        </article>
        <article>
          <h3>Core signal</h3>
          <p>React frontend, Express API, MongoDB persistence, Android UI work, Firebase workflows, and practical project delivery.</p>
        </article>
        <article>
          <h3>Location</h3>
          <p>{profile.location}</p>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="shell split-heading">
        <div>
          <p className="kicker">Experience</p>
          <h2>{experience.role}</h2>
        </div>
        <p>
          {experience.company} | {experience.date}
        </p>
      </div>
      <div className="shell timeline-card">
        {experience.details.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const filters = ["All", "Full Stack", "Mobile", "Blockchain", "Realtime"];
  const [filter, setFilter] = useState("All");
  const visibleProjects = useMemo(
    () => projects.filter((project) => project.categories.includes(filter)),
    [filter]
  );

  return (
    <section className="section projects" id="projects">
      <div className="shell split-heading">
        <div>
          <p className="kicker">Projects</p>
          <h2>Case studies with clear stack, features, and recruiter signal.</h2>
        </div>
        <p>The portfolio is now structured as a MERN app with a React frontend and Express/Mongo contact API.</p>
      </div>
      <div className="shell filter-row" role="toolbar" aria-label="Project filters">
        {filters.map((item) => (
          <button className={filter === item ? "is-active" : ""} key={item} type="button" onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="shell project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.name}>
            <img src={project.image} alt={`${project.name} preview`} loading="lazy" decoding="async" />
            <div className="project-content">
              <p className="kicker">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="stack-row">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" /> GitHub profile
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const groups = ["All", "MERN", "Programming", "Mobile", "Cloud", "CS Core"];
  const [group, setGroup] = useState("All");
  const visibleSkills = group === "All" ? skills : skills.filter((skill) => skill[2] === group);

  return (
    <section className="section" id="skills">
      <div className="shell split-heading">
        <div>
          <p className="kicker">Skills</p>
          <h2>MERN-centered stack with Android and Java fundamentals.</h2>
        </div>
        <p>Skill levels represent hands-on academic projects, internship work, and practical builds.</p>
      </div>
      <div className="shell filter-row" role="toolbar" aria-label="Skill filters">
        {groups.map((item) => (
          <button className={group === item ? "is-active" : ""} key={item} type="button" onClick={() => setGroup(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="shell skills-grid">
        {visibleSkills.map(([name, description, category, level]) => (
          <article className="skill-card" key={name}>
            <span>{name.slice(0, 2)}</span>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="meter" aria-label={`${name} proficiency ${level}%`}>
              <i style={{ width: `${level}%` }} />
            </div>
            <small>{category}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    const data = Object.fromEntries(new FormData(event.currentTarget));

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
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="shell contact-grid">
        <div>
          <p className="kicker">Contact</p>
          <h2>Open to Software Developer and Android Developer opportunities.</h2>
          <p>{profile.location}</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="hero-actions">
            <a className="button primary" href={RESUME_PATH} download>
              <Icon name="download" /> Resume PDF
            </a>
            <a className="button" href={ATS_PATH} download>
              ATS Text
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
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
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
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
