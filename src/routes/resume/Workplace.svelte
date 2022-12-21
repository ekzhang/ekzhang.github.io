<script lang="ts">
  export let title: string;
  export let company: string;
  export let url: string;
  export let dates: string;
  export let location: string;
</script>

<div>
  <h3 class="text-xl font-serif mb-0.5">
    {title} at <a class="link" href={url}>{company}</a>
  </h3>
  <p class="font-serif mb-2">
    <span class="whitespace-nowrap">{dates}</span>
    <span class="px-0.5 text-gray-500">•</span>
    <span class="whitespace-nowrap">{location}</span>
  </p>
  <ul>
    <slot />
  </ul>
</div>
