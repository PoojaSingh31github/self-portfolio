import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
import projectData from "../../data/projectData.json";

const MotionDiv = motion.div;

function Projects() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Text
          textAlign="center"
          color="#805AD5"
          fontSize={{ base: "20px", md: "22px", lg: "40px" }}
          fontWeight={{ base: "600", md: "700" }}
        >
          Projects
        </Text>
      </motion.div>

      {projectData.map((project, index) => (
        <MotionDiv
          key={project.id + index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ProjectsCard
            name={project.name}
            image1={project.src1}
            image2={project.src2}
            info={project.info}
            info2={project.info2}
            tstack={project.tstack}
            details={project.team}
            github={project.repo}
            deployed={project.link}
            direction={project.direction}
          />
        </MotionDiv>
      ))}
    </>
  );
}

export default Projects;
