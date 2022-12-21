<script lang="ts">
  import Fa from "svelte-fa";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  import {
    faGithub,
    faTwitter,
    faFacebook,
    faQuora,
  } from "@fortawesome/free-brands-svg-icons";

  const links = [
    {
      name: "GitHub",
      href: "https://github.com/ekzhang",
      icon: faGithub,
      color: "#24292e",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ekzhang1",
      icon: faTwitter,
      color: "#00acee",
    },
    {
      name: "Facebook",
      href: "https://fb.me/ekzhang",
      icon: faFacebook,
      color: "#3b5998",
    },
    {
      name: "Quora",
      href: "https://www.quora.com/profile/Eric-Zhang-99",
      icon: faQuora,
      color: "#aa2200",
    },
    {
      name: "Mail",
      href: "mailto:ekzhang1@gmail.com",
      icon: faEnvelope,
      color: "#333",
    },
  ];
</script>

<!--
<footer class="p-6 pb-8 space-y-4">
  <div class="flex justify-center space-x-4">
    {#each links as link (link)}
      <a style="color: {link.color}" href={link.href}>
        <Fa
          icon={link.icon}
          size="2x"
          class="opacity-75 transition-opacity hover:opacity-100"
        />
      </a>
    {/each}
  </div>
  <p class="text-center text-gray-400 font-light">
    Made by Eric Zhang. Design inspired by Michael Fogleman.
  </p>
</footer> -->

<footer class="mt-20 text-lg flex flex-col">
  <div>
    <p>Twitter</p>
  </div>
</footer>
