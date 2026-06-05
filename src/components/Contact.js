import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Flex,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending email
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: `Thank you, ${form.firstName}. I will get back to you shortly at ${form.email}.`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  // Dark Mode Style Mappings
  const headingColor = useColorModeValue("#B0183D", "#FFD464");
  const textColor = useColorModeValue("#B0183D", "#FCEDD8");
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.45)", "rgba(20, 14, 28, 0.65)");
  const cardBorder = useColorModeValue("1px solid rgba(255, 255, 255, 0.4)", "1px solid rgba(176, 24, 61, 0.2)");
  const labelColor = useColorModeValue("#B0183D", "#FFD464");
  
  const inputBg = useColorModeValue("rgba(255, 255, 255, 0.5)", "rgba(20, 14, 28, 0.4)");
  const inputBorder = useColorModeValue("1.5px solid rgba(176, 24, 61, 0.15)", "1.5px solid rgba(252, 237, 216, 0.2)");
  const inputTextColor = useColorModeValue("#B0183D", "#FCEDD8");
  const placeholderColor = useColorModeValue("rgba(176, 24, 61, 0.5)", "rgba(252, 237, 216, 0.5)");
  const inputFocusBg = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(20, 14, 28, 0.65)");

  const inputStyles = {
    borderRadius: "xl",
    bg: inputBg,
    border: inputBorder,
    color: inputTextColor,
    fontWeight: "500",
    _placeholder: { color: placeholderColor },
    _focus: {
      bg: inputFocusBg,
      borderColor: "#E23C64",
      boxShadow: "0 0 0 1px #E23C64",
    },
    _hover: {
      borderColor: "#E23C64",
    },
  };

  return (
    <Box
      id="contact"
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
          Connection
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="800"
          color={headingColor}
        >
          Get In Touch
        </Heading>
        <Text maxW="600px" color={textColor} fontWeight="500">
          Have an opportunity, a project proposal, or just want to say hi? Fill out the form and let's connect!
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: "10", md: "16" }}>
        {/* Left Column - Image & Contact Info */}
        <Flex direction="column" justify="center" align="center" position="relative">
          {/* Glass background blob */}
          <Box
            position="absolute"
            w={{ base: "260px", md: "380px" }}
            h={{ base: "260px", md: "380px" }}
            bg="linear-gradient(135deg, rgba(226, 60, 100, 0.2), rgba(255, 94, 94, 0.15))"
            borderRadius="full"
            filter="blur(20px)"
            zIndex="1"
          />
          <Image
            src="/developer_contact.png"
            alt="Contact Nivedita"
            w={{ base: "240px", md: "340px" }}
            h="auto"
            zIndex="2"
          />
        </Flex>

        {/* Right Column - Glass Form */}
        <Box
          p={{ base: "6", md: "8" }}
          borderRadius="3xl"
          bg={cardBg}
          border={cardBorder}
          backdropFilter="blur(15px)"
          boxShadow="0 8px 32px 0 rgba(176, 24, 61, 0.05)"
          zIndex="2"
        >
          <form onSubmit={handleSubmit}>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="4" mb="4">
              <FormControl isRequired>
                <FormLabel fontSize="xs" fontWeight="700" color={labelColor}>First Name</FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  h="12"
                  {...inputStyles}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize="xs" fontWeight="700" color={labelColor}>Last Name</FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  h="12"
                  {...inputStyles}
                />
              </FormControl>
            </SimpleGrid>

            <FormControl isRequired mb="4">
              <FormLabel fontSize="xs" fontWeight="700" color={labelColor}>Email Address</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="john.doe@example.com"
                h="12"
                {...inputStyles}
              />
            </FormControl>

            <FormControl mb="4">
              <FormLabel fontSize="xs" fontWeight="700" color={labelColor}>Phone Number (Optional)</FormLabel>
              <Input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
                h="12"
                {...inputStyles}
              />
            </FormControl>

            <FormControl isRequired mb="6">
              <FormLabel fontSize="xs" fontWeight="700" color={labelColor}>Your Message</FormLabel>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                rows={4}
                {...inputStyles}
              />
            </FormControl>

            <Button
              type="submit"
              w="100%"
              h="12"
              isLoading={loading}
              bgGradient="linear(to-r, #FF5E5E, #E23C64)"
              color="white"
              borderRadius="full"
              fontWeight="700"
              boxShadow="0 4px 15px rgba(226, 60, 100, 0.3)"
              _hover={{
                bgGradient: "linear(to-r, #E23C64, #B0183D)",
                boxShadow: "0 6px 20px rgba(176, 24, 61, 0.4)",
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Contact;
