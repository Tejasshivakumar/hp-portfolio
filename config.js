// ============================================================
//  HP PORTFOLIO CONFIG  ⚡  — Tejas Shiva Kumar
//  Edit this file to update portfolio content.
// ============================================================

const config = {

  // ── Site ──────────────────────────────────────────────────
  siteTitle: "TSK",

  // ── Hero / Home ───────────────────────────────────────────
  hero: {
    spell:    "✨ Lumos! ✨",
    greeting: "Hello! I'm",
    name:     "Tejas Shiva Kumar",
    taglines: [
      "Software Engineer",
      "Backend Developer",
      "Data Analytics Scholar",
      "Problem Solver",
    ],
    intro: `Software Engineer and Data Analytics Master's student at Dublin City University.
Professional experience in .NET development, SQL, Python, and backend engineering.
I enjoy building scalable software systems, solving algorithmic problems, and
crafting data-driven applications.`,
    resume: "./RESUME/TEJAS_SHIVA_KUMAR_RESUME.pdf",
  },

  // ── Social Links (set "" to hide) ─────────────────────────
  social: {
    github:        "https://github.com/Tejasshivakumar",
    linkedin:      "https://www.linkedin.com/in/tejas-shiva-kumar-51940a24b",
    leetcode:      "https://leetcode.com/u/tejasshivakumar2001/",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/tejasshivactle/",
  },

  // ── About Section ─────────────────────────────────────────
  about: {
    text: `I am a Software Engineer and Data Analytics Master's student at Dublin City
University with professional experience in .NET development, SQL, Python, and
backend development. I enjoy building scalable software systems, solving
algorithmic problems, and working on data-driven applications. I am particularly
interested in backend engineering, data analytics, and automation systems.`,
    stats: [
      { label: "🏰 House",      value: "Gryffindor"              },
      { label: "🪄 Specialty",  value: "ASP.NET & Backend Dev"   },
      { label: "📚 Studies",    value: "MSc Data Analytics, DCU" },
      { label: "⚡ Experience", value: "1+ Year"                 },
    ],
  },

  // ── Chronicles (Experience + Education, newest first) ─────
  chronicles: [
    {
      type:         "education",
      role:         "Master's in Data Analytics",
      organization: "Dublin City University (DCU)",
      location:     "Dublin, Ireland",
      period:       "2024 — 2026",
      duration:     "In Progress",
      description:  `Pursuing a Master's degree in Data Analytics at one of Ireland's leading
technology universities. Engaged in advanced coursework spanning software
engineering, machine learning, data visualisation, and research methodologies.`,
      tags: ["Data Analytics", "Machine Learning", "Software Engineering", "DCU", "Ireland"],
    },
    {
      type:         "employment",
      role:         "Software Engineer",
      organization: "AceMicromatic Manufacturing Intelligence Technologies",
      location:     "India",
      period:       "2023 — 2024",
      duration:     "1 Year",
      description:  `Developed and maintained ASP.NET applications using C#, JavaScript, and
Bootstrap across the full software development lifecycle — from requirement analysis
to deployment. Built responsive UI components, improved application performance,
and performed debugging, optimisation, and code reviews. Developed SQL queries and
stored procedures to enhance database performance, and generated Excel reports
using SQL Server.`,
      tags: ["ASP.NET", "C#", "JavaScript", "Bootstrap", "SQL Server", "MVC", ".NET"],
    },
    {
      type:         "education",
      role:         "Bachelor's in Information Science & Engineering",
      organization: "S J C Institute of Technology",
      location:     "India",
      period:       "2019 — 2023",
      duration:     "Graduated 2023",
      description:  `Completed a Bachelor's degree in Information Science and Engineering,
building a strong foundation in software development, data structures, algorithms,
databases, and systems programming.`,
      tags: ["Information Science", "Engineering", "DSA", "Databases", "Software Development"],
    },
  ],

  // ── Tech Stack / Spell Book ───────────────────────────────
  skills: [
    { name: "C#",          incantation: "Accio Sharp!",        icon: "bx-code-curly",   link: "#" },
    { name: "ASP.NET",     incantation: "Wingardium Leviosa!", icon: "bx-server",        link: "#" },
    { name: "Python",      incantation: "Lumos!",              icon: "bxl-python",       link: "#" },
    { name: "JavaScript",  incantation: "Expelliarmus!",       icon: "bxl-javascript",   link: "#" },
    { name: "Java",        incantation: "Diffindo!",           icon: "bxl-java",         link: "#" },
    { name: "SQL Server",  incantation: "Alohomora!",          icon: "bx-data",          link: "#" },
    { name: "MySQL",       incantation: "Aguamenti!",          icon: "bxs-data",         link: "#" },
    { name: "HTML5",       incantation: "Riddikulus!",         icon: "bxl-html5",        link: "#" },
    { name: "CSS3",        incantation: "Engorgio!",           icon: "bxl-css3",         link: "#" },
    { name: "Bootstrap",   incantation: "Reparo!",             icon: "bxl-bootstrap",    link: "#" },
    { name: "React",       incantation: "Transfiguration!",    icon: "bxl-react",        link: "#" },
    { name: "Git",         incantation: "Revelio!",            icon: "bxl-git",          link: "#" },
  ],

  // ── Projects (Room of Requirement) ────────────────────────
  projects: [
    {
      title:       "Smart Education Platform",
      description: "Interactive platform for real-time student-teacher interaction with a personalised Q&A system, course recommendation engine (Python & MySQL), and admin dashboard for institutions.",
      gradient:    "linear-gradient(135deg, #0d1a3a 0%, #1a3d6e 100%)",
      emoji:       "🎓",
      tags:        ["Python", "MySQL", "Backend", "Automation"],
      link:        "#",
      status:      "Completed",
    },
    {
      title:       "Visitor Management System",
      description: "Full visitor check-in / check-out system with host notifications, dashboard display, email alerts, Excel report generation, data encryption, and visitor image capture.",
      gradient:    "linear-gradient(135deg, #1a0a2e 0%, #3d1a5e 100%)",
      emoji:       "🏛️",
      tags:        ["ASP.NET", "C#", "SQL Server", "Excel Reports"],
      link:        "#",
      status:      "Completed",
    },
    {
      title:       "Insurance Management System",
      description: "Enterprise insurance management application handling policy management, claims processing, and customer records — built with ASP.NET MVC and SQL Server.",
      gradient:    "linear-gradient(135deg, #1a1a0a 0%, #4a3d10 100%)",
      emoji:       "📋",
      tags:        ["ASP.NET", "C#", "SQL Server", "MVC"],
      link:        "#",
      status:      "Awaiting Deployment",
    },
    {
      title:       "Pharmacy Management System",
      description: "Python-based system managing customer purchases, products and orders with a reward points & discount engine. Handles CSV/file storage and auto-updates customer, product, and order records.",
      gradient:    "linear-gradient(135deg, #0a1a0a 0%, #1a4a1a 100%)",
      emoji:       "💊",
      tags:        ["Python", "CSV", "File Handling", "Automation"],
      link:        "#",
      status:      "Completed",
    },
  ],

  // ── Hackathons ────────────────────────────────────────────
  // result: "winner" | "runner-up" | "finalist" | "participant"
  hackathons: [
    {
      result:      "winner",
      badge:       "🏆",
      title:       "AI Film Making Hackathon",
      organiser:   "Give(a)Go",
      description: "Won a competitive AI-focused hackathon leveraging AI tools to create and produce a short film. Demonstrated creative problem-solving, rapid prototyping, and applied AI skills under time pressure.",
      year:        "2024",
    },
    // ── Add more hackathons below ──────────────────────────
    // {
    //   result:      "participant",   // winner / runner-up / finalist / participant
    //   badge:       "🎯",
    //   title:       "Hackathon Name",
    //   organiser:   "Organiser / University / Platform",
    //   description: "Brief description of what you built or achieved.",
    //   year:        "Year",
    // },
  ],

  // ── Certifications & Other Achievements ───────────────────
  achievements: [
    {
      emoji:        "📜",
      title:        "NPTEL Elite Certificate",
      organisation: "NPTEL / IIT",
      description:  "Awarded Elite Certificate in Programming, Data Structures and Algorithms using Python — a nationally recognised credential from India's IIT network.",
      year:         "2023",
    },
    {
      emoji:        "💻",
      title:        "Active Competitive Programmer",
      organisation: "LeetCode & GeeksforGeeks",
      description:  "Consistently solving algorithmic challenges on LeetCode and GeeksforGeeks, sharpening problem-solving skills across data structures, algorithms, and system design.",
      year:         "Ongoing",
    },
    {
      emoji:        "🚀",
      title:        "Full-Stack & Backend Developer",
      organisation: "Personal & Professional Projects",
      description:  "Built multiple production-grade applications spanning ASP.NET, Python, SQL Server, and MySQL — from enterprise tools to automation systems.",
      year:         "2021 — Present",
    },
  ],

  // ── Footer ────────────────────────────────────────────────
  footer:      "Designed by Tejas Shiva Kumar",
  footerMagic: "✨ Mischief Managed ✨",
};
