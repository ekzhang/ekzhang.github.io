<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import writing from "./writing.yaml";
</script>

<Seo
  title="Alex Wang – Writing"
  description="Essays on life, software engineering, and AI "
/>

<section class="layout-md py-12">
  <h2 class="heading2">Essays</h2>
  <WritingList data={writing.essays} />
</section>
