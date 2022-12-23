<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects = [
    {
      name: "Bore",
      href: "/projects#bore",
      desc: "bypass your NAT in just 400 lines of code",
      aside: "6000+ stars on GitHub",
    },
    {
      name: "Percival",
      href: "/projects#percival",
      desc: "reactive notebooks for exploratory data analysis",
    },
    {
      name: "Rustpad",
      href: "/projects#rustpad",
      desc: "self-hosted collaborative text editor",
      aside: "2M+ downloads",
    },
    {
      name: "Crepe",
      href: "/projects#crepe",
      desc: "compiled Datalog language in Rust",
      aside: "used by cloud security systems & compilers",
    },
    {
      name: "FastSeg",
      href: "/projects#fastseg",
      desc: "real-time semantic segmentation for self-driving cars",
    },
    {
      name: "Set with Friends",
      href: "/projects#setwithfriends",
      desc: "online multiplayer card game",
      aside: "30M+ page views, 900K+ users",
    },
  ];
</script>

<Seo
  title="Eric Zhang"
  description="Software engineer, researcher, and designer. Making meaningful systems and interfaces for people."
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="eric-is"
>
  <span class="g">is a</span> software engineer<span class="g">,</span><br />
  researcher<span class="g">, and</span><br />
  designer<span class="g">.</span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
      I study at Harvard and work on the future of cloud computing at <a
        class="link"
        href="https://modal.com">Modal</a
      >.
    </p>

    <p>
      My ambition is to make better <em>interactive software</em> that helps people
      create, collaborate, learn, and meaningfully express what brings them joy.
    </p>

    <p>
      Towards that goal, I am a generalist and care deeply about <em>systems</em
      >, which form the fundamental building blocks of our applications; and
      <em>interaction design</em>, how we use and live with computers that are
      all around us.
    </p>
  </div>

  <div class="leading-snug space-y-4">
    <p class="pb-2">Notable open-source work:</p>

    {#each featuredProjects as project}
      <a class="project-pair" href={project.href}>
        <div class="text-black font-medium">
          {project.name}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div>
          <p>{project.desc}</p>
          {#if project.aside}
            <aside>{project.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>

  <div class="space-y-5">
    <p>
      Previously, I worked at <a class="link" href="https://prosper.org"
        >Prosper Robotics</a
      >, <a class="link" href="https://convex.dev">Convex</a>,
      <a class="link" href="https://jumptrading.com">Jump Trading</a>,
      <a class="link" href="https://scale.com">Scale AI</a>, and
      <a class="link" href="https://nvidia.com">Nvidia</a>. I’ve also
      independently published things in the past, like a
      <a
        class="link"
        href="https://aip.scitation.org/doi/pdf/10.1063/9780735421646"
        >physics book</a
      >,
      <a
        class="link"
        href="https://www.combinatorics.org/ojs/index.php/eljc/article/view/v28i1p24/pdf"
        >combinatorics research</a
      >, and
      <a class="link" href="https://github.com/ekzhang/graphics-workshop"
        >graphics tutorials</a
      >
      used by thousands. Before that, I won two gold medals at the
      <a class="link" href="https://stats.ioinformatics.org/people/6717"
        >International Olympiad in Informatics</a
      >.
    </p>

    <p>
      At Harvard, I’ve been a distinguished teaching fellow for upper-level CS
      classes. I enjoy playing viola with various <a
        class="link"
        href="https://www.harvardradcliffeorchestra.org/">classical</a
      >
      <a class="link" href="https://youtu.be/rYrVFTzP4sw">music</a>
      <a class="link" href="https://youngarts.org/">groups</a>.
    </p>

    <p>Other interests: math, physics, art, musical theatre, and biking.</p>
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
