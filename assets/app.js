// Renders every page from the content in data.js.

const TINTS = [
  ["#e9eef5", "#1e3a5f"], ["#efeae2", "#4a3520"], ["#e6efe9", "#1f4632"],
  ["#eeeaf3", "#3b2a5c"], ["#f3ebe6", "#5c2f1f"], ["#e8edef", "#23404a"]
];

function thumb(p, i) {
  if (p.cover) return `<div class="thumb ${p.coverFit === "contain" ? "fit-contain" : ""}"><img src="${p.cover}" alt="${p.title}" loading="lazy"></div>`;
  const [tint, ink] = TINTS[i % TINTS.length];
  return `<div class="thumb"><div class="ph" style="--tint:${tint};--ink:${ink}">
    <div class="ph-inner"><div class="ph-value">${p.placeholder.value}</div><div class="ph-label">${p.placeholder.label}</div></div>
  </div></div>`;
}

function nav(active) {
  return `<nav class="nav" aria-label="Main">
    <a href="index.html#projects" class="${active === "projects" ? "active" : ""}">Projects</a>
    <a href="about.html" class="${active === "about" ? "active" : ""}">About</a>
    <a href="mailto:${PROFILE.email}" class="btn">Contact</a>
  </nav>`;
}

function footer() {
  return `<footer><div class="wrap">
    <span>© ${PROFILE.name} · ${new Date().getFullYear()}</span>
    <nav><a href="index.html#projects">Projects</a><a href="about.html">About</a><a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a></nav>
  </div></footer>`;
}

function linkButtons() {
  return `<div class="actions">
    <a class="btn" href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
  </div>`;
}

// Gallery item: MP4s play muted on loop like a GIF, with controls; everything else is an image.
function media(g, p) {
  if (/\.mp4$/i.test(g.src)) {
    return `<video src="${g.src}" autoplay muted loop playsinline controls preload="metadata" aria-label="${g.caption || p.title}"></video>`;
  }
  return `<img src="${g.src}" alt="${g.caption || p.title}" loading="lazy">`;
}

function list(items) {
  return `<ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
}

function renderHome() {
  const cards = PROJECTS.map((p, i) => `
    <a class="card reveal" href="project.html?p=${p.slug}">
      ${thumb(p, i)}
      <div class="card-meta"><h3>${p.title}</h3>${p.tag ? `<span>${p.tag}</span>` : ""}</div>
    </a>`).join("");

  return `
    <header class="hero wrap">
      <h1 class="reveal">${PROFILE.headline}</h1>
      ${PROFILE.intro.map(t => `<p class="reveal">${t}</p>`).join("")}
      <div class="reveal">${linkButtons()}</div>
    </header>
    <main class="wrap" id="projects">
      <p class="lead-in reveal">Click a project to learn more</p>
      <div class="grid">${cards}</div>
    </main>`;
}

function renderProject() {
  const slug = new URLSearchParams(location.search).get("p");
  const i = PROJECTS.findIndex(p => p.slug === slug);
  if (i < 0) {
    return `<main class="narrow project"><a class="back" href="index.html#projects">← All projects</a>
      <h1>Project not found</h1></main>`;
  }
  const p = PROJECTS[i];
  document.title = `${p.title} · ${PROFILE.name}`;

  const meta = [["Role", p.role]]
    .filter(([, v]) => v)
    .map(([k, v]) => `<div><span>${k}</span><strong>${v}</strong></div>`).join("");

  const stats = p.stats.length ? `<section class="reveal"><h2>Key results</h2><div class="stats">
    ${p.stats.map(s => `<div class="stat"><strong>${s.value}</strong><span>${s.label}</span></div>`).join("")}
  </div></section>` : "";

  const sections = p.sections.map(s => `<section class="reveal"><h2>${s.title}</h2>${list(s.items)}</section>`).join("");

  // Main gallery plus any extra titled groups (e.g. a 3-column grid of small plots).
  const groups = [{ title: "Gallery", items: p.gallery }, ...(p.galleries || [])].filter(g => g.items.length);
  const gallery = groups.map(gr => `<section class="reveal"><h2>${gr.title}</h2><div class="gallery ${gr.columns === 3 ? "cols-3" : ""}">
    ${gr.items.map(g => `<figure class="${g.wide ? "wide" : ""}">${media(g, p)}${g.caption ? `<figcaption>${g.caption}</figcaption>` : ""}</figure>`).join("")}
  </div></section>`).join("");

  const docs = p.documents?.length ? `<section class="reveal"><h2>Drawings (PDF)</h2><div class="chips">
    ${p.documents.map(d => `<a class="chip doc" href="${d.href}" target="_blank" rel="noopener">${d.label} ↗</a>`).join("")}</div></section>` : "";

  // Source files load on first open (needs http, e.g. GitHub Pages; the download link works anywhere).
  const code = p.code?.length ? `<section class="reveal"><h2>Code</h2>
    ${p.code.map(c => `<details class="code" data-src="${c.src}"><summary>${c.label}<a href="${c.src}" download>Download</a></summary><pre><code>Loading…</code></pre></details>`).join("")}
  </section>` : "";

  const tools = p.tools.length ? `<section class="reveal"><h2>Tools & methods</h2><div class="chips">
    ${p.tools.map(t => `<span class="chip">${t}</span>`).join("")}</div></section>` : "";

  const prev = PROJECTS[i - 1], next = PROJECTS[i + 1];
  const pager = `<div class="pager">
    ${prev ? `<a href="project.html?p=${prev.slug}"><span>← Previous</span><strong>${prev.title}</strong></a>` : ""}
    ${next ? `<a class="next" href="project.html?p=${next.slug}"><span>Next →</span><strong>${next.title}</strong></a>` : ""}
  </div>`;

  return `<main class="narrow project">
    <a class="back" href="index.html#projects">← All projects</a>
    <h1 class="reveal">${p.title}</h1>
    <div class="meta reveal">${meta}</div>
    <div class="reveal">${thumb(p, i)}</div>
    <section class="reveal"><h2>Overview</h2><p>${p.overview}</p></section>
    ${stats}${sections}${gallery}${docs}${code}${tools}${pager}
  </main>`;
}

function renderAbout() {
  const edu = EDUCATION.map(e => `<div class="entry">
    <div class="entry-head"><div><h3>${e.school}</h3><div class="role">${e.degree}</div></div><div class="when">${e.dates}</div></div>
    <ul><li>Relevant coursework: ${e.coursework.join(", ")}</li></ul>
  </div>`).join("");

  const exp = EXPERIENCE.map(e => `<div class="entry">
    <div class="entry-head"><div><h3>${e.org}</h3><div class="role">${e.role}</div></div><div class="when">${e.dates}</div></div>
    ${list(e.bullets)}
  </div>`).join("");

  const lead = LEADERSHIP.map(l => `<a class="entry" href="project.html?p=${l.slug}">
    <div class="entry-head"><div><h3>${l.org}</h3><div class="role">${l.role}</div></div><div class="when">${l.dates}</div></div>
  </a>`).join("");

  const skills = SKILLS.map(s => `<div><h3>${s.group}</h3><div class="chips">
    ${s.items.map(t => `<span class="chip">${t}</span>`).join("")}</div></div>`).join("");

  return `<header class="about-hero narrow">
      <h1 class="reveal">${PROFILE.name}</h1>
      ${PROFILE.intro.map(t => `<p class="reveal">${t}</p>`).join("")}
      <div class="facts reveal">
        <span class="chip">${PROFILE.citizenship}</span>
        <span class="chip">${PROFILE.location}</span>
        ${PROFILE.languages.map(l => `<span class="chip">${l}</span>`).join("")}
      </div>
      <div class="reveal">${linkButtons()}</div>
    </header>
    <main class="narrow">
      <section class="block reveal"><h2>Education</h2>${edu}</section>
      <section class="block reveal"><h2>Experience</h2>${exp}</section>
      <section class="block reveal"><h2>Leadership & teams</h2>${lead}</section>
      <section class="block reveal"><h2>Skills</h2><div class="skills">${skills}</div></section>
      <section class="cta reveal">
        <h2>Want to get in touch?</h2>
        <p>The fastest way to reach me is email.</p>
        <div class="actions"><a class="btn" href="mailto:${PROFILE.email}">${PROFILE.email}</a></div>
      </section>
    </main>`;
}

function revealOnScroll() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { rootMargin: "0px 0px -40px 0px" });
  els.forEach(e => io.observe(e));
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const body = { home: renderHome, project: renderProject, about: renderAbout }[page]();
  document.body.innerHTML = nav(page === "about" ? "about" : "projects") + body + footer();
  revealOnScroll();
  document.querySelectorAll("details.code").forEach(d => d.addEventListener("toggle", async () => {
    if (!d.open || d.dataset.loaded) return;
    d.dataset.loaded = "1";
    const out = d.querySelector("code");
    try { out.textContent = await (await fetch(d.dataset.src)).text(); }
    catch { out.textContent = "Couldn't load the file here. Use the Download link."; }
  }));
  // Content is injected after load, so jump to #projects manually.
  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
});
