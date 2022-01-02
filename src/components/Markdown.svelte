<script lang="ts">
  import { marked } from "marked";

  export let source: string;

  $: html = marked.parse(source);
</script>

<div class="md-output">
  {@html html}
</div>

<style lang="postcss">
  .md-output :global(p) {
    @apply mb-2;
  }

  .md-output :global(a) {
    @apply text-blue-700;
  }
  .md-output :global(a):hover {
    @apply underline;
  }

  .md-output :global(code) {
    @apply text-sm text-red-700;
  }
</style>
