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
      maxWidth="1200px"
      margin="auto"
      marginTop="35px"
      backgroundColor="rgba(355, 355, 355, 0.8)"
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
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            h="100%"
          >
            <Box
              height="300px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={project.image}
                alt={project.title}
                maxHeight="100%"
                maxWidth="100%"
                objectFit="contain"
              />
            </Box>
            <Box p="6" display="flex" flexDirection="column" flexGrow="1">
              <Heading as="h2" size="lg" mb="2">
                {project.title}
              </Heading>
              <Text mb="4">{project.description}</Text>
              <Box mt="auto" pt="4" display="flex" justifyContent="center">
                <Link color="#538ef5">
                  <Button
                    color="white"
                    backgroundColor="#7CABFD"
                    _hover={{ backgroundColor: "#538ef5" }}
                  >
                    View Project
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Portfolio;
