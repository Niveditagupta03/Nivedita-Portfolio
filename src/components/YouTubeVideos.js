import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  Link,
  AspectRatio,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaYoutube, FaPlay } from "react-icons/fa";

const YouTubeVideos = () => {
  const channelUrl = "https://www.youtube.com/@niveditagupta8456";
  
  const featuredVideoId = "Ke90Tje7VS0"; // Standard React/Coding tutorial ID as featured video

  const videoList = [
    {
      title: "Building an AI-Powered Resume Parser with Node.js & OpenAI",
      duration: "12:45",
      views: "1.2K views",
      gradient: "linear-gradient(135deg, #FFD464 0%, #FF5E5E 100%)",
    },
    {
      title: "FastAPI + React: Secure Google OAuth Authentication Tutorial",
      duration: "18:20",
      views: "980 views",
      gradient: "linear-gradient(135deg, #FF5E5E 0%, #E23C64 100%)",
    },
    {
      title: "Power Automate Desktop Flows: Automate Web Scraping in Minutes",
      duration: "08:15",
      views: "1.5K views",
      gradient: "linear-gradient(135deg, #E23C64 0%, #B0183D 100%)",
    },
  ];

  // Theme Mappings
  const headingColor = useColorModeValue("#B0183D", "#FFD464");
  const textColor = useColorModeValue("#B0183D", "#FCEDD8");
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.45)", "rgba(20, 14, 28, 0.65)");
  const cardBorder = useColorModeValue("1px solid rgba(255, 255, 255, 0.4)", "1px solid rgba(176, 24, 61, 0.2)");
  const itemBg = useColorModeValue("rgba(255, 255, 255, 0.3)", "rgba(20, 14, 28, 0.4)");
  const itemBgHover = useColorModeValue("rgba(255, 255, 255, 0.55)", "rgba(20, 14, 28, 0.6)");
  const itemBorder = useColorModeValue("1px solid rgba(255, 255, 255, 0.2)", "1px solid rgba(176, 24, 61, 0.15)");

  return (
    <Box
      id="youtube"
      py={{ base: "12", md: "20" }}
      px={{ base: "4", md: "8" }}
      maxW="1200px"
      margin="0 auto"
    >
      <VStack spacing="4" textAlign="center" mb="12">
        <Text
          fontSize="sm"
          fontWeight="700"
          letterSpacing="wider"
          color="#FF5E5E"
          textTransform="uppercase"
        >
          YouTube Channel
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="800"
          color={headingColor}
        >
          Featured Video & Tutorials
        </Heading>
        <Text maxW="600px" color={textColor} fontWeight="500">
          Check out my latest tech tutorials, software engineering walkthroughs, and workflow automations.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: "8", md: "12" }} alignItems="center">
        {/* Left Column - Video Player */}
        <Box
          p={{ base: "4", md: "5" }}
          borderRadius="3xl"
          bg={cardBg}
          border={cardBorder}
          backdropFilter="blur(15px)"
          boxShadow="0 8px 32px 0 rgba(176, 24, 61, 0.05)"
        >
          <AspectRatio ratio={16 / 9} borderRadius="2xl" overflow="hidden">
            <iframe
              title="Featured YouTube Video"
              src={`https://www.youtube.com/embed/${featuredVideoId}`}
              allowFullScreen
            />
          </AspectRatio>
        </Box>

        {/* Right Column - Channel Playlist & CTA */}
        <Flex direction="column" gap="5">
          <VStack spacing="4" align="stretch">
            {videoList.map((video, idx) => (
              <Flex
                key={idx}
                as={Link}
                href={channelUrl}
                isExternal
                align="center"
                p="4"
                borderRadius="2xl"
                bg={itemBg}
                border={itemBorder}
                _hover={{
                  textDecoration: "none",
                  bg: itemBgHover,
                  transform: "translateX(6px)",
                }}
                transition="all 0.2s ease"
              >
                {/* Visual Thumbnail Substitute */}
                <Box
                  w="20"
                  h="12"
                  borderRadius="xl"
                  bg={video.gradient}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink="0"
                  mr="4"
                  position="relative"
                >
                  <Icon as={FaPlay} color="white" w="3" h="3" />
                  <Text
                    position="absolute"
                    bottom="1"
                    right="1"
                    bg="black"
                    color="white"
                    fontSize="9px"
                    fontWeight="800"
                    px="1"
                    borderRadius="sm"
                  >
                    {video.duration}
                  </Text>
                </Box>
                <Box>
                  <Heading as="h4" fontSize="sm" fontWeight="800" color={headingColor} mb="1" noOfLines={2}>
                    {video.title}
                  </Heading>
                  <Text fontSize="xs" color={textColor} opacity="0.8">
                    {video.views}
                  </Text>
                </Box>
              </Flex>
            ))}
          </VStack>

          <Button
            as={Link}
            href={channelUrl}
            isExternal
            leftIcon={<FaYoutube />}
            bgGradient="linear(to-r, #FF5E5E, #E23C64)"
            color="white"
            borderRadius="full"
            h="12"
            fontWeight="700"
            boxShadow="0 4px 15px rgba(226, 60, 100, 0.3)"
            _hover={{
              bgGradient: "linear(to-r, #E23C64, #B0183D)",
              boxShadow: "0 6px 20px rgba(176, 24, 61, 0.4)",
              textDecoration: "none",
            }}
          >
            Subscribe on YouTube
          </Button>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default YouTubeVideos;
