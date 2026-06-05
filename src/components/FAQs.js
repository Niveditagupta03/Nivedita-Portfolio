import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button, Collapse, Flex, useColorModeValue } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const FAQs = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your professional background?",
      answer: "I am an engineering graduate with a Bachelor's degree in Information Science and Engineering from CMR Institute of Technology. I have internship experience at CAI Technologies, where I designed dashboard mockups in Figma, built FastAPI Python backends, and engineered responsive web components."
    },
    {
      question: "What technologies are you most comfortable with?",
      answer: "I specialize in Full Stack development. My stack includes Python (FastAPI), JavaScript (React.js, Node.js), C#, HTML5, CSS3, databases like MySQL and SQL Server, and tools like Docker, Git, Langchain, and Qdrant for AI vector stores."
    },
    {
      question: "How do you stay updated with industry trends?",
      answer: "I enjoy exploring new technologies, reading tech articles on Medium, building personal projects, and learning from certifications. I actively keep up with the developer community on GitHub and LinkedIn."
    },
    {
      question: "What are your career aspirations?",
      answer: "My goal is to become an expert Full Stack Software Engineer and AI Solutions Developer. I want to build scalable architectures and design intuitive interfaces that bridge the gap between complex algorithms and beautiful user experiences."
    }
  ];

  // Dark Mode Style Mappings
  const headingColor = useColorModeValue("#B0183D", "#FFD464");
  const textColor = useColorModeValue("#B0183D", "#FCEDD8");
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.45)", "rgba(20, 14, 28, 0.65)");
  const cardBorder = useColorModeValue("1px solid rgba(255, 255, 255, 0.4)", "1px solid rgba(176, 24, 61, 0.2)");
  const faqItemBg = useColorModeValue("rgba(255, 255, 255, 0.35)", "rgba(20, 14, 28, 0.4)");
  const faqItemBorder = useColorModeValue("1px solid rgba(255, 255, 255, 0.2)", "1px solid rgba(176, 24, 61, 0.15)");
  const dividerColor = useColorModeValue("rgba(176, 24, 61, 0.1)", "rgba(252, 237, 216, 0.1)");

  return (
    <Box
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
        <VStack spacing="2" align="center" mb="10" textAlign="center">
          <Text
            fontSize="sm"
            fontWeight="700"
            letterSpacing="wider"
            color="#FF5E5E"
            textTransform="uppercase"
          >
            Questions
          </Text>
          <Heading as="h1" fontSize="3xl" fontWeight="900" color={headingColor}>
            Frequently Asked Questions
          </Heading>
        </VStack>

        <VStack spacing="4" w="100%">
          {faqData.map((faq, index) => {
            const isFaqOpen = open === index;
            return (
              <Box
                key={index}
                w="100%"
                p="5"
                borderRadius="2xl"
                bg={faqItemBg}
                border={faqItemBorder}
                transition="all 0.2s"
              >
                <Flex
                  justify="space-between"
                  align="center"
                  cursor="pointer"
                  onClick={() => toggleOpen(index)}
                  _hover={{ color: "#E23C64" }}
                >
                  <Heading
                    as="h3"
                    fontSize="md"
                    fontWeight="800"
                    color={textColor}
                    pr="4"
                  >
                    {faq.question}
                  </Heading>
                  <Button
                    size="sm"
                    variant="ghost"
                    color="#E23C64"
                    borderRadius="full"
                    _hover={{ bg: "transparent" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOpen(index);
                    }}
                  >
                    {isFaqOpen ? <ChevronUpIcon w="6" h="6" /> : <ChevronDownIcon w="6" h="6" />}
                  </Button>
                </Flex>

                <Collapse in={isFaqOpen} animateOpacity>
                  <Box mt="4" pt="4" borderTop={`1px solid ${dividerColor}`}>
                    <Text fontSize="sm" color={textColor} fontWeight="500" lineHeight="relaxed">
                      {faq.answer}
                    </Text>
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
};

export default FAQs;
