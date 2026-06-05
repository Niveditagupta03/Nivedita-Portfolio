import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  SimpleGrid,
  Image,
  Flex,
  Tag,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const projects = [
  {
    title: "Bulk Emailer (Cold Mailing Tool)",
    description:
      "A bulk cold mailing tool allowing users to upload CSV recipient lists, custom subjects, and attachments. Auto-generates missing email addresses dynamically when a domain exists.",
    tags: ["React.js", "Node.js", "Gmail API", "MySQL"],
    image: "/bm.jpg",
    codeLink: "https://github.com/Niveditagupta03",
    demoLink: "#",
    gradient: "linear-gradient(135deg, #FFD464 0%, #FF5E5E 100%)",
  },
  {
    title: "NiveMart (E-Commerce Platform)",
    description:
      "A fully responsive full-stack shopping portal with secure Google OAuth authentication, structured database tables for inventory management, and FastAPI backend Swagger documentation.",
    tags: ["React.js", "FastAPI", "Google OAuth", "Chakra UI"],
    image: "/fi.jpg",
    codeLink: "https://github.com/Niveditagupta03",
    demoLink: "#",
    gradient: "linear-gradient(135deg, #FF5E5E 0%, #E23C64 100%)",
  },
  {
    title: "Financial Intelligence Platform",
    description:
      "A fintech platform with secure login frameworks and dynamic loan application forms. Implemented Alembic migrations for database controls and Poetry environment configurations.",
    tags: ["React.js", "FastAPI", "React Router", "Alembic"],
    image: "/dc.jpg",
    codeLink: "https://github.com/Niveditagupta03",
    demoLink: "#",
    gradient: "linear-gradient(135deg, #E23C64 0%, #B0183D 100%)",
  },
  {
    title: "Project Tracker",
    description:
      "A collaborative project management application featuring interactive boards, task prioritization matrices, real-time activity tracking, and secure user authentication workspaces.",
    tags: ["React.js", "Node.js", "Chakra UI", "REST APIs"],
    image: "/projectTrckerImage.jpg",
    codeLink: "https://github.com/Niveditagupta03",
    demoLink: "https://project-tracker-silk-phi.vercel.app/login",
    gradient: "linear-gradient(135deg, #B0183D 0%, #FF5E5E 100%)",
  },
];

const Portfolio = () => {
  // Theme Mappings
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.45)", "rgba(20, 14, 28, 0.6)");
  const borderStyle = useColorModeValue("1px solid rgba(255, 255, 255, 0.4)", "1px solid rgba(176, 24, 61, 0.2)");
  const headingColor = useColorModeValue("#B0183D", "#FFD464");
  const textColor = useColorModeValue("#B0183D", "#FCEDD8");
  const tagBg = useColorModeValue("rgba(255, 94, 94, 0.1)", "rgba(255, 255, 255, 0.1)");
  const tagColor = useColorModeValue("#E23C64", "#FF5E5E");

  return (
    <Box
      id="portfolio"
      py={{ base: "12", md: "20" }}
      px={{ base: "4", md: "8" }}
      maxW="1200px"
      margin="0 auto"
    >
      <VStack spacing="4" textAlign="center" mb="12">
        <Text
          fontSize="sm"
          fontWeight="700"
          letterSpacing="wider"
          color="#FF5E5E"
          textTransform="uppercase"
        >
          My Works
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="800"
          color={headingColor}
        >
          Featured Projects
        </Heading>
        <Text maxW="600px" color={textColor} fontWeight="500">
          A showcase of web applications and automation pipelines built during my corporate internship, personal work, and academic studies.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing="8">
        {projects.map((project, index) => (
          <Flex
            key={index}
            direction="column"
            borderRadius="2xl"
            overflow="hidden"
            bg={cardBg}
            border={borderStyle}
            backdropFilter="blur(15px)"
            boxShadow="0 8px 32px 0 rgba(176, 24, 61, 0.05)"
            transition="all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)"
            _hover={{
              transform: "translateY(-8px)",
              boxShadow: "0 15px 40px rgba(176, 24, 61, 0.12)",
            }}
          >
            {/* Image Wrapper with fallback Gradient */}
            <Box
              height="200px"
              position="relative"
              background={project.gradient}
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={project.image}
                alt={project.title}
                maxHeight="100%"
                maxWidth="100%"
                objectFit="cover"
                fallback={<Box w="100%" h="100%" bg={project.gradient} />}
              />
            </Box>

            {/* Project Content */}
            <Flex p="6" direction="column" flexGrow="1">
              <Heading
                as="h3"
                fontSize="xl"
                fontWeight="800"
                color={headingColor}
                mb="3"
              >
                {project.title}
              </Heading>
              
              <Text fontSize="sm" color={textColor} fontWeight="500" mb="4" noOfLines={3}>
                {project.description}
              </Text>

              {/* Tags */}
              <Flex wrap="wrap" gap="2" mb="6">
                {project.tags.map((tag, i) => (
                  <Tag
                    key={i}
                    size="sm"
                    borderRadius="full"
                    variant="solid"
                    bg={tagBg}
                    color={tagColor}
                    fontWeight="700"
                  >
                    {tag}
                  </Tag>
                ))}
              </Flex>

              {/* Action Buttons */}
              <Flex gap="4" mt="auto" justify="space-between">
                <Button
                  as={Link}
                  href={project.codeLink}
                  isExternal
                  flex="1"
                  variant="outline"
                  borderColor="#E23C64"
                  color="#E23C64"
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight="700"
                  h="10"
                  _hover={{
                    bg: "#E23C64",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Source Code
                </Button>
                <Button
                  as={Link}
                  href={project.demoLink}
                  flex="1"
                  bgGradient="linear(to-r, #FF5E5E, #E23C64)"
                  color="white"
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight="700"
                  h="10"
                  _hover={{
                    bgGradient: "linear(to-r, #E23C64, #B0183D)",
                    textDecoration: "none",
                  }}
                  rightIcon={<ExternalLinkIcon />}
                >
                  Live Demo
                </Button>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>

      {/* View All Projects Bottom CTA */}
      <Flex justify="center" mt="12">
        <Button
          as={Link}
          href="https://github.com/Niveditagupta03"
          isExternal
          bgGradient="linear(to-r, #FF5E5E, #E23C64)"
          color="white"
          borderRadius="full"
          px="10"
          h="12"
          fontWeight="700"
          boxShadow="0 4px 15px rgba(226, 60, 100, 0.25)"
          _hover={{
            bgGradient: "linear(to-r, #E23C64, #B0183D)",
            boxShadow: "0 6px 20px rgba(176, 24, 61, 0.35)",
            textDecoration: "none",
          }}
        >
          View All Projects
        </Button>
      </Flex>
    </Box>
  );
};

export default Portfolio;
