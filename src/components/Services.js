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
      py="8"
      px={{ base: "4", md: "8" }}
      maxWidth="1200px"
      margin="auto"
      marginTop="35px"
      marginLeft="100px"
    >
      <Heading as="h1" size="2xl" mb="6" textAlign="center">
        Services
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="20px">
        {services.map((service) => (
          <Box
            key={service.title}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            p="6"
            textAlign="center"
            bg="white"
            _hover={{ boxShadow: "lg" }}
          >
            <Icon as={service.icon} boxSize="50px" color="#7CABFD" mb="4" />
            <Heading as="h3" size="lg" mb="2">
              {service.title}
            </Heading>
            <Text>{service.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Services;
