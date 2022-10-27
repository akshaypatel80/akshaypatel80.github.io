import React from "react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { Link } from "react-scroll";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  textDecoration,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

const Links = ["About", "Skill", "Project", "Mini Project"];
const NavLink = ({ children }) => (
  <Link
    style={{ cursor: "pointer" }}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    activeClass="active"
    to={children}
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
  >
    {children}
  </Link>
);
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Box
        bg={useColorModeValue("#8D4B55", "gray.900")}
        px={4}
        color={"white"}
        w={"100%"}
        position={"fixed"}
        style={{ zIndex: "999" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            color={useColorModeValue("black", "white")}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading size={"lg"}>
                <Link
                  style={{ cursor: "pointer" }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    bg: useColorModeValue("#8D4B55", "gray.700"),
                  }}
                  activeClass="active"
                  to={"About"}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Akshay
                </Link>
              </Heading>
            </Box>
          </HStack>
          <HStack
            as={"nav"}
            spacing={12}
            display={{ base: "none", md: "flex" }}
            fontSize={"20px"}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={"center"} gap={5}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <MoonIcon color={"black"} />
              ) : (
                <SunIcon />
              )}
            </Button>
            <Button
              bg={"blue.400"}
              //   color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <Link
                style={{ cursor: "pointer" }}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("#8D4B55", "gray.700"),
                }}
                activeClass="active"
                to={"Contact"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"button"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.githubusercontent.com/u/25579572?v=4"}
                />
              </MenuButton>
              <MenuList color={useColorModeValue("black", "white")}>
                <MenuItem>
                  <a target="_blank" href="https://github.com/akshaypatel80">
                    Github
                  </a>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/akshay-patel-9b96b816a/"
                  >
                    Linkedin
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/akshay_2601/"
                  >
                    Instagram
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default Navbar;
