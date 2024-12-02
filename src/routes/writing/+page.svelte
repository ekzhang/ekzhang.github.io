<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import writing from "./writing.yaml";
</script>

<Seo
  title="Eric Zhang – Writing"
  description="Past writing: academic papers, presentations, notes, tutorials, and technical blog posts."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Technology</h2>
  <WritingList data={writing.technology} />
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Notes and Tutorials</h2>
  <WritingList data={writing.notes} />
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Academic Writing</h2>
  <WritingList data={writing.papers} />
</section>
