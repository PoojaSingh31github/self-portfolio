import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import SocialProfileSimple from "./components/layout/AboutCard";
import Contact from "./components/layout/Contact";
import Projects from "./components/layout/Projects";
import Skills from "./components/layout/Skills";
import Profile from "./components/layout/Profile";
import Blog from "./components/layout/Blog";
import Navbar from "./components/layout/Navbar";
import { useTheme } from "./Context/AppContext";

function App() {
  const ProfileRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);
  const { Theme } = useTheme();

  const light = {
    backgroundColor: "#E9D8FD",
    color: "black",
  };

  const dark = {
    backgroundColor: "black",
    color: "white",
  };

  const HandleScrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <Router>
      <Box className="App" style={Theme === "light" ? light : dark}>
        <Navbar
        ProfileRef={() => HandleScrollTo(ProfileRef)}
        AboutRef={() => HandleScrollTo(AboutRef)}
        SkillsRef={() => HandleScrollTo(SkillsRef)}
        ProjectsRef={() => HandleScrollTo(ProjectRef)}
        ContactRef={() => HandleScrollTo(ContactRef)}
      />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Box ref={ProfileRef}>
        <Profile />
      </Box>

      <Box mt={{ base: "7%", md: "7%" }} ref={AboutRef}>
                  <SocialProfileSimple />
                </Box>

      <Box mt={{ base: "10%", md: "7%", lg: "5%" }} ref={SkillsRef}>
                  <Skills />
                </Box>

      <Box mt={{ base: "10%", md: "7%", lg: "6%" }} ref={ProjectRef}>
                  <Projects />
                </Box>

      <Box mt={{ base: "7%", md: "7%", lg: "5%" }} ref={ContactRef}>
                  <Contact />
                </Box>
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
