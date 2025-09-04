<script lang="ts">
  import { formatTime } from "$lib/utils";

  type PythonPost = {
    title: string;
    date: Date;
    summary: string;
    link: string;
  };

  export let data: PythonPost[] = [];
</script>

<div class="grid gap-y-6">
  {#each data as item}
    <a
      href={item.link}
      class="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"
      target={item.link.startsWith('/') ? '_self' : '_blank'}
      rel="noreferrer"
    >
      <div class="flex flex-col sm:flex-row sm:items-end mb-1.5">
        <div class="text-lg text-black">
          {item.title}
          {#if !item.link.startsWith('/')}
            <span class="text-neutral-400 text-sm ml-1">↗</span>
          {/if}
        </div>
        <div class="sm:ml-auto mb-0.5 text-neutral-500">
          {formatTime("%B %-d, %Y", item.date)}
        </div>
      </div>
      <div class="text-lg leading-snug font-serif italic">
        {item.summary}
      </div>
    </a>
  {/each}
</div>

