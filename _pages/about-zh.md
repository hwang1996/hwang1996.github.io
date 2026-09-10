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
      <h1>从持久世界<br>到<span>自进化智能体。</span></h1>
      <p class="rh-hero__lead">
        构建能够理解三维世界、借助世界模型行动，并从经验中持续自我提升的智能体。
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
    <a href="#persistent-worlds">01 · 持久世界</a>
    <a href="#world-models">02 · 可行动世界模型</a>
    <a href="#self-evolving-ai">03 · 自进化 AI</a>
  </nav>

  <section class="rh-section" id="featured" aria-labelledby="featured-title">
    <div class="rh-section__head">
      <div>
        <span class="rh-kicker">代表工作</span>
        <h2 id="featured-title">直观看见研究如何运行。</h2>
      </div>
      <p>三条相互连接的前沿方向：感知并保持世界，将世界用于行动，再改进智能本身。</p>
    </div>

    <div class="rh-showcases">
      <article class="rh-showcase" id="persistent-worlds">
        <div class="rh-media">
          <video class="rh-desktop-video" autoplay muted loop playsinline controls preload="metadata" poster="https://3dagentworld.github.io/horizonstream/example/render/office/render_poster.jpg" aria-label="HorizonStream 流式三维重建演示">
            <source src="https://3dagentworld.github.io/horizonstream/example/render/office/render.mp4" type="video/mp4" media="(min-width: 701px)">
            <a href="https://3dagentworld.github.io/horizonstream/">观看 HorizonStream 演示</a>
          </video>
          <video class="rh-mobile-video" muted loop playsinline controls preload="none" poster="https://3dagentworld.github.io/horizonstream/example/render/office/render_poster.jpg" aria-label="HorizonStream 流式三维重建演示">
            <source src="https://3dagentworld.github.io/horizonstream/example/render/office/render.mp4" type="video/mp4">
            <a href="https://3dagentworld.github.io/horizonstream/">观看 HorizonStream 演示</a>
          </video>
          <span class="rh-media__badge">仅 RGB 输入 · 10K+ 帧</span>
        </div>
        <div class="rh-showcase__copy">
          <span class="rh-kicker">01 · HorizonStream</span>
          <h3>持久世界</h3>
          <p>HorizonStream <strong>仅使用 RGB 输入</strong>，即可在万帧以上序列中实现稳定的流式三维重建，并保持常数内存与线性时间复杂度。</p>
          <div class="rh-tags"><span>空间记忆</span><span>3DGS</span><span>长时程</span></div>
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
          <h3>可行动世界模型</h3>
          <p>推动世界模型从合理生成走向可控预测，并最终带来可衡量的决策收益。</p>
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
          <h3>用 AI 改进 AI</h3>
          <p>统一理解 AI 如何改进数据、训练、评测、工作流，并最终实现自身的持续进化。</p>
          <div class="rh-tags"><span>自进化</span><span>AI 智能体</span><span>自动反馈</span></div>
          <div class="rh-links">
            <a href="https://3dagentworld.github.io/AI4AI-survey/paper.html" target="_blank" rel="noopener noreferrer">阅读综述</a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="rh-section" aria-labelledby="highlights-title">
    <div class="rh-section__head">
      <div>
        <span class="rh-kicker">相关基础</span>
        <h2 id="highlights-title">精选代表工作。</h2>
      </div>
    </div>

    <div class="rh-work-grid">
      <a class="rh-work-card" href="https://3dagentworld.github.io/longstream/" target="_blank" rel="noopener noreferrer">
        <img src="/images/projects/longstream.png" loading="lazy" decoding="async" alt="LongStream 流式三维重建结果">
        <div class="rh-work-card__body"><span>三维重建</span><h3>LongStream</h3></div>
      </a>
      <a class="rh-work-card" href="https://3dagentworld.github.io/avatar_wolf/" target="_blank" rel="noopener noreferrer">
        <img src="https://3dagentworld.github.io/avatar_wolf/static/images/motivation.png" loading="lazy" decoding="async" alt="CaM-Wolf 多模态社交推理游戏智能体">
        <div class="rh-work-card__body"><span>多模态游戏智能体 · ACM MM 2026</span><h3>CaM-Wolf</h3></div>
      </a>
      <a class="rh-work-card" href="https://arxiv.org/abs/2602.19180" target="_blank" rel="noopener noreferrer">
        <img src="/images/projects/human_mesh_recovery.png" loading="lazy" decoding="async" alt="视觉语言模型引导的扩散式人体网格恢复结果">
        <div class="rh-work-card__body"><span>扩散模型 × 感知</span><h3>VLM-Guided Diffusion HMR</h3></div>
      </a>
    </div>
    <div class="rh-more">
      <span>更多：</span>
      <a href="https://3dagentworld.github.io/KiloGS-SLAM/" target="_blank" rel="noopener noreferrer">KiloGS-SLAM ↗</a>
      <a href="https://3dagentworld.github.io/vggt4d/" target="_blank" rel="noopener noreferrer">VGGT4D ↗</a>
      <a href="https://3dagentworld.github.io/MotionGRPO/" target="_blank" rel="noopener noreferrer">MotionGRPO ↗</a>
    </div>
  </section>

  <section class="rh-section" aria-label="简介与动态">
    <div class="rh-info-grid">
      <article class="rh-panel">
        <span class="rh-kicker">个人简介</span>
        <h2>面向开放世界的智能研究。</h2>
        <p>香港科技大学（广州）人工智能学域长聘轨助理教授。团队聚焦空间智能、多模态学习与智能体 AI，研究从持久三维环境延伸至自进化智能体。</p>
      </article>
      <aside class="rh-panel" aria-labelledby="news-title">
        <span class="rh-kicker">动态</span>
        <h2 id="news-title">近期进展</h2>
        <ul class="rh-news">
          <li><time datetime="2026-09">2026.09</time><span>发布 AI4AI 综述。</span></li>
          <li><time datetime="2026-09">2026.09</time><span>发布 EmbodiedWM。</span></li>
          <li><time datetime="2026-07">2026.07</time><span>3 篇论文被 ACM MM 2026 接收。</span></li>
          <li><time datetime="2026-06">2026.06</time><span>KiloGS-SLAM 被 ECCV 2026 接收。</span></li>
        </ul>
      </aside>
    </div>
  </section>

  <section class="rh-collab" aria-labelledby="collab-title">
    <div>
      <h2 id="collab-title">共同构建下一代智能世界。</h2>
      <p>欢迎围绕三维空间计算、数字孪生、具身与游戏智能体、生成式 AI 和自进化系统开展联合研究与产业合作。</p>
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
