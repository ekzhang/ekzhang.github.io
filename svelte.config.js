import { resolve } from "path";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import yaml from "@rollup/plugin-yaml";
import TOML from "@iarna/toml";
import { dataToEsm } from "@rollup/pluginutils";

/** A custom Markdown plugin for Vite, with TOML frontmatter support. */
function markdown() {
  return {
    name: "markdown",

    transform(src, id) {
      if (/\.md$/.test(id)) {
        let frontmatter = {};
        let content = src;
        if (src.startsWith("+++")) {
          const end = src.indexOf("+++", 3);
          if (end === -1) {
            throw new Error(`Unclosed TOML frontmatter in ${id}`);
          }
          frontmatter = TOML.parse(src.substring(3, end).trim());
          content = src.substring(end + 3).trim();
        }
        return {
          code: dataToEsm({ ...frontmatter, content }),
          map: null,
        };
      }
    },
  };
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({ postcss: true })],

  kit: {
    adapter: adapter(),
    target: "#svelte",
    vite: {
      plugins: [yaml(), markdown()],
      resolve: {
        alias: {
          "@": resolve("src"),
        },
      },
    },
  },
};

export default config;
