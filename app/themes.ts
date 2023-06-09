import { extendTheme } from "@chakra-ui/react";

 const colors = {
  brand: {
    primary: "#9413c6",
    secondary: "#f08ff7",
    accent: "#14e53e",
  },

  neutral: "#1a191f",
  base100: "#2b333b",
  info: "#a7c3ec",
  success: "#20cfb5",
  warning: "#b88e05",
  error: "#f23a47",
};

//Extended our color to chakara ui theme color
export const themes = extendTheme({colors})
