<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="Alex Wang"
  description="Software engineer, researcher, and Writer. "
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="eric-is"
>
  <span class="g">is a</span> software engineer<span class="g">,</span><br />
  researcher<span class="g">, and</span><br />
  writer<span class="g">.</span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
      I'm currently a undergraduate at Stanford studying Math and CS (systems +
      AI), but spend most of my free time on art history, philosophy, and random
      literature.
    </p>
    <p>
      I'm interested in AI, distributed computing, and autonomous systems. I
      hope to build better software and systems, and always try to understand
      the <em>why</em>
      behind things.
    </p>
  </div>

  <div class="leading-snug space-y-4">
    <h2 class="pb-2">Projects</h2>
    <p>Here are some projects I've worked on in the past:</p>

    <ol class="list-decimal pl-6 space-y-1">
      <li>
        <a
          class="link"
          href="https://x.com/alexwan10574446/status/1854261579258200550"
          >Fencing a Drone</a
        >
      </li>
      <li>
        <a
          class="link"
          href="https://medium.com/stanford-cs224w/graph-based-reasoning-framework-385e850ef7f4"
          >GNNs for Reasoning</a
        >
      </li>
      <li>
        <a
          class="link"
          href="https://github.com/alexwang0317/TaylorSwiftGeneticAlgorithms/blob/main/Taylor_Swift_Paradox%20(12).pdf"
          >Taylor Swift & Genetic Algorithms</a
        >
      </li>
      <li>
        <a
          class="link"
          href="https://drive.google.com/file/d/1PqKvKNTgwOwVSjqYGeRECQLEIRoCMu3-/view?usp=sharing"
          >Chemical Sculptures</a
        >
      </li>
      <li>
        <a
          class="link"
          href="https://drive.google.com/file/d/1ySvLhD_-F-yIzr4IbxILDwCjSymwu-lH/view?usp=sharing"
          >Building Drones that Respond to Voice Commands</a
        >
      </li>
      <li>
        <a
          class="link"
          href="https://drive.google.com/file/d/1s5V4dYky-vsPLQHjqE2ueYpN3xnhgC5d/view?usp=sharing"
          >Improving Multi-Agentic LLM Creativity</a
        >
      </li>
      <li>
        <a
          class="link"
          href="https://drive.google.com/file/d/1YN2QKDYRtH4l5QQVBpHWo_RkHZWZ0T-q/view?usp=sharing"
          >Low-Cost Tuberculosis Detection with CRISPR-Cas12a</a
        >
      </li>
    </ol>
  </div>

  <div class="space-y-5">
    <p>
      Previously, I worked at <a class="link" href="https://www.meta.com/about/"
        >Meta</a
      >, <a class="link" href="https://stanfordasl.github.io/">Stanford ASL</a>,
      <a class="link" href="https://biostate.ai/">Biostate AI</a>,
      <a class="link" href="https://drorlab.stanford.edu/">Dror Lab</a>, and
      <a class="link" href="https://www.afrl.af.mil/"
        >Air Force Research Laboratory</a
      >. In my freetime, I write about agency, Python, and AI research. I also
      sing tenor with the
      <a class="link" href="https://stanfordmendicants.com/"
        >Stanford Mendicants</a
      > and play guitar.
    </p>
  </div>
</div>

<div class="layout-md mt-16 mb-8">
  <div class="text-sm text-neutral-500 text-center border-t pt-8">
    This site is based on <a
      class="link"
      href="https://github.com/ekzhang/ekzhang.github.io"
      target="_blank">Eric Zhang's personal website</a
    >. Thanks Eric!
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
