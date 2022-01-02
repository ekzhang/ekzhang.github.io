<script lang="ts">
  import { faStar } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { formatTime } from "@/lib/utils";
  import Markdown from "./Markdown.svelte";

  type Project = {
    title: string;
    date: string;
    content: string;
    repo: string;
    topics: string[];
    lead: string;
    image: string;
    image_border?: boolean;
    subimages?: string[];
  };

  export let data: Project;
  export let images: Record<string, { default: string }>;
  export let stars: Record<string, number> | null = null;
</script>

<h3 class="text-2xl font-serif mb-2">
  {data.title}
  <small class="whitespace-nowrap text-zinc-500 text-lg">
    {formatTime("%B %Y", data.date)}
  </small>
</h3>

<div class="flex flex-wrap mb-2">
  <a class="pill star" href="https://github.com/{data.repo}/stargazers">
    <Fa icon={faStar} size="sm" class="mb-0.5" />
    {#if stars?.[data.repo] !== undefined}
      <span class="ml-1">{stars[data.repo].toLocaleString()}</span>
    {:else}
      <span>&ZeroWidthSpace;</span>
    {/if}
  </a>
  {#each data.topics as tag}
    <div class="pill">{tag}</div>
  {/each}
</div>

<div class="space-y-4">
  <div class="grid grid-cols-3 gap-4 md:gap-6">
    <div class="col-span-3 md:col-span-2">
      <p class="text-xl font-light mb-2">{data.lead}</p>
      <Markdown source={data.content} />
    </div>
    <div class="col-span-3 md:col-span-1">
      <a rel="external" href={images[`../projects/${data.image}`]?.default}>
        <img
          src={images[`../projects/${data.image}`]?.default}
          alt="{data.title} preview image"
          class:border={data.image_border}
        />
      </a>
    </div>
  </div>

  {#if data.subimages}
    <div class="grid grid-cols-3 gap-4 md:gap-6">
      {#each data.subimages as image}
        <div class="col-span-full md:col-span-1">
          <a rel="external" href={images[`../projects/${image}`]?.default}>
            <img
              src={images[`../projects/${image}`]?.default}
              alt="{data.title} subimage"
            />
          </a>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .pill {
    @apply px-1.5 bg-gray-500 rounded text-white font-bold mr-[5px] mb-[5px] flex items-center;
  }

  .pill.star {
    @apply bg-amber-400;
  }
</style>
