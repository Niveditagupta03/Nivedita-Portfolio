import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Link,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaMedium, FaTwitter } from "react-icons/fa";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import YouTubeVideos from "./YouTubeVideos";
import Articles from "./Articles";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
      }
    }
  }, []);

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/nivedita-g-b942a421b", color: "#0077B5" },
    { icon: FaGithub, href: "https://github.com/Niveditagupta03", color: "#181717" },
    { icon: FaMedium, href: "https://medium.com/@annie.gupta03", color: "#E23C64" },
    { icon: FaTwitter, href: "https://x.com/Niveditagupta03", color: "#1DA1F2" },
  ];

  // Theme Mappings
  const headingColor = useColorModeValue("#B0183D", "#FFD464");
  const textColor = useColorModeValue("#B0183D", "#FCEDD8");
  const iconBg = useColorModeValue("white", "rgba(255, 255, 255, 0.1)");
  const outlineBtnBg = useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.05)");

  return (
    <Box maxW="1200px" margin="0 auto" pt={{ base: "8", md: "12" }}>
      {/* Hero Section */}
      <SimpleGrid
        id="hero"
        columns={{ base: 1, md: 2 }}
        spacing={{ base: "8", md: "12" }}
        minHeight={{ base: "calc(100vh - 100px)", md: "calc(100vh - 120px)" }}
        alignItems="center"
        px={{ base: "4", md: "8" }}
        mb={{ base: "12", md: "0" }}
      >
        {/* Left Column - Content */}
        <Flex
          direction="column"
          justify="center"
          align={{ base: "center", md: "start" }}
          textAlign={{ base: "center", md: "left" }}
        >
          {/* Social Icons Badge */}
          <Flex gap="3" mb="6">
            {socialLinks.map((social, i) => (
              <IconButton
                key={i}
                as={Link}
                href={social.href}
                isExternal
                icon={<social.icon />}
                size="md"
                borderRadius="full"
                bg={iconBg}
                color={social.color}
                boxShadow="md"
                _hover={{
                  transform: "scale(1.1)",
                  boxShadow: "lg",
                  background: `${social.color}20`,
                }}
                transition="all 0.2s"
                aria-label={`Link to ${social.href}`}
              />
            ))}
          </Flex>

          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="800"
            color="#FF5E5E"
            mb="1"
          >
            Hi, I'm
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="900"
            lineHeight="none"
            color={headingColor}
            mb="6"
          >
            Nivedita Gupta
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={textColor}
            fontWeight="600"
            mb="8"
            maxW="500px"
            lineHeight="tall"
          >
            Associate Software Engineer specialized in Full Stack Development, AI RAG applications, and workflow automation.
          </Text>

          <Flex gap="4" w={{ base: "100%", sm: "auto" }} direction={{ base: "column", sm: "row" }}>
            <Button
              as={Link}
              href="/resume.pdf"
              isExternal
              bgGradient="linear(to-r, #FF5E5E, #E23C64)"
              color="white"
              borderRadius="full"
              px="8"
              h="12"
              fontWeight="700"
              boxShadow="0 4px 15px rgba(226, 60, 100, 0.3)"
              _hover={{
                bgGradient: "linear(to-r, #E23C64, #B0183D)",
                boxShadow: "0 6px 20px rgba(176, 24, 61, 0.4)",
                textDecoration: "none",
              }}
            >
              Download Resume
            </Button>
            <Button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              borderColor="#E23C64"
              color="#E23C64"
              borderRadius="full"
              px="8"
              h="12"
              fontWeight="700"
              bg={outlineBtnBg}
              _hover={{
                bg: "rgba(226, 60, 100, 0.1)",
              }}
            >
              Contact Me
            </Button>
          </Flex>
        </Flex>

        {/* Right Column - Illustration */}
        <Flex justify="center" align="center" position="relative">
          {/* Glass background blob */}
          <Box
            position="absolute"
            w={{ base: "280px", md: "420px" }}
            h={{ base: "280px", md: "420px" }}
            bg="linear-gradient(135deg, rgba(255, 212, 100, 0.25), rgba(255, 94, 94, 0.2))"
            borderRadius="full"
            filter="blur(25px)"
            zIndex="1"
          />
          <Image
            src="/developer_hero.png"
            alt="Nivedita Illustration"
            w={{ base: "260px", md: "400px" }}
            h="auto"
            zIndex="2"
          />
        </Flex>
      </SimpleGrid>

      {/* Sections sequence */}
      <AboutMe />
      <Skills />
      <Portfolio />
      <YouTubeVideos />
      <Articles />
      <Contact />
    </Box>
  );
};

export default Home;
