import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Divider,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs"; // LeetCode icon

const Contact = () => {
  return (
    <Box padding="20px" maxWidth="800px" margin="auto" marginTop="35px">
      <Heading as="h1" size="2xl" mb="6" fontWeight="200">
        Contact Me
      </Heading>

      <VStack spacing="6" align="start">
        <Box>
          <Heading as="h3" size="lg" mb="2" fontWeight="100">
            Email
          </Heading>
          <Link href="mailto:annie.gupta03@gmail.com" isExternal>
            <Flex align="center">
              <Icon as={AiOutlineMail} mr="2" />
              annie.gupta03@gmail.com
            </Flex>
          </Link>
        </Box>
        <Divider />
        <Box>
          <Heading as="h3" size="lg" mb="2" fontWeight="100">
            LinkedIn
          </Heading>
          <Link
            href="https://www.linkedin.com/in/nivedita-g-b942a421b"
            isExternal
          >
            <Flex align="center">
              <Icon as={AiOutlineLinkedin} mr="2" />
              linkedin.com/in/nivedita-g-b942a421b
            </Flex>
          </Link>
        </Box>
        <Divider />
        <Box>
          <Heading as="h3" size="lg" mb="2" fontWeight="100">
            GitHub
          </Heading>
          <Link href="https://github.com/Niveditagupta03" isExternal>
            <Flex align="center">
              <Icon as={AiOutlineGithub} mr="2" />
              github.com/Niveditagupta03
            </Flex>
          </Link>
        </Box>
        <Divider />
        <Box>
          <Heading as="h3" size="lg" mb="2" fontWeight="100">
            LeetCode
          </Heading>
          <Link href="https://leetcode.com/NiveditaG/" isExternal>
            <Flex align="center">
              <BsFillLightningFill as={AiOutlineGithub} mr="2" />
              leetcode.com/NiveditaG
            </Flex>
          </Link>
        </Box>
        <Divider />
        <Box>
          <Heading as="h3" size="lg" mb="2" fontWeight="100">
            Phone
          </Heading>
          <Text fontSize="lg">
            <Flex align="center">
              <Icon as={AiOutlinePhone} mr="2" />
              +91 8340128840
            </Flex>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Contact;
