<script lang="ts">
  import { page } from "$app/stores";

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Writing", href: "/writing" },
    { name: "Resume", href: "/resume" },
  ];
</script>

<header>
  <h1 class="font-serif text-[2.8rem] mt-5 mb-2 text-center">Eric Zhang</h1>
  <nav
    class="flex justify-center text-xl sm:text-2xl font-light mb-4 space-x-3"
    data-sveltekit-prefetch
    data-sveltekit-noscroll
  >
    {#each links as link (link)}
      <a
        href={link.href}
        class="nav-link"
        class:active={$page.url.pathname === link.href}
      >
        {link.name}
      </a>
    {/each}
  </nav>
</header>

<style lang="postcss">
  .nav-link {
    @apply relative inline-block text-blue-600;
  }

  .nav-link::after {
    @apply absolute inset-x-0 bottom-0 h-0.5 bg-transparent;
    content: "";
    transition: background 0.15s;
  }

  .nav-link:is(:hover, .active)::after {
    @apply bg-blue-600/75;
  }
</style>
