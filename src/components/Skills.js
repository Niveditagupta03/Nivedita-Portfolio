import React from "react";
import { Box, Heading, Text, VStack, SimpleGrid, Tag } from "@chakra-ui/react";

const skills = {
  ProgrammingLanguages: [
    "Python3",
    "Java",
    "C",
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
  ],
  FrameworksLibraries: [
    "FastAPI",
    "Pydantic",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Numpy",
    "Pandas",
    "Matplotlib",
    "React",
    "Tailwind",
  ],
  Tools: [
    "Jupyter",
    "Collab",
    "Docker",
    "Git",
    "OpenCV",
    "PyOCR",
    "PyPDF",
    "Ollama",
    "NLTK",
    "OpenAI",
    "Langchain",
    "Qdrant",
    "IoT",
    "Arduino",
  ],
  Databases: ["SQL", "MySQL", "NoSQL", "MongoDB"],
};

const Skills = () => {
  return (
    <Box
      padding="30px"
      maxWidth="800px"
      margin="auto"
      marginTop="35px"
      backgroundColor="white"
    >
      <Heading as="h1" size="2xl" mb="6" textAlign="center" fontWeight="200">
        Skills
      </Heading>

      <VStack spacing="6" align="start">
        <Text fontSize="lg" mb="4" textAlign="center">
          Here are some of the technologies and tools I have experience with:
        </Text>

        {Object.entries(skills).map(([category, items]) => (
          <Box key={category} mb="8">
            <Heading as="h3" size="lg" mb="4" fontWeight="300">
              {category.replace(/([A-Z])/g, " $1").trim()}{" "}
            </Heading>
            <SimpleGrid columns={[2, null, 3]} spacing="6" position="center">
              {items.map((skill, index) => (
                <Tag
                  size="lg"
                  key={index}
                  color="#7CABFD"
                  backgroundColor="white"
                  fontWeight="400"
                >
                  {skill}
                </Tag>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Skills;
