/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        lightModeBackground:
          "rgb(var(--light-mode-background) / <alpha-value>)",
        lightModeForeground:
          "rgb(var(--light-mode-foreground) / <alpha-value>)",
        lightModeForegroundMuted:
          "rgb(var(--light-mode-foreground-muted) / <alpha-value>)",
        lightModeIconLinkOutline:
          "rgb(var(--light-mode-icon-link-outline) / <alpha-value>)",
        lightModeIconLinkBackground:
          "rgb(var(--light-mode-icon-link-background) / <alpha-value>)",
        lightModeIconLinkText:
          "rgb(var(--light-mode-icon-link-text) / <alpha-value>)",
        lightModeIconLinkOutlineHover:
          "rgb(var(--light-mode-icon-link-outline-hover) / <alpha-value>)",
        lightModeIconLinkBackgroundHover:
          "rgb(var(--light-mode-icon-link-background-hover) / <alpha-value>)",
        lightModeIconLinkTextHover:
          "rgb(var(--light-mode-icon-link-text-hover) / <alpha-value>)",
        lightModeCustomLinkOutline:
          "rgb(var(--light-mode-custom-link-outline) / <alpha-value>)",
        lightModeCustomLinkBackground:
          "rgb(var(--light-mode-custom-link-background) / <alpha-value>)",
        lightModeCustomLinkText:
          "rgb(var(--light-mode-custom-link-text) / <alpha-value>)",
        lightModeCustomLinkOutlineHover:
          "rgb(var(--light-mode-custom-link-outline-hover) / <alpha-value>)",
        lightModeCustomLinkBackgroundHover:
          "rgb(var(--light-mode-custom-link-background-hover) / <alpha-value>)",
        lightModeCustomLinkTextHover:
          "rgb(var(--light-mode-custom-link-text-hover) / <alpha-value>)",
        darkModeBackground: "rgb(var(--dark-mode-background) / <alpha-value>)",
        darkModeForeground: "rgb(var(--dark-mode-foreground) / <alpha-value>)",
        darkModeForegroundMuted:
          "rgb(var(--dark-mode-foreground-muted) / <alpha-value>)",
        darkModeIconLinkOutline:
          "rgb(var(--dark-mode-icon-link-outline) / <alpha-value>)",
        darkModeIconLinkBackground:
          "rgb(var(--dark-mode-icon-link-background) / <alpha-value>)",
        darkModeIconLinkText:
          "rgb(var(--dark-mode-icon-link-text) / <alpha-value>)",
        darkModeIconLinkOutlineHover:
          "rgb(var(--dark-mode-icon-link-outline-hover) / <alpha-value>)",
        darkModeIconLinkBackgroundHover:
          "rgb(var(--dark-mode-icon-link-background-hover) / <alpha-value>)",
        darkModeIconLinkTextHover:
          "rgb(var(--dark-mode-icon-link-text-hover) / <alpha-value>)",
        darkModeCustomLinkOutline:
          "rgb(var(--dark-mode-custom-link-outline) / <alpha-value>)",
        darkModeCustomLinkBackground:
          "rgb(var(--dark-mode-custom-link-background) / <alpha-value>)",
        darkModeCustomLinkText:
          "rgb(var(--dark-mode-custom-link-text) / <alpha-value>)",
        darkModeCustomLinkOutlineHover:
          "rgb(var(--dark-mode-custom-link-outline-hover) / <alpha-value>)",
        darkModeCustomLinkBackgroundHover:
          "rgb(var(--dark-mode-custom-link-background-hover) / <alpha-value>)",
        darkModeCustomLinkTextHover:
          "rgb(var(--dark-mode-custom-link-text-hover) / <alpha-value>)",
      },
    },
  },
};
