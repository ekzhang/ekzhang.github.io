<script lang="ts">
  import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
  import Fa from "svelte-fa";
  import { formatTime } from "$lib/utils";

  type Writing = {
    title: string;
    date: string;
    summary: string;
    link: string;
  };

  export let data: Writing[];

  /** Hack to work around incorrect library typings in `svelte-fa`. */
  const disableTypecheck = (x: any) => x;
</script>

<div class="grid grid-cols-6 gap-x-6 gap-y-4">
  {#each data as item}
    <div class="col-span-6 md:col-span-3 xl:col-span-2">
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        class="item"
      >
        <div class="w-12 pt-1 flex-shrink-0">
          <Fa
            icon={faFileAlt}
            size={disableTypecheck("1.25x")}
            class="mx-auto"
          />
        </div>
        <div class="pr-3 overflow-y-auto">
          <p class="text-xl mb-1 leading-snug">{item.title}</p>
          <p class="font-light mb-1">
            {formatTime("%B %-d, %Y", new Date(item.date))}
          </p>
          <p>{item.summary}</p>
        </div>
      </a>
    </div>
  {/each}
</div>

<style lang="postcss">
  .item {
    @apply h-[164px] flex border border-zinc-200 py-3 bg-zinc-50 transition-colors
      hover:border-zinc-800;
  }
</style>
