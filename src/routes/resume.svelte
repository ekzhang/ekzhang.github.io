<script context="module" lang="ts">
  import { dev } from "$app/env";

  export const hydrate = dev;
</script>

<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "$lib/components/Workplace.svelte";
</script>

<Seo
  title="Eric Zhang – Resume"
  description="Software engineer, researcher, and designer with an open-source ethos at heart. Thinking about how we can develop better systems and interfaces to empower individuals."
/>

<section class="container py-6 space-y-3.5">
  <h2>Education</h2>

  <div>
    <h3>Harvard University</h3>
    <p class="dates">September 2019 – Current</p>
    <ul>
      <li>
        Pursuing an M.S. in Computer Science with a B.A. in Computer Science and
        Mathematics.
      </li>
      <li>
        <b>Teaching:</b>
        <ul>
          <li>
            TF for CS 124 (Data Structures and Algorithms), Spring 2020 —
            <em>Commendation for Extraordinary Teaching</em>
          </li>
          <li>TF for CS 182 (Artificial Intelligence), Fall 2020</li>
          <li>
            TF for CS 161 (Operating Systems), Spring 2021 —
            <em>Certificate of Distinction in Teaching</em>
          </li>
          <li>
            TA for
            <Link to="https://sgi.mit.edu/"
              >Summer Geometry Institute (SGI)</Link
            >, Summer 2021
          </li>
          <li>
            TF for CS 153 (Compilers), Fall 2021 —
            <em>Certificate of Distinction in Teaching</em>
          </li>
        </ul>
      </li>
      <li>
        <b>Selected coursework († graduate-level):</b>
        <ul>
          <li>Computational Complexity<sup>†</sup> (CS 221)</li>
          <li>Randomized Algorithms<sup>†</sup> (CS 223)</li>
          <li>Computational Learning Theory<sup>†</sup> (CS 228)</li>
          <li>PL/AI Graduate Seminar<sup>†</sup> (CS 252r)</li>
          <li>PL Design Graduate Seminar<sup>†</sup> (CS 252r)</li>
          <li>Systems Security<sup>†</sup> (CS 263)</li>
          <li>
            Distributed Systems Engineering<sup>†</sup> (MIT 6.824)
          </li>
          <li>Shape Analysis<sup>†</sup> (MIT 6.838)</li>
          <li>Robotic Manipulation<sup>†</sup> (MIT 6.843)</li>
          <li>Graduate Probability<sup>†</sup> (Stat 210)</li>
          <li>Graduate Statistical Inference<sup>†</sup> (Stat 211)</li>
          <li>Compilers (CS 153)</li>
          <li>Operating Systems (CS 161)</li>
          <li>Computer Graphics (MIT 6.837)</li>
          <li>Differential Topology (Math 132)</li>
          <li>Honors Abstract Algebra (Math 55a)</li>
          <li>Honors Real and Complex Analysis (Math 55b)</li>
        </ul>
      </li>
    </ul>
  </div>
</section>

<hr />

<section class="container py-6 space-y-3.5">
  <h2>Work Experience</h2>

  <Workplace
    title="Software Engineer"
    company="Modal Labs"
    url="https://modal.com/"
    dates="February 2022 – Current"
    location="New York, NY"
  >
    <li>Founding engineer at a seed-stage startup.</li>
  </Workplace>

  <Workplace
    title="Software Engineering Intern"
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
      experienced technical cofounders (ex-Dropbox) to build a reactive,
      serverless database platform using Rust and TypeScript.
    </li>
    <li>
      Wrote significant components of the MVP and advised on web developer
      experience. Described by the CEO as an "early core team member" who
      "played a real architectural hand in the design of the product."
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
      <Link to="https://arxiv.org/abs/2005.10821">deep learning models</Link> for
      street image segmentation.
    </li>
    <li>
      Individually developed and released
      <Link to="https://github.com/ekzhang/fastseg">FastSeg</Link>, an
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
  >
    <li>
      Worked on a C++ compiler for
      <Link to="https://github.com/HarvardPL/formulog">Formulog</Link>, a
      variant of Datalog that supports ML-like syntax extension and SMT queries.
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
  >
    <li>
      Conducted research in statistics & medical informatics advised by Ben Reis
      (Harvard Medical School), developing temporal models to identify patients
      at high risk of suicide based on medical histories obtained from
      Massachusetts General Hospital.
    </li>
  </Workplace>

  <Workplace
    title="Coauthor"
    company="American Association of Physics Teachers"
    url="https://aapt.org/"
    dates="April 2018 – October 2020"
    location="College Park, MD"
  >
    <li>
      Co-wrote a physics book with Branislav Kisačanin,
      <em>F=ma Contests: 2011-2019 Solutions Manual</em>.
    </li>
    <li>
      Provided detailed solutions for nine years of past <em>F=ma</em> contests to
      encourage physics interest among high school students.
    </li>
    <li>
      Published with the American Association of Physics Teachers (AAPT) and AIP
      Publishing, preprint available
      <Link to="https://www.aapt.org/physicsteam/2020/pastexams.cfm"
        >online</Link
      >.
    </li>
  </Workplace>

  <Workplace
    title="Computer Science Instructor"
    company="AlphaStar Academy"
    url="https://alphastar.academy/"
    dates="December 2017 – April 2020"
    location="Santa Clara, CA"
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

  <Workplace
    title="Mathematics Researcher"
    company="PRIMES-USA"
    url="https://math.mit.edu/research/highschool/primes/index.php"
    dates="January 2018 – December 2018"
    location="Cambridge, MA"
  >
    <li>
      Conducted research on quasirandom permutations, using flag algebras and
      semidefinite programming.
    </li>
    <li>
      Published a paper in the
      <em>Electronic Journal of Combinatorics 28(1)</em>, and won the Regeneron
      STS competition.
    </li>
  </Workplace>
</section>

<hr />

<section class="container py-6 space-y-3.5">
  <h2>Selected Awards</h2>

  <div>
    <h3>Computer Science</h3>
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

  <div>
    <h3>Mathematics</h3>
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

  <div>
    <h3>Physics</h3>
    <ul>
      <li><b>U.S. Physics Team:</b> Invitee (2017, 2018, 2019)</li>
      <li>
        <b>USA Physics Olympiad (USAPhO):</b> Gold Medalist (2017, 2018, 2019)
      </li>
    </ul>
  </div>

  <div>
    <h3>Music Performance</h3>
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
  h2 {
    @apply text-3xl font-serif mb-2;
  }

  h3 {
    @apply text-xl font-serif mb-0.5;
  }

  .dates {
    @apply font-serif mb-2;
  }
</style>
