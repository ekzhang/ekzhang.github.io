<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "$lib/components/WritingList.svelte";
  import writing from "$lib/writing.yaml";
</script>

<Seo
  title="Eric Zhang – Writing"
  description="Past writing: academic papers, presentations, notes, tutorials, and technical blog posts."
/>

<section class="layout-md py-12">
  <h2 class="text-xl font-medium mb-4">Academic Writing</h2>
  <WritingList data={writing.papers} />
</section>

<section class="layout-md py-12">
  <h2 class="text-xl font-medium mb-4">Notes and Tutorials</h2>
  <WritingList data={writing.notes} />
</section>
