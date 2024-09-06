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
        <Header /> {/* Render the Header component */}
        <Box
          marginTop="60px" // Adjust this based on the height of the fixed header
          padding="20px" // Add padding for content
          minHeight="100vh" // Minimum height to ensure full viewport coverage
          backgroundImage="url('/1340.jpg')" // Correct path to the image in the public folder
          backgroundSize="cover" // Ensure the image covers the entire area
          backgroundRepeat="no-repeat" // Do not repeat the image
          backgroundAttachment="fixed" // Fix the background image
          backgroundPosition="center center" // Center the image both horizontally and vertically
          overflowY="auto" // Allow vertical scrolling
        >
          <ContentWithConditionalText />{" "}
          {/* Conditionally render text and routes */}
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
          padding="80px"
          justify="center"
          minHeight="600px" // Example content height for scrolling
          backgroundColor="transparent"
        >
          <Text fontSize="82px" fontWeight="100">
            Hello there,
          </Text>
          <Text fontSize="92px" fontWeight="100">
            I am Nivedita G
          </Text>
        </Flex>
      )}
      <Routes>
        <Route path="/" element={<Header />} />{" "}
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
