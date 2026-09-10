---
permalink: /
title: "Spatial Intelligence & Agentic AI"
excerpt: "Spatial Intelligence, World Models, and Self-Evolving Agents"
author_profile: false
redirect_from:
  - about/
  - about.html
---
{% include research-home-style.html %}

<div class="research-home" lang="en">
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
        <a class="rh-button" href="/zh/" lang="zh-CN">中文版</a>
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
          <video class="rh-desktop-video" autoplay muted loop playsinline controls preload="metadata" poster="https://3dagentworld.github.io/horizonstream/example/render/office/render_poster.jpg" aria-label="HorizonStream streaming 3D reconstruction demo">
            <source src="https://3dagentworld.github.io/horizonstream/example/render/office/render.mp4" type="video/mp4" media="(min-width: 701px)">
            <a href="https://3dagentworld.github.io/horizonstream/">Watch the HorizonStream demo</a>
          </video>
          <video class="rh-mobile-video" muted loop playsinline controls preload="none" poster="https://3dagentworld.github.io/horizonstream/example/render/office/render_poster.jpg" aria-label="HorizonStream streaming 3D reconstruction demo">
            <source src="https://3dagentworld.github.io/horizonstream/example/render/office/render.mp4" type="video/mp4">
            <a href="https://3dagentworld.github.io/horizonstream/">Watch the HorizonStream demo</a>
          </video>
          <span class="rh-media__badge">RGB input only · 10K+ frames</span>
        </div>
        <div class="rh-showcase__copy">
          <span class="rh-kicker">01 · HorizonStream</span>
          <h3>Persistent Worlds</h3>
          <p>Using <strong>RGB input only</strong>, HorizonStream delivers stable streaming 3D reconstruction beyond 10K frames, with constant memory and linear time.</p>
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
        <h2 id="highlights-title">Selected highlights.</h2>
      </div>
    </div>

    <div class="rh-work-grid">
      <a class="rh-work-card" href="https://3dagentworld.github.io/longstream/" target="_blank" rel="noopener noreferrer">
        <img src="/images/projects/longstream.png" loading="lazy" decoding="async" alt="LongStream streaming 3D reconstruction results">
        <div class="rh-work-card__body"><span>3D reconstruction</span><h3>LongStream</h3></div>
      </a>
      <a class="rh-work-card" href="https://3dagentworld.github.io/avatar_wolf/" target="_blank" rel="noopener noreferrer">
        <img src="https://3dagentworld.github.io/avatar_wolf/static/images/motivation.png" loading="lazy" decoding="async" alt="CaM-Wolf multimodal social deduction game agent">
        <div class="rh-work-card__body"><span>Multimodal game agent · ACM MM 2026</span><h3>CaM-Wolf</h3></div>
      </a>
      <a class="rh-work-card" href="https://arxiv.org/abs/2602.19180" target="_blank" rel="noopener noreferrer">
        <img src="/images/projects/human_mesh_recovery.png" loading="lazy" decoding="async" alt="VLM-guided diffusion human mesh recovery results">
        <div class="rh-work-card__body"><span>Diffusion × perception</span><h3>VLM-Guided Diffusion HMR</h3></div>
      </a>
    </div>
    <div class="rh-more">
      <span>More:</span>
      <a href="https://3dagentworld.github.io/KiloGS-SLAM/" target="_blank" rel="noopener noreferrer">KiloGS-SLAM ↗</a>
      <a href="https://3dagentworld.github.io/vggt4d/" target="_blank" rel="noopener noreferrer">VGGT4D ↗</a>
      <a href="https://3dagentworld.github.io/MotionGRPO/" target="_blank" rel="noopener noreferrer">MotionGRPO ↗</a>
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
      <a href="/zh/" lang="zh-CN">中文版</a>
    </div>
    <span class="rh-updated">Last updated: September 2026</span>
  </footer>
</div>
