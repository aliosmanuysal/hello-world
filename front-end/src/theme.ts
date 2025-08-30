import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    tech: {
      50: "#eaf6ff",
      100: "#cfeefb",
      200: "#9fe0f6",
      300: "#61c7f0",
      400: "#2aa8e6",
      500: "#0A57A4", // tech blue
      600: "#084a8a",
    },
    greenery: {
      50: "#eafaf1",
      100: "#cdefe0",
      200: "#a6e6c6",
      300: "#6fd99b",
      400: "#38cf75",
      500: "#2AC77D", // tech green
      600: "#239e67",
    },
  },
  components: {
    Progress: {
      baseStyle: {
        track: {
          bg: "gray.200",
        },
      },
    },
    Button: {
      variants: {
        campaign: {
          bg: "linear-gradient(90deg, var(--chakra-colors-tech-500), var(--chakra-colors-greenery-500))",
          color: "white",
        },
      },
    },
  },
});

export default theme;
