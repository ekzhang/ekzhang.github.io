<script lang="ts">
  import { Star, Tag } from "lucide-svelte";

  import Markdown from "$lib/components/Markdown.svelte";
  import { formatTime } from "$lib/utils";

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

<h3 class="text-black text-2xl font-medium mb-1.5">
  <span class="mr-1">{data.title}</span>
  <small class="whitespace-nowrap text-neutral-500 text-lg font-normal">
    {formatTime("%B %Y", data.date)}
  </small>
</h3>

<div class="flex flex-wrap mb-2">
  <a
    class="pill hover:bg-neutral-200 px-1.5 py-0.5 -mt-0.5 mb-0.5 -ml-1.5 mr-2.5 rounded transition-colors"
    href="https://github.com/{data.repo}/stargazers"
  >
    <Star size={16} class="fill-neutral-700" />
    {#if stars?.[data.repo] !== undefined}
      <span class="ml-1">{stars[data.repo].toLocaleString()}</span>
    {:else}
      <span>&ZeroWidthSpace;</span>
    {/if}
  </a>
  {#each data.topics as tag}
    <div class="pill mr-3 mb-1">
      <Tag size={16} class="text-neutral-400 mr-1" />
      {tag}
    </div>
  {/each}
</div>

<div class="space-y-4">
  <div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
    <div class="col-span-3 md:col-span-2">
      <p class="text-xl font-light mb-3">{data.lead}</p>
      <Markdown source={data.content} />
    </div>
    <div class="col-span-3 md:col-span-1">
      <a rel="external" href={images[`../../projects/${data.image}`]?.default}>
        <img
          src={images[`../../projects/${data.image}`]?.default}
          alt="{data.title} preview image"
          class:border={data.image_border}
        />
      </a>
    </div>
  </div>

  {#if data.subimages}
    <div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
      {#each data.subimages as image}
        <div class="col-span-full md:col-span-1">
          <a rel="external" href={images[`../../projects/${image}`]?.default}>
            <img
              src={images[`../../projects/${image}`]?.default}
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
    @apply flex items-center;
  }
</style>
