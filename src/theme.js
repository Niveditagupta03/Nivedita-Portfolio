import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Poppins', 'Nunito', sans-serif`,
    body: `'Poppins', 'Nunito', sans-serif`,
  },
});

export default theme;
