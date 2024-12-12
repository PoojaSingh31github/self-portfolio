import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { BsFillChatLeftFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { MdSettingsAccessibility } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

export default function SoftSkills() {
    return (
        <>
            <MotionText
                textAlign='center'
                color='#805AD5'
                fontSize={{ base: '20px', md: '22px', lg: '40px' }}
                fontWeight={{ base: '600', md: '700' }}
                mt={{ base: '50px', md: '80px', lg: '85px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Soft Skills
            </MotionText>

            <SimpleGrid
                columns={[2, 4, 4, 4]}
                fontSize={{ base: '12px', md: '14px' }}
                fontWeight='600'
                rowGap='15px'
                w={{ base: '95%' }}
                m='auto'
                mt={{ base: '5px', md: '10px' }}
            >
                <MotionBox
                    m='auto'
                    mt={{ base: '20px', md: '30px', lg: '6' }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Flex>
                        <Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'>
                            <BsFillChatLeftFill />
                        </Text>
                    </Flex>
                    <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>
                        Communication
                    </Text>
                </MotionBox>

                <MotionBox
                    m='auto'
                    mt={{ base: '20px', md: '30px', lg: '6' }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Flex>
                        <Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'>
                            <FaPeopleCarry />
                        </Text>
                    </Flex>
                    <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>
                        Team Work
                    </Text>
                </MotionBox>

                <MotionBox
                    m='auto'
                    mt={{ base: '20px', md: '30px', lg: '6' }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Flex>
                        <Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'>
                            <MdSettingsAccessibility />
                        </Text>
                    </Flex>
                    <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>
                        Adaptibility
                    </Text>
                </MotionBox>

                <MotionBox
                    m='auto'
                    mt={{ base: '20px', md: '30px', lg: '6' }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Flex>
                        <Text fontSize={{ base: '25px', md: '40px', lg: '40px' }} m='auto'>
                            <RiTeamFill />
                        </Text>
                    </Flex>
                    <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>
                        Leadership
                    </Text>
                </MotionBox>
            </SimpleGrid>
        </>
    );
}
 