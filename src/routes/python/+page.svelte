<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import PythonList from "./PythonList.svelte";
  import engineeringData from "./engineering/engineering.yaml";
  import performativeData from "./performative/performative.yaml";
</script>

<Seo
  title="Alex Wang – Python"
  description="Python engineering and performance optimization"
/>

<section class="layout-md py-12">
  <h2 class="heading2">Python Dev Notes</h2>
  <div class="border-b border-neutral-300 mb-6" />
  {#if engineeringData.posts && engineeringData.posts.length > 0}
    <PythonList data={engineeringData.posts} />
  {:else}
    <p class="text-neutral-600">Coming soon</p>
  {/if}
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Performative Python</h2>
  <div class="border-b border-neutral-300 mb-6" />
  {#if performativeData.posts && performativeData.posts.length > 0}
    <PythonList data={performativeData.posts} />
  {:else}
    <p class="text-neutral-600">Coming soon</p>
  {/if}
</section>
