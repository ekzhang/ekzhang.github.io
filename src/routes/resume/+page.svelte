<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="Alex Wang – Resume"
  description="Software engineer, researcher, and writer. Building meaningful systems and interfaces for people."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Stanford University</h3>
      <div class="text-neutral-500 mb-0.5">Expected June 2027</div>
    </div>
    <p class="byline">B.S. in Mathematics & M.S. in Computer Science</p>
  </div>

  <h4 class="font-medium mt-4 mb-1">Coursework:</h4>
  <ul class="mb-4">
    <li>Deep Learning for NLP (CS 224n)</li>
    <li>Linear Algebra and Matrix Theory (Math 113)</li>
    <li>Machine Learning (CS229)</li>
    <li>Reinforcement Learning (CS234)</li>
    <li>Computer Organization and Systems (CS107)</li>
    <li>Data Structure and Algorithms (CS106B)</li>
    <li>Operating Systems (CS111)</li>
    <li>Algorithms (CS161)</li>
    <li>ML with Graphs (CS224w)</li>
    <li>Parallel Computing with CUDA/OpenMP/MPI (CME 213)</li>
  </ul>

</section>

<section class="layout-md py-12">
  <h2 class="heading2">Work Experience</h2>

  <Workplace
    title="Software Engineering Intern"
    company="Meta"
    url="https://www.meta.com/about/"
    dates="June 2025 - Sep. 2025"
    location="Menlo Park, CA"
  >
    <li>
      <strong>Disaster Recovery Team</strong>. Leveraged Python and statistical analysis in a large-scale Linux environment to build an <strong>automated reporting system</strong> that quantitatively analyzed disaster recovery test outcomes using time-series analysis and pattern recognition techniques, <strong>saving dozens of weekly engineering hours</strong> through data-driven optimization.
    </li>
    <li>
      Architected a systematic <strong>data analysis pipeline</strong> to evaluate operational risk using statistical modeling approaches, implementing modules for time-series analysis of execution latency, error rate tracking with machine learning classification, and quantitative assessment of system failure events to inform data-driven engineering priorities.
    </li>
    <li>
      Deployed a mission-critical analytics engine into production, engineering a full <strong>CI/CD pipeline</strong> with automated model validation and scheduled job execution to ensure reliable, periodic delivery of quantitative risk insights to downstream systems—demonstrating experience with systematic, data-driven approaches to complex problem-solving.
    </li>
  </Workplace>

  <Workplace
    title="Founding Engineer"
    company="Stealth Startup"
    url="#"
    dates="Mar. 2025 - Aug. 2025"
    location="Palo Alto, CA"
  >
    <li>
      Architected a <strong>multi-agent AI strategy pipeline</strong>, OpenAI Agents SDK, and RAG-based vector search to convert natural-language trading theses into validated signals (Google Trends, sentiment, market data) and E2E execution.
    </li>
    <li>
      Built a scalable, <strong>containerized microservices backbone</strong> (Railway, Docker, Bun.js/Elysia) with real-time WebSocket data ingestion, intelligent retry/backoff, and a local blockchain simulator for rapid backtesting and optimization of trading models.
    </li>
    <li>
      Developed a <strong>chain-agnostic trading engine</strong> featuring universal wallet adapters (EVM + Solana) and full observability (DataDog APM, health checks, auto-scaling) to automate cross-chain arbitrage, lending strategies, and other workflows.
    </li>
    <li>
      Wrote a <strong>Haskell-based, type-safe trading DSL</strong> and backtesting framework—integrating Mobula market metrics, Google Trends, and sentiment analysis—to validate and optimize high-frequency trading strategies against historical data with guaranteed runtime safety.
    </li>
  </Workplace>

  <Workplace
    title="AI/ML Engineer Intern"
    company="Biostate AI"
    url="https://biostate.ai/"
    dates="Nov. 2024 - Mar. 2025"
    location="Palo Alto, CA"
  >
    <li>
      Developed and implemented an <strong>end-to-end ML pipeline</strong> utilizing bulk RNA-seq expression data from proprietary and public datasets to train a <strong>100M+ parameter transformer model</strong>, achieving state-of-the-art performance in autoregressive generation of "future" RNAseqs with biologically viable expression patterns.
    </li>
    <li>
      Established comprehensive internal benchmarking protocols and implemented robust data tagging systems to prevent contamination during <strong>large model pretraining</strong>, while specializing and curating datasets for performance testing.  
    </li>
    <li>
      Built and deployed an <strong>automated bioinformatics platform</strong> that integrated omics data analysis pipelines with fine-tuned LLMs with DPO, optimized for generating scientific abstracts and publication-quality figures, streamlining research workflows while maintaining <strong>95% expert-rated accuracy</strong>.
    </li>
  </Workplace>

  <Workplace
    title="Research Assistant"
    company="Stanford Autonomous Systems Laboratory (ASL)"
    url="https://stanfordasl.github.io/"
    dates="Aug. 2024 - Mar. 2025"
    location="Stanford, CA"
  >
    <li>
      Student researcher working on <strong>autonomous systems</strong> for trajectory optimization and applying on-board VLMs/LLMs/CV for anomaly detection/reaction under Professor Marco Pavone (Director of Nvidia's Autonomous Systems Division).
    </li>
    <li>
      Engineered a unified software application for <strong>Gazebo/Robot Operating System 2</strong> simulation integration with PX4, utilizing <strong>Nvidia Orin Jetson Nano</strong> and <strong>motion-capture Pub-Sub model</strong> for real-time autonomous system testing.
    </li>
    <li>
      Developed and implemented <strong>trajectory optimization</strong> and <strong>obstacle avoidance algorithms for kinodynamic motion planning</strong> in an indoor environment as part of a 3-person team. Project demo can be found <a class="link" href="https://drive.google.com/file/d/1m0dRVO0GV9PgKm-927A8Gy3j7V91pHiY/view?usp=drive_link">here</a>.
    </li>
  </Workplace>

  <Workplace
    title="Data Science Intern"
    company="Air Force Research Laboratory (AFRL)"
    url="https://www.afrl.af.mil/"
    dates="June 2023 - Sep. 2023"
    location="Dayton, Ohio"
  >
    <li>
      Designed and implemented a novel <strong>group-theoretic MCMC algorithm</strong> that significantly improved sampling efficiency for systems with discrete symmetries, demonstrated through application to dielectric polymers.
    </li>
    <li>
      Created clustering algorithms that achieved up to <strong>50% faster convergence</strong> compared to standard and umbrella sampling methods by leveraging symmetry properties in potential energy landscapes.
    </li>
    <li>
      Leveraged <strong>UMAP/t-SNE</strong> for feature extraction of MCMC data and built out <strong>PyTorch Autoencoder</strong> to detect polymer characteristic anomalies depending on reconstruction error, boosted detection accuracy by 15%. Read more <a class="link" href="https://drive.google.com/file/d/1AZjvm8SI971qRs-mBoepW8WOB5WXQsqy/view?usp=sharing">here</a>.
    </li>
  </Workplace>
</section>



<style lang="postcss">
  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>

