<script context="module" lang="ts">
  import { dev } from "$app/env";

  export const hydrate = dev;
</script>

<script lang="ts">
  import WritingList from "@/components/WritingList.svelte";
  import writing from "@/lib/writing.yaml";
</script>

<svelte:head>
  <title>Eric Zhang – Writing</title>
</svelte:head>

<section class="container py-6">
  <h2 class="text-3xl font-serif mb-4">Academic Writing</h2>
  <WritingList data={writing.papers} />
</section>

<hr />

<section class="container py-6">
  <h2 class="text-3xl font-serif mb-4">Notes and Tutorials</h2>
  <WritingList data={writing.notes} />
</section>
