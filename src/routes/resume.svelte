<script context="module" lang="ts">
  import { dev } from "$app/env";

  export const hydrate = dev;
</script>

<script lang="ts">
  import Link from "@/components/Link.svelte";
</script>

<svelte:head>
  <title>Eric Zhang – Resume</title>
</svelte:head>

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
            TF for CS 124 (Data Structures and Algorithms), Spring 2020 -
            <em>Commendation for Extraordinary Teaching</em>
          </li>
          <li>TF for CS 182 (Artificial Intelligence), Fall 2020</li>
          <li>
            TF for CS 161 (Operating Systems), Spring 2021 -
            <em>Certificate of Distinction in Teaching</em>
          </li>
          <li>
            TA for
            <Link to="https://sgi.mit.edu/"
              >Summer Geometry Institute (SGI)</Link
            >, Summer 2021
          </li>
          <li>TF for CS 153 (Compilers), Fall 2021</li>
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

  <div>
    <h3>
      Software Engineer at
      <Link to="https://convex.dev/">Convex</Link>
    </h3>
    <p class="dates">June 2021 – October 2021</p>
    <ul>
      <li>
        First hired engineer at a seed-stage startup. Worked with three highly
        experienced technical cofounders (ex-Dropbox) to build a next-generation
        platform for dynamic serverless applications using Rust and TypeScript.
      </li>
      <li>
        Wrote significant components of the MVP and advised on web developer
        experience. Described by the CEO as an "early core team member" who
        "played a real architectural hand in the design of the product."
      </li>
    </ul>
  </div>

  <div>
    <h3>
      Quantitative Research Intern at
      <Link to="https://jumptrading.com/">Jump Trading</Link>
    </h3>
    <p class="dates">June 2021 – August 2021</p>
    <ul>
      <li>
        Won the intern trading strategies competition and rotated on a trading
        team to research algorithmic signals in US equities.
      </li>
      <li>
        Developed decentralized apps on the Ethereum blockchain for the
        cryptocurrency team, including new trading algorithms on DEXs.
        Contributed to the open source Ethereum ecosystem in Rust, Go, and
        Python.
      </li>
    </ul>
  </div>

  <div>
    <h3>
      Software Engineering Intern at <Link to="https://scale.com/"
        >Scale AI</Link
      >
    </h3>
    <p class="dates">December 2020 – January 2021</p>
    <ul>
      <li>
        Worked on machine learning infrastructure for a fast-growing startup
        using Terraform, Kubernetes, and AWS.
      </li>
      <li>
        Developed an in-house system to unify the ML training workflow, allowing
        the team to quickly iterate on models, share results on a tracking
        server, and launch Kubernetes distributed training jobs, saving “hours”
        of time on each experiment.
      </li>
    </ul>
  </div>

  <div>
    <h3>
      Architecture Intern at
      <Link to="https://www.nvidia.com">Nvidia</Link>
    </h3>
    <p class="dates">June 2020 – August 2020</p>
    <ul>
      <li>
        Worked with the Applied Deep Learning Research (ADLR) group on
        <Link to="https://arxiv.org/abs/2005.10821">deep learning models</Link> for
        street image segmentation.
      </li>
      <li>
        Individually developed and released
        <Link to="https://github.com/ekzhang/fastseg">FastSeg</Link>, an
        open-source library containing state-of-the-art PyTorch implementations
        of MobileNetV3 LR-ASPP for real-time semantic segmentation,
        significantly more accurate than existing public implementations.
      </li>
    </ul>
  </div>

  <div>
    <h3>
      Research Assistant at
      <Link to="https://pl.seas.harvard.edu/"
        >Harvard Programming Languages Group</Link
      >
    </h3>
    <p class="dates">June 2020 – August 2020</p>
    <ul>
      <li>
        Worked on a C++ compiler for
        <Link to="https://github.com/HarvardPL/formulog">Formulog</Link>, a
        variant of Datalog that supports ML-like syntax extension and SMT
        queries.
      </li>
      <li>
        Generated highly parallel templatized C++17 code, used caching in B-Tree
        comparisons to speed up Datalog evaluation by 16x, and optimized
        existing OpenMP code using lockless data structures for an additional 4x
        speedup.
      </li>
      <li>
        Wrote a handwritten parser that was 30x faster than the ANTLR-generated
        LL(*) parser and used 20x less memory (80 GB to 4 GB).
      </li>
    </ul>
  </div>

  <div>
    <h3>
      Undergraduate Researcher at
      <Link to="https://www.predmed.org/">Predictive Medicine Group</Link>
    </h3>
    <p class="dates">December 2019 – June 2020</p>
    <ul>
      <li>
        Conducted research in statistics & medical informatics advised by Ben
        Reis (Harvard Medical School), developing temporal models to identify
        patients at high risk of suicide based on medical histories obtained
        from Massachusetts General Hospital.
      </li>
    </ul>
  </div>

  <div>
    <h3>
      Coauthor at
      <Link to="https://aapt.org/"
        >American Association of Physics Teachers</Link
      >
    </h3>
    <p class="dates">April 2018 – October 2020</p>
    <ul>
      <li>
        Co-wrote a physics book with Branislav Kisačanin,
        <em>F=ma Contests: 2011-2019 Solutions Manual</em>.
      </li>
      <li>
        Provided detailed solutions for nine years of past <em>F=ma</em> contests
        to encourage physics interest among high school students.
      </li>
      <li>
        Published with the American Association of Physics Teachers (AAPT) and
        AIP Publishing, preprint available
        <Link to="https://www.aapt.org/physicsteam/2020/pastexams.cfm"
          >online</Link
        >.
      </li>
    </ul>
  </div>

  <div>
    <h3>
      Computer Science Instructor at
      <Link to="https://alphastar.academy/">AlphaStar Academy</Link>
    </h3>
    <p class="dates">December 2017 – April 2020</p>
    <ul>
      <li>
        Taught advanced algorithms and data structures (USACO Platinum) and
        AIME-level (national math competition) mathematics to talented high
        school students across the nation.
      </li>
      <li>
        Developed detailed lesson plans and recorded lectures for future summer
        programs and online courses.
      </li>
    </ul>
  </div>

  <div>
    <h3>
      Mathematics Researcher at
      <Link to="https://math.mit.edu/research/highschool/primes/index.php"
        >PRIMES-USA</Link
      >
    </h3>
    <p class="dates">January 2018 – December 2018</p>
    <ul>
      <li>
        Conducted research on quasirandom permutations, using flag algebras and
        semidefinite programming.
      </li>
      <li>
        Published a paper in the
        <em>Electronic Journal of Combinatorics 28(1)</em>, and won the
        Regeneron STS competition.
      </li>
    </ul>
  </div>
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
        <b>Google Hash Code:</b> World Finalist (2020, 2021), 7<sup>th</sup> place
        team out of over 100,000 students and professionals
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
