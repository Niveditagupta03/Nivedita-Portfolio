// import React from "react";
// import { ChakraProvider, Box, Flex, Text } from "@chakra-ui/react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";

// import Header from "./components/Header";
// import AboutMe from "./components/AboutMe";
// import Portfolio from "./components/Portfolio";
// import Services from "./components/Services";
// import Resume from "./components/Resume";
// import Articles from "./components/Articles";
// import Contact from "./components/Contact";
// import FAQs from "./components/FAQs";
// import Skills from "./components/Skills";

// function App() {
//   return (
//     <ChakraProvider>
//       <Router>
//         <Header />
//         <Box
//           marginTop="60px" // Adjust this based on the height of the fixed header
//           minHeight="100vh" // Minimum height to ensure full viewport coverage
//           backgroundImage="url('/1340.jpg')" // Correct path to the image in the public folder
//           backgroundSize="cover" // Ensure the image covers the entire area
//           backgroundRepeat="no-repeat" // Do not repeat the image
//           backgroundAttachment="fixed" // Fix the background image
//           backgroundPosition="center center" // Center the image both horizontally and vertically
//           overflowY="auto" // Allow vertical scrolling
//           padding={{ base: "10px", md: "20px", lg: "30px" }}
//           fontSize={{ base: "14px", md: "18px", lg: "22px" }}
//         >
//           <ContentWithConditionalText />
//         </Box>
//       </Router>
//     </ChakraProvider>
//   );
// }

// function ContentWithConditionalText() {
//   const location = useLocation();

//   return (
//     <>
//       {location.pathname === "/" && (
//         <Flex
//           direction="column"
//           padding={{ base: "20px", md: "40px", lg: "60px" }}
//           justify="center"
//           minHeight="600px" // Example content height for scrolling
//           backgroundColor="transparent"
//         >
//           <Text
//             fontSize={{ base: "36px", md: "48px", lg: "60px" }}
//             fontWeight="100"
//           >
//             Hello there,
//           </Text>
//           <Text
//             fontSize={{ base: "40px", md: "52px", lg: "64px" }}
//             fontWeight="100"
//           >
//             I am Nivedita G
//           </Text>
//         </Flex>
//       )}
//       <Routes>
//         <Route path="/about-me" element={<AboutMe />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/articles" element={<Articles />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/faqs" element={<FAQs />} />
//         <Route path="/skills" element={<Skills />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
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

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box
          minHeight="100vh"
          bgImage="url('1340.jpg')"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          bgPosition="center center"
        >
          <Header />
          <Box
            mt="60px" // Adjust margin-top if your header height changes
            padding={{ base: "10px", md: "20px", lg: "30px" }} // Adjust padding for responsiveness
            fontSize={{ base: "14px", md: "18px", lg: "22px" }} // Adjust font size for responsiveness
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
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
