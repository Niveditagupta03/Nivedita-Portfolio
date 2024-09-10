import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Box
      padding={{ base: "10px", md: "20px", lg: "30px" }}
      fontSize={{ base: "14px", md: "18px", lg: "22px" }}
      minHeight="100vh"
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}

export default Layout;
