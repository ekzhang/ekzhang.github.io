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
    @apply border-b border-transparent transition-colors text-blue-700;
  }

  .nav-link:is(:hover, .active) {
    @apply border-blue-700;
  }
</style>
