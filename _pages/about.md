---
permalink: /
title: "About Me"
excerpt: "About Me"
author_profile: true
redirect_from: 
  - about/
  - about.html
---

<style>
body, p, li {
  text-align: justify;
}
</style>

<!-- I am a tenure-track Assistant Professor of the AI Thrust at [The Hong Kong University of Science and Technology (Guangzhou)](https://hkust-gz.edu.cn/). I received my Ph.D. at School of Computer Science and Engineering, Nanyang Technological University, supervised by [Prof. Miao Chun Yan](https://dr.ntu.edu.sg/cris/rp/rp00084). My co-supervisor is [Prof. Guosheng Lin](https://guosheng.github.io). I also work closely with [Prof. Steven Hoi](https://sites.google.com/view/stevenhoi/home). I was an intern working with [Jiashi Feng](https://sites.google.com/site/jshfeng/home) at TikTok, Singapore. 

My general research interests lie in the development of AI-powered perception and generation algorithms for multimodal data, including text, images, videos, and 3D shapes. Recently, we are working on projects of <font color=RoyalBlue>3D reconstruction</font> and <font color=RoyalBlue>LLM-based agents</font>. Please drop me an email if you are interested in collaborations. -->


<!-- <div style="margin-right: -9999px; padding-right: 9999px; background: transparent;"> -->

I am a tenure-track Assistant Professor of AI at [The Hong Kong University of Science and Technology (Guangzhou)](https://hkust-gz.edu.cn/). I obtained my PhD from [Nanyang Technological University](https://www.ntu.edu.sg/), Singapore; I was an intern researcher with TikTok and Horizon Robotics. 

My research interests include spatial intelligence, 3D Gaussian Splatting, LLM agents, and related areas. I have published over 50 papers in top-tier conferences and journals, including TPAMI, IJCV, CVPR, and NeurIPS. I also serve as an area chair and reviewer for multiple leading conferences. I received the rising star award on ICCSE 2025, Guangdong provincial talent award (广东省高层次青年人才) and etc. 

<!-- <font color=RoyalBlue>I am looking for self-motivated PhD students, RAs and interns.</font>
Please check my [recruitment page](https://wanghao.tech/recruitment/). -->

<!-- </div> -->


<!-- <br /> -->


<!-- News
======

* [Oct 2023] Our paper on LLM agents in Avalon gameplay is released!
* [Feb 2023] Our paper is accepted to CVPR 2023.
* [Jun 2022] Our paper is accepted to TIP.
* [Jun 2022] Our paper is accepted to ACM MM 2022.
* [May 2022] Our paper is accepted to TPAMI. -->


<!-- <br /> -->

<style>
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  margin: 0 0 1.5rem 0;
  padding: 0;  /* 添加这行 */
}
.projects-grid .project-card {
  width: calc((100% - 1rem) / 2);  
  box-sizing: border-box;
  border:1px solid #eee;
  padding:0.6rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
}
.projects-grid .project-card h4 {
  margin:0.5rem 0 0.25rem 0;
  font-size:18px;
  line-height:1.2;
  word-break:break-word;
}
.projects-grid .project-card p {
  margin:0;
  font-size:14px;
  color:#555;
}
.projects-grid .project-card img,
.projects-grid .project-card video {
  width:100%;
  height:260px;
  object-fit:cover;
  display:block;
  border-radius:4px;
}
@media (max-width:900px){
  .projects-grid .project-card { width:100%; }
  .projects-grid .project-card h4 { font-size:17px; }
  .projects-grid .project-card p { font-size:13px; }
}

/* 按钮容器样式 */
.filter-buttons {
  display: flex;
  gap: 0.8rem;
  margin: 0 0 1.5rem 0;
  width: 100%;
  padding: 0;  /* 添加这行 */
}

/* 按钮样式 */
.filter-buttons button {
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: 1px solid #ddd;
  background: #f5f5f5;
  cursor: pointer;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  transition: all 0.2s ease;
}

.filter-buttons button:hover {
  background: #eee;
}

.filter-buttons button.active {
  background: #0366d6;
  color: #fff;
  border-color: #0366d6;
}

/* 移动端样式 */
@media (max-width: 768px) {
  .filter-buttons {
    flex-direction: column;
    gap: 0.6rem;
  }
  
  .filter-buttons button {
    width: 100%;
    font-size: 15px;
    padding: 0.7rem 1rem;
  }
}
</style>

## Highlighted Projects

<div class="filter-buttons">
  <button data-filter="group1" class="active">3D Scene Reconstruction</button>
  <button data-filter="group2">3D Human Reconstruction</button>
  <button data-filter="group3">Embodied Agents</button>
</div>

<div class="projects-grid">
  <div class="project-card" data-group="group1">
    <a href="https://3dagentworld.github.io/vggt4d/" target="_blank" rel="noopener">
      <img src="/images/projects/vggt4d.png" alt="VGGT4D" />
    </a>
    <h4>
      <a href="https://3dagentworld.github.io/vggt4d/" target="_blank" rel="noopener">VGGT4D</a>
    </h4>
  </div>

  <div class="project-card" data-group="group1">
    <a href="https://3dagentworld.github.io/opengs-slam/" target="_blank" rel="noopener">
      <img src="/images/projects/opengs-slam.png" alt="3DGS-SLAM" />
    </a>
    <h4>
      <a href="https://3dagentworld.github.io/S3PO-GS/" target="_blank" rel="noopener">3DGS-SLAM</a>
    </h4>
  </div>

  <div class="project-card" data-group="group2">
    <a href="https://3dagentworld.github.io/multigo++/" target="_blank" rel="noopener">
      <video width="100%" height="260px" autoplay loop muted playsinline>
        <source src="/images/projects/multigo++.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </a>
    <h4>
      <a href="https://3dagentworld.github.io/multigo++/" target="_blank" rel="noopener">Monocular Human Reconstruction</a>
    </h4>
  </div>

  <div class="project-card" data-group="group2">
    <a href="https://arxiv.org/abs/2505.10250" target="_blank" rel="noopener">
      <img src="/images/projects/human_mesh_recovery.png" alt="human_mesh_recovery" />
    </a>
    <h4>
      <a href="https://arxiv.org/abs/2505.10250" target="_blank" rel="noopener">Human Mesh Recovery</a>
    </h4>
  </div>

  <div class="project-card" data-group="group3">
    <a href="https://arxiv.org/abs/2508.18797" target="_blank" rel="noopener">
      <video width="100%" height="260px" autoplay loop muted playsinline>
        <source src="/images/projects/Pumpkin.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </a>
    <h4>
      <a href="https://arxiv.org/abs/2508.18797" target="_blank" rel="noopener">Minecraft Agents</a>
    </h4>
  </div>

  <div class="project-card" data-group="group3">
    <a href="https://arxiv.org/abs/2504.18039" target="_blank" rel="noopener">
      <img src="/images/projects/multimind.png" alt="multimind" />
    </a>
    <h4>
      <a href="https://arxiv.org/abs/2504.18039" target="_blank" rel="noopener">Social Deduction Agents</a>
    </h4>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const buttons = Array.from(document.querySelectorAll('.filter-buttons button'));
  const cards = Array.from(document.querySelectorAll('.projects-grid .project-card'));
  if (!buttons.length || !cards.length) return;

  function setFilter(filter) {
    cards.forEach(c => {
      c.style.display = (filter === 'all' || c.dataset.group === filter) ? '' : 'none';
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setFilter(btn.dataset.filter);
    });
  });

  const initBtn = document.querySelector('.filter-buttons button.active') || buttons[0];
  setFilter(initBtn ? initBtn.dataset.filter : 'all');
});
</script>

<!-- <br />
<br /> -->


<!-- Selected Publications
====== -->
## Selected Publications

<ul>


<li>
  Interpreting Fedspeak with Confidence: A LLM-Based Uncertainty-Aware Framework Guided by Monetary Policy Transmission Paths 
  <br/>
  Rui Yao, Qi Chai, Jinhai Yao, Siyuan Li, Junhao Chen, Qi Zhang,
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>AAAI 2026, Oral</i> <br>
  [<a href="https://arxiv.org/abs/2508.08001">Paper</a>] [<a href="https://github.com/yuuki20001/FOMC-sentiment-path">Code</a>]
</li>

<li>
  FastAnimate: Towards Learnable Template Construction and Pose Deformation for Fast 3D Human Avatar Animation 
  <br/>
  Jian Shu, Nanjie Yao, Gangjian Zhang, Junlong Ren, Yu Feng,
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>AAAI 2026</i><br>
  [<a href="https://arxiv.org/abs/2508.08001">Paper</a>] [<a href="https://3dagentworld.github.io/fastanimate/">Project page</a>]
</li>



<li>
  Outdoor Monocular SLAM with Global Scale-Consistent 3D Gaussian Pointmaps
  <br/>
  Chong Cheng, Sicheng Yu, Zijian Wang, Yifan Zhou,
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>ICCV 2025</i><br>
  [<a href="https://openaccess.thecvf.com/content/ICCV2025/papers/Cheng_Outdoor_Monocular_SLAM_with_Global_Scale-Consistent_3D_Gaussian_Pointmaps_ICCV_2025_paper.pdf">Paper</a>] [<a href="https://3dagentworld.github.io/S3PO-GS/">Project Page</a>] [<a href="https://github.com/3DAgentWorld/S3PO-GS">Code</a>]  
</li>

<li>
  RegGS: Unposed Sparse Views Gaussian Splatting with 3DGS Registration
  <br/>
  Chong Cheng, Yu Hu, Sicheng Yu, Beizhen Zhao, Zijian Wang,
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>ICCV 2025</i> <br>
  [<a href="https://openaccess.thecvf.com/content/ICCV2025/papers/Cheng_RegGS_Unposed_Sparse_Views_Gaussian_Splatting_with_3DGS_Registration_ICCV_2025_paper.pdf">Paper</a>] [<a href="https://3dagentworld.github.io/reggs/">Project Page</a>]  [<a href="https://github.com/3DAgentWorld/RegGS">Code</a>]  
</li>

<li>
  MultiGO: Towards Multi-level Geometry Learning for Monocular 3D Textured Human Reconstruction 
  <br/> 
  Gangjian Zhang, Nanjie Yao, Shunsi Zhang, Hanfeng Zhao, Guoliang Pang, Jian Shu, 
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>CVPR 2025</i> <br>
  [<a href="https://openaccess.thecvf.com/content/CVPR2025/papers/Zhang_MultiGO_Towards_Multi-level_Geometry_Learning_for_Monocular_3D_Textured_Human_CVPR_2025_paper.pdf">Paper</a>] [<a href="https://multigohuman.github.io/">Project page</a>]
</li>

<li>
  RGB-Only Gaussian Splatting SLAM for Unbounded Outdoor Scenes 
  <br/> 
  Sicheng Yu, Chong Cheng, Yifan Zhou, Xiaojun Yang, 
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>ICRA 2025</i> <br>
  [<a href="https://arxiv.org/abs/2502.15633">Paper</a>] [<a href="https://3dagentworld.github.io/opengs-slam/">Project page</a>]
</li>

<li>
  SCA3D: Enhancing Cross-modal 3D Retrieval via 3D Shape and Caption Paired Data Augmentation 
  <br/> 
  Junlong Ren, Hao Wu, Hui Xiong, 
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>ICRA 2025</i> <br>
  [<a href="https://arxiv.org/abs/2502.19128">Paper</a>] [<a href="https://github.com/3DAgentWorld/SCA3D">Code</a>]
</li>

<li>
  Graph-Guided Scene Reconstruction from Images with 3D Gaussian Splatting
  <br/> 
  Chong Cheng, Gaochao Song, Yiyang Yao, Gangjian Zhang, Qinzheng Zhou, 
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>ICLR 2025</i> <br>
  [<a href="https://openreview.net/forum?id=56vHbnk35S">Paper</a>] [<a href="https://github.com/3DAgentWorld/GraphGS">Code</a>]
</li>

<li>
  VistaWise: Building Cost-Effective Agent with Cross-Modal Knowledge Graph for Minecraft 
  <br/> 
  Honghao Fu, Junlong Ren, Qi Chai, Deheng Ye, Yujun Cai,
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>EMNLP Main 2025</i> <br>
  [<a href="https://aclanthology.org/2025.emnlp-main.1111/">Paper</a>]
</li>

<li>
  CausalMACE: Causality Empowered Multi-Agents in Minecraft Cooperative Tasks
  <br/> 
  Qi Chai, Zhang Zheng, Junlong Ren, Deheng Ye, Zichuan Lin,
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>EMNLP Findings 2025</i> <br>
  [<a href="https://aclanthology.org/2025.findings-emnlp.777">Paper</a>]
</li>

<li>
  SAT: Supervisor Regularization and Animation Augmentation for Two-process Monocular Texture 3D Human Reconstruction 
  <br/> 
  Gangjian Zhang, Jian Shu, Nanjie Yao,
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>ACM MM 2025</i><br>
  [<a href="https://arxiv.org/abs/2508.19688">Paper</a>]
</li>

<li>
  MultiMind: Enhancing Werewolf Agents with Multimodal Reasoning and Theory of Mind 
  <br/> 
  Zhang Zheng, Nuoqian Xiao, Qi Chai, Deheng Ye,
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>ACM MM 2025</i> <br>
  [<a href="https://arxiv.org/abs/2504.18039">Paper</a>]
</li>

<li>
  Wavelet-GS: 3D Gaussian Splatting with Wavelet Decomposition
  <br/>
  Beizhen Zhao, Yifan Zhou, Sicheng Yu, Zijian Wang,
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>ACM MM 2025</i> <br>
  [<a href="https://arxiv.org/abs/2507.12498">Paper</a>]
</li>

<li>
  Graph-Guided Dual-Level Augmentation for 3D Scene Segmentation
  <br/>
  Hongbin Lin, Yifan Jiang, Juangui Xu, Jesse Jiaxi Xu, Yi Lu, Zhengyu Hu, Ying-Cong Chen,
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>ACM MM 2025</i> <br>
  [<a href="https://arxiv.org/abs/2507.22668">Paper</a>]
</li>

<li>
  GVKF: Gaussian Voxel Kernel Functions for Highly Efficient Surface Reconstruction in Open Scenes 
  <br/> 
  Gaochao Song, Cheng Chong, 
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>NeurIPS 2024</i> <br>
  [<a href="https://openreview.net/forum?id=56vHbnk35S">Paper</a>] [<a href="https://3dagentworld.github.io/gvkf/">Project Page</a>]
</li>


<li>
  LLM-Based Agent Society Investigation: Collaboration and Confrontation in Avalon Gameplay 
  <br/> 
  Yihuai Lan, Zhiqiang Hu, Lei Wang, Yang Wang, Deheng Ye, Peilin Zhao, Ee-Peng Lim, Hui Xiong, 
  <strong><font color="black">Hao Wang*</font></strong>.
  <br/><i>EMNLP 2024 Main</i> <br>
  [<a href="https://arxiv.org/abs/2310.14985">Paper</a>] [<a href="https://github.com/3DAgentWorld/LLM-Game-Agent">Code</a>]
</li>

<li>
  ADHMR: Aligning Diffusion-based Human Mesh Recovery via Direct Preference Optimization
  <br/>
  Wenhao Shen, Wanqi Yin, Xiaofeng Yang, Cheng Chen, Chaoyue Song, Zhongang Cai, Lei Yang,
  <strong><font color="black">Hao Wang*</font></strong>, Guosheng Lin*.
  <br/><i>ICML 2025</i><br>
  [<a href="https://arxiv.org/abs/2505.10250">Paper</a>]
</li>



<li>
  HMR-Adapter: A Lightweight Adapter with Dual-Path Cross Augmentation for Expressive Human Mesh Recovery 
  <br/> 
  Wenhao Shen, Wanqi Yin, 
  <strong><font color="black">Hao Wang*</font></strong>, Chen Wei, Zhongang Cai, Lei Yang, Guosheng Lin*.
  <br/><i>ACM MM 2024</i><br>
  [<a href="https://dl.acm.org/doi/pdf/10.1145/3664647.3681641">Paper</a>]
</li>

<!-- <li>
  Learning Temporal Variations for 4D Point Cloud Segmentation 
  <br/> 
  Hanyu Shi, Jiacheng Wei, 
  <strong><font color="black">Hao Wang</font></strong>, Fayao Liu, Guosheng Lin.
  <br/><i>IJCV 2024</i><br>
  [<a href="https://arxiv.org/abs/2207.04673">Paper</a>]
</li> -->

<li>
  ManiCLIP: Multi-Attribute Face Manipulation from Text 
  <br/> 
  <strong><font color="black">Hao Wang</font></strong>, Guosheng Lin, Ana García del Molino, Anran Wang, Jiashi Feng, Zhiqi Shen.
  <br/><i>IJCV 2024</i><br>
  [<a href="https://link.springer.com/article/10.1007/s11263-024-02088-6">Paper</a>] [<a href="https://github.com/hwang1996/ManiCLIP">Code</a>]
</li>

<!-- <li>
  COM3D: Leveraging Cross-View Correspondence and Cross-Modal Mining for 3D Retrieval 
  <br/>
  Hao Wu, Ruochong Li, 
  <strong><font color="black">Hao Wang*</font></strong>, Hui Xiong.
  <br/><i>ICME 2024, Oral </i> <br>
  [<a href="https://arxiv.org/abs/2405.04103">Paper</a>]
</li> -->

<li>
  TAPS3D: Text-Guided 3D Textured Shape Generation from Pseudo Supervision
  <br/>
  Jiacheng Wei*, <strong><font color="black">Hao Wang*</font></strong>, Jiashi Feng, Guosheng Lin, Kim-Hui Yap.
  <br/><i>CVPR 2023 </i> <br>
  [<a href="https://arxiv.org/abs/2303.13273">Paper</a>] [<a href="https://github.com/plusmultiply/taps3d">Code</a>]
</li>

<li>
  Cross-Modal Graph with Meta Concepts for Video Captioning
  <br/>
  <strong><font color="black">Hao Wang</font></strong>, Guosheng Lin, Steven Hoi, Chunyan Miao.
  <br/><i>TIP 2022</i><br>
  [<a href="https://arxiv.org/abs/2108.06458">Paper</a>] [<a href="https://github.com/hwang1996/Meta-Concepts-for-Video-Captioning">Code</a>]
</li>
<!-- <li>
    Paired Cross-Modal Data Augmentation for Fine-Grained Image-to-Text Retrieval
    <br/>
    <strong><font color="black">Hao Wang</font></strong>, Guosheng Lin, Steven Hoi, Chunyan Miao.
    <br/><i>ACM MM 2022</i><br>
  [<a href="https://arxiv.org/abs/2207.14428">Paper</a>]
</li> -->
<li>
    Learning Structural Representations for Recipe Generation and Food Retrieval 
    <br/>
    <strong><font color="black">Hao Wang</font></strong>, Guosheng Lin, Steven Hoi, Chunyan Miao.
    <br/><i>TPAMI 2022</i><br>
  [<a href="https://arxiv.org/abs/2110.01209">Paper</a>]
</li>
<!-- <li>
    Cycle-Consistent Inverse GAN for Text-to-Image Synthesis 
    <br/>
    <strong><font color="black">Hao Wang</font></strong>, Guosheng Lin, Steven Hoi, Chunyan Miao.
    <br/><i>ACM MM 2021</i><br>
  [<a href="https://arxiv.org/abs/2108.01361">Paper</a>]
</li> -->
<li>
    Structure-Aware Generation Network for Recipe Generation from Images
    <br/> 
    <strong><font color="black">Hao Wang</font></strong>, Guosheng Lin, Steven Hoi, Chunyan Miao.
    <br/><i>ECCV 2020</i> <br>
    [<a href="https://www.ecva.net/papers/eccv_2020/papers_ECCV/html/5757_ECCV_2020_paper.php">Paper</a>] [<a href="https://github.com/hwang1996/SGN">Code</a>]
</li>
<!-- <li>
    SpSequenceNet: Semantic Segmentation Network on 4D Point Clouds 
    <br/> 
    Hanyu Shi, Guosheng Lin, <strong><font color="black">Hao Wang</font></strong>, Tzu-Yi Hung, Zhenhua Wang.
    <br/><i>CVPR 2020</i> <br>
    [<a href="http://openaccess.thecvf.com/content_CVPR_2020/html/Shi_SpSequenceNet_Semantic_Segmentation_Network_on_4D_Point_Clouds_CVPR_2020_paper.html">Paper</a>] [<a href="https://github.com/dante0shy/SpSequenceNet">Code</a>]
</li>
<li>
    FoodAI: Food Image Recognition via Deep Learning for Smart Food Logging 
    <br/> 
    Doyen Sahoo, <strong><font color="black">Hao Wang</font></strong>, Shu Ke, Xiongwei Wu, Hung Le, Palakorn Achananuparp, Ee-Peng Lim, Steven Hoi.
    <br/><i> KDD 2019</i> <br>
  [<a href="https://arxiv.org/abs/1909.11946">Paper</a>]
</li> -->
<li>
    Learning Cross-Modal Embeddings with Adversarial Networks for Cooking Recipes and Food Images
    <br/> 
    <strong><font color="black">Hao Wang</font></strong>, Doyen Sahoo, Chenghao Liu, Ee-peng Lim, Steven C. H. Hoi.
    <br/><i>CVPR 2019</i><br>
    [<a href="http://openaccess.thecvf.com/content_CVPR_2019/html/Wang_Learning_Cross-Modal_Embeddings_With_Adversarial_Networks_for_Cooking_Recipes_and_CVPR_2019_paper.html">Paper</a>] [<a href="https://github.com/hwang1996/ACME">Code</a>]
</li>
</ul>


