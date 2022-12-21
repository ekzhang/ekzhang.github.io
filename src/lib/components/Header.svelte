<script lang="ts">
  import { page } from "$app/stores";

  const links = [
    { name: "projects", href: "/projects" },
    { name: "writing", href: "/writing" },
    { name: "resume", href: "/resume" },
  ];
</script>

<header
  class="layout-md grid grid-cols-2"
  data-sveltekit-noscroll
  data-sveltekit-preload-code="eager"
>
  <h1 class="font-bold text-black text-2xl mb-6">
    <a href="/">Eric Zhang</a>
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
