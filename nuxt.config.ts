import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxt/ui-pro"],
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "dark",
    fallback: "dark",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
        "fortinary",
      ],
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@vue-flow/core@1.45.0/dist/style.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@vue-flow/core@1.45.0/dist/theme-default.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css",
        },
      ],
    },
  },
  devtools: { enabled: true },
});
