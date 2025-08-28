<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="Eric Zhang – Resume"
  description="Software engineer, researcher, and designer. Making meaningful systems and interfaces for people."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Harvard University</h3>
      <div class="text-neutral-500 mb-0.5">2022 — 2023</div>
    </div>
    <p class="byline">S.M. in Computer Science</p>
  </div>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Harvard University</h3>
      <div class="text-neutral-500 mb-0.5">2019 — 2023</div>
    </div>
    <p class="byline">A.B. in Computer Science and Mathematics</p>
  </div>

  <p>Graduated magna cum laude, with highest honors in field.</p>

  <h4 class="font-medium mt-4 mb-1">Teaching:</h4>
  <ul>
    <li>
      TF for CS 153 (Compilers), Fall 2021 —
      <em>Certificate of Distinction in Teaching</em>
    </li>
    <li>
      TA for
      <a class="link" href="https://sgi.mit.edu/"
        >Summer Geometry Institute (SGI)</a
      >, Summer 2021
    </li>
    <li>
      TF for CS 161 (Operating Systems), Spring 2021 —
      <em>Certificate of Distinction in Teaching</em>
    </li>
    <li>TF for CS 182 (Artificial Intelligence), Fall 2020</li>
    <li>
      TF for CS 124 (Data Structures and Algorithms), Spring 2020 —
      <em>Commendation for Extraordinary Teaching</em>
    </li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Graduate-level technical coursework:</h4>
  <ul>
    <li>Advanced Computational Complexity (CS 221)</li>
    <li>Random Processes and Algorithms (CS 223)</li>
    <li>Computational Learning Theory (CS 228)</li>
    <li>Advanced Computer Networks (CS 243)</li>
    <li>Advanced Topics in PL/AI (CS 252r)</li>
    <li>Advanced Topics in PL Design (CS 252r)</li>
    <li>Systems Security (CS 263)</li>
    <li>Distributed Systems Engineering (MIT 6.824)</li>
    <li>Shape Analysis (MIT 6.838)</li>
    <li>Robotic Manipulation (MIT 6.843)</li>
    <li>Probability (Stat 210)</li>
    <li>Statistical Inference (Stat 211)</li>
  </ul>

  <h4 class="font-medium mt-4 mb-1">Undergraduate technical coursework:</h4>
  <ul>
    <li>Compilers (CS 153)</li>
    <li>Operating Systems (CS 161)</li>
    <li>Computer Graphics (MIT 6.837)</li>
    <li>Nanotechnology Fabrication (MIT 6.2540)</li>
    <li>Chaotic Dynamical Systems (Math 118r)</li>
    <li>Number Fields (Math 129)</li>
    <li>Differential Topology (Math 132)</li>
    <li>Honors Abstract Algebra (Math 55a)</li>
    <li>Honors Real and Complex Analysis (Math 55b)</li>
  </ul>
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Founding Engineer"
    company="Modal Labs"
    url="https://modal.com/"
    dates="February 2022 – Current"
    location="New York, NY"
  >
    <li>Founding team member (#4), currently lead Infrastructure Research.</li>
    <li>
      I was the principal engineer for Modal's container runtime, the
      high-performance Rust system that executes Modal Functions. It handles
      hardware differences across a cluster that spans multiple clouds (100,000
      CPUs and 5,000 GPUs); while dealing with real-time, data-intensive
      workloads from thousands of customers.
    </li>
    <li>
      I developed Modal's high-throughput content-addressed file system, tiered
      cache over petabytes of data, a novel <a
        class="link"
        href="https://modal.com/blog/serverless-http">serverless HTTP stack</a
      >, distributed
      <a class="link" href="https://modal.com/docs/guide/tunnels">TLS relays</a
      >, container sandboxing via
      <a class="link" href="https://gvisor.dev/users/">gVisor</a>,
      <a class="link" href="https://modal.com/docs/guide/private-networking"
        >eBPF network infrastructure</a
      >, and a
      <a class="link" href="https://modal.com/blog/vprox">WireGuard-based VPN</a
      >.
    </li>
    <li>
      I was Modal's first product-focused engineer and designer. While building
      <a class="link" href="https://modal.com">modal.com</a>, I developed a
      feeling for crafting interfaces to make complex systems legible. Mentored
      and grew a world-class product engineering team.
    </li>
    <li>
      For 3 years, was #1 committer, made technical decisions like adopting Rust
      and Svelte despite early skepticism and shaped the long-term direction.
    </li>
  </Workplace>

  <Workplace
    title="Contract Software Engineer"
    company="Prosper Robotics"
    url="https://prosper.org/"
    dates="January 2022"
    location="London, UK"
  >
    <li>
      Early-stage startup developing VR-teleoperated household robots. Worked
      with electrical and mechanical engineers.
    </li>
    <li>
      I wrote real-time (&lt;10 μs) embedded microcontrollers in C++, developed
      new network services and robot control systems in Go. Refactored a lot of
      code, fixed many bugs, ported software to a new robot, introduced
      continuous integration, tests, static type checking for Python.
    </li>
  </Workplace>

  <Workplace
    title="Software Engineer"
    company="Convex"
    url="https://convex.dev/"
    dates="June 2021 – October 2021"
    location="San Francisco, CA"
  >
    <li>
      First hired engineer at a seed-stage startup. Worked with three
      experienced technical cofounders (ex-principal engineers at Dropbox) to
      build a reactive, serverless database platform using Rust, integrated with
      the V8 JavaScript engine.
    </li>
    <li>
      Wrote significant components of the MVP. As an early core team member,
      this included rearchitecting the entire Convex client library, writing
      several systems components in Rust, and advising on developer experience.
    </li>
  </Workplace>

  <Workplace
    title="Quantitative Research Intern"
    company="Jump Trading"
    url="https://jumptrading.com/"
    dates="June 2021 – August 2021"
    location="Chicago, IL"
  >
    <li>
      Won the intern trading strategies competition and rotated on a trading
      team to research algorithmic signals in US equities.
    </li>
    <li>
      Developed decentralized apps on the Ethereum blockchain for the
      cryptocurrency team, including new trading algorithms on DEXs. Contributed
      to the open source Ethereum ecosystem in Rust, Go, and Python.
    </li>
  </Workplace>

  <Workplace
    title="Software Engineering Intern"
    company="Scale AI"
    url="https://scale.com/"
    dates="December 2020 – January 2021"
    location="San Francisco, CA"
  >
    <li>
      Worked on machine learning infrastructure for a fast-growing startup using
      Terraform, Kubernetes, and AWS.
    </li>
    <li>
      Developed an in-house system to unify the ML training workflow, allowing
      the team to quickly iterate on models, share results on a tracking server,
      and launch Kubernetes distributed training jobs, saving “hours” of time on
      each experiment.
    </li>
  </Workplace>

  <Workplace
    title="Architecture Intern"
    company="Nvidia"
    url="https://www.nvidia.com"
    dates="June 2020 – August 2020"
    location="Santa Clara, CA"
  >
    <li>
      Worked with the Applied Deep Learning Research (ADLR) group on
      <a class="link" href="https://arxiv.org/abs/2005.10821"
        >deep learning models</a
      > for street image segmentation.
    </li>
    <li>
      Individually developed and released
      <a class="link" href="https://github.com/ekzhang/fastseg">FastSeg</a>, an
      open-source library containing state-of-the-art PyTorch implementations of
      MobileNetV3 LR-ASPP for real-time semantic segmentation, significantly
      more accurate than existing public implementations.
    </li>
  </Workplace>

  <Workplace
    title="Research Assistant"
    company="Harvard Programming Languages Group"
    url="https://pl.seas.harvard.edu/"
    dates="June 2020 – August 2020"
    location="Cambridge, MA"
    defaultHidden
  >
    <li>
      Worked on a C++ compiler for
      <a class="link" href="https://github.com/HarvardPL/formulog">Formulog</a>,
      a variant of Datalog that supports ML-like syntax extension and SMT
      queries.
    </li>
    <li>
      Generated highly parallel templatized C++17 code, used caching in B-Tree
      comparisons to speed up Datalog evaluation by 16x, and optimized existing
      OpenMP code using lockless data structures for an additional 4x speedup.
    </li>
    <li>
      Wrote a handwritten parser that was 30x faster than the ANTLR-generated
      LL(*) parser and used 20x less memory (80 GB to 4 GB).
    </li>
  </Workplace>

  <Workplace
    title="Undergraduate Researcher"
    company="Predictive Medicine Group"
    url="https://www.predmed.org/"
    dates="December 2019 – June 2020"
    location="Boston, MA"
    defaultHidden
  >
    <li>
      Conducted research in statistics & medical informatics advised by Ben Reis
      (Harvard Medical School), developing temporal models to identify patients
      at high risk of suicide based on medical histories obtained from
      Massachusetts General Hospital.
    </li>
  </Workplace>

  <Workplace
    title="Computer Science Instructor"
    company="AlphaStar Academy"
    url="https://alphastar.academy/"
    dates="December 2017 – April 2020"
    location="Santa Clara, CA"
    defaultHidden
  >
    <li>
      Taught advanced algorithms and data structures (USACO Platinum) and
      AIME-level (national math competition) mathematics to talented high school
      students across the nation.
    </li>
    <li>
      Developed detailed lesson plans and recorded lectures for future summer
      programs and online courses.
    </li>
  </Workplace>
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Awards and Honors</h2>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Computer Science:</h3>
    <ul>
      <li>
        <b>International Olympiad in Informatics (IOI):</b> Gold Medalist (2018,
        2019), 7<sup>th</sup> place globally
      </li>
      <li>
        <b>Google Hash Code:</b> World Finalist (2020, 2021, 2022), 6<sup
          >th</sup
        > place team out of over 100,000 students and professionals
      </li>
      <li>
        <b>Google Code Jam:</b> Round 3 Finalist (2020), placed 34<sup>th</sup>
        globally
      </li>
      <li><b>Facebook Hacker Cup:</b> Round 3 Finalist (2020)</li>
      <li><b>PicoCTF:</b> Winner (2018), ranked 6th</li>
    </ul>
  </div>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Mathematics:</h3>
    <ul>
      <li>
        <b>Mathematical Olympiad Program (MOP):</b> Participant (2017), IMO team
        selection group (2017, 2018)
      </li>
      <li>
        <b>USA Math Olympiad (USAMO):</b> Honorable Mention (2017), top 24 in nation
      </li>
    </ul>
  </div>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Physics:</h3>
    <ul>
      <li><b>U.S. Physics Team:</b> Invitee (2017, 2018, 2019)</li>
      <li>
        <b>USA Physics Olympiad (USAPhO):</b> Gold Medalist (2017, 2018, 2019)
      </li>
    </ul>
  </div>

  <div class="mb-4">
    <h3 class="font-medium mb-1">Music Performance:</h3>
    <ul>
      <li>
        <b>National YoungArts Foundation:</b> Winner in Classical Music (2018, 2019)
      </li>
      <li>
        <b>JDR Viola Competition:</b> Grand prize winner, performed with a professional
        orchestra (2019)
      </li>
      <li>
        <b>Texas All-State Symphony Orchestra:</b> Principal Violist (2017), Co-Principal
        (2016, 2018)
      </li>
    </ul>
  </div>
</section>

<style lang="postcss">
  b {
    @apply font-medium;
  }

  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>
