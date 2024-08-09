import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button, Collapse } from "@chakra-ui/react";

const FAQs = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <Box
      padding="20px"
      borderRadius="md"
      maxWidth="800px"
      margin="auto"
      marginTop="35px"
    >
      <Heading as="h1" size="2xl" mb="6" fontWeight="200">
        Frequently Asked Questions
      </Heading>

      <VStack spacing="4" align="start">
        <Box width="100%">
          <Heading as="h3" size="lg" mb="2" fontWeight="100">
            What is your professional background?
          </Heading>
          <Box display="flex" justifyContent="center" mb="4">
            <Button
              onClick={() => toggleOpen(0)}
              color="#7CABFD"
              backgroundColor="#EDF2F6"
              _hover={{ backgroundColor: "#c0d7ed" }}
            >
              {open === 0 ? "Hide Answer" : "Show Answer"}
            </Button>
          </Box>
          <Collapse in={open === 0}>
            <Box mt="4">
              <Text>
                I am a recent graduate with a Bachelor's degree in Information
                Science and Engineering. I have experience working as an intern
                where I developed various technical skills, including
                proficiency in Python, FastAPI, and front-end technologies.
              </Text>
            </Box>
          </Collapse>
        </Box>

        <Box width="100%">
          <Heading as="h3" size="lg" mb="2" fontWeight="100">
            What technologies are you most comfortable with?
          </Heading>
          <Box display="flex" justifyContent="center" mb="4">
            <Button
              onClick={() => toggleOpen(1)}
              color="#7CABFD"
              backgroundColor="#EDF2F6"
              _hover={{ backgroundColor: "#c0d7ed" }}
            >
              {open === 1 ? "Hide Answer" : "Show Answer"}
            </Button>
          </Box>
          <Collapse in={open === 1}>
            <Box mt="4">
              <Text>
                I am comfortable with a range of technologies including Python,
                JavaScript, and various frameworks like React, Node.js, and
                FastAPI. I also have experience with data science tools like
                TensorFlow and Scikit-learn.
              </Text>
            </Box>
          </Collapse>
        </Box>

        <Box width="100%">
          <Heading as="h3" size="lg" mb="2" fontWeight="100">
            How do you stay updated with industry trends?
          </Heading>
          <Box display="flex" justifyContent="center" mb="4">
            <Button
              onClick={() => toggleOpen(2)}
              color="#7CABFD"
              backgroundColor="#EDF2F6"
              _hover={{ backgroundColor: "#c0d7ed" }}
            >
              {open === 2 ? "Hide Answer" : "Show Answer"}
            </Button>
          </Box>
          <Collapse in={open === 2}>
            <Box mt="4">
              <Text>
                I stay updated with industry trends by following tech blogs,
                participating in online courses, and attending webinars and tech
                meetups. I also engage with communities on platforms like GitHub
                and LinkedIn.
              </Text>
            </Box>
          </Collapse>
        </Box>

        <Box width="100%">
          <Heading as="h3" size="lg" mb="2" fontWeight="100">
            What are your career aspirations?
          </Heading>
          <Box display="flex" justifyContent="center" mb="4">
            <Button
              onClick={() => toggleOpen(3)}
              color="#7CABFD"
              backgroundColor="#EDF2F6"
              _hover={{ backgroundColor: "#c0d7ed" }}
            >
              {open === 3 ? "Hide Answer" : "Show Answer"}
            </Button>
          </Box>
          <Collapse in={open === 3}>
            <Box mt="4">
              <Text>
                My career aspirations include becoming a proficient full-stack
                developer and working on innovative projects that solve
                real-world problems. I aim to contribute to a dynamic team where
                I can grow my skills and make a meaningful impact.
              </Text>
            </Box>
          </Collapse>
        </Box>
      </VStack>
    </Box>
  );
};

export default FAQs;
