import React from "react";
import { Box, Heading, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaCode, FaDesktop, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Creating responsive and modern websites with React, Chakra UI, and other web technologies.",
    icon: FaCode,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces with a focus on user experience and aesthetic appeal.",
    icon: FaDesktop,
  },
  {
    title: "Mobile Development",
    description:
      "Developing mobile applications with cross-platform frameworks to reach a wider audience.",
    icon: FaMobileAlt,
  },
];

const Services = () => {
  return (
    <Box
      backgroundColor="white"
      py={{ base: "6", md: "8", lg: "10" }}
      px={{ base: "4", md: "8", lg: "12" }}
      maxWidth="1200px"
      margin="auto"
      marginTop={{ base: "20px", md: "35px" }}
    >
      <Heading
        as="h1"
        size={{ base: "xl", md: "2xl" }}
        mb="6"
        fontWeight="200"
        textAlign="center"
      >
        Services
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: "6", md: "8", lg: "10" }}
      >
        {services.map((service) => (
          <Box
            key={service.title}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            p={{ base: "4", md: "6" }}
            textAlign="center"
            bg="white"
            _hover={{ boxShadow: "lg" }}
          >
            <Icon
              as={service.icon}
              boxSize={{ base: "40px", md: "50px" }}
              color="#7CABFD"
              mb="4"
            />
            <Heading as="h3" size={{ base: "md", md: "lg" }} mb="2">
              {service.title}
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
              {service.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Services;
