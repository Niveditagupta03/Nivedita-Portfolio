import React from "react";
import { Box, Heading, Text, Link, VStack, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Articles = () => {
  const articles = [
    {
      title: "My Experience with a Job Scam: A Lesson I Learned the Hard Way",
      description: "In this article, I share my personal experience with a job scam and the valuable lessons I learned. From recognizing red flags to protecting oneself from similar scams, this guide offers insights to help others avoid falling victim to deceitful job offers.",
      link: "https://medium.com/@annie.gupta03/my-experience-with-a-job-scam-a-lesson-i-learned-the-hard-way-d21a4883e1fd"
    },
    {
      title: "Exploring Vaishnavi Tech Park: A Hub of Diverse Innovation in Bangalore",
      description: "Discover the vibrant and innovative environment of Vaishnavi Tech Park in Bangalore. This article explores the diverse tech ecosystem within the park, showcasing the various companies and technologies driving innovation in this dynamic space.",
      link: "https://medium.com/@annie.gupta03/exploring-vaishnavi-tech-park-a-hub-of-diverse-innovation-in-bangalore-69b78b444680"
    }
  ];

  // Dark Mode Style Mappings
  const headingColor = useColorModeValue("#B0183D", "#FFD464");
  const textColor = useColorModeValue("#B0183D", "#FCEDD8");
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.45)", "rgba(20, 14, 28, 0.65)");
  const cardBorder = useColorModeValue("1px solid rgba(255, 255, 255, 0.4)", "1px solid rgba(176, 24, 61, 0.2)");
  const artBg = useColorModeValue("rgba(255, 255, 255, 0.3)", "rgba(20, 14, 28, 0.4)");
  const artBgHover = useColorModeValue("rgba(255, 255, 255, 0.5)", "rgba(20, 14, 28, 0.6)");
  const artBorder = useColorModeValue("1px solid rgba(255, 255, 255, 0.2)", "1px solid rgba(176, 24, 61, 0.15)");

  return (
    <Box
      id="articles"
      py={{ base: "8", md: "16" }}
      px={{ base: "4", md: "8" }}
      maxW="900px"
      margin="0 auto"
    >
      <Box
        p={{ base: "6", md: "10" }}
        borderRadius="3xl"
        bg={cardBg}
        border={cardBorder}
        backdropFilter="blur(15px)"
        boxShadow="0 8px 32px 0 rgba(176, 24, 61, 0.05)"
      >
        <VStack spacing="2" align="center" mb="8" textAlign="center">
          <Text
            fontSize="sm"
            fontWeight="700"
            letterSpacing="wider"
            color="#FF5E5E"
            textTransform="uppercase"
          >
            Publications
          </Text>
          <Heading as="h1" fontSize="3xl" fontWeight="900" color={headingColor}>
            My Articles
          </Heading>
        </VStack>

        <VStack spacing="6" align="start" mb="8">
          {articles.map((art, i) => (
            <Box
              key={i}
              w="100%"
              p="6"
              borderRadius="2xl"
              bg={artBg}
              border={artBorder}
              transition="transform 0.2s"
              _hover={{ transform: "translateY(-4px)", bg: artBgHover }}
            >
              <Heading
                as="h2"
                fontSize="xl"
                fontWeight="800"
                color={headingColor}
                mb="3"
                lineHeight="short"
              >
                {art.title}
              </Heading>
              
              <Text fontSize="sm" color={textColor} fontWeight="500" mb="4" lineHeight="relaxed">
                {art.description}
              </Text>

              <Link
                href={art.link}
                isExternal
                fontSize="sm"
                fontWeight="700"
                color="#E23C64"
                display="inline-flex"
                alignItems="center"
                gap="1"
                _hover={{ color: headingColor, textDecoration: "none" }}
              >
                Read on Medium <ArrowForwardIcon />
              </Link>
            </Box>
          ))}
        </VStack>

        {/* See More Blogs bottom CTA */}
        <Flex justify="center">
          <Button
            as={Link}
            href="https://medium.com/@annie.gupta03"
            isExternal
            bgGradient="linear(to-r, #FF5E5E, #E23C64)"
            color="white"
            borderRadius="full"
            px="10"
            h="12"
            fontWeight="700"
            boxShadow="0 4px 15px rgba(226, 60, 100, 0.25)"
            _hover={{
              bgGradient: "linear(to-r, #E23C64, #B0183D)",
              boxShadow: "0 6px 20px rgba(176, 24, 61, 0.35)",
              textDecoration: "none",
            }}
          >
            See More Blogs
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Articles;
