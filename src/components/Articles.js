import React from "react";
import { Box, Heading, Text, Link, VStack } from "@chakra-ui/react";

const Articles = () => {
  return (
    <Box
      padding="30px"
      maxWidth="1000px"
      margin="auto"
      marginTop="35px"
      backgroundColor="rgba(255, 255, 255, 0.8)"
    >
      <Heading as="h1" size="2xl" mb="6" fontWeight="200" textAlign="center">
        Articles
      </Heading>

      <VStack spacing="6" align="start">
        <Box>
          <Heading as="h2" size="lg" mb="2">
            My Experience with a Job Scam: A Lesson I Learned the Hard Way
          </Heading>
          <Text fontSize="lg">
            In this article, I share my personal experience with a job scam and
            the valuable lessons I learned. From recognizing red flags to
            protecting oneself from similar scams, this guide offers insights to
            help others avoid falling victim to deceitful job offers.
          </Text>
          <Link
            href="https://medium.com/@annie.gupta03/my-experience-with-a-job-scam-a-lesson-i-learned-the-hard-way-d21a4883e1fd"
            isExternal
            fontSize="lg"
            color="#6C95F9"
          >
            Read the full article
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default Articles;
