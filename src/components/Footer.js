import React from "react";
import { Box, Text, VStack, Divider, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const textColor = useColorModeValue("#B0183D", "#FCEDD8");
  const borderColor = useColorModeValue("rgba(176, 24, 61, 0.1)", "rgba(252, 237, 216, 0.1)");
  const footerBg = useColorModeValue("rgba(252, 237, 216, 0.4)", "rgba(20, 14, 28, 0.4)");

  return (
    <Box
      as="footer"
      w="100%"
      py="6"
      mt="12"
      borderTop={`1px solid ${borderColor}`}
      bg={footerBg}
      backdropFilter="blur(10px)"
      textAlign="center"
    >
      <VStack spacing="2">
        <Text fontSize="sm" fontWeight="600" color={textColor}>
          &copy; {new Date().getFullYear()} Nivedita Gupta. All Rights Reserved.
        </Text>
        <Text fontSize="xs" fontWeight="700" color="#FF5E5E">
          Made with ❤️ by Nivedita
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
