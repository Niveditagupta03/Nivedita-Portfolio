import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const AboutMe = () => {
  const stats = [
    { value: "B.Tech.", label: "Information Science" },
    { value: "1+ Years", label: "Industry Experience" },
    { value: "3+", label: "Major Projects" },
  ];

  // Theme Mappings
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.5)", "rgba(20, 14, 28, 0.6)");
  const borderStyle = useColorModeValue("1px solid rgba(255, 255, 255, 0.4)", "1px solid rgba(176, 24, 61, 0.2)");
  const headingColor = useColorModeValue("#B0183D", "#FFD464");
  const textColor = useColorModeValue("#B0183D", "#FCEDD8");

  return (
    <Box
      id="about-me"
      py={{ base: "12", md: "20" }}
      px={{ base: "4", md: "8" }}
      maxW="1200px"
      margin="0 auto"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: "10", md: "16" }} alignSelf="center">
        {/* Left Column - Image */}
        <Flex justify="center" align="center" position="relative">
          <Box
            position="absolute"
            w={{ base: "260px", md: "380px" }}
            h={{ base: "260px", md: "380px" }}
            bg="linear-gradient(135deg, rgba(255, 94, 94, 0.2), rgba(255, 212, 100, 0.2))"
            borderRadius="full"
            filter="blur(20px)"
            zIndex="1"
          />
          <Image
            src="/developer_about.png"
            alt="About Nivedita"
            w={{ base: "240px", md: "360px" }}
            h="auto"
            borderRadius="3xl"
            boxShadow="0 20px 40px rgba(176, 24, 61, 0.1)"
            zIndex="2"
            border="4px solid rgba(255, 255, 255, 0.5)"
          />
        </Flex>

        {/* Right Column - Text & Stats */}
        <Flex direction="column" justify="center" align={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }} zIndex="2">
          <Text
            fontSize="sm"
            fontWeight="700"
            letterSpacing="wider"
            color="#FF5E5E"
            textTransform="uppercase"
            mb="2"
          >
            Introduction
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            color={headingColor}
            mb="6"
          >
            About Me
          </Heading>

          <Text fontSize="md" color={textColor} fontWeight="500" mb="4" lineHeight="tall">
            Hello! I'm Nivedita Gupta, an Associate Software Engineer at Firstsource Solutions Limited. I specialize in designing and engineering full-stack web applications, integrating AI models (like OpenAI's LLM APIs), and workflow automation.
          </Text>

          <Text fontSize="md" color={textColor} fontWeight="400" mb="8" lineHeight="tall">
            I hold a B.Tech. in Information Science and Engineering from CMR Institute of Technology, Bengaluru. I enjoy solving complex logic problems and translating them into robust, user-centered digital solutions.
          </Text>

          {/* Stats Grid */}
          <SimpleGrid columns={3} spacing="4" w="100%" mb="8">
            {stats.map((stat, i) => (
              <Box
                key={i}
                p="4"
                borderRadius="2xl"
                bg={cardBg}
                border={borderStyle}
                backdropFilter="blur(5px)"
                textAlign="center"
                boxShadow="0 4px 20px rgba(176, 24, 61, 0.03)"
              >
                <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="800" color="#E23C64">
                  {stat.value}
                </Text>
                <Text fontSize={{ base: "10px", md: "xs" }} fontWeight="600" color={textColor} mt="1">
                  {stat.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <Button
            as={Link}
            href="/resume.pdf"
            isExternal
            variant="outline"
            borderColor="#FF5E5E"
            color="#FF5E5E"
            borderRadius="full"
            px="8"
            h="12"
            fontWeight="700"
            _hover={{
              bg: "#FF5E5E",
              color: "white",
              boxShadow: "0 4px 15px rgba(255, 94, 94, 0.3)",
              textDecoration: "none",
            }}
          >
            Download Full Resume
          </Button>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default AboutMe;
