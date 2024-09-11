import React from "react";
import { Flex, Text, Link, useBreakpointValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  const padding = useBreakpointValue({
    base: "1px", // Extra small devices
    sm: "2px", // Small devices
    md: "6px", // Medium devices
    lg: "8px", // Large devices
    xl: "10px", // Extra-large devices
    "2xl": "12px", // Extra extra-large devices
  });

  const fontSize = useBreakpointValue({
    base: "xs", // Extra small devices
    sm: "sm", // Small devices
    md: "md", // Medium devices
    lg: "lg", // Large devices
    xl: "xl", // Extra-large devices
    "2xl": "2xl", // Extra extra-large devices
  });

  const spacing = useBreakpointValue({
    base: "2px", // Extra small devices
    sm: "4px", // Small devices
    md: "6px", // Medium devices
    lg: "8px", // Large devices
    xl: "10px", // Extra-large devices
    "2xl": "12px", // Extra extra-large devices
  });

  return (
    <Flex
      direction="row"
      justify="center"
      padding={padding}
      width="100%"
      backgroundColor="white"
      position="fixed"
      top="0"
      left="0"
      borderBottom="1px solid #e0e0e0"
      zIndex="1000" // Ensure the header stays on top of other content
    >
      <Link as={RouterLink} to="/" padding={spacing} fontSize={fontSize}>
        <Text>Home</Text>
      </Link>
      <Link
        as={RouterLink}
        to="/about-me"
        padding={spacing}
        fontSize={fontSize}
      >
        <Text>AboutMe</Text>
      </Link>
      <Link
        as={RouterLink}
        to="/portfolio"
        padding={spacing}
        fontSize={fontSize}
      >
        <Text>Portfolio</Text>
      </Link>
      <Link
        as={RouterLink}
        to="/services"
        padding={spacing}
        fontSize={fontSize}
      >
        <Text>Services</Text>
      </Link>
      <Link as={RouterLink} to="/resume" padding={spacing} fontSize={fontSize}>
        <Text>Resume</Text>
      </Link>
      <Link
        as={RouterLink}
        to="/articles"
        padding={spacing}
        fontSize={fontSize}
      >
        <Text>Articles</Text>
      </Link>
      <Link as={RouterLink} to="/contact" padding={spacing} fontSize={fontSize}>
        <Text>Contact</Text>
      </Link>
      <Link as={RouterLink} to="/faqs" padding={spacing} fontSize={fontSize}>
        <Text>FAQs</Text>
      </Link>
      <Link as={RouterLink} to="/skills" padding={spacing} fontSize={fontSize}>
        <Text>Skills</Text>
      </Link>
    </Flex>
  );
}

export default Header;
