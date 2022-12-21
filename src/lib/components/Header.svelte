<script lang="ts">
  import { page } from "$app/stores";

  const links = [
    { name: "projects", href: "/projects" },
    { name: "writing", href: "/writing" },
    { name: "resume", href: "/resume" },
  ];

  let pageTitle: string | null = null;
  $: {
    const link = links.find(({ href }) => href === $page.url.pathname);
    if (link) {
      pageTitle = link.name.charAt(0).toUpperCase() + link.name.slice(1);
    } else {
      pageTitle = null;
    }
  }
</script>

<header
  class="layout-md grid grid-cols-2"
  data-sveltekit-noscroll
  data-sveltekit-preload-code="eager"
>
  <h1 class="font-bold text-black text-2xl mb-6">
    <a href="/">Eric Zhang</a>
    {#if pageTitle}
      <span class="font-light">
        <span class="text-neutral-400">—</span>
        {pageTitle}
      </span>
    {/if}
  </h1>
  <nav
    class="flex items-start text-neutral-500 justify-end space-x-6 text-lg py-0.5"
  >
    {#each links as link (link)}
      <a
        href={link.href}
        class="hover:text-black transition-colors"
        class:text-black={$page.url.pathname === link.href}
      >
        {link.name}
      </a>
    {/each}
  </nav>
</header>
