import React from "react";
import { Flex, Text, Link, useBreakpointValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  // Responsive values for padding, font size, and spacing
  const padding = useBreakpointValue({ base: "10px", md: "15px", lg: "20px" });
  const fontSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const spacing = useBreakpointValue({ base: "5px", md: "10px", lg: "15px" });

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
        <Text>About Me</Text>
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
