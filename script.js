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
      category: "UI/UX Design",
      year: "2025",
      role: "UI/UX Designer",
      summary: "This project focuses on redesigning the Maxim mobile app using Figma, aimed at elevating the visual layout and overall user experience. By analyzing existing user pain points and navigation challenges, the design was refreshed to offer a cleaner aesthetic, a simplified booking process, and a more accessible design system with interactive prototypes.",
      stack: ["Figma"],
      metrics: [],
      image: IMG + "maxim.png",
      links: [
        { label: "Prototype", url: "https://www.figma.com/design/trlQ9AtBo5Sbrei85fmRxA/Redesign-Maxim-Mobile-App?node-id=740-1980&t=kRGwsy71QbJY8GXs-1" },
      ],
    },
    {
      title: "Weather Mel",
      category: "Web Development",
      year: "2025",
      role: "Front-end, web Developer",
      summary: "Developed a responsive weather forecasting web app using HTML, CSS, and Vanilla JavaScript. Integrated a third-party weather API to dynamically process and display real-time weather metrics—such as temperature, humidity, and forecasts. Focused on efficient API data handling, smooth DOM manipulation, and an intuitive user interface.",
      stack: ["Figma", "Vs Code", "HTML", "CSS", "JavaScript"],
      metrics: [],
      image: IMG + "cuaca.png",
      links: [
        { label: "Prototype", url: "https://luthfiahumam-bot.github.io/Weather-Mel/" },
      ],
    },
    {
      title: "What if you were Sean’s mom",
      category: "Web Development",
      year: "2026",
      role: "Front-end web Developer",
      summary: "Developed an interactive fan-based website that simulates the perspective of being Sean’s mother, allowing fans to explore a fictional representation of her phone contents. Implemented a personalized experience where users can enter their own names, which dynamically replace the Facebook account name throughout the website. Built using HTML, CSS, and Vanilla JavaScript in Visual Studio Code, without using any external datasets or storing personal information, ensuring that user-entered names remain private and are not accessible to the developer.",
      stack: ["Vs Code", "HTML", "JS"],
      metrics: [],
      image: IMG + "s.jpeg",
      links: [
        { label: "Prototype", url: "https://keonho-cotl.github.io/anakku/" },
        { label: "Post", url: "https://x.com/ke0ngho/status/2118752752180592721?a=QeX30MuSDo93-h-54tA&s=19" },
      ],
    },
    {
      title: "GOCeck",
      category: "Data · Development",
      year: "2025",
      role: "Designer & UI/UX Developer",
      summary: "GOCheck is a group order management platform designed to make every GO process easier, faster, and more organized. From managing orders to tracking photocards and supporting fandom needs, everything comes together in one room making group orders simpler, safer, and more practical for everyone",
      stack: ["FIGMA"],
      metrics: [],
      image: IMG + "gocheck.png",
      links: [
        { label: "Prototype", url: "https://www.figma.com/design/zG8jRHmUZyP28FcbPpGJ4H/GOCheck?node-id=0-1&t=THa7gil5oqYrpe9I-1" },
      ],
    },
    {
      title: "App MoneeGo",
      category: "UI/UX Design, Prototyping, Development",
      year: "2026",
      role: "UI/UX designer & front-end developer",
      summary: "A native Android application built with Kotlin in Android Studio designed to help users track and manage their personal savings. The app features an intuitive goal-setting system, effortless transaction logging, and dynamic progress visualization wrapped in a clean, responsive user interface.",
      stack: ["Figma", "Android Studio", "kotlin"],
      metrics: [],
      image: IMG + "MONEEGO.png",
      links: [
        { label: "Live site", url: "https://www.figma.com/design/84mHnOKoMkvjzR442Cp2PN/Untitled?node-id=694-1313&t=RSuFsvgVY2sNs3NP-1" },
        { label: "Prototype", url: "https://drive.google.com/file/d/1D84UciuPGDv8jDn18ARa67fDtMwbe2X6/view?usp=drive_link" },
      ],
    },
  ],

  experience: [
    {
      period: "2025",
      role: "Graphic Designer (HPD)",
      company: "UNJ · Universitas Negeri Jakarta",
      location: "Jakarta",
      summary: "Served as a member of the design team responsible for creating visual materials for event purposes. Worked collaboratively to produce promotional designs, social media assets, and event branding materials that effectively communicated the academy's vision and engaged the target audience.",
      highlights: [],
      photo: IMG + "d.png",
    },
    {
      period: "2026",
      role: "Moderator, Webinar Career Consultation",
      company: "Paragon",
      location: "Jakarta",
      summary: "Served as the moderator responsible for guiding and facilitating the interactive career consultation session. Worked collaboratively with the event team and key speakers to manage event flow, time allocations, and Q&A sessions, ensuring clear communication and an engaging experience for all participants.",
      highlights: [],
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
      highlights: [],
      photo: IMG + "c.png",
      certificate: {
        verifyUrl: "https://drive.google.com/file/d/1cZugWDQvs__Oy33qbrJaRgP-jzeb2tDJ/view?usp=sharing",
      },
    },
  ],

  skills: [
    { name: "Figma" },
    { name: "Canva" },
    { name: "SQL Lite" },
    { name: "VS Code" },
    { name: "Microsoft Word" },
    { name: "Microsoft PowerPoint" },
    { name: "Microsoft Excel" },
  ],
};


/* ── Helpers ── */
const $ = (id) => document.getElementById(id);
const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* ── Projects (digeser ke samping) ── */
function projectMarkup(p, index) {
  const val = (v) => (v == null ? "" : esc(v));
  const links = p.links || [];
  const metrics = p.metrics || [];
  const stack = p.stack || [];
  const main = links[0];

  const img = `<img class="pcard__img" src="${p.image}" alt="${val(p.title)}" draggable="false" />`;
  const media = main
    ? `<a class="pcard__media" href="${main.url}" target="_blank" rel="noreferrer">${img}</a>`
    : `<div class="pcard__media">${img}</div>`;

  return `
    <article class="pcard" id="project-${index}">
      ${media}
      <div class="pcard__body">
        <div class="pcard__top">
          <span class="pcard__num">${String(index + 1).padStart(2, "0")}</span>
          <span class="pcard__meta">${[val(p.category), val(p.year)].filter(Boolean).join(" · ")}</span>
        </div>
        <h3 class="pcard__title">${val(p.title)}</h3>
        ${p.summary ? `<p class="pcard__summary">${val(p.summary)}</p>` : ""}
        ${p.role ? `<p class="pcard__role"><span class="mono">Role</span> ${val(p.role)}</p>` : ""}
        ${metrics.length ? `<dl class="pcard__metrics">${metrics.map((m) => `
          <div><dt class="meta__label">${val(m.label)}</dt><dd>${val(m.value)}</dd></div>`).join("")}</dl>` : ""}
        ${stack.length ? `<ul class="chips">${stack.map((t) => `<li class="chip">${val(t)}</li>`).join("")}</ul>` : ""}
        ${links.length ? `<div class="links">${links.map((l) => `<a class="link" href="${l.url}" target="_blank" rel="noreferrer">${val(l.label)} <span>&#8599;</span></a>`).join("")}</div>` : ""}
      </div>
    </article>`;
}

/* CSS galeri proyek (dipasang otomatis dari JavaScript, tidak perlu ditempel di style.css) */
function injectProjectStyles() {
  if (document.getElementById("pcard-styles")) return;
  const css = `
.pnav{display:flex;align-items:center;justify-content:flex-end;gap:8px;margin-bottom:16px}
.pnav__hint{margin-right:auto;font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}
.pnav__btn{width:44px;height:44px;border:1px solid var(--ink);background:var(--white);color:var(--ink);font-size:20px;cursor:pointer;transition:background .2s,color .2s}
.pnav__btn:hover{background:var(--ink);color:var(--white)}
.ptrack{--ph:clamp(380px,68vh,600px);display:flex;align-items:flex-start;gap:24px;width:100%;overflow-x:auto;overflow-y:hidden;padding:4px 2px 20px;scroll-snap-type:x mandatory;cursor:grab;scrollbar-width:auto;scrollbar-color:var(--azure) var(--tint)}
.ptrack::-webkit-scrollbar{height:10px}
.ptrack::-webkit-scrollbar-track{background:var(--tint)}
.ptrack::-webkit-scrollbar-thumb{background:var(--azure)}
.ptrack.is-dragging{cursor:grabbing;scroll-snap-type:none;user-select:none}
.pcard{flex:0 0 auto;width:max-content;min-width:320px;max-width:92vw;overflow:hidden;scroll-snap-align:start;border:1px solid var(--line);background:var(--white)}
.pcard__media{display:block;background:var(--tint)}
.pcard__img{display:block;height:var(--ph);width:auto;max-width:calc(92vw - 2px);object-fit:cover;-webkit-user-drag:none}
.pcard__body{width:0;min-width:100%;padding:20px}
.pcard__top{display:flex;justify-content:space-between;gap:12px;font-family:var(--mono);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted)}
.pcard__num{color:var(--signal)}
.pcard__title{margin-top:12px;font-size:24px;line-height:1.15}
.pcard__summary{margin-top:12px;font-size:14px;line-height:1.7;color:var(--muted)}
.pcard__role{margin-top:14px;font-size:14px}
.pcard__role .mono{margin-right:8px}
.pcard__metrics{display:flex;gap:24px;margin-top:16px;border-top:1px solid var(--line);padding-top:14px}
.pcard__metrics dd{margin-top:4px;font-family:var(--display);font-size:20px;font-weight:600}
.pcard .chips{margin-top:16px}
.pcard .links{margin-top:18px}
@media (max-width:640px){
  .pcard{min-width:0;width:86vw;max-width:86vw}
  .pcard__img{width:100%;max-width:100%;height:auto;object-fit:contain}
  .pcard__body{width:auto;min-width:0}
}`;
  const style = document.createElement("style");
  style.id = "pcard-styles";
  style.textContent = css;
  document.head.appendChild(style);
}
function renderProjects() {
  injectProjectStyles();
  const root = $("projects");

  root.innerHTML = `
    <div class="pnav">
      <span class="pnav__hint">Geser ke samping &rarr;</span>
      <button class="pnav__btn" type="button" data-dir="-1" aria-label="Sebelumnya">&larr;</button>
      <button class="pnav__btn" type="button" data-dir="1" aria-label="Berikutnya">&rarr;</button>
    </div>
    <div class="ptrack" tabindex="0">${DATA.projects.map(projectMarkup).join("")}</div>`;

  const track = root.querySelector(".ptrack");

  // tombol panah
  root.querySelectorAll(".pnav__btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      track.scrollBy({ left: Number(btn.dataset.dir) * track.clientWidth * 0.8, behavior: "smooth" });
    })
  );

  // geser pakai mouse (di HP otomatis pakai swipe)
  let down = false, moved = false, startX = 0, startLeft = 0;
  track.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    down = true; moved = false;
    startX = e.clientX; startLeft = track.scrollLeft;
  });
  window.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) { moved = true; track.classList.add("is-dragging"); }
    if (moved) track.scrollLeft = startLeft - dx;
  });
  window.addEventListener("pointerup", () => {
    if (!down) return;
    down = false;
    track.classList.remove("is-dragging");
  });
  track.addEventListener("click", (e) => {
    if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
  }, true);
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
            ${(entry.highlights || []).map((h) => `<span class="entry__line"><span class="bullet"></span>${esc(h)}</span>`).join("")}
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
      ${c ? `<div class="modal__content"><div class="cert-card">
          <a class="cert-card__verify" href="${c.verifyUrl}" target="_blank" rel="noreferrer">link certificate <span>&#8599;</span></a>
        </div></div>` : ""}`);
  });
}

/* ── Skills ── */
function renderSkills() {
  $("skills-list").innerHTML = DATA.skills.map((s, i) =>
    `<button class="skill lvl-${s.level || 4}${i === 0 ? " is-on" : ""}" type="button" data-skill="${i}">${esc(s.name)}</button>`
  ).join("");

  const select = (button) => {
    const skill = DATA.skills[Number(button.dataset.skill)];
    const nameEl = $("skill-name");
    const noteEl = $("skill-note");
    if (nameEl) nameEl.textContent = skill.name;
    if (noteEl) noteEl.textContent = skill.note || "";
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
  const AMOUNT = window.innerWidth < 500 ? 50 : 30;             // jumlah bunga
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