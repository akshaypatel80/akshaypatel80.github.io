import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import "./Skill.css";
const skillsData = [
  {
    id: 1,
    logo: "https://img.icons8.com/color/480/000000/html-5--v1.png",
    name: "HTMl",
  },
  {
    id: 2,
    logo: "https://img.icons8.com/color/480/000000/css3.png",
    name: "CSS",
  },
  {
    id: 3,
    logo: "https://img.icons8.com/color/480/000000/javascript--v1.png",
    name: "javascript",
  },
  {
    id: 4,
    logo: "https://img.icons8.com/plasticine/400/000000/react.png",
    name: "React",
  },
  {
    id: 5,
    logo: "https://img.icons8.com/color/480/000000/chakra-ui.png",
    name: "Chakra UI",
  },
  {
    id: 6,
    logo: "https://img.icons8.com/color/480/000000/redux.png",
    name: "Redux",
  },
  {
    id: 7,
    logo: "https://img.icons8.com/color/480/000000/nodejs.png",
    name: "Node JS",
  },
  {
    id: 8,
    logo: "https://img.icons8.com/color/480/000000/mongodb.png",
    name: "Mongodb",
  },
  {
    id: 9,
    logo: "https://png2.cleanpng.com/sh/a79557dfd3693291960ab934cf9ca2ae/L0KzQYm3VsE1N5ZBkZH0aYP2gLBuTf5wbJYyguU2ZYjzgrb6k71re15veehqc3P1ecH7TgNwdKZ5gdH3LYP3cbTyTgdmal5mRadrMkLlSbW8V8Q0PpU3RqcBM0i5QYa7UcUzQWE1SqYAM0S6RnB3jvc=/kisspng-node-js-express-js-javascript-solution-stack-web-a-5b22b9d57436d2.563861541529002453476.png",
    name: "Express JS",
  },
  {
    id: 10,
    logo: "https://img.icons8.com/color/480/000000/git.png",
    name: "Git hub",
  },
];

const Skill = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div id="Skill">
      <Heading
        textAlign={"center"}
        fontSize={{ base: "3xl", sm: "4xl ", lg: "5xl" }}
        textDecor="underline"
        textTransform="uppercase"
        fontWeight={600}
      >
        Skill
      </Heading>
      <Box mt={"5rem"} className="bg">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {skillsData.map((skill, id) => (
            <Box key={skill.id} textAlign={"center"} className="skill--box">
              <Image src={skill.logo} alt={skill.name} width={"70%"} />
              <Text fontSize={{ base: "md", sm: "sm", lg: "25px" }}>
                {skill.name}
              </Text>
            </Box>
          ))}
        </Marquee>
      </Box>
    </div>
  );
};

export default Skill;
