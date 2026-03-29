// ============================================================
//  HP PORTFOLIO CONFIG  ⚡
//  Edit this file to update your portfolio content.
//  All Harry Potter flavour text can be customised here too.
// ============================================================

const config = {

  // ── Site ──────────────────────────────────────────────────
  siteTitle: "TSK",

  // ── Hero / Home ───────────────────────────────────────────
  hero: {
    spell:    "✨ Lumos! ✨",
    greeting: "Hello! I'm",
    name:     "Tejas S Kumar",
    taglines: [                          // cycles in typewriter
      "ASP.NET Developer",
      "MSc Scholar @ DCU",
      "Problem Solver",
      "Code Wizard",
    ],
    intro: `A passionate developer with 10 months of professional experience in ASP.NET
and the .NET ecosystem. Currently pursuing a Master's in Computing at Dublin City
University (DCU), Ireland. I craft robust, scalable web applications and am always
eager to learn powerful new spells — I mean, technologies!`,
    resume: "./Files/Tejas_Shivakumar_Resume.pdf",
  },

  // ── Social Links (set "" to hide) ─────────────────────────
  social: {
    github:   "https://github.com/Tejasshivakumar",
    linkedin: "https://www.linkedin.com/in/tejas-s-kumar-51940a24b/",
    leetcode: "https://leetcode.com/u/tejasshivakumar2001/",
  },

  // ── About Section ─────────────────────────────────────────
  about: {
    text: `Greetings, fellow wizard! I am Tejas S Kumar — a developer who has honed his craft
in the art of building digital spells, otherwise known as software. With a strong
foundation in ASP.NET and the .NET ecosystem, I spent 10 months as a professional
developer conjuring enterprise-grade web applications. Now I wield my wand at
Dublin City University, pursuing a Master's in Computing to deepen my magical
knowledge. I believe the best code is written with curiosity, precision, and a
touch of magic.`,
    stats: [
      { label: "🏰 House",      value: "Gryffindor"         },
      { label: "🪄 Specialty",  value: "ASP.NET & C#"       },
      { label: "📚 Studies",    value: "MSc Computing, DCU" },
      { label: "⚡ Experience", value: "10+ Months"         },
    ],
  },

  // ── Chronicles (Experience + Education) ───────────────────
  chronicles: [
    {
      type:         "education",
      role:         "MSc in Computing",
      organization: "Dublin City University (DCU)",
      location:     "Dublin, Ireland",
      period:       "2024 — Present",
      duration:     "In Progress",
      description:  `Pursuing a Master's degree in Computing at one of Ireland's leading
technology universities. Engaged in advanced coursework spanning software
engineering, cloud computing, AI/ML, and research methodologies.`,
      tags: ["Computing", "Research", "Software Engineering", "DCU", "Ireland"],
    },
    {
      type:         "employment",
      role:         "ASP.NET Developer",
      organization: "Your Company Name",   // ← update me
      location:     "Your Location",       // ← update me
      period:       "2023 — 2024",
      duration:     "10 Months",
      description:  `Developed and maintained enterprise-level web applications using ASP.NET
MVC and the .NET Framework. Collaborated with cross-functional teams to design,
implement and deploy scalable backend solutions. Worked with SQL Server databases,
RESTful APIs, and followed agile development practices throughout the SDLC.`,
      tags: ["ASP.NET", "C#", ".NET", "SQL Server", "MVC", "REST APIs", "Agile"],
    },
  ],

  // ── Tech Stack / Spell Book ───────────────────────────────
  // incantation: a fun HP-flavoured label for each skill
  skills: [
    { name: "C#",         incantation: "Accio Sharp!",        icon: "bx-code-curly",   link: "#" },
    { name: "ASP.NET",    incantation: "Wingardium Leviosa!", icon: "bx-server",        link: "#" },
    { name: "SQL Server", incantation: "Alohomora!",          icon: "bx-data",          link: "#" },
    { name: "JavaScript", incantation: "Expelliarmus!",       icon: "bxl-javascript",   link: "#" },
    { name: "Python",     incantation: "Lumos!",              icon: "bxl-python",       link: "#" },
    { name: "HTML5",      incantation: "Riddikulus!",         icon: "bxl-html5",        link: "#" },
    { name: "CSS3",       incantation: "Engorgio!",           icon: "bxl-css3",         link: "#" },
    { name: "Git",        incantation: "Revelio!",            icon: "bxl-git",          link: "#" },
    { name: "Java",       incantation: "Diffindo!",           icon: "bxl-java",         link: "#" },
  ],

  // ── Projects (Room of Requirement) ────────────────────────
  projects: [
    {
      title:       "Insurance Management System",
      description: "A full-featured enterprise insurance management application built with ASP.NET MVC and SQL Server. Handles policy management, claims, and customer records.",
      gradient:    "linear-gradient(135deg, #1a0a2e 0%, #3d1a5e 100%)",
      emoji:       "🏛️",
      tags:        ["ASP.NET", "C#", "SQL Server", "MVC"],
      link:        "#",
      status:      "Awaiting Deployment",
    },
    {
      title:       "Coming Soon",
      description: "The Room of Requirement is still being furnished. Something exciting is being conjured — stay tuned!",
      gradient:    "linear-gradient(135deg, #0a1a2e 0%, #1a3d5e 100%)",
      emoji:       "🔮",
      tags:        ["TBD"],
      link:        "#",
      status:      "In Progress",
    },
    {
      title:       "Coming Soon",
      description: "The Room of Requirement is still being furnished. Something exciting is being conjured — stay tuned!",
      gradient:    "linear-gradient(135deg, #1a1a0a 0%, #3d3d1a 100%)",
      emoji:       "📜",
      tags:        ["TBD"],
      link:        "#",
      status:      "In Progress",
    },
  ],

  // ── Footer ────────────────────────────────────────────────
  footer:      "Designed by Tejas S Kumar",
  footerMagic: "✨ Mischief Managed ✨",
};
