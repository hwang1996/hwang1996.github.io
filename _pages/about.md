---
permalink: /
title: "Spatial Intelligence & Agentic AI"
excerpt: "Spatial Intelligence, World Models, and Self-Evolving Agents"
author_profile: false
redirect_from:
  - about/
  - about.html
---

<style>
  .page__title {
    display: none;
  }

  #main {
    max-width: 1440px;
    margin-top: 1.25rem;
  }

  article.page {
    float: none;
    width: 100%;
    padding: 0;
  }

  .research-home {
    --ink: #0f172a;
    --muted: #526078;
    --line: #dce5f2;
    --blue: #2558d8;
    --cyan: #0e9fbc;
    color: var(--ink);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    letter-spacing: -0.01em;
  }

  .research-home,
  .research-home * {
    box-sizing: border-box;
  }

  .page__content .research-home a {
    text-decoration: none;
  }

  .research-home p,
  .research-home li {
    margin: 0;
    line-height: 1.6;
    text-align: left;
  }

  .research-home h1,
  .research-home h2,
  .research-home h3 {
    margin: 0;
    color: var(--ink);
    font-family: inherit;
    letter-spacing: -0.035em;
  }

  .research-home h2 {
    padding: 0;
    border: 0;
  }

  .rh-hero {
    position: relative;
    isolation: isolate;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 190px;
    gap: clamp(2rem, 5vw, 5rem);
    overflow: hidden;
    padding: clamp(2rem, 5vw, 4.6rem);
    border: 1px solid #d8e5ff;
    border-radius: 28px;
    background:
      radial-gradient(circle at 88% 15%, rgba(56, 189, 248, 0.24), transparent 27%),
      radial-gradient(circle at 70% 90%, rgba(124, 58, 237, 0.12), transparent 30%),
      linear-gradient(135deg, #f8fbff 0%, #edf4ff 55%, #f8f7ff 100%);
    box-shadow: 0 24px 70px rgba(30, 64, 175, 0.09);
  }

  .rh-hero::after {
    position: absolute;
    z-index: -1;
    top: -120px;
    right: -95px;
    width: 330px;
    height: 330px;
    border: 1px solid rgba(37, 99, 235, 0.17);
    border-radius: 50%;
    box-shadow: 0 0 0 44px rgba(37, 99, 235, 0.035), 0 0 0 88px rgba(8, 145, 178, 0.025);
    content: "";
  }

  .rh-eyebrow,
  .rh-kicker {
    display: block;
    color: var(--blue);
    font-size: 0.72rem;
    font-weight: 850;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .rh-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    margin-bottom: 1.15rem;
  }

  .rh-eyebrow::before {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #06b6d4;
    box-shadow: 0 0 0 5px rgba(6, 182, 212, 0.13);
    content: "";
  }

  .rh-hero h1 {
    max-width: 820px;
    font-size: clamp(2.5rem, 6vw, 5.25rem);
    font-weight: 800;
    line-height: 0.99;
  }

  .rh-hero h1 span {
    color: #3157d5;
    background: linear-gradient(105deg, #1d4ed8, #7c3aed 72%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .rh-hero__lead {
    max-width: 760px;
    margin-top: 1.45rem !important;
    color: #334155;
    font-size: clamp(1rem, 1.7vw, 1.18rem);
  }

  .rh-hero__meta {
    margin-top: 1rem !important;
    color: #65738a;
    font-size: 0.78rem;
    font-weight: 650;
  }

  .rh-actions,
  .rh-links,
  .rh-tags,
  .rh-footer__links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
  }

  .rh-actions {
    margin-top: 1.6rem;
  }

  .rh-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0.68rem 1rem;
    border: 1px solid #cbd8ee;
    border-radius: 11px;
    background: rgba(255, 255, 255, 0.84);
    color: #1e3a5f !important;
    font-size: 0.84rem;
    font-weight: 760;
    transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
  }

  .rh-button:hover {
    border-color: #8fb0ed;
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.12);
    transform: translateY(-2px);
  }

  .rh-button--primary {
    border-color: #1d4ed8;
    background: #1d4ed8;
    color: #fff !important;
  }

  .rh-portrait {
    align-self: center;
    justify-self: end;
    width: 100%;
    max-width: 190px;
  }

  .rh-portrait img {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 6px solid rgba(255, 255, 255, 0.82);
    border-radius: 28px;
    object-fit: cover;
    box-shadow: 0 22px 54px rgba(30, 64, 175, 0.2);
  }

  .rh-path {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px;
    overflow: hidden;
    margin: 1rem 0 0;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--line);
  }

  .rh-path a {
    padding: 0.9rem 1rem;
    background: #fff;
    color: #334155 !important;
    font-size: 0.78rem;
    font-weight: 760;
    text-align: center;
  }

  .rh-path a:hover {
    color: var(--blue) !important;
    background: #f8fbff;
  }

  .rh-section {
    padding: clamp(3.6rem, 8vw, 6.2rem) clamp(0.15rem, 2.5vw, 2rem) 0;
  }

  .rh-section__head {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 1.7rem;
  }

  .rh-section__head h2 {
    margin-top: 0.45rem;
    font-size: clamp(2rem, 4vw, 3.25rem);
    line-height: 1.05;
  }

  .rh-section__head p {
    max-width: 520px;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .rh-showcases {
    display: grid;
    gap: 1.15rem;
  }

  .rh-showcase {
    display: grid;
    grid-template-columns: minmax(0, 1.42fr) minmax(300px, 0.78fr);
    gap: clamp(1.25rem, 3.5vw, 3.25rem);
    align-items: center;
    padding: clamp(1rem, 2vw, 1.5rem);
    border: 1px solid var(--line);
    border-radius: 22px;
    background: #fff;
    box-shadow: 0 14px 38px rgba(15, 23, 42, 0.05);
  }

  .rh-showcase--reverse {
    grid-template-columns: minmax(300px, 0.78fr) minmax(0, 1.42fr);
  }

  .rh-showcase--reverse .rh-media {
    grid-column: 2;
    grid-row: 1;
  }

  .rh-showcase--reverse .rh-showcase__copy {
    grid-column: 1;
    grid-row: 1;
  }

  .rh-media {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    background: #0b1426;
  }

  .rh-media img,
  .rh-media video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 0;
    object-fit: cover;
  }

  .rh-concept {
    display: grid;
    width: 100%;
    aspect-ratio: 16 / 9;
    padding: clamp(1rem, 3vw, 2.2rem);
    color: #f8fafc;
  }

  .rh-concept--wm {
    align-content: center;
    gap: 0.65rem;
    background:
      radial-gradient(circle at 85% 15%, rgba(190, 242, 100, 0.17), transparent 24%),
      linear-gradient(135deg, #091625, #10283c);
  }

  .rh-ladder {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr) auto;
    gap: 0.8rem;
    align-items: center;
    padding: 0.8rem 0.9rem;
    border-left: 3px solid var(--step-color);
    background: rgba(255, 255, 255, 0.045);
  }

  .rh-ladder:nth-child(1) { --step-color: #8b5cf6; margin-right: 12%; }
  .rh-ladder:nth-child(2) { --step-color: #38bdf8; margin-left: 6%; margin-right: 6%; }
  .rh-ladder:nth-child(3) { --step-color: #fb7185; margin-left: 12%; }

  .rh-ladder b {
    font-size: clamp(0.9rem, 2vw, 1.45rem);
  }

  .rh-ladder small,
  .rh-ladder em {
    color: #94a3b8;
    font-size: clamp(0.5rem, 1vw, 0.68rem);
    font-style: normal;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .rh-concept--ai {
    position: relative;
    place-items: center;
    overflow: hidden;
    background:
      radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.16), transparent 34%),
      linear-gradient(135deg, #0b1026, #141d43);
  }

  .rh-loop {
    position: relative;
    display: grid;
    width: min(58%, 320px);
    aspect-ratio: 1 / 1;
    place-items: center;
    border: 2px solid rgba(139, 157, 255, 0.7);
    border-radius: 50%;
    box-shadow: inset 0 0 45px rgba(127, 208, 200, 0.08), 0 0 45px rgba(99, 102, 241, 0.13);
  }

  .rh-loop::before,
  .rh-loop::after {
    position: absolute;
    border-radius: 50%;
    content: "";
  }

  .rh-loop::before {
    width: 72%;
    height: 72%;
    border: 2px solid rgba(127, 208, 200, 0.68);
  }

  .rh-loop::after {
    top: 8%;
    right: 2%;
    width: 12px;
    height: 12px;
    background: #8b9dff;
    box-shadow: -210px 100px 0 #7fd0c8, -80px 230px 0 #8b9dff;
  }

  .rh-loop__text {
    z-index: 1;
    color: #e2e8f0;
    font-size: clamp(0.65rem, 1.4vw, 0.9rem);
    font-weight: 780;
    letter-spacing: 0.12em;
    line-height: 1.55;
    text-align: center;
    text-transform: uppercase;
  }

  .rh-loop__text span {
    display: block;
    color: #7fd0c8;
  }

  .rh-media__badge {
    position: absolute;
    right: 0.75rem;
    bottom: 0.75rem;
    padding: 0.35rem 0.55rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 999px;
    background: rgba(8, 15, 30, 0.78);
    color: #fff;
    font-size: 0.64rem;
    font-weight: 750;
    letter-spacing: 0.04em;
    backdrop-filter: blur(8px);
  }

  .rh-showcase__copy {
    padding: 0.35rem clamp(0.2rem, 1vw, 0.8rem);
  }

  .rh-showcase__copy h3 {
    margin-top: 0.4rem;
    font-size: clamp(1.65rem, 3vw, 2.55rem);
    line-height: 1.06;
  }

  .rh-showcase__copy p {
    margin-top: 0.85rem !important;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .rh-tags {
    margin-top: 1rem;
  }

  .rh-tags span {
    padding: 0.3rem 0.5rem;
    border: 1px solid #dce5f2;
    border-radius: 999px;
    background: #f8fafc;
    color: #53637a;
    font-size: 0.67rem;
    font-weight: 700;
  }

  .rh-links {
    margin-top: 1.2rem;
  }

  .rh-links a {
    color: #1746a2 !important;
    font-size: 0.78rem;
    font-weight: 820;
  }

  .rh-links a::after {
    content: " ↗";
  }

  .rh-work-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .rh-work-card {
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: #fff;
    transition: transform 160ms ease, box-shadow 160ms ease;
  }

  .rh-work-card:hover {
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.09);
    transform: translateY(-3px);
  }

  .rh-work-card img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .rh-work-card__body {
    padding: 0.85rem 0.95rem 1rem;
  }

  .rh-work-card__body span {
    color: var(--blue);
    font-size: 0.63rem;
    font-weight: 820;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .rh-work-card__body h3 {
    margin-top: 0.28rem;
    font-size: 1rem;
    line-height: 1.2;
  }

  .rh-more {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem 1rem;
    margin-top: 1rem;
    color: #64748b;
    font-size: 0.75rem;
  }

  .rh-more a {
    color: #365a8a !important;
    font-weight: 740;
  }

  .rh-info-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.85fr);
    gap: 1rem;
  }

  .rh-panel {
    padding: clamp(1.4rem, 3vw, 2.2rem);
    border: 1px solid var(--line);
    border-radius: 20px;
    background: #fff;
  }

  .rh-panel h2 {
    margin-top: 0.45rem;
    font-size: clamp(1.55rem, 2.8vw, 2.2rem);
    line-height: 1.1;
  }

  .rh-panel > p {
    margin-top: 0.85rem !important;
    color: var(--muted);
    font-size: 0.88rem;
  }

  .rh-news {
    list-style: none;
    margin: 1rem 0 0;
    padding: 0;
  }

  .rh-news li {
    display: grid;
    grid-template-columns: 70px minmax(0, 1fr);
    gap: 0.75rem;
    padding: 0.65rem 0;
    border-top: 1px solid #edf1f7;
    color: #40506a;
    font-size: 0.76rem;
  }

  .rh-news time {
    color: var(--blue);
    font-weight: 820;
  }

  .rh-collab {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 2rem;
    align-items: center;
    margin-top: clamp(3.6rem, 8vw, 6.2rem);
    padding: clamp(1.8rem, 4vw, 3.2rem);
    border-radius: 24px;
    background: #101b35;
    color: #c9d6ea;
  }

  .rh-collab h2 {
    color: #fff;
    font-size: clamp(1.8rem, 3.8vw, 3rem);
    line-height: 1.05;
  }

  .rh-collab p {
    max-width: 760px;
    margin-top: 0.7rem !important;
    color: #b9c7df;
    font-size: 0.88rem;
  }

  .rh-collab .rh-button {
    border-color: #67e8f9;
    background: #67e8f9;
    color: #10203d !important;
    white-space: nowrap;
  }

  .rh-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.9rem;
    padding: 1.5rem 0 0;
    color: #64748b;
    font-size: 0.72rem;
  }

  .rh-footer a {
    color: #31527f !important;
    font-weight: 740;
  }

  .rh-updated {
    width: 100%;
    padding-top: 0.5rem;
    color: #94a3b8;
    font-size: 0.63rem;
    text-align: right;
  }

  .research-home a:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.35);
    outline-offset: 3px;
  }

  @media (max-width: 900px) {
    .rh-showcase,
    .rh-showcase--reverse,
    .rh-info-grid {
      grid-template-columns: 1fr;
    }

    .rh-showcase--reverse .rh-media,
    .rh-showcase--reverse .rh-showcase__copy {
      grid-column: 1;
      grid-row: auto;
    }

    .rh-work-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 700px) {
    #main {
      margin-top: 0.75rem;
      padding-right: 0.75rem;
      padding-left: 0.75rem;
    }

    .rh-hero {
      grid-template-columns: 1fr;
      border-radius: 20px;
    }

    .rh-portrait {
      grid-row: 1;
      justify-self: start;
      width: 90px;
    }

    .rh-portrait img {
      border-width: 4px;
      border-radius: 18px;
    }

    .rh-path,
    .rh-work-grid,
    .rh-collab {
      grid-template-columns: 1fr;
    }

    .rh-section__head {
      display: block;
    }

    .rh-section__head p {
      margin-top: 0.8rem !important;
    }

    .rh-collab .rh-button {
      justify-self: start;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .rh-button,
    .rh-work-card {
      transition: none;
    }
  }
</style>

<div class="research-home">
  <header class="rh-hero">
    <div>
      <div class="rh-eyebrow">Spatial Intelligence × Agentic AI</div>
      <h1>From Persistent Worlds<br>to <span>Self-Evolving Agents.</span></h1>
      <p class="rh-hero__lead">
        I build agents that understand 3D worlds, act through world models, and improve themselves through experience.
      </p>
      <p class="rh-hero__meta">Assistant Professor · AI Thrust · HKUST(GZ)</p>
      <div class="rh-actions" aria-label="Primary links">
        <a class="rh-button rh-button--primary" href="#featured">See the demos</a>
        <a class="rh-button" href="mailto:haowang@hkust-gz.edu.cn">Discuss collaboration</a>
        <a class="rh-button" href="https://scholar.google.com/citations?user=856zi9EAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
      </div>
    </div>
    <div class="rh-portrait">
      <img src="/images/me.jpg" alt="Portrait of Hao Wang">
    </div>
  </header>

  <nav class="rh-path" aria-label="Research directions">
    <a href="#persistent-worlds">01 · Persistent Worlds</a>
    <a href="#world-models">02 · Actionable World Models</a>
    <a href="#self-evolving-ai">03 · Self-Evolving AI</a>
  </nav>

  <section class="rh-section" id="featured" aria-labelledby="featured-title">
    <div class="rh-section__head">
      <div>
        <span class="rh-kicker">Featured work</span>
        <h2 id="featured-title">See the research in action.</h2>
      </div>
      <p>Three connected frontiers: perceive and preserve the world, use it for action, then improve the intelligence itself.</p>
    </div>

    <div class="rh-showcases">
      <article class="rh-showcase" id="persistent-worlds">
        <div class="rh-media">
          <video autoplay muted loop playsinline controls preload="metadata" poster="https://3dagentworld.github.io/horizonstream/example/render/office/render_poster.jpg" aria-label="HorizonStream streaming 3D reconstruction demo">
            <source src="https://3dagentworld.github.io/horizonstream/example/render/office/render.mp4" type="video/mp4">
            <a href="https://3dagentworld.github.io/horizonstream/">Watch the HorizonStream demo</a>
          </video>
          <span class="rh-media__badge">Live reconstruction demo</span>
        </div>
        <div class="rh-showcase__copy">
          <span class="rh-kicker">01 · HorizonStream</span>
          <h3>Persistent Worlds</h3>
          <p>Stable streaming 3D reconstruction beyond 10K frames, with constant memory and linear time.</p>
          <div class="rh-tags"><span>Spatial memory</span><span>3DGS</span><span>Long horizon</span></div>
          <div class="rh-links">
            <a href="https://3dagentworld.github.io/horizonstream/" target="_blank" rel="noopener noreferrer">Project</a>
            <a href="https://arxiv.org/abs/2605.23889" target="_blank" rel="noopener noreferrer">Paper</a>
            <a href="https://huggingface.co/spaces/NicolasCC/HorizonStream_Demo" target="_blank" rel="noopener noreferrer">Interactive demo</a>
          </div>
        </div>
      </article>

      <article class="rh-showcase rh-showcase--reverse" id="world-models">
        <div class="rh-media">
          <div class="rh-concept rh-concept--wm" role="img" aria-label="EmbodiedWM capability ladder from plausible to controllable to actionable">
            <div class="rh-ladder"><small>01</small><b>Plausible</b><em>State consistency</em></div>
            <div class="rh-ladder"><small>02</small><b>Controllable</b><em>Intervention fidelity</em></div>
            <div class="rh-ladder"><small>03</small><b>Actionable</b><em>Decision utility</em></div>
          </div>
          <span class="rh-media__badge">Capability framework</span>
        </div>
        <div class="rh-showcase__copy">
          <span class="rh-kicker">02 · EmbodiedWM</span>
          <h3>Actionable World Models</h3>
          <p>Moving world models from plausible generation to controllable prediction and measurable decision utility.</p>
          <div class="rh-tags"><span>Embodied AI</span><span>Game agents</span><span>Planning</span></div>
          <div class="rh-links">
            <a href="https://3dagentworld.github.io/EmbodiedWM/" target="_blank" rel="noopener noreferrer">Explore the framework</a>
          </div>
        </div>
      </article>

      <article class="rh-showcase" id="self-evolving-ai">
        <div class="rh-media">
          <div class="rh-concept rh-concept--ai" role="img" aria-label="AI4AI self-improvement loop">
            <div class="rh-loop"><div class="rh-loop__text">Improver<span>becomes</span>Improvee</div></div>
          </div>
          <span class="rh-media__badge">Self-improvement loop</span>
        </div>
        <div class="rh-showcase__copy">
          <span class="rh-kicker">03 · AI4AI</span>
          <h3>AI that Improves AI</h3>
          <p>A unified view of AI systems that improve data, training, evaluation, workflows, and eventually themselves.</p>
          <div class="rh-tags"><span>Self-evolution</span><span>AI agents</span><span>Automated feedback</span></div>
          <div class="rh-links">
            <a href="https://3dagentworld.github.io/AI4AI-survey/" target="_blank" rel="noopener noreferrer">Project</a>
            <a href="https://3dagentworld.github.io/AI4AI-survey/paper.html" target="_blank" rel="noopener noreferrer">Read survey</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="rh-section" aria-labelledby="highlights-title">
    <div class="rh-section__head">
      <div>
        <span class="rh-kicker">Earlier foundations</span>
        <h2 id="highlights-title">Selected visual highlights.</h2>
      </div>
    </div>

    <div class="rh-work-grid">
      <a class="rh-work-card" href="https://3dagentworld.github.io/longstream/" target="_blank" rel="noopener noreferrer">
        <img src="/images/projects/longstream.png" loading="lazy" decoding="async" alt="LongStream streaming 3D reconstruction results">
        <div class="rh-work-card__body"><span>3D reconstruction</span><h3>LongStream</h3></div>
      </a>
      <a class="rh-work-card" href="https://arxiv.org/abs/2504.18039" target="_blank" rel="noopener noreferrer">
        <img src="/images/projects/multimind.png" loading="lazy" decoding="async" alt="MultiMind multimodal game agent demonstration">
        <div class="rh-work-card__body"><span>Game AI agent</span><h3>MultiMind</h3></div>
      </a>
      <a class="rh-work-card" href="https://arxiv.org/abs/2602.19180" target="_blank" rel="noopener noreferrer">
        <img src="/images/projects/human_mesh_recovery.png" loading="lazy" decoding="async" alt="VLM-guided diffusion human mesh recovery results">
        <div class="rh-work-card__body"><span>Diffusion × perception</span><h3>VLM-Guided Diffusion HMR</h3></div>
      </a>
    </div>
    <div class="rh-more">
      <span>More:</span>
      <a href="https://arxiv.org/abs/2606.30436" target="_blank" rel="noopener noreferrer">KiloGS-SLAM ↗</a>
      <a href="https://3dagentworld.github.io/vggt4d/" target="_blank" rel="noopener noreferrer">VGGT4D ↗</a>
      <a href="https://arxiv.org/abs/2605.05680" target="_blank" rel="noopener noreferrer">MotionGRPO ↗</a>
    </div>
  </section>

  <section class="rh-section" aria-label="About and news">
    <div class="rh-info-grid">
      <article class="rh-panel">
        <span class="rh-kicker">About</span>
        <h2>Research for open-ended worlds.</h2>
        <p>I am a tenure-track Assistant Professor in the AI Thrust at HKUST(GZ). My group works across spatial intelligence, multimodal learning, and agentic AI, from persistent 3D environments to self-improving agents.</p>
      </article>
      <aside class="rh-panel" aria-labelledby="news-title">
        <span class="rh-kicker">Updates</span>
        <h2 id="news-title">Recent news</h2>
        <ul class="rh-news">
          <li><time datetime="2026-09">Sep 2026</time><span>Released AI4AI survey.</span></li>
          <li><time datetime="2026-09">Sep 2026</time><span>Released EmbodiedWM.</span></li>
          <li><time datetime="2026-07">Jul 2026</time><span>Three papers at ACM MM 2026.</span></li>
          <li><time datetime="2026-06">Jun 2026</time><span>KiloGS-SLAM at ECCV 2026.</span></li>
        </ul>
      </aside>
    </div>
  </section>

  <section class="rh-collab" aria-labelledby="collab-title">
    <div>
      <h2 id="collab-title">Build intelligent worlds together.</h2>
      <p>Open to joint research and industry collaboration in 3D spatial computing, digital twins, embodied and game agents, generative AI, and self-evolving systems.</p>
    </div>
    <a class="rh-button" href="mailto:haowang@hkust-gz.edu.cn?subject=Research%20collaboration">Start a conversation →</a>
  </section>

  <footer class="rh-footer">
    <span>WANG Hao · AI Thrust · HKUST(GZ)</span>
    <div class="rh-footer__links">
      <a href="mailto:haowang@hkust-gz.edu.cn">Email</a>
      <a href="https://scholar.google.com/citations?user=856zi9EAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
      <a href="https://github.com/3DAgentWorld" target="_blank" rel="noopener noreferrer">3DAgentWorld</a>
    </div>
    <span class="rh-updated">Last updated: September 2026</span>
  </footer>
</div>
