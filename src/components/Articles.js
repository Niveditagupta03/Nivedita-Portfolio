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
      <Heading
        as="h1"
        size={{ base: "xl", md: "2xl" }}
        mb="6"
        fontWeight="200"
        textAlign="center"
      >
        Articles
      </Heading>

      <VStack spacing="6" align="start">
        <Box>
          <Heading as="h2" size="32px" mb="2">
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

        <Box>
          <Heading as="h2" size="32px" mb="2">
            Exploring Vaishnavi Tech Park: A Hub of Diverse Innovation in
            Bangalore
          </Heading>
          <Text fontSize="lg">
            Discover the vibrant and innovative environment of Vaishnavi Tech
            Park in Bangalore. This article explores the diverse tech ecosystem
            within the park, showcasing the various companies and technologies
            driving innovation in this dynamic space.
          </Text>
          <Link
            href="https://medium.com/@annie.gupta03/exploring-vaishnavi-tech-park-a-hub-of-diverse-innovation-in-bangalore-69b78b444680"
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
