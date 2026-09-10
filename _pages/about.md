---
permalink: /
title: "Spatial Intelligence & Agentic AI"
excerpt: "Spatial Intelligence, World Models, and Self-Evolving Agents"
author_profile: false
modified: 2026-09-10
redirect_from:
  - about/
  - about.html
---

<style>
  .page__title,
  .page__meta {
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
    --rh-ink: #0f172a;
    --rh-muted: #526078;
    --rh-soft: #eef4ff;
    --rh-line: #dce5f2;
    --rh-blue: #2563eb;
    --rh-cyan: #0891b2;
    --rh-violet: #7c3aed;
    color: var(--rh-ink);
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
    line-height: 1.65;
    text-align: left;
  }

  .research-home h1,
  .research-home h2,
  .research-home h3 {
    margin: 0;
    color: var(--rh-ink);
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
    grid-template-columns: minmax(0, 1fr) 210px;
    gap: clamp(2rem, 5vw, 5rem);
    overflow: hidden;
    padding: clamp(2rem, 5vw, 4.75rem);
    border: 1px solid #d8e5ff;
    border-radius: 28px;
    background:
      radial-gradient(circle at 88% 16%, rgba(56, 189, 248, 0.24), transparent 27%),
      radial-gradient(circle at 70% 86%, rgba(124, 58, 237, 0.13), transparent 32%),
      linear-gradient(135deg, #f8fbff 0%, #eef5ff 52%, #f8f7ff 100%);
    box-shadow: 0 24px 70px rgba(30, 64, 175, 0.09);
  }

  .rh-hero::after {
    position: absolute;
    z-index: -1;
    top: -110px;
    right: -90px;
    width: 330px;
    height: 330px;
    border: 1px solid rgba(37, 99, 235, 0.18);
    border-radius: 50%;
    box-shadow:
      0 0 0 42px rgba(37, 99, 235, 0.035),
      0 0 0 86px rgba(8, 145, 178, 0.025);
    content: "";
  }

  .rh-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    margin-bottom: 1.2rem;
    color: #1d4ed8;
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
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
    font-size: clamp(2.5rem, 6vw, 5.35rem);
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
    max-width: 790px;
    margin-top: 1.65rem !important;
    color: #334155;
    font-size: clamp(1rem, 1.7vw, 1.22rem);
  }

  .rh-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.8rem;
  }

  .rh-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 0.72rem 1.08rem;
    border: 1px solid #cbd8ee;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.82);
    color: #1e3a5f !important;
    font-size: 0.88rem;
    font-weight: 750;
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

  .rh-button--primary:hover {
    border-color: #1e40af;
    background: #1e40af;
  }

  .rh-portrait {
    align-self: center;
    justify-self: end;
    width: 100%;
    max-width: 210px;
  }

  .rh-portrait img {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 6px solid rgba(255, 255, 255, 0.82);
    border-radius: 30px;
    object-fit: cover;
    box-shadow: 0 22px 54px rgba(30, 64, 175, 0.2);
  }

  .rh-portrait p {
    margin-top: 0.85rem !important;
    color: #40506a;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.45;
    text-align: center;
  }

  .rh-proof {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px;
    overflow: hidden;
    margin-top: 0.35rem;
    border: 1px solid rgba(148, 163, 184, 0.24);
    border-radius: 16px;
    background: rgba(148, 163, 184, 0.22);
  }

  .rh-proof div {
    padding: 0.9rem 1rem;
    background: rgba(255, 255, 255, 0.72);
  }

  .rh-proof strong,
  .rh-proof span {
    display: block;
  }

  .rh-proof strong {
    font-size: 0.88rem;
  }

  .rh-proof span {
    margin-top: 0.15rem;
    color: #64748b;
    font-size: 0.72rem;
  }

  .rh-section {
    padding: clamp(3.5rem, 8vw, 6.5rem) clamp(0.15rem, 2.5vw, 2rem) 0;
  }

  .rh-section__head {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(280px, 1.2fr);
    gap: 2rem;
    align-items: end;
    margin-bottom: 2rem;
  }

  .rh-section__head h2 {
    font-size: clamp(2rem, 4vw, 3.35rem);
    line-height: 1.05;
  }

  .rh-section__head p {
    color: var(--rh-muted);
    font-size: 1rem;
  }

  .rh-kicker {
    display: block;
    margin-bottom: 0.55rem;
    color: var(--rh-blue);
    font-size: 0.72rem;
    font-weight: 850;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .rh-flow {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    overflow: hidden;
    margin-bottom: 1rem;
    border: 1px solid var(--rh-line);
    border-radius: 18px;
    background: #f8fafc;
  }

  .rh-flow div {
    position: relative;
    padding: 1.15rem 1.25rem;
  }

  .rh-flow div + div {
    border-left: 1px solid var(--rh-line);
  }

  .rh-flow strong,
  .rh-flow span {
    display: block;
  }

  .rh-flow strong {
    font-size: 0.9rem;
  }

  .rh-flow span {
    margin-top: 0.2rem;
    color: #64748b;
    font-size: 0.74rem;
  }

  .rh-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .rh-card {
    position: relative;
    display: flex;
    min-height: 460px;
    flex-direction: column;
    overflow: hidden;
    padding: clamp(1.35rem, 2.4vw, 2rem);
    border: 1px solid var(--rh-line);
    border-radius: 22px;
    background: #fff;
    box-shadow: 0 15px 40px rgba(15, 23, 42, 0.055);
  }

  .rh-card::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 5px;
    background: var(--card-accent);
    content: "";
  }

  .rh-card:nth-child(1) {
    --card-accent: linear-gradient(90deg, #0ea5e9, #2563eb);
  }

  .rh-card:nth-child(2) {
    --card-accent: linear-gradient(90deg, #2563eb, #7c3aed);
  }

  .rh-card:nth-child(3) {
    --card-accent: linear-gradient(90deg, #7c3aed, #db2777);
  }

  .rh-card__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2.25rem;
  }

  .rh-card__number {
    color: #94a3b8;
    font-size: 0.74rem;
    font-weight: 850;
    letter-spacing: 0.13em;
  }

  .rh-card__status {
    padding: 0.3rem 0.55rem;
    border-radius: 999px;
    background: #eff6ff;
    color: #1d4ed8;
    font-size: 0.66rem;
    font-weight: 800;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .rh-card h3 {
    font-size: clamp(1.45rem, 2.4vw, 2rem);
    line-height: 1.08;
  }

  .rh-card__project {
    display: block;
    margin-bottom: 0.55rem;
    color: var(--rh-blue);
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .rh-card__summary {
    margin-top: 1rem !important;
    color: var(--rh-muted);
    font-size: 0.91rem;
  }

  .rh-card__question {
    margin-top: 1.1rem !important;
    padding: 0.8rem 0.9rem;
    border-left: 3px solid #93c5fd;
    border-radius: 0 10px 10px 0;
    background: #f8fafc;
    color: #334155;
    font-size: 0.78rem;
    font-weight: 650;
  }

  .rh-card__footer {
    margin-top: auto;
    padding-top: 1.5rem;
  }

  .rh-card__links,
  .rh-related {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .rh-card__links a {
    color: #1746a2 !important;
    font-size: 0.78rem;
    font-weight: 800;
  }

  .rh-card__links a::after {
    content: " ↗";
  }

  .rh-related {
    margin-top: 0.85rem;
    padding-top: 0.85rem;
    border-top: 1px solid #edf1f7;
  }

  .rh-related span,
  .rh-related a {
    color: #64748b !important;
    font-size: 0.69rem;
    font-weight: 650;
  }

  .rh-related span {
    width: 100%;
    color: #334155 !important;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .rh-related a {
    padding: 0.28rem 0.48rem;
    border: 1px solid #e2e8f0;
    border-radius: 999px;
    background: #f8fafc;
  }

  .rh-split {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.95fr);
    gap: 1.25rem;
  }

  .rh-panel {
    padding: clamp(1.5rem, 3vw, 2.4rem);
    border: 1px solid var(--rh-line);
    border-radius: 22px;
    background: #fff;
  }

  .rh-panel h2 {
    font-size: clamp(1.65rem, 3vw, 2.35rem);
    line-height: 1.1;
  }

  .rh-panel > p {
    margin-top: 1rem !important;
    color: var(--rh-muted);
    font-size: 0.94rem;
  }

  .rh-topics {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
    margin-top: 1.4rem;
  }

  .rh-topic {
    padding: 0.85rem;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background: #f8fafc;
  }

  .rh-topic strong,
  .rh-topic span {
    display: block;
  }

  .rh-topic strong {
    font-size: 0.79rem;
  }

  .rh-topic span {
    margin-top: 0.2rem;
    color: #64748b;
    font-size: 0.69rem;
    line-height: 1.4;
  }

  .rh-news {
    list-style: none;
    margin: 1.25rem 0 0;
    padding: 0;
  }

  .rh-news li {
    display: grid;
    grid-template-columns: 70px minmax(0, 1fr);
    gap: 0.9rem;
    padding: 0.75rem 0;
    border-top: 1px solid #edf1f7;
    color: #40506a;
    font-size: 0.79rem;
  }

  .rh-news time {
    color: #1d4ed8;
    font-weight: 850;
  }

  .rh-news a {
    color: #29466f !important;
    font-weight: 750;
  }

  .rh-collab {
    position: relative;
    overflow: hidden;
    margin-top: clamp(3.5rem, 8vw, 6.5rem);
    padding: clamp(2rem, 5vw, 4rem);
    border-radius: 26px;
    background: #101b35;
    color: #dbeafe;
  }

  .rh-collab::after {
    position: absolute;
    right: -80px;
    bottom: -140px;
    width: 330px;
    height: 330px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.24), transparent 68%);
    content: "";
  }

  .rh-collab__inner {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 2rem;
    align-items: center;
  }

  .rh-collab h2 {
    color: #fff;
    font-size: clamp(1.9rem, 4vw, 3.2rem);
    line-height: 1.04;
  }

  .rh-collab p {
    max-width: 780px;
    margin-top: 0.9rem !important;
    color: #b9c7df;
    font-size: 0.94rem;
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
    justify-content: space-between;
    gap: 1rem;
    padding: 1.5rem 0 0;
    color: #64748b;
    font-size: 0.74rem;
  }

  .rh-footer__links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .rh-footer a {
    color: #31527f !important;
    font-weight: 750;
  }

  .research-home a:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.35);
    outline-offset: 3px;
  }

  @media (max-width: 980px) {
    .rh-hero {
      grid-template-columns: minmax(0, 1fr) 150px;
    }

    .rh-cards {
      grid-template-columns: 1fr;
    }

    .rh-card {
      min-height: 0;
    }

    .rh-split {
      grid-template-columns: 1fr;
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
      width: 92px;
    }

    .rh-portrait img {
      border-width: 4px;
      border-radius: 20px;
    }

    .rh-portrait p {
      display: none;
    }

    .rh-proof,
    .rh-flow,
    .rh-section__head,
    .rh-collab__inner {
      grid-template-columns: 1fr;
    }

    .rh-proof div + div,
    .rh-flow div + div {
      border-top: 1px solid var(--rh-line);
      border-left: 0;
    }

    .rh-section__head {
      gap: 1rem;
    }

    .rh-topics {
      grid-template-columns: 1fr;
    }

    .rh-news li {
      grid-template-columns: 62px minmax(0, 1fr);
      gap: 0.65rem;
    }

    .rh-collab .rh-button {
      justify-self: start;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .rh-button {
      transition: none;
    }
  }
</style>

<div class="research-home">
  <header class="rh-hero">
    <div class="rh-hero__copy">
      <div class="rh-eyebrow">Spatial Intelligence × Agentic AI</div>
      <h1>From Persistent Worlds<br>to <span>Self-Evolving Agents.</span></h1>
      <p class="rh-hero__lead">
        I build spatially grounded agents that can understand, act in, and continually improve through open-ended worlds. My research connects persistent 3D reconstruction, actionable world models, game and embodied agents, diffusion, and AI-driven self-evolution.
      </p>
      <div class="rh-actions" aria-label="Primary links">
        <a class="rh-button rh-button--primary" href="#research">Explore the research</a>
        <a class="rh-button" href="mailto:haowang@hkust-gz.edu.cn">Discuss collaboration</a>
        <a class="rh-button" href="https://scholar.google.com/citations?user=856zi9EAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
      </div>
    </div>

    <div class="rh-portrait">
      <img src="/images/me.jpg" alt="Portrait of Hao Wang">
      <p>WANG Hao<br>Assistant Professor · HKUST(GZ)</p>
    </div>

    <div class="rh-proof" aria-label="Research profile">
      <div><strong>Assistant Professor</strong><span>AI Thrust · HKUST(GZ)</span></div>
      <div><strong>60+ publications</strong><span>AI, vision, robotics &amp; agents</span></div>
      <div><strong>Academia × Industry</strong><span>Joint research &amp; sponsored projects</span></div>
    </div>
  </header>

  <section class="rh-section" id="research" aria-labelledby="research-title">
    <div class="rh-section__head">
      <div>
        <span class="rh-kicker">Research throughline</span>
        <h2 id="research-title">One program.<br>Three frontiers.</h2>
      </div>
      <p>
        Rather than treating 3D vision, world models, and agents as separate topics, I study them as a connected stack: maintain a persistent world, make it useful for action, then let the agent improve the stack itself.
      </p>
    </div>

    <div class="rh-flow" aria-label="Research progression">
      <div><strong>01 · Observe &amp; persist</strong><span>Build long-horizon spatial memory</span></div>
      <div><strong>02 · Predict &amp; control</strong><span>Turn worlds into actionable models</span></div>
      <div><strong>03 · Learn &amp; improve</strong><span>Create self-evolving AI systems</span></div>
    </div>

    <div class="rh-cards">
      <article class="rh-card">
        <div class="rh-card__top">
          <span class="rh-card__number">FRONTIER 01</span>
          <span class="rh-card__status">Latest system</span>
        </div>
        <span class="rh-card__project">HorizonStream</span>
        <h3>Persistent Worlds</h3>
        <p class="rh-card__summary">
          Long-horizon spatial intelligence needs memory that does not collapse as a scene grows. HorizonStream targets streaming 3D reconstruction beyond 10K frames with constant memory and linear-time updates—toward persistent digital worlds that agents can revisit and reason over.
        </p>
        <p class="rh-card__question">How can an agent maintain a coherent, efficient world model over an effectively unbounded stream?</p>
        <div class="rh-card__footer">
          <div class="rh-card__links">
            <a href="https://3dagentworld.github.io/horizonstream/" target="_blank" rel="noopener noreferrer">Project</a>
            <a href="https://arxiv.org/abs/2605.23889" target="_blank" rel="noopener noreferrer">Paper</a>
          </div>
          <div class="rh-related">
            <span>Related threads</span>
            <a href="https://3dagentworld.github.io/longstream/" target="_blank" rel="noopener noreferrer">LongStream</a>
            <a href="https://arxiv.org/abs/2606.30436" target="_blank" rel="noopener noreferrer">KiloGS-SLAM</a>
            <a href="https://3dagentworld.github.io/vggt4d/" target="_blank" rel="noopener noreferrer">VGGT4D</a>
            <a href="https://github.com/3DAgentWorld" target="_blank" rel="noopener noreferrer">3D Gaussian Splatting</a>
          </div>
        </div>
      </article>

      <article class="rh-card">
        <div class="rh-card__top">
          <span class="rh-card__number">FRONTIER 02</span>
          <span class="rh-card__status">New roadmap</span>
        </div>
        <span class="rh-card__project">EmbodiedWM</span>
        <h3>Actionable World Models</h3>
        <p class="rh-card__summary">
          A world model should do more than generate a plausible future. EmbodiedWM organizes the field around a progression from <strong>plausible</strong>, to <strong>controllable</strong>, to <strong>actionable</strong>—connecting perception and simulation to planning, game AI, and embodied decision-making.
        </p>
        <p class="rh-card__question">What makes a learned world useful enough for an agent to plan, intervene, and complete real tasks?</p>
        <div class="rh-card__footer">
          <div class="rh-card__links">
            <a href="https://3dagentworld.github.io/EmbodiedWM/" target="_blank" rel="noopener noreferrer">Project &amp; resources</a>
          </div>
          <div class="rh-related">
            <span>Related threads</span>
            <a href="https://arxiv.org/abs/2508.18797" target="_blank" rel="noopener noreferrer">CausalMACE</a>
            <a href="https://arxiv.org/abs/2504.18039" target="_blank" rel="noopener noreferrer">MultiMind</a>
            <a href="https://arxiv.org/abs/2310.14985" target="_blank" rel="noopener noreferrer">Avalon</a>
            <a href="https://github.com/3DAgentWorld" target="_blank" rel="noopener noreferrer">Game AI agents</a>
          </div>
        </div>
      </article>

      <article class="rh-card">
        <div class="rh-card__top">
          <span class="rh-card__number">FRONTIER 03</span>
          <span class="rh-card__status">New survey</span>
        </div>
        <span class="rh-card__project">AI4AI</span>
        <h3>AI that Improves AI</h3>
        <p class="rh-card__summary">
          AI is increasingly becoming its own improver. AI4AI maps how models and agents contribute to data, training, evaluation, and system design. This direction unifies my work on self-evolving agents, automated feedback, and diffusion-based generation and perception.
        </p>
        <p class="rh-card__question">How can agents diagnose their limits, generate useful experience, and improve reliably with less human intervention?</p>
        <div class="rh-card__footer">
          <div class="rh-card__links">
            <a href="https://3dagentworld.github.io/AI4AI-survey/" target="_blank" rel="noopener noreferrer">Project</a>
            <a href="https://github.com/3DAgentWorld/AI4AI-survey" target="_blank" rel="noopener noreferrer">Repository</a>
          </div>
          <div class="rh-related">
            <span>Related threads</span>
            <a href="https://arxiv.org/abs/2602.19180" target="_blank" rel="noopener noreferrer">VLM-guided Diffusion</a>
            <a href="https://arxiv.org/abs/2605.05680" target="_blank" rel="noopener noreferrer">MotionGRPO</a>
            <a href="https://github.com/3DAgentWorld" target="_blank" rel="noopener noreferrer">Self-evolving agents</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="rh-section" aria-label="Profile and recent news">
    <div class="rh-split">
      <article class="rh-panel">
        <span class="rh-kicker">About</span>
        <h2>Research built for open-ended worlds.</h2>
        <p>
          I am a tenure-track Assistant Professor in the AI Thrust at The Hong Kong University of Science and Technology (Guangzhou). I received my Ph.D. from Nanyang Technological University. My group works across spatial intelligence, multimodal learning, and agentic AI, with a focus on systems that remain useful beyond a single scene, task, or training cycle.
        </p>
        <div class="rh-topics" aria-label="Collaboration areas">
          <div class="rh-topic"><strong>3D reconstruction &amp; digital twins</strong><span>Streaming mapping, 3DGS, large-scale scenes</span></div>
          <div class="rh-topic"><strong>Embodied &amp; game agents</strong><span>World models, planning, multi-agent systems</span></div>
          <div class="rh-topic"><strong>Generative spatial intelligence</strong><span>Diffusion, human motion, controllable generation</span></div>
          <div class="rh-topic"><strong>Self-evolving AI</strong><span>Automated feedback, evaluation, AI for AI</span></div>
        </div>
      </article>

      <aside class="rh-panel" aria-labelledby="news-title">
        <span class="rh-kicker">Selected updates</span>
        <h2 id="news-title">Recent news</h2>
        <ul class="rh-news">
          <li><time datetime="2026-09">Sep 2026</time><span>Released <a href="https://3dagentworld.github.io/AI4AI-survey/" target="_blank" rel="noopener noreferrer">AI4AI</a>, a survey of AI systems that improve AI.</span></li>
          <li><time datetime="2026">2026</time><span>Released <a href="https://3dagentworld.github.io/EmbodiedWM/" target="_blank" rel="noopener noreferrer">EmbodiedWM</a>: from plausible to controllable to actionable world models.</span></li>
          <li><time datetime="2026-07">Jul 2026</time><span>Three papers accepted to ACM Multimedia 2026.</span></li>
          <li><time datetime="2026-06">Jun 2026</time><span><a href="https://arxiv.org/abs/2606.30436" target="_blank" rel="noopener noreferrer">KiloGS-SLAM</a> accepted to ECCV 2026.</span></li>
          <li><time datetime="2026-05">May 2026</time><span>Released <a href="https://3dagentworld.github.io/horizonstream/" target="_blank" rel="noopener noreferrer">HorizonStream</a> for long-horizon streaming 3D reconstruction.</span></li>
        </ul>
      </aside>
    </div>
  </section>

  <section class="rh-collab" aria-labelledby="collab-title">
    <div class="rh-collab__inner">
      <div>
        <span class="rh-kicker" style="color:#67e8f9;">Collaborate</span>
        <h2 id="collab-title">Build the next intelligent world together.</h2>
        <p>
          I welcome joint research, sponsored projects, and technology transfer with universities and industry teams working on 3D spatial computing, digital twins, embodied or game agents, generative AI, and self-improving systems.
        </p>
      </div>
      <a class="rh-button" href="mailto:haowang@hkust-gz.edu.cn?subject=Research%20collaboration">Start a conversation →</a>
    </div>
  </section>

  <footer class="rh-footer">
    <span>WANG Hao · AI Thrust · HKUST(GZ)</span>
    <div class="rh-footer__links">
      <a href="mailto:haowang@hkust-gz.edu.cn">Email</a>
      <a href="https://scholar.google.com/citations?user=856zi9EAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
      <a href="https://github.com/3DAgentWorld" target="_blank" rel="noopener noreferrer">3DAgentWorld</a>
    </div>
  </footer>
</div>
