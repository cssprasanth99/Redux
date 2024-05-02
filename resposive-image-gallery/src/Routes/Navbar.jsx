// src/components/Navbar.js
import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faImages,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="blue.500"
      color="white"
    >
      <IconButton
        size="md"
        icon={<HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={onToggle}
      />
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        spacing={{ base: 4, md: 8, lg: 10 }}
      >
        <Link href="/" display="flex" alignItems="center">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link href="/gallery" display="flex" alignItems="center">
          <FontAwesomeIcon icon={faImages} /> Gallery
        </Link>
        <Link href="/contact" display="flex" alignItems="center">
          <FontAwesomeIcon icon={faEnvelope} /> Contact
        </Link>
        <Link href="/about" display="flex" alignItems="center">
          <FontAwesomeIcon icon={faUser} /> About
        </Link>
      </Stack>
    </Flex>
  );
};

export default Navbar;
