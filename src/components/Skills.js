import React from "react";
import { Box, Heading, Text, VStack, SimpleGrid, Tag } from "@chakra-ui/react";

const skills = [
  "Python3",
  "FastAPI",
  "Pydantic",
  "SQL",
  "MySQL",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Jupyter",
  "Collab",
  "Ollama",
  "NLTK",
  "OpenAI",
  "Langchain",
  "Qdrant",
  "OpenCV",
  "PyOCR",
  "PyPDF",
  "Docker",
  "Java",
  "C",
  "C++",
  "Git",
  "IoT",
  "Arduino",
  "HTML",
  "CSS",
  "Javascript",
  "NodeJS",
  "React",
  "Tailwind",
  "NoSQL",
  "MongoDB",
];

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
        <Text fontSize="lg" mb="4" marginLeft="50px">
          Here are some of the technologies and tools I have experience with:
        </Text>
        <SimpleGrid columns={[2, null, 3]} spacing="6 " marginLeft="155px">
          {skills.map((skill, index) => (
            <Tag
              size="lg"
              key={index}
              colorScheme="black"
              variant="outline"
              fontWeight="400"
            >
              {skill}
            </Tag>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Skills;
