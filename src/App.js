import "./App.css";
import Navbar from "./Components/Navbar";
import Aboute from "./Components/Aboute";
import Skill from "./Components/Skill";
import { Stack } from "@chakra-ui/react";
import Project from "./Components/Project";
import Calendar from "./Components/Calendar";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Stack spacing={"20"}>
        <Navbar />
        <Aboute />
        <Skill />
        <Project />
        <Calendar />
        <Contact />
      </Stack>
    </div>
  );
}

export default App;
