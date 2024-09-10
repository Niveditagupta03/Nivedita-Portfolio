import React from "react";
import { ChakraProvider, Box, Flex, Text } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Skills from "./components/Skills";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Box
          marginTop="60px"
          minHeight="100vh"
          backgroundImage="url('/1340.jpg')"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundAttachment="fixed"
          backgroundPosition="center center"
          overflowY="auto"
          padding={{ base: "10px", md: "20px", lg: "30px" }}
          fontSize={{ base: "14px", md: "18px", lg: "22px" }}
        >
          <ContentWithConditionalText />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

function ContentWithConditionalText() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <Flex
          direction="column"
          padding={{ base: "20px", md: "40px", lg: "60px" }}
          justify="center"
          minHeight="600px"
          backgroundColor="transparent"
        >
          <Text
            fontSize={{ base: "36px", md: "48px", lg: "60px" }}
            fontWeight="100"
          >
            Hello there,
          </Text>
          <Text
            fontSize={{ base: "40px", md: "52px", lg: "94px" }}
            fontWeight="100"
          >
            I am Nivedita G
          </Text>
        </Flex>
      )}
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
