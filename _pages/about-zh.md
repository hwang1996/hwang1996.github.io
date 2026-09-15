---
permalink: /zh/
title: "空间智能与智能体 AI"
excerpt: "空间智能、世界模型与自进化智能体"
author_profile: false
lang: zh-CN
---

{% include research-home-style.html %}

<div class="research-home" lang="zh-CN">
  <header class="rh-hero">
    <div>
      <div class="rh-eyebrow">空间智能 × 智能体 AI</div>
      <h1>从长时序三维建模<br>到<span>自进化智能体。</span></h1>
      <p class="rh-hero__lead">
        构建理解三维空间、借助世界模型推演与行动，并能从经验中持续进化的智能体。
      </p>
      <p class="rh-hero__meta">助理教授 · 人工智能学域 · 香港科技大学（广州）</p>
      <div class="rh-actions" aria-label="主要链接">
        <a class="rh-button rh-button--primary" href="#featured">查看演示</a>
        <a class="rh-button" href="mailto:haowang@hkust-gz.edu.cn">合作交流</a>
        <a class="rh-button" href="https://scholar.google.com/citations?user=856zi9EAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
        <a class="rh-button" href="/" lang="en">English</a>
      </div>
    </div>
    <div class="rh-portrait">
      <img src="/images/me.jpg" alt="王浩照片">
    </div>
  </header>

  <nav class="rh-path" aria-label="研究方向">
    <a href="#persistent-worlds">01 · 长时序三维建模</a>
    <a href="#world-models">02 · 面向决策的世界模型</a>
    <a href="#self-evolving-ai">03 · 自进化智能体</a>
  </nav>

  <section class="rh-section rh-academic" aria-label="学术简介与动态">
    <div class="rh-info-grid">
      <article class="rh-panel rh-panel--bio">
        <span class="rh-kicker">学术简介</span>
        <h2>让智能体理解空间、推演未来并持续进化。</h2>
        <p>香港科技大学（广州）人工智能学域长聘轨助理教授。团队聚焦空间智能、多模态学习与智能体 AI，研究如何让智能体在长时序中理解三维环境、借助世界模型推演行动后果，并从交互经验中持续进化。</p>
        <div class="rh-interest-list" aria-label="研究方向">
          <span>空间智能</span><span>世界模型</span><span>多模态智能体</span><span>自进化智能体</span>
        </div>
        <div class="rh-academic-links">
          <a href="https://scholar.google.com/citations?user=856zi9EAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
          <a href="https://github.com/3DAgentWorld" target="_blank" rel="noopener noreferrer">3DAgentWorld ↗</a>
          <a href="mailto:haowang@hkust-gz.edu.cn">邮箱</a>
        </div>
      </article>
      <aside class="rh-panel" aria-labelledby="news-title">
        <span class="rh-kicker">动态</span>
        <h2 id="news-title">近期进展</h2>
        <ul class="rh-news">
          <li><time datetime="2026-09">2026.09</time><span>发布 <a href="https://3dagentworld.github.io/AI4AI-survey/" target="_blank" rel="noopener noreferrer">AI4AI 综述</a>。</span></li>
          <li><time datetime="2026-09">2026.09</time><span>发布 <a href="https://3dagentworld.github.io/EmbodiedWM/" target="_blank" rel="noopener noreferrer">EmbodiedWM</a>。</span></li>
          <li><time datetime="2026-07">2026.07</time><span>3 篇论文被 ACM MM 2026 接收，包括 <a href="https://3dagentworld.github.io/avatar_wolf/" target="_blank" rel="noopener noreferrer">CaM-Wolf</a>。</span></li>
          <li><time datetime="2026-06">2026.06</time><span><a href="https://3dagentworld.github.io/KiloGS-SLAM/" target="_blank" rel="noopener noreferrer">KiloGS-SLAM</a> 被 ECCV 2026 接收。</span></li>
        </ul>
      </aside>
    </div>
  </section>

  <section class="rh-section" id="featured" aria-labelledby="featured-title">
    <div class="rh-section__head">
      <div>
        <h2 id="featured-title">研究主线</h2>
      </div>
      <p>从长时序三维环境建模，到服务于决策的世界模型，再到从经验中持续进化的智能体。</p>
    </div>

    <div class="rh-showcases">
      <article class="rh-showcase" id="persistent-worlds">
        <div class="rh-media">
          <video class="rh-desktop-video" autoplay muted loop playsinline controls preload="metadata" poster="/images/projects/horizonstream-poster.jpg" aria-label="HorizonStream 流式三维重建演示">
            <source src="https://3dagentworld.github.io/horizonstream/example/render/office/render.mp4" type="video/mp4" media="(min-width: 701px)">
            <a href="https://3dagentworld.github.io/horizonstream/">观看 HorizonStream 演示</a>
          </video>
          <video class="rh-mobile-video" autoplay muted loop playsinline controls preload="metadata" poster="/images/projects/horizonstream-poster.jpg" aria-label="HorizonStream 流式三维重建演示">
            <source src="/images/projects/horizonstream-mobile.mp4" type="video/mp4">
            <a href="https://3dagentworld.github.io/horizonstream/">观看 HorizonStream 演示</a>
          </video>
          <span class="rh-media__badge">仅 RGB 输入 · 10K+ 帧</span>
        </div>
        <div class="rh-showcase__copy">
          <span class="rh-kicker">01 · HorizonStream</span>
          <h3>长时序三维建模</h3>
          <p>HorizonStream <strong>仅以 RGB 视频流为输入</strong>，在超过万帧的长序列中仍能稳定完成在线三维重建，同时保持常数级内存占用和线性时间复杂度。</p>
          <div class="rh-tags"><span>空间记忆</span><span>3DGS</span><span>长序列</span></div>
          <div class="rh-links">
            <a href="https://3dagentworld.github.io/horizonstream/" target="_blank" rel="noopener noreferrer">项目主页</a>
            <a href="https://arxiv.org/abs/2605.23889" target="_blank" rel="noopener noreferrer">论文</a>
            <a href="https://huggingface.co/spaces/NicolasCC/HorizonStream_Demo" target="_blank" rel="noopener noreferrer">在线演示</a>
          </div>
        </div>
      </article>

      <article class="rh-showcase rh-showcase--reverse" id="world-models">
        <div class="rh-media">
          <div class="rh-concept rh-concept--wm" role="img" aria-label="EmbodiedWM 从合理到可控再到可行动的能力阶梯">
            <div class="rh-ladder"><small>01</small><b>Plausible</b><em>状态一致性</em></div>
            <div class="rh-ladder"><small>02</small><b>Controllable</b><em>干预保真度</em></div>
            <div class="rh-ladder"><small>03</small><b>Actionable</b><em>决策效用</em></div>
          </div>
          <span class="rh-media__badge">能力框架</span>
        </div>
        <div class="rh-showcase__copy">
          <span class="rh-kicker">02 · EmbodiedWM</span>
          <h3>面向决策的世界模型</h3>
          <p>关注世界模型如何从生成可信的未来，走向可控预测，并最终以可衡量的决策效用服务于智能体行动。</p>
          <div class="rh-tags"><span>具身智能</span><span>游戏智能体</span><span>规划</span></div>
          <div class="rh-links">
            <a href="https://3dagentworld.github.io/EmbodiedWM/" target="_blank" rel="noopener noreferrer">查看框架</a>
          </div>
        </div>
      </article>

      <article class="rh-showcase" id="self-evolving-ai">
        <div class="rh-media">
          <div class="rh-concept rh-concept--ai" role="img" aria-label="AI4AI 自我改进闭环">
            <div class="rh-loop"><div class="rh-loop__text">改进者<span>成为</span>被改进者</div></div>
          </div>
          <span class="rh-media__badge">自我改进闭环</span>
        </div>
        <div class="rh-showcase__copy">
          <span class="rh-kicker">03 · AI4AI</span>
          <h3>让 AI 持续改进 AI</h3>
          <p>系统梳理 AI 如何优化数据、训练、评测与研发流程，并进一步走向能够持续改进自身的智能系统。</p>
          <div class="rh-tags"><span>自进化</span><span>智能体系统</span><span>自动化反馈</span></div>
          <div class="rh-links">
            <a href="https://3dagentworld.github.io/AI4AI-survey/paper.html" target="_blank" rel="noopener noreferrer">阅读综述</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="rh-section rh-highlights" aria-labelledby="highlights-title">
    <div class="rh-section__head">
      <div>
        <h2 id="highlights-title">代表工作</h2>
      </div>
      <p>具身导航、多模态游戏智能体与扩散模型驱动的三维感知。</p>
    </div>

    <div class="rh-work-grid">
      <article class="rh-work-card">
        <a class="rh-work-card__visual" href="https://3dagentworld.github.io/evolvenav/" target="_blank" rel="noopener noreferrer"><img src="/images/projects/evolvenav.jpg" loading="lazy" decoding="async" alt="EvolveNav 自进化导航智能体"></a>
        <div class="rh-work-card__body">
          <span>arXiv 2026 · 具身导航</span><h3>EvolveNav</h3>
          <p>在行动前推演候选路径，并将历史轨迹沉淀为持续演化的规则记忆，从而提升零样本目标导航。</p>
          <div class="rh-paper-links"><a href="https://3dagentworld.github.io/evolvenav/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2606.18235" target="_blank" rel="noopener noreferrer">论文</a></div>
        </div>
      </article>
      <article class="rh-work-card">
        <a class="rh-work-card__visual" href="https://3dagentworld.github.io/avatar_wolf/" target="_blank" rel="noopener noreferrer"><img src="/images/projects/cam-wolf.jpg" loading="lazy" decoding="async" alt="CaM-Wolf 多模态社交推理游戏智能体"></a>
        <div class="rh-work-card__body">
          <span>ACM MM 2026 · 多模态智能体</span><h3>CaM-Wolf</h3>
          <p>融合视频感知、因果推理与虚拟人生成，可参与社交推理游戏的多模态智能体。</p>
          <div class="rh-paper-links"><a href="https://3dagentworld.github.io/avatar_wolf/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://openreview.net/forum?id=djnKfsiN3p" target="_blank" rel="noopener noreferrer">论文</a></div>
        </div>
      </article>
      <article class="rh-work-card">
        <a class="rh-work-card__visual" href="https://arxiv.org/abs/2602.19180" target="_blank" rel="noopener noreferrer"><img src="/images/projects/human_mesh_recovery.png" loading="lazy" decoding="async" alt="视觉语言模型引导的扩散式人体网格恢复结果"></a>
        <div class="rh-work-card__body">
          <span>CVPR 2026 · 扩散感知</span><h3>VLM-Guided Diffusion HMR</h3>
          <p>利用视觉语言模型引导扩散推理，在遮挡与复杂场景下稳健恢复三维人体网格。</p>
          <div class="rh-paper-links"><a href="https://arxiv.org/abs/2602.19180" target="_blank" rel="noopener noreferrer">论文</a></div>
        </div>
      </article>
    </div>
    <div class="rh-more">
      <span>更多：</span>
      <a href="https://3dagentworld.github.io/longstream/" target="_blank" rel="noopener noreferrer">LongStream ↗</a>
      <a href="https://3dagentworld.github.io/KiloGS-SLAM/" target="_blank" rel="noopener noreferrer">KiloGS-SLAM ↗</a>
      <a href="https://3dagentworld.github.io/vggt4d/" target="_blank" rel="noopener noreferrer">VGGT4D ↗</a>
      <a href="https://3dagentworld.github.io/MotionGRPO/" target="_blank" rel="noopener noreferrer">MotionGRPO ↗</a>
    </div>
  </section>

  <section class="rh-collab" aria-labelledby="collab-title">
    <div>
      <h2 id="collab-title">共同推动空间智能与智能体研究落地。</h2>
      <p>期待与学界和产业界围绕长时序三维建模、数字孪生、具身与游戏智能体、世界模型和自进化系统开展合作。</p>
    </div>
    <a class="rh-button" href="mailto:haowang@hkust-gz.edu.cn?subject=Research%20collaboration">联系合作 →</a>
  </section>

  <footer class="rh-footer">
    <span>王浩 · 人工智能学域 · 香港科技大学（广州）</span>
    <div class="rh-footer__links">
      <a href="mailto:haowang@hkust-gz.edu.cn">邮箱</a>
      <a href="https://scholar.google.com/citations?user=856zi9EAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
      <a href="https://github.com/3DAgentWorld" target="_blank" rel="noopener noreferrer">3DAgentWorld</a>
      <a href="/" lang="en">English</a>
    </div>
    <span class="rh-updated">最后更新：2026 年 9 月</span>
  </footer>
</div>
