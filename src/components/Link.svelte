<script lang="ts">
  export let to: string;
  export let external: boolean = false;
  export let newTab: boolean = false;

  let rel: string;
  $: {
    const relParts = [];
    if (external) relParts.push("external");
    if (newTab) relParts.push("noopener", "noreferrer");
    rel = relParts.join(" ");
  }
</script>

<a href={to} {rel} target={newTab ? "_blank" : null}><slot /></a>

<style lang="postcss">
  a {
    @apply text-blue-700;
  }
  a:hover {
    @apply underline;
  }
</style>
