import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Aboute = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl ", lg: "5xl" }}
            >
              <Text>Hi,I'am Akshay Patel</Text>
              <Text
                as={"span"}
                color={useColorModeValue("#8D4B55", "#3182CE")}
                fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
              >
                I am a
                <span>
                  <Typewriter
                    words={[
                      " Front End Developer",
                      " Back End Developer",
                      " MERN Stack Developer",
                      " Full-Stack Developer",
                    ]}
                    loop={100}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={60}
                    delaySpeed={1000}
                  />
                </span>
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              I am a Passion-driven MERN developer with hands-on experience in
              developing and organizing projects, curious and detail-oriented
              with a keen interest to build interactive and user-friendly
              websites. Looking for an exciting opportunity to work as a
              full-stack developer that promotes long-term learning and growth
              alongside the organization.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                // rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                color={"white"}
                bg={useColorModeValue("#8D4B55", "#4299E1")}
                _hover={{ bg: useColorModeValue("#89323f", "#3182CE") }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1yYi3vDLi9hyXKPZ3w4CP2d9Ej_AoHMkr/view?usp=sharing"
                  target={"_blank"}
                >
                  My Resume
                </Link>
              </Button>
              <Button size={"lg"} fontWeight={"normal"} px={6}>
                <Link
                  style={{ textDecoration: "none" }}
                  href="https://github.com/akshaypatel80"
                  target={"_blank"}
                >
                  My Project
                </Link>
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justifyContent={"space-evenly"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              borderRadius={"20px"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
              width={"50%"}
              //   overflow={"hidden"}
            >
              <Image
                alt={"Profile Image"}
                fit={"cover"}
                align={"center"}
                borderRadius={"20px"}
                w={"100%"}
                // h={"100%"}
                src={
                  "https://drive.google.com/uc?export=view&id=1MFObKKiaQ-TG6nTMocZxRyI0dA8MD_6M"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </div>
  );
};

export default Aboute;
