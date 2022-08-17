<script context="module" lang="ts">
  import { dev } from "$app/env";

  export const hydrate = dev;
</script>

<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Seo from "$lib/components/Seo.svelte";
</script>

<svelte:head>
  <title>Eric Zhang</title>
</svelte:head>

<Seo
  title="Eric Zhang"
  description="Software engineer, researcher, and designer with an open-source ethos. Thinking about how we can develop better systems and interfaces to empower individuals."
/>

<div class="container py-6">
  <h2 class="text-3xl font-serif mb-2">About</h2>
  <div class="grid grid-cols-3 gap-4 lg:gap-6 mb-4">
    <section class="col-span-3 sm:col-span-2 space-y-2">
      <p>
        I am a software engineer, researcher, and designer. I develop better <em
          >interactive software</em
        > that empowers individuals. My work combines ideas from several fields—programming
        languages, graphics, machine learning, and systems. Notable projects include:
      </p>
      <ul>
        <li>
          <Link to="/projects#percival"><strong>Percival</strong></Link>,
          reactive notebooks for exploratory data analysis.
        </li>
        <li>
          <Link to="/projects#rustpad"><strong>Rustpad</strong></Link>,
          self-hosted online collaborative code editor (1M+ downloads).
        </li>
        <li>
          <Link to="/projects#crepe"><strong>Crepe</strong></Link>, compiled
          Datalog language in Rust, used by cloud security systems and
          compilers.
        </li>
        <li>
          <Link to="/projects#fastseg"><strong>FastSeg</strong></Link>,
          real-time semantic segmentation models for autonomous vehicles.
        </li>
        <li>
          <Link to="/projects#setwithfriends"
            ><strong>Set with Friends</strong></Link
          >, online multiplayer card game (20M+ pageviews, 600K+ users).
        </li>
      </ul>
      <p>
        I currently live in New York where I am building <Link
          to="https://modal.com/">a startup</Link
        >, on a leave of absence from Harvard. Previously, I worked at <Link
          to="https://prosper.org/">Prosper Robotics</Link
        >, <Link to="https://convex.dev/">Convex</Link>,
        <Link to="https://www.jumptrading.com/">Jump Trading</Link>,
        <Link to="https://scale.com/">Scale AI</Link>, and <Link
          to="https://www.nvidia.com/en-us/">Nvidia</Link
        >. I also wrote a
        <Link to="https://aip.scitation.org/doi/pdf/10.1063/9780735421646"
          >physics book</Link
        >, published
        <Link
          to="https://www.combinatorics.org/ojs/index.php/eljc/article/view/v28i1p24/pdf"
          >math research</Link
        >, and made <Link to="https://github.com/ekzhang/graphics-workshop"
          >graphics tutorials</Link
        > used by thousands.
      </p>
      <p>
        At Harvard, I was a distinguished teaching fellow for upper-level
        computer science classes, and I found my home in music. I play viola in
        the
        <Link to="https://www.harvardradcliffeorchestra.org/"
          >Harvard-Radcliffe Orchestra</Link
        >
        and chamber music groups. I was a
        <Link to="https://youngarts.org/">YoungArts</Link> award winner in classical
        music, served as principal viola of the Texas All-State Symphony Orchestra,
        and have been invited as a soloist with a professional orchestra.
      </p>
    </section>
    <section class="col-span-3 sm:col-span-1">
      <img
        class="img-fluid"
        alt="Eric Zhang"
        src="/assets/images/profile2.jpg"
      />
    </section>
  </div>

  <div class="grid grid-cols-2 gap-4 lg:gap-6">
    <section class="col-span-2 md:col-span-1 space-y-2">
      <h2 class="text-2xl font-serif">Competitive Programming</h2>
      <p>
        I am a top-ranked
        <Link to="https://codeforces.com/profile/ekzhang"
          >competitive programmer</Link
        >. I won two gold medals representing the US at the International
        Olympiad in Informatics (IOI), placing 7<sup>th</sup>
        globally. I also ranked highly in the USAMO and USAPhO, and I competed on
        Harvard's championship-winning ICPC team.
      </p>
      <p>
        I have written and tested problems for large national and international
        programming competitions, including the following:
      </p>
      <ul>
        <li>
          <Link to="http://usaco.org/">USA Computing Olympiad (USACO)</Link>
        </li>
        <li>
          <Link to="https://noi.ph/"
            >National Olympiad in Informatics Philippines (NOI.PH)</Link
          >
        </li>
        <li>
          <Link to="https://www.hackerrank.com/pwshpc-online-round"
            >PWSH Programming Contest</Link
          >
        </li>
        <li>
          <Link
            to="https://www.hackerearth.com/challenges/competitive/CodeStar1/"
            >HackerEarth CodeStar Contest</Link
          >
        </li>
      </ul>
      <p>
        My advanced algorithm and data structure library is available
        <Link to="https://ekzlib.netlify.app/">here</Link>. If you are looking
        for tutoring, I have previously taught recorded courses with
        <Link to="https://alphastar.academy/courses/cs-courses/"
          >Alphastar Academy</Link
        >
        for motivated students aiming to perform at a high level in programming competitions.
      </p>
    </section>
    <section class="col-span-2 md:col-span-1 space-y-2">
      <h2 class="text-2xl font-serif">Coursework</h2>

      <h3 class="text-xl">Recent (Fall 2021)</h3>
      <ul>
        <li>
          <em>CS 252r:</em> PL Design Graduate Seminar (<Link
            external
            to="/assets/pdf/CS_252r_Notes_PL_Studio.pdf">notes</Link
          >, <Link to="https://github.com/ekzhang/percival">project</Link>)
        </li>
        <li>
          <em>MIT 6.843:</em> Robotic Manipulation (<Link
            external
            to="/assets/pdf/Hydroelastics.pdf">project</Link
          >)
        </li>
        <li>
          <em>Stat 211:</em> Statistical Inference (<Link
            external
            to="/assets/pdf/Stat_211_Notes.pdf">notes</Link
          >)
        </li>
        <li><em>Music 175r:</em> Mahler and the Finis Austriae</li>
        <li><em>Music 189r:</em> Chamber Music Performance</li>
      </ul>

      <h3 class="text-xl">Past (2019–2021, abbreviated)</h3>
      <ul>
        <li>
          <em>Math 55a:</em> Studies in Algebra and Group Theory (<Link
            external
            to="/assets/pdf/Math_55a_Notes.pdf">notes</Link
          >)
        </li>
        <li>
          <em>Math 55b:</em> Studies in Real and Complex Analysis (<Link
            external
            to="/assets/pdf/Math_55b_Notes.pdf">notes</Link
          >)
        </li>
        <li>
          <em>Math 132:</em> Differential Topology (<Link
            external
            to="/assets/pdf/Math_132_Notes.pdf">notes</Link
          >)
        </li>
        <li>
          <em>Stat 210:</em> Graduate Probability I (<Link
            external
            to="/assets/pdf/Stat_210_Notes.pdf">notes</Link
          >)
        </li>
        <li>
          <em>CS 221:</em> Computational Complexity (<Link
            external
            to="/assets/pdf/Learning_Space_Cryptography.pdf">project</Link
          >)
        </li>
        <li>
          <em>CS 223:</em> Random Processes and Algorithms (<Link
            external
            to="/assets/pdf/Single_Bidder_Multi_Item_Auctions.pdf">project</Link
          >)
        </li>
        <li>
          <em>CS 228:</em> Computational Learning Theory (<Link
            external
            to="/assets/pdf/CS_228_Notes.pdf">notes</Link
          >,
          <Link
            external
            to="/assets/pdf/Compression_Based_Generalization_Bounds.pdf"
            >project</Link
          >)
        </li>
        <li>
          <em>CS 252r:</em> PL/AI Graduate Seminar (<Link
            external
            to="/assets/pdf/CS_252r_Notes.pdf">notes</Link
          >, <Link external to="/assets/pdf/Generative_Music_Modeling.pdf"
            >project</Link
          >)
        </li>
        <li>
          <em>CS 263:</em> Systems Security (<Link
            external
            to="/assets/pdf/Browser_Fingerprinting.pdf">project</Link
          >)
        </li>
        <li><em>MIT 6.824:</em> Distributed Systems Engineering</li>
        <li>
          <em>MIT 6.838:</em> Shape Analysis (<Link
            to="https://pencil-sketching.vercel.app/">project</Link
          >)
        </li>
      </ul>
    </section>
  </div>
</div>
