export default defineAppConfig({
  ui: {
    icons: {
      dynamic: true,
    },
    colors: {
      primary: "indigo",
      neutral: "neutral",
      tertiary: "fuchsia",
      fortinary: "teal",
    },
    gray: "zinc",
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
});
