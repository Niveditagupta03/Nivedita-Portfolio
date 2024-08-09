import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <Flex
      direction="row"
      justify="center"
      padding="15px"
      width="100%"
      backgroundColor="white" // You can change this to match your design
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
      boxShadow="0 1px 2px rgba(0, 0, 0, 0.1)" // Optional: adds a subtle shadow
    >
      <Link as={RouterLink} to="/" padding="15px" fontSize="lg">
        <Text>Home</Text>
      </Link>
      <Link as={RouterLink} to="/about-me" padding="15px" fontSize="lg">
        <Text>About Me</Text>
      </Link>
      <Link as={RouterLink} to="/portfolio" padding="15px" fontSize="lg">
        <Text>Portfolio</Text>
      </Link>
      <Link as={RouterLink} to="/services" padding="15px" fontSize="lg">
        <Text>Services</Text>
      </Link>
      <Link as={RouterLink} to="/resume" padding="15px" fontSize="lg">
        <Text>Resume</Text>
      </Link>
      <Link as={RouterLink} to="/articles" padding="15px" fontSize="lg">
        <Text>Articles</Text>
      </Link>
      <Link as={RouterLink} to="/contact" padding="15px" fontSize="lg">
        <Text>Contact</Text>
      </Link>
      <Link as={RouterLink} to="/faqs" padding="15px" fontSize="lg">
        <Text>FAQs</Text>
      </Link>
      <Link as={RouterLink} to="/skills" padding="15px" fontSize="lg">
        <Text>Skills</Text>
      </Link>
    </Flex>
  );
}

export default Header;
