import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const AboutMe = () => {
  // Responsive values for padding, font size, and image size
  const padding = useBreakpointValue({ base: "10px", md: "20px", lg: "30px" });
  const fontSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const boxSize = useBreakpointValue({
    base: "200px",
    md: "250px",
    lg: "300px",
  });

  return (
    <Box
      padding={padding}
      borderRadius="md"
      maxWidth="800px"
      margin="auto"
      marginTop="35px"
      backgroundColor="rgba(255, 255, 255, 0.8)"
    >
      <Heading as="h1" size="2xl" mb="6" textAlign="center" fontWeight="200">
        About Me
      </Heading>

      <Image
        borderRadius="full"
        boxSize={boxSize}
        src="./image.png"
        alt="Profile Picture"
        mb="6"
        display="block"
        margin="auto"
        borderStyle="solid"
        padding="15px"
      />

      <VStack spacing="4" align="start">
        <Text fontSize={fontSize} fontWeight="300">
          Hello! I'm Nivedita, a passionate and enthusiastic individual with a
          keen interest in technology and innovation. Currently pursuing a
          Bachelor of Engineering in Information Science and Engineering from
          CMR Institute of Technology, I am eager to leverage my skills and
          knowledge to contribute to exciting projects and growth opportunities.
        </Text>

        <Text fontSize={fontSize} fontWeight="300">
          Throughout my academic journey, I have developed a strong foundation
          in various programming languages and technologies. My hands-on
          experience with Python, web development, and data analysis has
          equipped me with the skills needed to tackle complex challenges and
          deliver impactful solutions.
        </Text>

        <Text fontSize={fontSize} fontWeight="300">
          Outside of my technical interests, I enjoy exploring new trends in the
          tech industry, participating in workshops, and continuously learning
          to stay ahead. I am committed to applying my expertise to make a
          meaningful difference and collaborate with like-minded professionals.
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutMe;
