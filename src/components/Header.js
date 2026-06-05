import React from "react";
import {
  Flex,
  Box,
  Text,
  Link,
  Button,
  IconButton,
  Collapse,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    if (isOpen) onToggle();
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about-me" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "portfolio" },
    { label: "YouTube", id: "youtube" },
    { label: "Blogs", id: "articles" },
    { label: "Contact", id: "contact" },
  ];

  // Dark Mode Style Mappings
  const headerBg = useColorModeValue("rgba(252, 237, 216, 0.75)", "rgba(24, 18, 30, 0.85)");
  const textColor = useColorModeValue("#B0183D", "#FCEDD8");
  const hoverColor = useColorModeValue("#E23C64", "#FFD464");
  const borderColor = useColorModeValue("rgba(255, 255, 255, 0.4)", "rgba(176, 24, 61, 0.2)");
  const dotColor = useColorModeValue("#FF5E5E", "#FFD464");

  return (
    <Box
      position="fixed"
      top="15px"
      left="0"
      right="0"
      zIndex="1000"
      px={{ base: "4", md: "8" }}
    >
      <Flex
        maxW="1200px"
        margin="0 auto"
        padding={{ base: "3", md: "4" }}
        align="center"
        justify="space-between"
        borderRadius="full"
        backdropFilter="blur(15px)"
        background={headerBg}
        border={`1px solid ${borderColor}`}
        boxShadow="0 8px 32px 0 rgba(176, 24, 61, 0.08)"
      >
        {/* Logo */}
        <Link
          as={RouterLink}
          to="/"
          fontSize="xl"
          fontWeight="800"
          color={textColor}
          _hover={{ textDecoration: "none" }}
          pl="4"
        >
          Portfolio<Text as="span" color={dotColor}>.</Text>
        </Link>

        {/* Desktop Navigation */}
        <Flex display={{ base: "none", md: "flex" }} gap="6" align="center">
          {navItems.map((item) => (
            <Text
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              cursor="pointer"
              fontSize="sm"
              fontWeight="600"
              color={textColor}
              position="relative"
              _hover={{
                color: hoverColor,
                _after: {
                  width: "100%",
                },
              }}
              _after={{
                content: '""',
                position: "absolute",
                width: "0%",
                height: "2px",
                bottom: "-4px",
                left: "0",
                backgroundColor: dotColor,
                transition: "width 0.2s ease-in-out",
              }}
            >
              {item.label}
            </Text>
          ))}
          <Link
            as={RouterLink}
            to="/faqs"
            fontSize="sm"
            fontWeight="600"
            color={textColor}
            _hover={{ color: hoverColor }}
          >
            FAQs
          </Link>
        </Flex>

        {/* Action Buttons (Desktop) */}
        <Flex display={{ base: "none", md: "flex" }} gap="4" align="center" pr="2">
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            borderRadius="full"
            color={textColor}
            _hover={{ background: "rgba(255, 94, 94, 0.15)" }}
            aria-label="Toggle Dark Mode"
          />
          <Button
            as={Link}
            href="mailto:annie.gupta03@gmail.com"
            bgGradient="linear(to-r, #FF5E5E, #E23C64)"
            color="white"
            borderRadius="full"
            px="6"
            fontSize="sm"
            fontWeight="600"
            boxShadow="0 4px 15px rgba(226, 60, 100, 0.3)"
            _hover={{
              bgGradient: "linear(to-r, #E23C64, #B0183D)",
              boxShadow: "0 6px 20px rgba(176, 24, 61, 0.4)",
              textDecoration: "none",
            }}
          >
            Hire Me
          </Button>
        </Flex>

        {/* Mobile Hamburger Menu button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          color={textColor}
          borderRadius="full"
          aria-label="Toggle Navigation"
        />
      </Flex>

      {/* Mobile Collapse Navigation */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          mt="2"
          mx="4"
          p="5"
          borderRadius="2xl"
          backdropFilter="blur(15px)"
          background={headerBg}
          border={`1px solid ${borderColor}`}
          boxShadow="0 10px 30px rgba(0,0,0,0.1)"
          display={{ base: "block", md: "none" }}
        >
          <Flex direction="column" gap="4">
            {navItems.map((item) => (
              <Text
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                cursor="pointer"
                fontSize="md"
                fontWeight="600"
                color={textColor}
                _hover={{ color: hoverColor }}
              >
                {item.label}
              </Text>
            ))}
            <Link
              as={RouterLink}
              to="/faqs"
              fontSize="md"
              fontWeight="600"
              color={textColor}
              onClick={onToggle}
            >
              FAQs
            </Link>
            <Flex gap="3" pt="2" borderTop="1px solid rgba(176, 24, 61, 0.1)" align="center">
              <IconButton
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                borderRadius="full"
                color={textColor}
                _hover={{ background: "rgba(255, 94, 94, 0.15)" }}
                aria-label="Toggle Dark Mode"
              />
              <Button
                as={Link}
                href="mailto:annie.gupta03@gmail.com"
                w="100%"
                bgGradient="linear(to-r, #FF5E5E, #E23C64)"
                color="white"
                borderRadius="full"
                fontWeight="600"
                _hover={{
                  bgGradient: "linear(to-r, #E23C64, #B0183D)",
                }}
              >
                Hire Me
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
}

export default Header;
