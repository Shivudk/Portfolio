import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
    githubpath: "https://github.com/Shivudk/Grama_Waste_Tracker.git",
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
    githubpath: "https://github.com/Shivudk/Medi-Fusion.git",
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
    githubpath: "https://github.com/Shivudk/Ashram_Management.git",
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

function normalizeFilter(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function matchesFilter(values, filter) {
  if (filter === "All") return true;
  const normalizedFilter = normalizeFilter(filter);
  return values.map(normalizeFilter).includes(normalizedFilter);
}

function sortByProficiency(a, b) {
  if (b.level !== a.level) return b.level - a.level;
  return a.name.localeCompare(b.name);
}

function getSkillsForCategory(category) {
  return skills.filter((skill) => skill.category === category).sort(sortByProficiency);
}

function getSortedCategories() {
  return skillGroups
    .filter((item) => item !== "All")
    .map((category) => ({
      category,
      maxLevel: Math.max(...skills.filter((skill) => skill.category === category).map((skill) => skill.level), 0)
    }))
    .sort((a, b) => b.maxLevel - a.maxLevel || a.category.localeCompare(b.category))
    .map((entry) => entry.category);
}

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

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    college: "The Oxford College of Engineering",
    location: "Bangalore, India",
    date: "November 2022 - May 2026",
    cgpa: "7.95 / 10.0"
  },
  {
    puc: "Pre-University Course (PUC)",
    college: "Vishwamanava Composite PU College",
    location: "Chitradurga, India",
    date: "April 2020 - August 2022",
    percentage: "84.86%"
  },
  {
    sslc: "Secondary School Leaving Certificate (SSLC)",
    school: "Adarsha Vidylaya RMSA",
    location: "Harapanahalli, India",
    date: "March 2020",
    percentage: "85.6%"
  }
];

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

const NAV_SECTIONS = ["home", "about", "experience", "projects", "skills", "education", "ats", "contact"];

const TECH_ICON_PATHS = {
  Java: (
    <path
      fill="currentColor"
      d="M8.5 6.5c-.2 1.4.4 2.4 1.3 3.2 1.5 1.3 3.1 2.5 3.1 5.4 0 2.8-1.8 4.7-4.2 5.6l.6 1.1c2.8-.8 5-3 5-6.2 0-3.6-2.2-5.2-3.9-6.7-.9-.8-1.6-1.5-1.6-2.6h-1.3zm2.8 9.8c-2.4.7-4.6 1.6-4.6 4.1 0 2.1 1.7 3.5 4 3.5 2.5 0 4.2-1.5 4.9-3.8l-1.2-.5c-.5 1.7-1.7 2.9-3.5 2.9-1.8 0-2.8-1-2.8-2.4 0-1.7 1.6-2.3 3.7-2.9 2.3-.7 4.7-1.5 4.7-4.4 0-2.5-1.9-4-4.5-4.7l-.5 1.2c2.2.6 3.5 1.8 3.5 3.4 0 1.9-1.7 2.4-3.9 3.1z"
    />
  ),
  Kotlin: (
    <path
      fill="currentColor"
      d="M4 4h6.7L20 20h-6.7L4 4zm8.3 0H20v16h-6.7L12.3 4z"
    />
  ),
  JavaScript: (
    <path
      fill="currentColor"
      d="M7.5 17.2c.5.9 1.5 1.6 2.9 1.6 1.4 0 2.3-.7 2.3-1.7 0-1.2-.9-1.6-2.4-2.3l-.8-.3c-2.4-1-4-2.2-4-4.8 0-2.4 1.9-4.2 4.9-4.2 2.1 0 3.6.7 4.7 2.6l-2.6 1.7c-.6-1.1-1.2-1.5-2.1-1.5-1 0-1.6.6-1.6 1.4 0 1 .7 1.4 2.3 2.1l.8.3c2.8 1.2 4.4 2.4 4.4 5.1 0 2.9-2.3 4.4-5.4 4.4-3 0-5-1.4-6.1-3.6l2.7-1.6zM15.8 17.5c.6 1 1.5 1.8 3.2 1.8 1.5 0 2.5-.8 2.5-1.9 0-1.3-1-1.7-2.7-2.4-1.1-.4-1.8-.7-2.2-1.1-.4-.4-.6-.9-.6-1.6h2.3c0 .5.2.8.5 1 .3.2.9.5 1.7.8 1.6.6 2.7 1.5 2.7 3.3 0 2.3-1.8 3.6-4.6 3.6-2.4 0-4-1.1-4.8-2.8l2-1.7z"
    />
  ),
  C: (
    <path
      fill="currentColor"
      d="M12 6.5c-2.8 0-5.1 2.1-5.5 4.8h2.3c.3-1.4 1.6-2.5 3.2-2.5 1.8 0 3.3 1.5 3.3 3.5s-1.5 3.5-3.3 3.5c-1.6 0-2.9-1.1-3.2-2.5H6.5c.4 2.7 2.7 4.8 5.5 4.8 3.1 0 5.6-2.5 5.6-5.8S15.1 6.5 12 6.5z"
    />
  ),
  "React.js": (
  <>
    <ellipse cx="12" cy="12" rx="2.2" ry="2.2" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
  </>
  ),
  "Node.js": (
    <path
      fill="currentColor"
      d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3zm0 2.2 5.8 3.3v6.9L12 19.7 6.2 16.4V8.5L12 5.2z"
    />
  ),
  "Express.js": (
    <path fill="currentColor" d="M4 18V6h3.2l3.4 7.2L14 6h3.1v12h-2.4V9.8L12.1 15h-1.8L7.4 9.8V18H4z" />
  ),
  MongoDB: (
    <path
      fill="currentColor"
      d="M12 4c-3.2 2.8-4.8 5.8-4.8 9.5 0 2.6 1.2 5 3.2 6.5.4-2.6.9-4.4 2.1-6.1 1.1 1.4 2.4 3.4 3.1 6.8 1.5-1.4 2.4-3.5 2.4-6 0-3.7-1.6-6.7-4.8-9.5z"
    />
  ),
  "Android Development": (
    <path
      fill="currentColor"
      d="M8 7.5 6.8 5.8a.6.6 0 1 1 1-1l1.4 1.9A6.9 6.9 0 0 1 12 6c.9 0 1.8.2 2.6.5l1.4-1.9a.6.6 0 1 1 1 1L14.5 7.5H17v9.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7.5h1zm1 3.2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm6 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z"
    />
  ),
  "Jetpack Compose": (
    <path fill="currentColor" d="M6 6h5l7 6-7 6H6l4.5-6L6 6z" />
  ),
  Firebase: (
    <path
      fill="currentColor"
      d="M6.5 18 4 6.5 12 4l8 2.5L17.5 18 12 20 6.5 18zm1.2-2.2 4.3 1.4 4.3-1.4.8-6.5-5.1-1.6-5.1 1.6.8 6.5z"
    />
  ),
  "Google Cloud": (
    <path
      fill="currentColor"
      d="M8.2 16.5A5.2 5.2 0 0 1 12 5.8a4.8 4.8 0 0 1 4.7 3.9 3.8 3.8 0 0 1 1.1 7.6H9.8a2.4 2.4 0 0 0-.6-4.8H12a1.2 1.2 0 1 1 0 2.4H8.4a2.4 2.4 0 0 0 0 4.8h3.6v2H8.2z"
    />
  ),
  MySQL: (
    <path
      fill="currentColor"
      d="M12 5c-3.8 1.2-6 3.2-6 5.8 0 2.1 1.5 3.5 3.8 4.3-.3-1.1-.4-2.1-.4-3.1 0-2.8 1.8-5.1 4.6-6.5C13.4 5.2 12.7 5 12 5zm4.2 2.2c2.1 1.6 3.3 3.7 3.3 6.1 0 3.6-3.1 6.7-7.8 8.2 4.2-1 7.3-3.8 7.3-7.5 0-2.2-1-4.2-2.8-5.7z"
    />
  ),
  "REST APIs": (
    <>
      <path fill="currentColor" d="M5 8h8v2H5zm0 4h6v2H5z" />
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M15 7h4v10h-4" />
    </>
  ),
  DSA: (
    <path fill="currentColor" d="M6 18V6h2.4v4.8H14V6h2.4v12H14v-5.2H8.4V18H6z" />
  ),
  "Software Core": (
    <path
      fill="currentColor"
      d="M12 4 5 7.5v9L12 20l7-3.5v-9L12 4zm0 2.3 4.5 2.6v5.2L12 16.7 7.5 14.1V8.9L12 6.3z"
    />
  )
};

function TechIcon({ name, size = 40 }) {
  const icon = TECH_ICON_PATHS[name];

  if (icon) {
    return (
      <svg className="tech-icon" viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
        {icon}
      </svg>
    );
  }

  return <span className="tech-icon-fallback">{name.slice(0, 2).toUpperCase()}</span>;
}

function getMetricIcon(label) {
  if (label.toLowerCase().includes("project")) return "code";
  if (label.toLowerCase().includes("cgpa")) return "shield";
  return "mobile";
}

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
    linkedin: ["M6 9h3v12H6zm1.5-6A1.8 1.8 0 1 1 6 4.8 1.8 1.8 0 0 1 7.5 3zM11 9h2.9v1.7h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v6.3H17v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H11z"],
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

const motionEase = [0.22, 1, 0.36, 1];

const sectionMotion = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: motionEase }
  }
};

const staggerMotion = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 }
  }
};

const cardMotion = {
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.68, ease: motionEase }
  }
};

function viewportMotion(reduceMotion) {
  return reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.18 }
      };
}

function handleSpotlightMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  event.currentTarget.style.setProperty("--spot-x", `${x}%`);
  event.currentTarget.style.setProperty("--spot-y", `${y}%`);
}

function MotionArticle({ className = "", children, hover = true, spotlight = false, ...props }) {
  const reduceMotion = useReducedMotion();
  const classes = [className, spotlight ? "spotlight-card glass-card" : ""].filter(Boolean).join(" ");

  return (
    <motion.article
      className={classes}
      variants={cardMotion}
      onMouseMove={spotlight ? handleSpotlightMove : undefined}
      whileHover={hover && !reduceMotion ? { y: -12, scale: 1.015 } : undefined}
      whileTap={hover && !reduceMotion ? { scale: 0.992 } : undefined}
      transition={{ duration: 0.32, ease: motionEase }}
      {...props}
    >
      {spotlight ? <span className="spotlight-glow" aria-hidden="true" /> : null}
      {children}
    </motion.article>
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

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.15, 0.35, 0.55, 0.75, 1] }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
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

function Header({ theme, setTheme, activeSection }) {
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
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">SD</span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>
        <div className="nav-actions">
          <div className={`nav-links ${open ? "is-open" : ""}`} id="primary-navigation">
            {links.map((link) => {
              const sectionId = link.toLowerCase();
              return (
                <a
                  key={link}
                  href={`#${sectionId}`}
                  className={activeSection === sectionId ? "is-active" : ""}
                  aria-current={activeSection === sectionId ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              );
            })}
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
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="hero"
      id="home"
      initial={reduceMotion ? "visible" : "hidden"}
      animate="visible"
      variants={sectionMotion}
    >
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-gridline" aria-hidden="true" />
      <div className="hero-motion-layer" aria-hidden="true">
        <div className="motion-beam motion-beam-one" />
        <div className="motion-beam motion-beam-two" />
        <div className="hero-scanline" />
        <div className="code-hud">
          <span className="hud-topline" />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="shell hero-shell">
        <div className="hero-layout">
          <motion.div className="hero-copy" data-reveal variants={cardMotion}>
            <span className="otw-badge">Open to Software Developer roles</span>
            <h1 className="hero-name" data-text={profile.name}>
              {profile.name}
            </h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-title">{profile.summary}</p>
            <div className="hero-pills" aria-label="Profile highlights">
              <span>B.E. CSE graduate, May 2026</span>
              <span>Android + MERN stack</span>
              <span>Excellent internship rating</span>
            </div>
            <div className="cta-group" aria-label="Primary actions">
              <a className="button primary" href="#projects">
                View Project Case Studies <Icon name="arrow" />
              </a>
              <a className="button" href={RESUME_PATH} download>
                <Icon name="download" /> Download Resume
              </a>
              <a className="cta-link" href="#contact">
                Get in touch
              </a>
            </div>
            <div className="hero-social" aria-label="Social profiles">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <Icon name="linkedin" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Icon name="github" />
              </a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode profile">
                <Icon name="code" />
              </a>
            </div>
          </motion.div>

          <motion.div className="recruiter-dashboard glass-card spotlight-card" data-reveal aria-label="Recruiter dashboard" variants={staggerMotion} onMouseMove={handleSpotlightMove}>
            <span className="spotlight-glow" aria-hidden="true" />
            <div className="recruiter-dashboard-header">
              <p>Recruiter dashboard</p>
              <p className="dashboard-title">At-a-glance hiring signals</p>
            </div>
            {metrics.map((metric) => (
              <MotionArticle key={metric.label} spotlight>
                <span className="metric-card-icon" aria-hidden="true">
                  <Icon name={getMetricIcon(metric.label)} />
                </span>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </MotionArticle>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function RecruiterSnapshot() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section className="section snapshot" id="about" variants={sectionMotion} {...viewportMotion(reduceMotion)}>
      <div className="shell split-heading" data-reveal>
        <div>
          <p className="eyebrow">Recruiter snapshot</p>
          <h2>Clear signal for entry-level software roles.</h2>
        </div>
      </div>
      <motion.div className="shell snapshot-grid" variants={staggerMotion}>
        <MotionArticle className="feature-card feature-card-wide" data-reveal spotlight>
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
        </MotionArticle>
        <MotionArticle className="feature-card" data-reveal spotlight>
          <Icon name="shield" />
          <h3>Proof points</h3>
          <ul className="check-list">
            {recruiterSignals.slice(1, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </MotionArticle>
      </motion.div>
    </motion.section>
  );
}

function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section className="section experience" id="experience" variants={sectionMotion} {...viewportMotion(reduceMotion)}>
      <div className="shell split-heading" data-reveal>
        <div>
          <p className="eyebrow">{experience.label}</p>
          <h2>Android internship presented as a delivery story.</h2>
        </div>
        <p>
          {experience.role} at {experience.company}, {experience.location}. {experience.date}. {experience.rating}.
        </p>
      </div>
      <motion.div className="shell experience-grid" variants={staggerMotion}>
        <MotionArticle className="experience-card" data-reveal spotlight>
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
        </MotionArticle>
        <motion.aside className="tool-panel" data-reveal variants={cardMotion} whileHover={!reduceMotion ? { y: -10, scale: 1.012 } : undefined}>
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
        </motion.aside>
      </motion.div>
    </motion.section>
  );
}

function ProjectBadges({ project }) {
  const statusCategory = project.categories.find((category) => category !== "All");

  return (
    <div className="project-badges">
      <span className="badge-type">{project.type}</span>
      {statusCategory ? <span className="badge-status">{statusCategory}</span> : null}
    </div>
  );
}

function ProjectStackBadges({ stack }) {
  return (
    <div className="stack-row" aria-label="Technology stack">
      {stack.map((tech) => (
        <span className="stack-badge" key={tech}>
          <TechIcon name={tech} size={18} />
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectFeaturedCard({ project, index }) {
  return (
    <MotionArticle className="project-case project-featured is-visible" data-reveal spotlight>
      <span className="featured-badge">Featured case study</span>
      <div className="project-visual">
        <img src={project.image} alt={`${project.name} preview`} loading="lazy" decoding="async" width="960" height="600" />
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="project-body">
        <ProjectBadges project={project} />
        <div className="project-title">
          <div>
            <h3>{project.name}</h3>
          </div>
          <a className="text-link" href={project.githubpath} target="_blank" rel="noreferrer">
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
        <ProjectStackBadges stack={project.stack} />
      </div>
    </MotionArticle>
  );
}

function ProjectCompactCard({ project, index }) {
  return (
    <MotionArticle className="project-case project-card-compact is-visible" data-reveal spotlight>
      <div className="project-visual">
        <img src={project.image} alt={`${project.name} preview`} loading="lazy" decoding="async" width="960" height="600" />
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="project-body">
        <ProjectBadges project={project} />
        <div className="project-title">
          <div>
            <h3>{project.name}</h3>
          </div>
          <a className="text-link" href={project.githubpath} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>
            <Icon name="github" />
          </a>
        </div>
        <p className="project-summary">{project.summary}</p>
        <div className="outcome-row" aria-label={`${project.name} impact metrics`}>
          {project.outcomes.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <ProjectStackBadges stack={project.stack} />
      </div>
    </MotionArticle>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const reduceMotion = useReducedMotion();
  const visibleProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project.categories, filter)),
    [filter]
  );
  const featuredProject = filter === "All" && visibleProjects.length > 0 ? visibleProjects[0] : null;
  const gridProjects = filter === "All" ? visibleProjects.slice(1) : visibleProjects;

  return (
    <motion.section className="section projects" id="projects" variants={sectionMotion} {...viewportMotion(reduceMotion)}>
      <div className="shell split-heading" data-reveal>
        <div>
          <p className="eyebrow">Project case studies</p>
          <h2>Projects that connect software engineering with real workflows.</h2>
        </div>
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
      <motion.div className="shell project-stack" variants={staggerMotion}>
        {featuredProject ? <ProjectFeaturedCard project={featuredProject} index={0} /> : null}
        {gridProjects.length > 0 ? (
          <div className="project-grid">
            {gridProjects.map((project, index) => (
              <ProjectCompactCard key={project.name} project={project} index={featuredProject ? index + 1 : index} />
            ))}
          </div>
        ) : null}
      </motion.div>
    </motion.section>
  );
}

function SkillCard({ skill, rank }) {
  return (
    <MotionArticle className="skill-card skill-card-premium is-visible" key={skill.name} data-reveal spotlight>
      <span className="skill-rank" aria-hidden="true">
        {String(rank).padStart(2, "0")}
      </span>
      <span className="skill-category-chip">{skill.category}</span>
      <div className="skill-card-header">
        <TechIcon name={skill.name} />
        <h3>{skill.name}</h3>
        <span className="skill-level-label">{skill.level}%</span>
      </div>
      <p>{skill.description}</p>
      <div
        className="meter"
        role="progressbar"
        aria-label={`${skill.name} proficiency`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.level}
      >
        <i style={{ width: `${skill.level}%` }} />
      </div>
    </MotionArticle>
  );
}

function Skills() {
  const [group, setGroup] = useState("All");
  const reduceMotion = useReducedMotion();
  const visibleSkills = useMemo(
    () => skills.filter((skill) => matchesFilter([skill.category], group)).sort(sortByProficiency),
    [group]
  );
  const groupedCategories = useMemo(() => getSortedCategories(), []);

  return (
    <motion.section className="section skills" id="skills" variants={sectionMotion} {...viewportMotion(reduceMotion)}>
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
      {group === "All" ? (
        <div className="shell">
          {groupedCategories.map((category) => {
            const categorySkills = getSkillsForCategory(category);
            if (!categorySkills.length) return null;
            const topLevel = categorySkills[0]?.level;

            return (
              <section className="skill-category" key={category} data-reveal>
                <div className="skill-category-header">
                  <h3>{category}</h3>
                  <span>
                    {categorySkills.length} skills · top {topLevel}%
                  </span>
                </div>
                <motion.div className="skills-grid" variants={staggerMotion}>
                  {categorySkills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} rank={index + 1} />
                  ))}
                </motion.div>
              </section>
            );
          })}
        </div>
      ) : (
        <motion.div className="shell skills-grid" variants={staggerMotion}>
          {visibleSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} rank={index + 1} />
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}

function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section className="section education" id="education" variants={sectionMotion} {...viewportMotion(reduceMotion)}>
  <motion.div className="shell education-grid" variants={staggerMotion}>
    <MotionArticle className="education-card education-timeline" data-reveal spotlight>
      <p className="eyebrow">Education</p>

      {education.map((edu, index) => (
        <div
          key={index}
          className={`education-item timeline-node ${edu.degree ? "timeline-item--highlight" : ""}`}
        >
          <h3>{edu.degree || edu.puc || edu.sslc}</h3>

          <p>
            {edu.college || edu.school}, {edu.location}
          </p>

          <div className="education-meta">
            <span>{edu.date}</span>
            {edu.cgpa ? (
              <strong className="cgpa-badge">CGPA: {edu.cgpa}</strong>
            ) : (
              <strong>Percentage: {edu.percentage}</strong>
            )}
          </div>
        </div>
      ))}
    </MotionArticle>
        <MotionArticle className="cert-card" data-reveal spotlight>
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
        </MotionArticle>
      </motion.div>
    </motion.section>
  );
}

function AtsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section className="section ats" id="ats" variants={sectionMotion} {...viewportMotion(reduceMotion)}>
      <motion.div className="shell ats-grid" variants={staggerMotion}>
        <motion.div data-reveal variants={cardMotion}>
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
        </motion.div>
        <motion.div className="keyword-cloud" data-reveal aria-label="ATS keyword list" variants={cardMotion}>
          {atsKeywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const reduceMotion = useReducedMotion();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const subject = String(data.subject || "").trim();
    const message = String(data.message || "").trim();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSending(true);
    setStatus("");

    const mailSubject = `Portfolio contact: ${subject}`;
    const mailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    setStatus("Opening email app.");
    form.reset();
    setIsSending(false);
  }

  return (
    <motion.section className="section contact" id="contact" variants={sectionMotion} {...viewportMotion(reduceMotion)}>
      <motion.div className="shell contact-grid" variants={staggerMotion}>
        <motion.div
          className="contact-panel"
          data-reveal
          variants={cardMotion}
          whileHover={!reduceMotion ? { y: -10, scale: 1.012 } : undefined}
        >
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
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          data-reveal
          variants={cardMotion}
          whileHover={!reduceMotion ? { y: -10, scale: 1.012 } : undefined}
        >
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
        </motion.form>
      </motion.div>
    </motion.section>
  );
}

export default function App() {
  const [theme, setTheme] = useTheme();
  const progress = useScrollProgress();
  const activeSection = useActiveSection(NAV_SECTIONS);
  useRevealMotion();

  return (
    <>
      <div className="aurora-bg" aria-hidden="true">
        <span className="aurora-blob aurora-blob-one" />
        <span className="aurora-blob aurora-blob-two" />
        <span className="aurora-blob aurora-blob-three" />
      </div>
      <a className="skip-link" href="#about">
        Skip to main content
      </a>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <Header theme={theme} setTheme={setTheme} activeSection={activeSection} />
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
          <p>Designed and built by {profile.name}.</p>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </>
  );
}
