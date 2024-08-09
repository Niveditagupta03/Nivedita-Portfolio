import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

const projects = [
  {
    title: "Financial Intelligence",
    description:
      "Developed a pipeline to estimate the risk associated with lenders. Trained an MLP for risk scoring with 95% accuracy. Created a UI for loan applications and administration tasks.",
    image: "./fi.jpg",
    link: "#",
  },

  {
    title: "Document Chat",
    description:
      "Designed and implemented a RAG pipeline for answering questions based on user-uploaded files. Added support for multiple LLM providers such as ChatGPT, Claude, Ollama, and Huggingface pipelines.",
    image: "./dc.jpg",
    link: "#",
  },
  {
    title: "Brand Monitoring",
    description:
      "Created a workflow for sentiment analysis of user reviews. Trained a model using LSTM architecture for sentiment classification. Developed an API server for bulk analysis and created a UI dashboard for visualization.",
    image: "./bm.jpg",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <Box
      backgroundColor="white"
      maxWidth="1200px"
      maxHeight="400px"
      margin="auto"
      marginTop="35px"
    >
      <Heading as="h1" size="2xl" mb="6" fontWeight="200">
        Portfolio
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing="20px">
        {projects.map((project) => (
          <Box
            key={project.title}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            _hover={{ boxShadow: "lg" }}
            h="100%"
          >
            <Image
              src={project.image}
              alt={project.title}
              boxSize="300px"
              objectFit="full"
            />
            <Box p="6">
              <Heading as="h2" size="lg" mb="2">
                {project.title}
              </Heading>
              <Text mb="4">{project.description}</Text>
              <Link href={project.link} isExternal>
                <Button color="white" backgroundColor="#7CABFD">
                  View Project
                </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Portfolio;
