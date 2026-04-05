/* ============================================================
   HP PORTFOLIO — SCRIPT
   ============================================================ */

// ── Magic Canvas Background ───────────────────────────────────
(function initCanvas() {
  const canvas = document.getElementById('magic-canvas');
  const ctx    = canvas.getContext('2d');

  let W, H, stars = [], particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  // Stars
  function makeStar() {
    return {
      x:      Math.random() * W,
      y:      Math.random() * H,
      r:      Math.random() * 1.3 + 0.2,
      phase:  Math.random() * Math.PI * 2,
      speed:  Math.random() * 0.01 + 0.004,
    };
  }

  function initStars() {
    stars = Array.from({ length: 180 }, makeStar);
  }

  // Floating particles (gold + purple sparks)
  function makePart() {
    const colors = ['#c8a84b', '#f0c040', '#9b6ec8', '#c8a84b', '#c8a84b'];
    return {
      x:       Math.random() * W,
      y:       H + 20,
      vx:      (Math.random() - 0.5) * 0.6,
      vy:      -(Math.random() * 0.9 + 0.3),
      alpha:   Math.random() * 0.6 + 0.2,
      r:       Math.random() * 2 + 0.5,
      color:   colors[Math.floor(Math.random() * colors.length)],
      life:    0,
      maxLife: Math.random() * 250 + 120,
    };
  }

  function initParticles() {
    particles = Array.from({ length: 50 }, () => {
      const p = makePart();
      p.y = Math.random() * H; // distribute initially
      return p;
    });
  }

  function drawStars(ts) {
    stars.forEach(s => {
      const a = (Math.sin(ts * s.speed + s.phase) + 1) / 2 * 0.7 + 0.1;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle   = '#f4e4c1';
      ctx.shadowBlur  = 4;
      ctx.shadowColor = '#f4e4c1';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }

  function drawParticles() {
    particles.forEach((p, i) => {
      p.x    += p.vx;
      p.y    += p.vy;
      p.life += 1;

      const progress = p.life / p.maxLife;
      const alpha    = p.alpha * (1 - progress);

      if (p.life >= p.maxLife || p.y < -10) {
        particles[i] = makePart();
        return;
      }

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle   = p.color;
      ctx.shadowBlur  = 8;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }

  function draw(ts) {
    ctx.clearRect(0, 0, W, H);

    // Deep-space gradient background
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0,   '#08060f');
    grad.addColorStop(0.5, '#0d0a1e');
    grad.addColorStop(1,   '#08060f');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    drawStars(ts * 0.001);
    drawParticles();

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); initStars(); });
  resize();
  initStars();
  initParticles();
  requestAnimationFrame(draw);
})();

// ── Navigation ────────────────────────────────────────────────
const menuIcon = document.getElementById('menu-icon');
const navbar   = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  const top = window.scrollY;

  // Active nav link
  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id     = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.navbar a[href="#${id}"]`);
      if (link) link.classList.add('active');
    }
  });

  // Sticky header
  document.querySelector('.header').classList.toggle('sticky', top > 80);

  // Close mobile menu on scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});

// ── Scroll-triggered animations (Intersection Observer) ───────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    // Class-based animation (CSS handles the transition)
    el.classList.add('visible');
    // Inline-style animation (hackathon/achievement cards)
    if (el.style.opacity === '0') {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.animate-fade, .animate-slide-left, .animate-slide-right, ' +
  '.timeline-item, .spell-card, .project-card'
).forEach(el => observer.observe(el));

// ── Typewriter Effect ─────────────────────────────────────────
function startTypewriter(el, taglines) {
  if (!el || !taglines?.length) return;

  let idx = 0, charIdx = 0, deleting = false;
  const PAUSE = 2200, TYPE_SPEED = 85, DEL_SPEED = 45;

  function tick() {
    const current = taglines[idx];

    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        return setTimeout(tick, PAUSE);
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        idx = (idx + 1) % taglines.length;
      }
      setTimeout(tick, DEL_SPEED);
    }
  }

  tick();
}

// ── Populate from config.js ───────────────────────────────────
function populateAll() {
  const c = config;

  // ─ Site title ─
  document.title = c.siteTitle + ' ⚡';
  const logoName = document.getElementById('logo-name');
  if (logoName) logoName.textContent = c.siteTitle;

  // ─ Hero ─
  document.getElementById('spell-text').textContent   = c.hero.spell;
  document.getElementById('hero-greeting').textContent = c.hero.greeting;
  document.getElementById('hero-name').textContent     = c.hero.name;
  document.getElementById('hero-intro').textContent    = c.hero.intro;

  const resumeBtn = document.getElementById('resume-btn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      fetch(c.hero.resume)
        .then(res => {
          if (!res.ok) throw new Error('File not found');
          return res.blob();
        })
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'TEJAS_SHIVA_KUMAR_RESUME.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        })
        .catch(() => {
          window.open(c.hero.resume, '_blank');
        });
    });
  }

  startTypewriter(document.getElementById('hero-tagline'), c.hero.taglines);

  // ─ Social links ─
  const socialIcons = {
    github:   { type: 'bx', icon: 'bxl-github'    },
    linkedin: { type: 'bx', icon: 'bxl-linkedin'  },
    twitter:  { type: 'bx', icon: 'bxl-twitter'   },
    leetcode: {
      type: 'svg',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
               <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
             </svg>`,
    },
    geeksforgeeks: {
      type: 'svg',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
               <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.69 3.69 0 0 1-1.104.695 4.51 4.51 0 0 1-1.429.25c-1.17 0-2.17-.5-3.046-1.453l-.022-.024-.684.507a5.3 5.3 0 0 1-.707.453 3.7 3.7 0 0 1-1.732.398 3.692 3.692 0 0 1-2.223-.682 4.84 4.84 0 0 1-.707-.65l-.697.507a5.3 5.3 0 0 1-.718.453 3.7 3.7 0 0 1-1.732.398A3.692 3.692 0 0 1 4.08 15.24a3.42 3.42 0 0 1-.565-.748c-.16-.285-.27-.595-.33-.923a4.6 4.6 0 0 1-.067-.78c0-.54.098-1.05.293-1.527a3.7 3.7 0 0 1 .8-1.2 3.562 3.562 0 0 1 1.19-.788 3.72 3.72 0 0 1 1.473-.284c.507 0 .982.089 1.424.266.442.177.834.44 1.178.787l.684-.507a5.3 5.3 0 0 1 .707-.453 3.7 3.7 0 0 1 1.732-.398c.634 0 1.21.136 1.726.408.272.143.522.32.75.53l.69-.507a5.3 5.3 0 0 1 .717-.453 3.7 3.7 0 0 1 1.733-.398c.533 0 1.033.098 1.495.293.463.196.87.476 1.22.84.35.364.622.796.816 1.296.194.5.29 1.044.29 1.633 0 .27-.022.534-.067.794zM12 13.012a.903.903 0 0 0-.9.9.903.903 0 0 0 .9.9h4.342a.903.903 0 0 0 .9-.9.903.903 0 0 0-.9-.9H12z"/>
             </svg>`,
    },
  };

  const socialContainer = document.getElementById('social-links');
  Object.entries(c.social).forEach(([platform, url]) => {
    if (!url) return;
    const def = socialIcons[platform];
    if (!def) return;
    const a = document.createElement('a');
    a.href   = url;
    a.target = '_blank';
    a.rel    = 'noopener noreferrer';
    a.setAttribute('aria-label', platform);
    a.innerHTML = def.type === 'bx'
      ? `<i class="bx ${def.icon}"></i>`
      : def.icon;
    socialContainer.appendChild(a);
  });

  // ─ About ─
  document.getElementById('about-text').textContent = c.about.text;
  document.getElementById('about-img-label').textContent = c.hero.name;

  const statsContainer = document.getElementById('about-stats');
  c.about.stats.forEach(s => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `
      <p class="stat-label">${s.label}</p>
      <p class="stat-value">${s.value}</p>
    `;
    statsContainer.appendChild(card);
  });

  // ─ Chronicles / Timeline ─
  const timeline = document.getElementById('timeline-container');
  c.chronicles.forEach((item, i) => {
    const typeLabel = item.type === 'education'
      ? '🎓 Hogwarts Enrolment Record'
      : '⚡ Ministry Employment Record';

    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.style.transitionDelay = `${i * 0.15}s`;
    el.innerHTML = `
      <div class="timeline-dot">
        ${item.type === 'education' ? '🎓' : '⚡'}
      </div>
      <div class="timeline-card">
        <p class="timeline-type-badge ${item.type}">${typeLabel}</p>
        <h3 class="timeline-role">${item.role}</h3>
        <p class="timeline-org">${item.organization}</p>
        <div class="timeline-meta">
          <span>${item.period}</span>
          <span>${item.location}</span>
          <span class="duration-badge">${item.duration}</span>
        </div>
        <p class="timeline-desc">${item.description}</p>
        <div class="timeline-tags">
          ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
    timeline.appendChild(el);
    observer.observe(el);
  });

  // ─ Skills / Spell Book ─
  const skillsContainer = document.getElementById('skills-container');
  c.skills.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'spell-card';
    card.style.transitionDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="spell-icon">
        <i class="bx ${skill.icon}"></i>
      </div>
      <h3 class="spell-name">${skill.name}</h3>
      <p class="spell-incantation">${skill.incantation}</p>
    `;
    skillsContainer.appendChild(card);
    observer.observe(card);
  });

  // ─ Projects ─
  const projectsContainer = document.getElementById('projects-container');
  c.projects.forEach((project, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="project-visual" style="background: ${project.gradient}">
        <span>${project.emoji}</span>
      </div>
      <div class="project-body">
        <p class="project-status">${project.status}</p>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
          🔓 Alohomora <i class="bx bx-link-external"></i>
        </a>
      </div>
    `;
    projectsContainer.appendChild(card);
    observer.observe(card);
  });

  // ─ Hackathons ─
  const hackathonsContainer = document.getElementById('hackathons-container');
  if (hackathonsContainer && c.hackathons) {
    c.hackathons.forEach((hk, i) => {
      const isWinner = hk.result === 'winner';
      const card = document.createElement('div');
      card.className = `hackathon-card hackathon-${hk.result}`;
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`;

      const resultLabels = {
        winner:     '🏆 WINNER',
        'runner-up':'🥈 RUNNER-UP',
        finalist:   '🎖️ FINALIST',
        participant:'🎯 PARTICIPANT',
      };

      card.innerHTML = `
        <div class="hk-top">
          <span class="hk-badge hk-badge--${hk.result}">${resultLabels[hk.result] || hk.result.toUpperCase()}</span>
          <span class="hk-year">${hk.year}</span>
        </div>
        <div class="hk-emoji">${hk.badge}</div>
        <h3 class="hk-title">${hk.title}</h3>
        <p class="hk-organiser">${hk.organiser}</p>
        <p class="hk-desc">${hk.description}</p>
      `;
      hackathonsContainer.appendChild(card);
      observer.observe(card);
    });
  }

  // ─ Achievements ─
  const achContainer = document.getElementById('achievements-container');
  if (achContainer && c.achievements) {
    c.achievements.forEach((ach, i) => {
      const card = document.createElement('div');
      card.className = 'achievement-card';
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
      card.innerHTML = `
        <div class="ach-emoji">${ach.emoji}</div>
        <div class="ach-body">
          <div class="ach-meta">
            <span class="ach-org">${ach.organisation}</span>
            <span class="ach-year">${ach.year}</span>
          </div>
          <h3 class="ach-title">${ach.title}</h3>
          <p class="ach-desc">${ach.description}</p>
        </div>
      `;
      achContainer.appendChild(card);
      observer.observe(card);
    });
  }

  // ─ Footer ─
  const footerName = document.getElementById('footer-name');
  if (footerName) footerName.textContent = c.siteTitle;

  const footerCredit = document.getElementById('footer-credit');
  if (footerCredit) footerCredit.textContent = `© ${new Date().getFullYear()} ${c.footer}`;

  const footerMagic = document.getElementById('footer-magic');
  if (footerMagic) footerMagic.textContent = c.footerMagic;
}

document.addEventListener('DOMContentLoaded', populateAll);
