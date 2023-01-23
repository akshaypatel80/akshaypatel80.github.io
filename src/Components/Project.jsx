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
  {
    id: 4,
    name: " Freshly.com clone",
    image:
      "https://user-images.githubusercontent.com/96005514/209442724-34ac9e8f-8f45-45e3-a33d-6a7d6d9220ad.png",
    description:
      "Freshly is a weekly subscription that delivers fresh meals. Created Carts, Products, Users, Admin API ( Back-End ). Except Payment Page Completed All Pages ( Front-End ). It was a collaborative project",
    responsibility: ["Collaborative", "restaurants", "admin"],
    TechStack: ["React", "Redux", "Chakra UI", "Node", "Express", "Mongodb"],
    github: "https://github.com/Dhamisir/Freshly-Website-Clone",
    deployment: "https://sophisticated-legs-486.netlify.app/",
  },
  {
    id: 5,
    name: "dailyobjects.com clone",
    image:
      "https://github.com/vraj79/faithful-lock-5927/raw/fw20_1138_day-4/frontend/public/project_ss/Screenshot%20(62).png",
    description:
      "It’s Group project where we've used MERN stack to build the dailyobjects.com with our creativity along with frontend and backend integration its Fully Responsive. Daily Objects is a E-Commerce Website who deals with the cases,covers & bags. Created Carts, Products, Users, Admin API ( Back-End )",
    responsibility: ["Collaborative", "E-commerce", "admin"],
    TechStack: ["React", "Redux", "Chakra UI", "Node", "Express", "Mongodb"],
    github: "https://github.com/vraj79/faithful-lock-5927",
    deployment: "https://dailyshope.netlify.app/",
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
