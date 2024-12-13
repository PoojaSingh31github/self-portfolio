import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Box, Flex, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Email from "./Email";
import CopyRight from "./CopyRight";

// Line 43 is giving wrror 

// Wrapping Chakra UI components with motion
const MotionText = motion(Text);
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

function Contact() {
  return (
    <>
      {/* Text Animation */}
      <MotionText
        textAlign="center"
        color="#805AD5"
        fontSize={{ base: "20px", md: "22px", lg: "40px" }}
        fontWeight={{ base: "600", md: "700" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact
      </MotionText>

      {/* Email Box */}


      {/* <MotionBox
        w={["90%", "70%", "60%", "50%"]}
        m="auto"
        background={"blackAlpha.100"}
        p={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}  
      >
        <Email />
      </MotionBox> */}



      

      {/* Social Media Links */}
      <Box pb={{ base: "20px", md: "30px" }}>
        {/* This Part is giving error */}
        {/* <MotionFlex
          w={{ base: "30%", md: "20%", lg: "10%" }}
          m="auto"
          justifyContent="space-around"
          fontSize={{ base: "22px", md: "26px", lg: "30px" }}
          mt="20px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
   
          <Box>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  aria-label="LinkedIn"
                  icon={<BsLinkedin />}
                  variant="ghost"
                  fontSize="30px"
                  _hover={{ color: "#0077B5" }} 
                />
              </PopoverTrigger>
              <PopoverContent bg="#EDF2F7">
                <PopoverArrow />
                <PopoverBody color="black">LinkedIn</PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>

          <Box>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  aria-label="GitHub"
                  icon={<BsGithub />}
                  variant="ghost"
                  fontSize="30px"
                  _hover={{ color: "#333" }} 
                />
              </PopoverTrigger>
              <PopoverContent bg="#EDF2F7">
                <PopoverArrow />
                <PopoverBody color="black">GitHub</PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </MotionFlex> */}

      </Box>

      {/* Copyright */}
      <MotionBox
        width={{ base: "100%", md: "80%", lg: "50%" }}
        m="auto"
        textAlign="center"
        paddingBottom={{ base: "10px", lg: "30px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <CopyRight />
      </MotionBox>
    </>
  );
}

export default Contact;
