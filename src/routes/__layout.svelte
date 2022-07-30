<script lang="ts">
  import "@fontsource/merriweather/300.css";
  import "@fontsource/merriweather/400.css";
  import "@fontsource/merriweather/700.css";
  import "@fontsource/roboto/300.css";
  import "@fontsource/roboto/300-italic.css";
  import "@fontsource/roboto/400.css";
  import "@fontsource/roboto/400-italic.css";
  import "@fontsource/roboto/700.css";
  import "@fontsource/roboto/700-italic.css";
  import "../app.css";

  import { dev } from "$app/env";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  {#if !dev}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-156644599-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "UA-156644599-1");
    </script>
  {/if}
</svelte:head>

<Header />

<main class="bg-white border-y border-zinc-200">
  <slot />
</main>

<Footer />
