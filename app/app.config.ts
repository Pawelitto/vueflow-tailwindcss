export default defineAppConfig({
  ui: {
    icons: {
      dynamic: true,
    },
    colors: {
      primary: "black",
      neutral: "neutral",
      tertiary: "fuchsia",
      fortinary: "teal",
    },
    tooltip: {
      default: {
        openDelay: 500,
      },
    },
    button: {
      slots: {
        base: "transition-all cursor-pointer",
      },
      defaultVariants: {
        color: "primary",
      },
    },
  },
})
