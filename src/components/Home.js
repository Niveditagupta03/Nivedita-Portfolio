import { Flex, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      direction="column"
      padding={{ base: "20px", md: "40px", lg: "60px" }}
      justify="center"
      minHeight="600px" // Example content height for scrolling
      backgroundColor="transparent"
    >
      <Text
        fontSize={{ base: "36px", md: "48px", lg: "60px" }}
        fontWeight="100"
      >
        Hello there,
      </Text>
      <Text
        fontSize={{ base: "40px", md: "52px", lg: "64px" }}
        fontWeight="100"
      >
        I am Nivedita G
      </Text>
    </Flex>
  );
};

export default Home;
