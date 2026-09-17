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
        Building agents that understand 3D worlds, act through world models, and improve through experience.
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

  <section class="rh-section rh-academic" aria-label="Academic profile and news">
    <div class="rh-info-grid">
      <article class="rh-panel rh-panel--bio">
        <span class="rh-kicker">Academic profile</span>
        <p>Hao Wang is a tenure-track Assistant Professor in the AI Thrust at HKUST(GZ). He received his Ph.D. from Nanyang Technological University, Singapore. His research lies at the intersection of spatial intelligence and agentic AI, with more than 70 academic paper published. He serves as an Area Chair for ACL ARR and a Senior Program Committee (SPC) member for AAAI.</p>
        <div class="rh-interest-list" aria-label="Research interests">
          <span>Spatial intelligence</span><span>World models</span><span>Multimodal agents</span><span>Self-evolution</span>
        </div>
        <div class="rh-academic-links">
          <a href="https://scholar.google.com/citations?user=856zi9EAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
          <a href="https://github.com/3DAgentWorld" target="_blank" rel="noopener noreferrer">3DAgentWorld ↗</a>
          <a href="mailto:haowang@hkust-gz.edu.cn">Email</a>
        </div>
      </article>
      <aside class="rh-panel" aria-labelledby="news-title">
        <span class="rh-kicker">Updates</span>
        <h2 id="news-title">Recent news</h2>
        <ul class="rh-news">
          <li><time datetime="2026-09">Sep 2026</time><span>Released the <a href="https://3dagentworld.github.io/AI4AI-survey/" target="_blank" rel="noopener noreferrer">AI4AI survey</a>.</span></li>
          <li><time datetime="2026-09">Sep 2026</time><span>Released <a href="https://3dagentworld.github.io/EmbodiedWM/" target="_blank" rel="noopener noreferrer">EmbodiedWM</a>.</span></li>
          <li><time datetime="2026-07">Jul 2026</time><span>Three papers at ACM MM 2026.</span></li>
          <li><time datetime="2026-06">Jun 2026</time><span><a href="https://3dagentworld.github.io/KiloGS-SLAM/" target="_blank" rel="noopener noreferrer">KiloGS-SLAM</a> accepted to ECCV 2026.</span></li>
        </ul>
      </aside>
    </div>
  </section>

  <section class="rh-section" id="featured" aria-labelledby="featured-title">
    <div class="rh-section__head">
      <div>
        <h2 id="featured-title">Latest updates.</h2>
      </div>
    </div>

    <div class="rh-showcases">
      <article class="rh-showcase" id="persistent-worlds">
        <div class="rh-media">
          <video class="rh-desktop-video" autoplay muted loop playsinline controls preload="metadata" poster="/images/projects/horizonstream-poster.jpg" aria-label="HorizonStream streaming 3D reconstruction demo">
            <source src="https://3dagentworld.github.io/horizonstream/example/render/office/render.mp4" type="video/mp4" media="(min-width: 701px)">
            <a href="https://3dagentworld.github.io/horizonstream/">Watch the HorizonStream demo</a>
          </video>
          <video class="rh-mobile-video" autoplay muted loop playsinline controls preload="metadata" poster="/images/projects/horizonstream-poster.jpg" aria-label="HorizonStream streaming 3D reconstruction demo">
            <source src="/images/projects/horizonstream-mobile.mp4" type="video/mp4">
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

  <section class="rh-section rh-highlights" aria-labelledby="highlights-title">
    <div class="rh-section__head">
      <div>
        <h2 id="highlights-title">Selected highlights.</h2>
      </div>
    </div>

    <div class="rh-highlight-groups">
      <details class="rh-highlight-group" name="research-highlights">
        <summary>
          <span class="rh-highlight-group__visual"><img src="/images/projects/longstream.png" alt="LongStream metric-scale 3D reconstruction" loading="lazy"><span class="rh-highlight-group__index">01</span></span>
          <span class="rh-highlight-group__title"><strong>Spatial Intelligence</strong><small>Long-horizon 3D perception, reconstruction, SLAM, and human-centered spatial intelligence</small></span>
          <span class="rh-highlight-group__toggle" aria-hidden="true"></span>
        </summary>
        <div class="rh-project-list">
          <article class="rh-project-item">
            <span>arXiv 2026</span><h3>HorizonStream</h3>
            <p>RGB-only streaming 3D reconstruction beyond 10K frames.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/horizonstream/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2605.23889" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/3DAgentWorld/HorizonStream" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
          <article class="rh-project-item">
            <span>ECCV 2026</span><h3>KiloGS-SLAM</h3>
            <p>Monocular 3D Gaussian SLAM for kilometer-scale outdoor scenes.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/KiloGS-SLAM/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2606.30436" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/3DAgentWorld/KiloGS-SLAM" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
          <article class="rh-project-item">
            <span>CVPR 2026</span><h3>LongStream</h3>
            <p>Streaming autoregressive visual geometry for long sequences.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/longstream/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2602.13172" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/3DAgentWorld/LongStream" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
          <article class="rh-project-item">
            <span>CVPR 2026 Findings</span><h3>VGGT4D</h3>
            <p>Training-free 4D reconstruction by mining motion cues from visual geometry transformers.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/vggt4d/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2511.19971" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/3DAgentWorld/VGGT4D" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
          <article class="rh-project-item">
            <span>IEEE TVCG 2026</span><h3>MultiGO++</h3>
            <p>Geometry-texture collaboration for monocular clothed-human reconstruction.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/multigo++/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2603.04993" target="_blank" rel="noopener noreferrer">Paper</a></div>
          </article>
          <article class="rh-project-item">
            <span>ICML 2026</span><h3>MotionGRPO</h3>
            <p>RL post-training for diffusion-based egocentric motion recovery.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/MotionGRPO/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2605.05680" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/3DAgentWorld/MotionGRPO" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
          <article class="rh-project-item">
            <span>AAAI 2026</span><h3>FastAnimate</h3>
            <p>Learnable template construction and pose deformation for fast 3D avatar animation.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/fastanimate/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2512.01444" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/Moronrift08/FastAnimate" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
          <article class="rh-project-item">
            <span>ICCV 2025</span><h3>S3PO-GS</h3>
            <p>Scale-consistent RGB-only Gaussian SLAM for outdoor scenes.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/S3PO-GS/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2507.03737" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/3DAgentWorld/S3PO-GS" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
          <article class="rh-project-item">
            <span>ICCV 2025</span><h3>RegGS</h3>
            <p>Unposed sparse-view Gaussian splatting through 3DGS registration.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/reggs/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2507.08136" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/3DAgentWorld/RegGS" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
          <article class="rh-project-item">
            <span>ICRA 2025</span><h3>OpenGS-SLAM</h3>
            <p>RGB-only Gaussian splatting SLAM for unbounded outdoor scenes.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/opengs-slam/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2502.15633" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/3DAgentWorld/OpenGS-SLAM" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
          <article class="rh-project-item">
            <span>ICLR 2025</span><h3>GraphGS</h3>
            <p>Graph-guided reconstruction of large open scenes from images.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/graphgs/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2502.17377" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/3DAgentWorld/GraphGS" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
          <article class="rh-project-item">
            <span>NeurIPS 2024</span><h3>GVKF</h3>
            <p>Efficient open-scene surface reconstruction with Gaussian voxel kernels.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/gvkf/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2411.01853" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/3DAgentWorld/GVKF" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
        </div>
      </details>

      <details class="rh-highlight-group" name="research-highlights">
        <summary>
          <span class="rh-highlight-group__visual"><img src="/images/projects/evolvenav.jpg" alt="EvolveNav self-evolving navigation agent" loading="lazy"><span class="rh-highlight-group__index">02</span></span>
          <span class="rh-highlight-group__title"><strong>World Models</strong><small>From predictive environments to actionable and self-improving agents</small></span>
          <span class="rh-highlight-group__toggle" aria-hidden="true"></span>
        </summary>
        <div class="rh-project-list rh-project-list--two">
          <article class="rh-project-item">
            <span>ICLR 2026</span><h3>ReCAPA</h3>
            <p>Hierarchical predictive correction that prevents cascading failures in embodied agents.</p>
            <div class="rh-paper-links"><a href="https://sunandreas0437-svg.github.io/recapa-project-page/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2604.21232" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/dmsn26/ReCAPA" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
          <article class="rh-project-item">
            <span>2026 · Framework &amp; Survey</span><h3>EmbodiedWM</h3>
            <p>A capability framework for plausible, controllable, and actionable embodied world models.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/EmbodiedWM/" target="_blank" rel="noopener noreferrer">Explore</a></div>
          </article>
          <article class="rh-project-item">
            <span>arXiv 2026</span><h3>EvolveNav</h3>
            <p>Self-evolving rule memory and outcome-aware reasoning for zero-shot navigation.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/evolvenav/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://arxiv.org/abs/2606.18235" target="_blank" rel="noopener noreferrer">Paper</a></div>
          </article>
          <article class="rh-project-item">
            <span>2026 · Survey</span><h3>AI4AI</h3>
            <p>A unified view of AI systems that improve data, training, evaluation, workflows, and themselves.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/AI4AI-survey/paper.html" target="_blank" rel="noopener noreferrer">Read survey</a></div>
          </article>
        </div>
      </details>

      <details class="rh-highlight-group" name="research-highlights">
        <summary>
          <span class="rh-highlight-group__visual"><img src="/images/projects/cam-wolf.jpg" alt="CaM-Wolf multimodal social deduction agent" loading="lazy"><span class="rh-highlight-group__index">03</span></span>
          <span class="rh-highlight-group__title"><strong>Game AI</strong><small>Multimodal, strategic, and socially intelligent agents</small></span>
          <span class="rh-highlight-group__toggle" aria-hidden="true"></span>
        </summary>
        <div class="rh-project-list">
          <article class="rh-project-item">
            <span>ACM MM 2026</span><h3>CaM-Wolf</h3>
            <p>Causal-aware multimodal agents for social deduction games.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/avatar_wolf/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://openreview.net/forum?id=djnKfsiN3p" target="_blank" rel="noopener noreferrer">Paper</a></div>
          </article>
          <article class="rh-project-item">
            <span>ACL 2026</span><h3>The Stackelberg Speaker</h3>
            <p>Strategic persuasive communication for social deduction agents.</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/leader_follower/" target="_blank" rel="noopener noreferrer">Project</a><a href="https://aclanthology.org/2026.acl-long.250/" target="_blank" rel="noopener noreferrer">Paper</a></div>
          </article>
          <article class="rh-project-item">
            <span>EMNLP 2025</span><h3>VistaWise</h3>
            <p>A cost-effective Minecraft agent grounded by a cross-modal knowledge graph.</p>
            <div class="rh-paper-links"><a href="https://aclanthology.org/2025.emnlp-main.1111/" target="_blank" rel="noopener noreferrer">Paper</a></div>
          </article>
          <article class="rh-project-item">
            <span>EMNLP Findings 2025</span><h3>CausalMACE</h3>
            <p>Causality-empowered multi-agent collaboration in Minecraft.</p>
            <div class="rh-paper-links"><a href="https://aclanthology.org/2025.findings-emnlp.777/" target="_blank" rel="noopener noreferrer">Paper</a></div>
          </article>
          <article class="rh-project-item">
            <span>ACM MM 2025</span><h3>MultiMind</h3>
            <p>Multimodal reasoning and theory of mind for Werewolf agents.</p>
            <div class="rh-paper-links"><a href="https://arxiv.org/abs/2504.18039" target="_blank" rel="noopener noreferrer">Paper</a></div>
          </article>
          <article class="rh-project-item">
            <span>EMNLP 2024</span><h3>LLM-Based Agent Society</h3>
            <p>Studying collaboration, confrontation, and social behavior among LLM agents in Avalon.</p>
            <div class="rh-paper-links"><a href="https://aclanthology.org/2024.emnlp-main.7/" target="_blank" rel="noopener noreferrer">Paper</a><a href="https://github.com/3DAgentWorld/LLM-Game-Agent" target="_blank" rel="noopener noreferrer">Code</a></div>
          </article>
        </div>
      </details>
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
  <script src="/assets/js/research-highlights.js" defer></script>
</div>
