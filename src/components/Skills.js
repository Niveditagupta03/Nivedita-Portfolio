import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Progress,
  Flex,
  Tag,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const coreSkills = [
  { name: "React.js", value: 90, color: "#FFD464" },
  { name: "JavaScript", value: 85, color: "#FF5E5E" },
  { name: "Python", value: 90, color: "#E23C64" },
  { name: "FastAPI", value: 85, color: "#B0183D" },
  { name: "Node.js", value: 80, color: "#FFD464" },
  { name: "Tailwind CSS", value: 85, color: "#FF5E5E" },
  { name: "Docker & AWS", value: 75, color: "#E23C64" },
  { name: "SQL Databases", value: 85, color: "#B0183D" },
];

const otherSkills = {
  "Programming Languages": ["Python", "JavaScript", "SQL"],
  "Front-End Development": ["React.js", "HTML", "CSS", "Tailwind CSS", "Responsive Design", "React Router"],
  "Back-End Development": ["FastAPI", "Node.js", "RESTful APIs", "Authentication (OAuth2, JWT)"],
  "Databases": ["MySQL", "PostgreSQL", "SQL Server"],
  "Tools & Technologies": ["Docker", "AWS", "Visual Studio Code", "Redis", "Git", "GitHub", "Power Automate"],
  "Core Concepts": ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Computer Networks"],
};

const Skills = () => {
  // Theme Mappings
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.45)", "rgba(20, 14, 28, 0.6)");
  const boxBg = useColorModeValue("rgba(255, 255, 255, 0.3)", "rgba(20, 14, 28, 0.4)");
  const borderStyle = useColorModeValue("1px solid rgba(255, 255, 255, 0.4)", "1px solid rgba(176, 24, 61, 0.2)");
  const headingColor = useColorModeValue("#B0183D", "#FFD464");
  const textColor = useColorModeValue("#B0183D", "#FCEDD8");
  const tagBg = useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.1)");
  const tagBorder = useColorModeValue("rgba(226, 60, 100, 0.2)", "rgba(255, 94, 94, 0.3)");

  return (
    <Box
      id="skills"
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
          Expertise
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="800"
          color={headingColor}
        >
          My Skills
        </Heading>
        <Text maxW="600px" color={textColor} fontWeight="500">
          A showcase of technologies, frameworks, and programming tools I work with to design and develop high-performing systems.
        </Text>
      </VStack>

      {/* Core Skills Grid with Progress Bars */}
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="6" mb="16">
        {coreSkills.map((skill, index) => (
          <Box
            key={index}
            p="5"
            borderRadius="2xl"
            bg={cardBg}
            border={borderStyle}
            backdropFilter="blur(10px)"
            boxShadow="0 8px 32px 0 rgba(176, 24, 61, 0.05)"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "0 12px 40px rgba(176, 24, 61, 0.1)",
            }}
          >
            {/* Skill Icon Substitute */}
            <Flex align="center" gap="3" mb="4">
              <Box
                w="10"
                h="10"
                borderRadius="xl"
                bg={`${skill.color}15`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                border={`1.5px solid ${skill.color}`}
              >
                <Text fontWeight="800" color={skill.color} fontSize="sm">
                  {skill.name.substring(0, 2).toUpperCase()}
                </Text>
              </Box>
              <Text fontWeight="700" color={textColor} fontSize="md">
                {skill.name}
              </Text>
            </Flex>

            {/* Progress details */}
            <Flex justify="space-between" align="center" mb="2">
              <Text fontSize="xs" fontWeight="700" color={textColor} opacity="0.8">
                Proficiency
              </Text>
              <Text fontSize="xs" fontWeight="800" color={skill.color}>
                {skill.value}%
              </Text>
            </Flex>
            <Progress
              value={skill.value}
              size="xs"
              borderRadius="full"
              bg="rgba(176, 24, 61, 0.1)"
              colorScheme="red"
              sx={{
                "& > div": {
                  background: skill.color,
                },
              }}
            />
          </Box>
        ))}
      </SimpleGrid>

      {/* Other Skills Dropdowns / Categories */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
        {Object.entries(otherSkills).map(([category, items]) => (
          <Box
            key={category}
            p="6"
            borderRadius="2xl"
            bg={boxBg}
            border={borderStyle}
            backdropFilter="blur(5px)"
            boxShadow="0 4px 24px rgba(176, 24, 61, 0.03)"
          >
            <Heading
              as="h4"
              fontSize="md"
              fontWeight="800"
              color={headingColor}
              mb="4"
              borderBottom={`2px solid ${tagBorder}`}
              pb="2"
            >
              {category}
            </Heading>
            <Flex wrap="wrap" gap="2">
              {items.map((item, idx) => (
                <Tag
                  key={idx}
                  size="md"
                  variant="subtle"
                  bg={tagBg}
                  color="#E23C64"
                  border={`1px solid ${tagBorder}`}
                  borderRadius="full"
                  fontWeight="600"
                  px="3"
                  py="1"
                >
                  {item}
                </Tag>
              ))}
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
