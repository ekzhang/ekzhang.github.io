<script lang="ts">
  import { onMount } from "svelte";
  import Link from "@/components/Link.svelte";
  import Project from "@/components/Project.svelte";
  import Spacer from "@/components/Spacer.svelte";
  import Seo from "@/components/Seo.svelte";

  const projects = import.meta.globEager("../projects/*.md") as any;
  const images = import.meta.globEager("../projects/*.{png,jpg}") as any;

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
          <Link to="#{trimName(id)}">{projects[id].title}</Link>
        </li>
      {/each}
    </ul>
  </section>
</div>

<Spacer />

{#each projectsByDate as id (id)}
  <section class="border-b last:border-b-0 border-zinc-200" id={trimName(id)}>
    <div class="container py-6">
      <Project data={projects[id]} {images} {stars} />
    </div>
  </section>
{/each}
