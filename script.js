
const FORMSPREE_URL = "https://formspree.io/f/mdeapykz";

/* ============================================================
   Rangga Pratama — portfolio, plain JavaScript (no build step)
   Semua konten yang berulang ada di DATA di bawah ini.
   ============================================================ */

const IMG = "";

const DATA = {
  projects: [
    {
      title: "Redesign Apk Maxim",
      year: "2025",
      role: "UI/UX Designer",
      summary: "This project focuses on redesigning the Maxim mobile app using Figma, aimed at elevating the visual layout and overall user experience. By analyzing existing user pain points and navigation challenges, the design was refreshed to offer a cleaner aesthetic, a simplified booking process, and a more accessible design system with interactive prototypes.",
      stack: ["Figma"],
      metrics: [
      ],
      image: IMG + "maxim.png",
      links: [
        { label: "Prototype", url: "https://www.figma.com/design/trlQ9AtBo5Sbrei85fmRxA/Redesign-Maxim-Mobile-App?node-id=740-1980&t=kRGwsy71QbJY8GXs-1" },
      ]
    },
    {
      title: "Weather Mel",
      year: "2025",
      role: "Front-end, web Developer",
      summary: "Developed a responsive weather forecasting web app using HTML, CSS, and Vanilla JavaScript. Integrated a third-party weather API to dynamically process and display real-time weather metrics—such as temperature, humidity, and forecasts. Focused on efficient API data handling, smooth DOM manipulation, and an intuitive user interface.",
      stack: ["Figma", "Vs Code", "HTML", "CSS", "JavaScript"],
      metrics: [
      ],
      image: IMG + "cuaca.png",
      links: [
        { label: "Prototype", url: "https://luthfiahumam-bot.github.io/Weather-Mel/" },
      ],
      logic: `{
  "color": {
    "ink":   { "value": "#0F1115" },
    "bone":  { "value": "#F2F0EB" },
    "accent":{ "value": "#2A52BE" }
  },
  "type": {
    "display": { "family": "Inter Tight", "weight": 700 },
    "label":   { "family": "JetBrains Mono", "weight": 500 }
  },
  "spacing": { "unit": 8, "scale": [1, 2, 3, 5, 8, 13] }
}`,
      title: "What if you were Sean’s mom",
      year: "2026",
      role: "Front-end web Developer",
      summary: "Developed an interactive fan-based website that simulates the perspective of being Sean’s mother, allowing fans to explore a fictional representation of her phone contents. Implemented a personalized experience where users can enter their own names, which dynamically replace the Facebook account name throughout the website. Built using HTML, CSS, and Vanilla JavaScript in Visual Studio Code, without using any external datasets or storing personal information, ensuring that user-entered names remain private and are not accessible to the developer.",
      stack: ["Vs Code, HTML, JS"],
      metrics: [
      ],
      image: IMG + "s.jpeg",
      links: [
        {label: "Prototype", url: "https://keonho-cotl.github.io/anakku/" },
        { label: "Post", url: "https://x.com/ke0ngho/status/2118752752180592721?a=QeX30MuSDo93-h-54tA&s=19" },
      ]
    },
    {
      title: "GOCeck",
      category: "Data · Development",
      year: "2025",
      role: "Designer & UI/UX Developer",
      summary: "GOCheck is a group order management platform designed to make every GO process easier, faster, and more organized. From managing orders to tracking photocards and supporting fandom needs, everything comes together in one room making group orders simpler, safer, and more practical for everyone",
      stack: ["FIGMA"],
      metrics: [
      ],
      image: IMG + "gocheck.png",
      links: [
        { label: "Prototype", url: "https://www.figma.com/design/zG8jRHmUZyP28FcbPpGJ4H/GOCheck?node-id=0-1&t=THa7gil5oqYrpe9I-1" },
      ],
      logic: `def shape(frame, spec):
    """Turn a raw table into the series a chart expects."""
    series = (frame
        .assign(period=lambda d: d.date.dt.to_period(spec["bucket"]))
        .groupby("period", as_index=False)
        .agg(value=(spec["measure"], "sum")))

    if spec.get("cumulative"):
        series["value"] = series.value.cumsum()

    return series.sort_values("period")`,
    },
    {
      title: "App MoneeGo",
      category: "UI/UX Design, Prototyping, Development",
      year: "2026",
      role: "UI/UX designer & front-end developer",
      summary: "A native Android application built with Kotlin in Android Studio designed to help users track and manage their personal savings. The app features an intuitive goal-setting system, effortless transaction logging, and dynamic progress visualization wrapped in a clean, responsive user interface.",
      stack: ["Figma", "Android Studio", "kotlin"],
      metrics: [
      ],
      image: IMG + "MONEEGO.png",
      links: [
        { label: "Live site", url: "https://www.figma.com/design/84mHnOKoMkvjzR442Cp2PN/Untitled?node-id=694-1313&t=RSuFsvgVY2sNs3NP-1" },
        { label: "Prototype", url: "https://drive.google.com/file/d/1D84UciuPGDv8jDn18ARa67fDtMwbe2X6/view?usp=drive_link" },
      ],
      
      logic: `const step = useMotionValue(progress);
    
      
const width = useTransform(step, [0, 1], ["0%", "100%"]);

// one continuous surface: each step fades in,
// the previous step slides out to the left
<AnimatePresence mode="popLayout">
  <motion.section
    key={current}
    initial={{ opacity: 0, x: 24 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -24 }}
    transition={{ duration: 0.28, ease: [0.2, 0, 0, 1] }}
  />
</AnimatePresence>`,
    },
  ],

  experience: [
    {
      period: "2025",
      role: "Graphic Designer (HPD)",
      company: "UNJ · Universitas Negeri Jakarta",
      location: "Jakarta",
      summary: "Served as a member of the design team responsible for creating visual materials for event purposes. Worked collaboratively to produce promotional designs, social media assets, and event branding materials that effectively communicated the academy's vision and engaged the target audience.",
      highlights: [
        
      ],
      photo: IMG + "d.png",
    },
    {
      period: "2026",
      role: "Moderator, Webinar Career Consultation",
      company: "Paragon",
      location: "Jakarta",
      summary: "Served as the moderator responsible for guiding and facilitating the interactive career consultation session. Worked collaboratively with the event team and key speakers to manage event flow, time allocations, and Q&A sessions, ensuring clear communication and an engaging experience for all participants.",
      highlights: [
    
      ],
      photo: IMG + "p.png",
      certificate: {
        verifyUrl: "https://www.coursera.org/professional-certificates/google-ux-design",
      },
    },
    {
      period: "2026",
      role: "Execution Team Volunteer",
      company: "COERINA | AlloBank Festival",
      location: "Jakarta",
      summary: "Served as a member of the design team responsible for creating visual materials for event purposes. Worked collaboratively to produce promotional designs, social media assets, and event branding materials that effectively communicated the academy's vision and engaged the target audience.",
      highlights: [
       
      ],
      photo: IMG + "c.png",
      certificate: {
        verifyUrl: "https://drive.google.com/file/d/1cZugWDQvs__Oy33qbrJaRgP-jzeb2tDJ/view?usp=sharing",
      },
    },
  ],

  skills: [
    { name: "Figma" },
    { name: "Canva"},
    { name: "SQL Lite"},
    { name: "VS Code" },
    { name: "Microsoft Word" },
    { name: "Microsoft PowerPoint" },
    { name: "Microsoft Excel" },
  ],

};


/* ── Helpers ── */
const $ = (id) => document.getElementById(id);
const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* ── Projects ── */
function projectMedia(project, view) {
  if (view === "logic") {
    return `<pre><code>${esc(project.logic)}</code></pre><span class="media__badge">Source</span>`;
  }
  const image = `<img src="${project.image}" alt="${esc(project.title)} — visual design" />`;
  const main = (project.links || [])[0];
  return `${
    main
      ? `<a class="media__link" href="${main.url}" target="_blank" rel="noreferrer" aria-label="${esc(project.title)} — open project">${image}</a>`
      : image
  }<span class="media__badge">tap to</span>`;
}

function projectMarkup(project, index) {
  const links = project.links || [];
  const main = links[0];
  return `
    <article class="project reveal" id="project-${index}">
      <header class="project__head">
        <div class="project__title">
          <span class="project__index">${String(index + 1).padStart(2, "0")}</span>
          <h3>${main ? `<a href="${main.url}" target="_blank" rel="noreferrer">${esc(project.title)}</a>` : esc(project.title)}</h3>
        </div>
        <div class="project__meta"><span>${esc(project.category)}</span><span>${esc(project.year)}</span></div>
      </header>
      <div class="project__body">
        <div class="project__media-col">
          <div class="project__media" data-media="${index}">${projectMedia(project, "visual")}</div>
          <div class="project__controls">
            <div class="toggle" data-toggle="${index}">
            </div>
            <div class="links">
              ${links.map((l) => `<a class="link" href="${l.url}" target="_blank" rel="noreferrer">${esc(l.label)} <span>&#8599;</span></a>`).join("")}
            </div>
          </div>
        </div>
        <div class="project__info">
          <p class="project__summary">${esc(project.summary)}</p>
          <dl class="metrics">
            ${project.metrics.map((m) => `
              <div class="metric">
                <dt class="meta__label">${esc(m.label)}</dt>
                <dd class="metric__value">${esc(m.value)}</dd>
              </div>`).join("")}
          </dl>
          <div class="info-block"><span class="mono">Role</span><p class="info-block__value">${esc(project.role)}</p></div>
          <div class="info-block">
            <span class="mono">Built with</span>
            <ul class="chips">${project.stack.map((t) => `<li class="chip">${esc(t)}</li>`).join("")}</ul>
          </div>
        </div>
      </div>
    </article>`;
}

function renderProjects() {
  $("projects").innerHTML = DATA.projects.map(projectMarkup).join("");
  $("projects").addEventListener("click", (event) => {
    const button = event.target.closest(".toggle__btn");
    if (!button) return;
    const index = Number(button.parentElement.dataset.toggle);
    document.querySelector(`[data-media="${index}"]`).innerHTML = projectMedia(DATA.projects[index], button.dataset.view);
    button.parentElement.querySelectorAll(".toggle__btn").forEach((b) => b.classList.toggle("is-on", b === button));
  });
}

/* ── Design work ── */
function renderDesign() {
  $("design-grid").innerHTML = DATA.designWork.map((piece, index) => `
    <button class="piece reveal" type="button" data-piece="${index}">
      <span class="piece__img"><img src="${piece.image}" alt="${esc(piece.title)}" /></span>
      <span class="piece__meta">
        <span>
          <span class="piece__title">${esc(piece.title)}</span>
          <span class="piece__sub">${esc(piece.medium)} · ${esc(piece.year)}</span>
        </span>
        <span class="piece__view">View <span>&#8599;</span></span>
      </span>
    </button>`).join("");

  $("design-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-piece]");
    if (!button) return;
    const piece = DATA.designWork[Number(button.dataset.piece)];
    openModal(`
      <div class="modal__media"><img src="${piece.image}" alt="${esc(piece.title)}" /></div>
      <div class="modal__content">
        <h3 class="modal__title">${esc(piece.title)}</h3>
        <p class="modal__sub">${esc(piece.medium)} · ${esc(piece.year)}</p>
      </div>`);
  });
}

/* ── Experience ── */
function renderExperience() {
  $("timeline").innerHTML = DATA.experience.map((entry, index) => `
    <button class="entry reveal" type="button" data-entry="${index}">
      <span class="entry__grid">
        <span class="entry__side">
          <span class="entry__period">${esc(entry.period)}</span>
          <span class="entry__loc">${esc(entry.location)}</span>
          <span class="entry__cta">Photo <span>&#8599;</span></span>
        </span>
        <span class="entry__main">
          <span class="entry__role">${esc(entry.role)}</span>
          <span class="entry__company">${esc(entry.company)}</span>
          <span class="entry__summary">${esc(entry.summary)}</span>
          <span class="entry__highlights">
            ${entry.highlights.map((h) => `<span class="entry__line"><span class="bullet"></span>${esc(h)}</span>`).join("")}
          </span>
        </span>
      </span>
    </button>`).join("");

  $("timeline").addEventListener("click", (event) => {
    const button = event.target.closest("[data-entry]");
    if (!button) return;
    const entry = DATA.experience[Number(button.dataset.entry)];
    const c = entry.certificate;
    openModal(`
      <div class="modal__media"><img src="${entry.photo}" alt="${esc(entry.company)}" /></div>
        ${c ? `<div class="cert-card">
            <a class="cert-card__verify" href="${c.verifyUrl}" target="_blank" rel="link">link certificate <span>&#8599;</span></a>
          </div>` : ""}
      </div>`);
  });
}

/* ── Skills ── */
function renderSkills() {
  $("skills-list").innerHTML = DATA.skills.map((s, i) =>
    `<button class="skill lvl-${s.level}${i === 0 ? " is-on" : ""}" type="button" data-skill="${i}">${esc(s.name)}</button>`
  ).join("");

  const select = (button) => {
    const skill = DATA.skills[Number(button.dataset.skill)];
    $("skill-name").textContent = skill.name;
    $("skill-note").textContent = skill.note;
    $("skills-list").querySelectorAll(".skill").forEach((el) => el.classList.toggle("is-on", el === button));
  };
  ["mouseover", "focusin", "click"].forEach((type) =>
    $("skills-list").addEventListener(type, (event) => {
      const button = event.target.closest("[data-skill]");
      if (button) select(button);
    })
  );
}

/* ── Modal ── */
const modal = $("modal");
function openModal(markup) {
  $("modal-body").innerHTML = markup;
  modal.hidden = false;
  document.body.classList.add("modal-open");
}
function closeModal() {
  modal.hidden = true;
  $("modal-body").innerHTML = "";
  document.body.classList.remove("modal-open");
}
modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

/* ── Contact form (kirim via Formspree ke emailmu) ── */
function setupContactForm() {
  const form = $("contact-form");
  const error = $("form-error");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const topic = String(data.get("topic") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !topic || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || message.length < 10) {
      error.textContent = "Please add your name, pick a topic, add a valid email and a short message.";
      error.hidden = false;
      return;
    }
    error.hidden = true;

    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = "Sending...";

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `${topic} — from ${name}${company ? " (" + company + ")" : ""}`,
          name,
          company,
          email,
          topic,
          message,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        const reason = result.errors && result.errors[0] && result.errors[0].message;
        throw new Error(reason || result.error || "Request failed (" + res.status + ")");
      }

      form.hidden = true;
      $("sent-panel").hidden = false;
    } catch (err) {
      console.error("Formspree error:", err);
      error.textContent = "Message could not be sent: " + (err && err.message ? err.message : "unknown error");
      error.hidden = false;
    } finally {
      button.disabled = false;
      button.innerHTML = "Send message <span>&rarr;</span>";
    }
  });

  $("send-another").addEventListener("click", () => {
    form.reset();
    form.hidden = false;
    $("sent-panel").hidden = true;
  });
}

/* ── Nav: progress bar + mobile menu ── */
function setupNav() {
  const bar = $("progress");
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = max > 0 ? `${Math.min(1, window.scrollY / max) * 100}%` : "0%";
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);

  const burger = $("burger");
  const mobile = $("mobile-links");
  burger.addEventListener("click", () => {
    const open = mobile.hidden;
    mobile.hidden = !open;
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  mobile.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    mobile.hidden = true;
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  });
}

/* ── Hero: pointer readout ── */
function setupHeroPointer() {
  const fig = $("hero-fig");
  fig.addEventListener("mousemove", (event) => {
    const box = fig.getBoundingClientRect();
    const x = Math.round(((event.clientX - box.left) / box.width) * 100);
    const y = Math.round(((event.clientY - box.top) / box.height) * 100);
    $("cross-x").style.left = `${x}%`;
    $("cross-y").style.top = `${y}%`;
    $("readout-xy").textContent = `X ${String(x).padStart(3, "0")} · Y ${String(y).padStart(3, "0")}`;
  });
}

/* ── Reveal on scroll ── */
function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("in"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((i) => observer.observe(i));
}

function setupMisc() {
  $("year").textContent = new Date().getFullYear();
}
/* ── Efek bunga jatuh ── */
function setupFallingFlowers() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // ▼ Atur di sini ▼
  const COLORS = ["#c3e0f5", "#6fc0fa", "#b85375df", "#ff6f9d"]; // warna bunga
  const AMOUNT = window.innerWidth < 670 ? 70 : 90;             // jumlah bunga
  const SPEED = 1;                                              // 0.5 = pelan, 2 = cepat

  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  Object.assign(canvas.style, {
    position: "fixed", inset: "0", width: "100%", height: "100%",
    pointerEvents: "none", zIndex: "-1",
  });
  document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");

  let w = 0, h = 0;
  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener("resize", resize);

  const rand = (a, b) => a + Math.random() * (b - a);
  const make = (startAnywhere) => ({
    x: rand(0, w),
    y: startAnywhere ? rand(-20, h) : rand(-40, -10),
    size: rand(7, 15),
    speed: rand(0.5, 1.3),
    sway: rand(0.4, 1.2),
    phase: rand(0, Math.PI * 2),
    rot: rand(0, Math.PI * 2),
    spin: rand(-0.02, 0.02),
    alpha: rand(0.45, 0.8),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  });
  const flowers = Array.from({ length: AMOUNT }, () => make(true));
  
  function draw(f) {
    ctx.save();
    ctx.translate(f.x, f.y);
    ctx.rotate(f.rot);
    ctx.globalAlpha = f.alpha;
    ctx.fillStyle = f.color;
    for (let i = 0; i < 5; i++) {
      ctx.rotate((Math.PI * 2) / 5);
      ctx.beginPath();
      ctx.ellipse(0, -f.size * 0.55, f.size * 0.38, f.size * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#ffffff";
    ctx.globalAlpha = f.alpha * 0.9;
    ctx.beginPath();
    ctx.arc(0, 0, f.size * 0.16, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  let last = performance.now();
  function frame(now) {
    const dt = Math.min((now - last) / 16.67, 3); // 1 = 60fps
    last = now;
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < flowers.length; i++) {
      const f = flowers[i];
      f.phase += 0.02 * dt;
      f.y += f.speed * SPEED * dt;
      f.x += Math.sin(f.phase) * f.sway * dt;
      f.rot += f.spin * dt;
      if (f.y > h + 30 || f.x < -40 || f.x > w + 40) flowers[i] = make(false);
      draw(flowers[i]);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ── Start ── */
renderProjects();
renderExperience();
renderSkills();
setupNav();
setupHeroPointer();
setupContactForm();
setupMisc();
setupReveal();
setupFallingFlowers();
