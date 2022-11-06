import { Heading, SimpleGrid, useColorMode, Container } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
const data = [
  {
    id: 1,
    name: "Online.KFC.co.in-Clone",
    image:
      "https://drive.google.com/uc?export=view&id=1IidFuhaS463SgGGQARXOqYWTXS4cqytf",
    description:
      "KFC.co.in is a food delivery website famous for non-veg food.",
    responsibility: ["Collaborative", "food"],
    TechStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/sankarshandev98/for-stick-2556",
    deployment: "https://symphonious-rolypoly-b8a660.netlify.app/",
  },
  {
    id: 2,
    name: "Best Buy.ca-Clone",
    image:
      "https://drive.google.com/uc?export=view&id=1Aqc7ebC-t3IokwxzaFwTBJWWvCulYIAL",
    description:
      "Best Buy.ca is an E-commerce website famous for its electronics products.",
    responsibility: ["Solo", "E-Commerce"],
    TechStack: ["CSS", "JavaScript", "React", "Chakra UI", "Axios", "Heroku"],
    github: "https://github.com/akshaypatel80/last-fruit-1413",
    deployment:
      "https://isnt-akpatel260199-gmail-com-awesome-5ef48.netlify.app/",
  },
  {
    id: 3,
    name: "Kind meal.my clone",
    image:
      "https://drive.google.com/uc?export=view&id=1-zZqQlRVoZ_dO5RM5crXTQ0jmczBmP0p",
    description:
      "kindmeal.my is an restaurants finding website famous for its best restaurants food",
    responsibility: ["Solo", "restaurants"],
    TechStack: ["CSS", "JavaScript", "React", "Chakra UI", "Axios", "Heroku"],
    github: "https://github.com/akshaypatel80/domineering-kick-7131",
    deployment: "https://kindmeale.netlify.app/",
  },
];
const Project = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Container maxW={"7xl"} id="Project">
        <Heading
          textAlign={"center"}
          textDecor="underline"
          textTransform="uppercase"
          fontSize={{ base: "3xl", sm: "4xl ", lg: "5xl" }}
          fontWeight={600}
        >
          Project
        </Heading>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          gap={"2rem 5rem"}
          mt={16}
          mx={"auto"}
        >
          {data.map((item, index) => (
            <ProjectCard
              key={item.id}
              image={item.image}
              name={item.name}
              index={index}
              description={item.description}
              responsibility={item.responsibility}
              TechStack={item.TechStack}
              github={item.github}
              deployment={item.deployment}
            />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Project;
