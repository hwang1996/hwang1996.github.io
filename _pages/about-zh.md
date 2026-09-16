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

  <section class="rh-section rh-academic" aria-label="学术简介与动态">
    <div class="rh-info-grid">
      <article class="rh-panel rh-panel--bio">
        <span class="rh-kicker">学术简介</span>
        <p>香港科技大学（广州）人工智能学域长聘轨助理教授，博士毕业于新加坡南洋理工大学。团队聚焦结合空间智能与智能体 AI，已发表 70 余篇学术论文，担任 ACL ARR Area Chair、AAAI 高级程序委员会委员（SPC），入选广东省青年拔尖人才。</p>
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
        <h2 id="featured-title">最新进展</h2>
      </div>
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
          <div class="rh-tags"><span>具身智能</span><span>游戏智能</span><span>规划</span></div>
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
    </div>

    <div class="rh-highlight-groups">
      <details class="rh-highlight-group" name="research-highlights">
        <summary>
          <span class="rh-highlight-group__visual"><img src="/images/projects/longstream.png" alt="LongStream 长距离三维重建" loading="lazy"><span class="rh-highlight-group__index">01</span></span>
          <span class="rh-highlight-group__title"><strong>空间智能</strong><small>长时序三维感知、场景重建、SLAM 与人体空间理解</small></span>
          <span class="rh-highlight-group__toggle" aria-hidden="true"></span>
        </summary>
        <div class="rh-project-list">
          <article class="rh-project-item">
            <span>arXiv 2026</span><h3>HorizonStream</h3>
            <p>仅以 RGB 视频为输入，实现万帧级稳定流式三维重建。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/horizonstream/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2605.23889" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/3DAgentWorld/HorizonStream" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
          <article class="rh-project-item">
            <span>ECCV 2026</span><h3>KiloGS-SLAM</h3>
            <p>面向公里级室外场景的单目 3D Gaussian SLAM。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/KiloGS-SLAM/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2606.30436" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/3DAgentWorld/KiloGS-SLAM" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
          <article class="rh-project-item">
            <span>CVPR 2026</span><h3>LongStream</h3>
            <p>面向长序列的流式自回归视觉几何建模。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/longstream/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2602.13172" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/3DAgentWorld/LongStream" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
          <article class="rh-project-item">
            <span>CVPR 2026 Findings</span><h3>VGGT4D</h3>
            <p>从视觉几何 Transformer 中挖掘运动线索，实现免训练的四维场景重建。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/vggt4d/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2511.19971" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/3DAgentWorld/VGGT4D" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
          <article class="rh-project-item">
            <span>IEEE TVCG 2026</span><h3>MultiGO++</h3>
            <p>通过几何与纹理协同，从单张图像重建带纹理的三维服装人体。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/multigo++/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2603.04993" target="_blank" rel="noopener noreferrer">论文</a></div>
          </article>
          <article class="rh-project-item">
            <span>ICML 2026</span><h3>MotionGRPO</h3>
            <p>以强化学习后训练提升扩散式第一视角人体运动恢复。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/MotionGRPO/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2605.05680" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/3DAgentWorld/MotionGRPO" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
          <article class="rh-project-item">
            <span>AAAI 2026</span><h3>FastAnimate</h3>
            <p>以可学习模板与姿态变形实现高效三维人体动画。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/fastanimate/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2512.01444" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/Moronrift08/FastAnimate" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
          <article class="rh-project-item">
            <span>ICCV 2025</span><h3>S3PO-GS</h3>
            <p>以全局尺度一致的三维高斯点图提升室外单目 SLAM。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/S3PO-GS/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2507.03737" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/3DAgentWorld/S3PO-GS" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
          <article class="rh-project-item">
            <span>ICCV 2025</span><h3>RegGS</h3>
            <p>通过 3DGS 配准，从稀疏且无相机位姿的图像中重建场景。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/reggs/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2507.08136" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/3DAgentWorld/RegGS" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
          <article class="rh-project-item">
            <span>ICRA 2025</span><h3>OpenGS-SLAM</h3>
            <p>仅以 RGB 图像为输入，面向无边界室外场景的 Gaussian SLAM。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/opengs-slam/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2502.15633" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/3DAgentWorld/OpenGS-SLAM" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
          <article class="rh-project-item">
            <span>ICLR 2025</span><h3>GraphGS</h3>
            <p>利用相机图结构，从图像中高效重建大规模开放场景。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/graphgs/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2502.17377" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/3DAgentWorld/GraphGS" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
          <article class="rh-project-item">
            <span>NeurIPS 2024</span><h3>GVKF</h3>
            <p>以高斯体素核函数高效重建开放场景表面。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/gvkf/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2411.01853" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/3DAgentWorld/GVKF" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
        </div>
      </details>

      <details class="rh-highlight-group" name="research-highlights">
        <summary>
          <span class="rh-highlight-group__visual"><img src="/images/projects/evolvenav.jpg" alt="EvolveNav 自进化导航智能体" loading="lazy"><span class="rh-highlight-group__index">02</span></span>
          <span class="rh-highlight-group__title"><strong>世界模型</strong><small>从环境预测走向行动决策与智能体自进化</small></span>
          <span class="rh-highlight-group__toggle" aria-hidden="true"></span>
        </summary>
        <div class="rh-project-list rh-project-list--two">
          <article class="rh-project-item">
            <span>ICLR 2026</span><h3>ReCAPA</h3>
            <p>通过分层预测校正，抑制具身智能体长时序任务中的错误级联。</p>
            <div class="rh-paper-links"><a href="https://sunandreas0437-svg.github.io/recapa-project-page/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2604.21232" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/dmsn26/ReCAPA" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
          <article class="rh-project-item">
            <span>2026 · 框架与综述</span><h3>EmbodiedWM</h3>
            <p>从生成可信、动作可控到服务决策，系统刻画具身世界模型的能力层级。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/EmbodiedWM/" target="_blank" rel="noopener noreferrer">查看</a></div>
          </article>
          <article class="rh-project-item">
            <span>arXiv 2026</span><h3>EvolveNav</h3>
            <p>通过结果预判与自进化规则记忆，让零样本导航智能体持续改进。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/evolvenav/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://arxiv.org/abs/2606.18235" target="_blank" rel="noopener noreferrer">论文</a></div>
          </article>
          <article class="rh-project-item">
            <span>2026 · 综述</span><h3>AI4AI</h3>
            <p>系统梳理 AI 如何改进数据、训练、评测、研发流程乃至自身。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/AI4AI-survey/paper.html" target="_blank" rel="noopener noreferrer">阅读综述</a></div>
          </article>
        </div>
      </details>

      <details class="rh-highlight-group" name="research-highlights">
        <summary>
          <span class="rh-highlight-group__visual"><img src="/images/projects/cam-wolf.jpg" alt="CaM-Wolf 多模态社交推理智能体" loading="lazy"><span class="rh-highlight-group__index">03</span></span>
          <span class="rh-highlight-group__title"><strong>游戏智能</strong><small>多模态交互、策略推理与社会智能</small></span>
          <span class="rh-highlight-group__toggle" aria-hidden="true"></span>
        </summary>
        <div class="rh-project-list">
          <article class="rh-project-item">
            <span>ACM MM 2026</span><h3>CaM-Wolf</h3>
            <p>面向社交推理游戏的因果感知多模态智能体。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/avatar_wolf/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://openreview.net/forum?id=djnKfsiN3p" target="_blank" rel="noopener noreferrer">论文</a></div>
          </article>
          <article class="rh-project-item">
            <span>ACL 2026</span><h3>The Stackelberg Speaker</h3>
            <p>利用博弈建模优化社交推理智能体的说服性沟通。</p>
            <div class="rh-paper-links"><a href="https://3dagentworld.github.io/leader_follower/" target="_blank" rel="noopener noreferrer">项目</a><a href="https://aclanthology.org/2026.acl-long.250/" target="_blank" rel="noopener noreferrer">论文</a></div>
          </article>
          <article class="rh-project-item">
            <span>EMNLP 2025</span><h3>VistaWise</h3>
            <p>以跨模态知识图谱构建高效、低成本的 Minecraft 智能体。</p>
            <div class="rh-paper-links"><a href="https://aclanthology.org/2025.emnlp-main.1111/" target="_blank" rel="noopener noreferrer">论文</a></div>
          </article>
          <article class="rh-project-item">
            <span>EMNLP Findings 2025</span><h3>CausalMACE</h3>
            <p>以因果推理增强 Minecraft 多智能体协作。</p>
            <div class="rh-paper-links"><a href="https://aclanthology.org/2025.findings-emnlp.777/" target="_blank" rel="noopener noreferrer">论文</a></div>
          </article>
          <article class="rh-project-item">
            <span>ACM MM 2025</span><h3>MultiMind</h3>
            <p>融合多模态推理与心智理论的狼人杀智能体。</p>
            <div class="rh-paper-links"><a href="https://arxiv.org/abs/2504.18039" target="_blank" rel="noopener noreferrer">论文</a></div>
          </article>
          <article class="rh-project-item">
            <span>EMNLP 2024</span><h3>LLM-Based Agent Society</h3>
            <p>以 Avalon 为试验场，研究大语言模型智能体之间的协作、对抗与社会行为。</p>
            <div class="rh-paper-links"><a href="https://aclanthology.org/2024.emnlp-main.7/" target="_blank" rel="noopener noreferrer">论文</a><a href="https://github.com/3DAgentWorld/LLM-Game-Agent" target="_blank" rel="noopener noreferrer">代码</a></div>
          </article>
        </div>
      </details>
    </div>
  </section>

  <section class="rh-collab" aria-labelledby="collab-title">
    <div>
      <h2 id="collab-title">共同推动空间智能与智能体研究落地。</h2>
      <p>期待与学界和产业界围绕长时序三维建模、数字孪生、具身智能与游戏智能、世界模型和自进化系统开展合作。</p>
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
  <script src="/assets/js/research-highlights.js" defer></script>
</div>
