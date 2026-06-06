import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function AppContent() {
  const bgGradient = useColorModeValue(
    "linear-gradient(135deg, #FCEDD8 0%, #FFD464 25%, #FF5E5E 50%, #E23C64 75%, #B0183D 100%)",
    "linear-gradient(135deg, #0C0512 0%, #150820 35%, #2B082B 70%, #08030D 100%)"
  );

  return (
    <Box
      minHeight="100vh"
      bgGradient={bgGradient}
      bgAttachment="fixed"
      transition="background 0.3s ease-in-out"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Box
        mt="60px"
        padding={{ base: "10px", md: "20px", lg: "30px" }}
        fontSize={{ base: "14px", md: "18px", lg: "22px" }}
        flex="1"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
