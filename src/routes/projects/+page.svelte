<script lang="ts">
  import { onMount } from "svelte";

  import Seo from "$lib/components/Seo.svelte";
  import Project from "./Project.svelte";

  const projects = import.meta.glob("../../projects/*.md", {
    eager: true,
  }) as any;
  const images = import.meta.glob("../../projects/*.{png,jpg,svg}", {
    eager: true,
  }) as any;

  function trimName(id: string) {
    return id.match(/\.\.\/projects\/(.*)\.md$/)?.[1];
  }

  $: projectsByDate = Object.keys(projects).sort(
    (a, b) => projects[b].date - projects[a].date
  );
  $: projectsByTitle = Object.keys(projects).sort((a, b) => {
    const titleA = projects[a].title.toLowerCase();
    const titleB = projects[b].title.toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });

  let stars: Record<string, number> | null = null;
  onMount(async () => {
    const resp = await fetch(
      "https://api.github.com/users/ekzhang/repos?per_page=100"
    );
    const repos = await resp.json();
    stars = {};
    for (const obj of repos) {
      stars[obj.full_name] = obj.stargazers_count;
    }
  });

  $: projectsByStars = [...projectsByTitle].sort((a, b) => {
    const starsA = stars?.[projects[a].repo] ?? 0;
    const starsB = stars?.[projects[b].repo] ?? 0;
    return starsB - starsA;
  });

  let sortOrder: "date" | "stars" = "date";
</script>

<Seo
  title="Eric Zhang – Projects"
  description="Open-source software projects in systems, web development, computer graphics, music, programming languages, machine learning, and more."
/>

<div class="container py-6 space-y-4">
  <section class="space-y-2">
    <h2 class="text-3xl font-serif">Projects</h2>
    <p>
      I view building software in the open as a medium of
      <em>creative exploration</em>. It allows me to quickly act on inspiration,
      delve into new topics, and make tools that improve people's lives. I
      welcome collaborations — if you find something interesting, let me know!
    </p>
  </section>
  <section class="space-y-2">
    <h3 class="text-xl font-serif">Table of Contents</h3>
    <ul class="list-unstyled">
      {#each projectsByTitle as id (id)}
        <li>
          <a class="link" href="#{trimName(id)}">{projects[id].title}</a>
        </li>
      {/each}
    </ul>
  </section>
</div>

<div class="bg-zinc-50 border-y border-zinc-200">
  <div class="container py-4">
    <div class="flex justify-center space-x-2">
      <button
        class:active={sortOrder === "date"}
        on:click={() => (sortOrder = "date")}
      >
        by Date
      </button>
      <button
        class:active={sortOrder === "stars"}
        on:click={() => (sortOrder = "stars")}
      >
        by Stars
      </button>
    </div>
  </div>
</div>

{#each sortOrder === "date" ? projectsByDate : projectsByStars as id (id)}
  <section
    class="border-b last-of-type:border-b-0 border-zinc-200"
    id={trimName(id)}
  >
    <div class="container py-6">
      <Project data={projects[id]} {images} {stars} />
    </div>
  </section>
{/each}

<style lang="postcss">
  button {
    @apply px-2.5 py-1 rounded flex items-center hover:bg-gray-200;
  }

  button.active {
    @apply bg-indigo-600 text-white;
  }
</style>
