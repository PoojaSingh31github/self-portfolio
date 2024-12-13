import { Flex, Text } from "@chakra-ui/react";
import { AiOutlinePhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";

 function CopyRight() {
  return (
    <>
      <Flex
        fontSize={{ base: "12px", md: "14px", lg: "16px" }}
        justifyContent="space-around"
        flexDirection={{ base: "column", md: "row" }}
        rowGap={{ base: "8px" }}
      >
        <Flex alignItems="center" justifyContent="center" gap="5px">
          <AiOutlinePhone />
          <Text>+91 8130140259</Text>
        </Flex>

        <Flex alignItems="center" justifyContent="center" gap="5px">
          <GrMail />
          <Text>poojasingh12312000@gmail.com</Text>
        </Flex>

        <Flex justifyContent="center" alignItems="center" gap="5px">
          <Text>
            <HiLocationMarker />
          </Text>
          <Text>Delhi, India</Text>
        </Flex>
      </Flex>
      <Text
        mt={{ base: "10px", md: "20px" }}
        fontSize={{ base: "12px", md: "14px" }}
      >
        Copyright © 2024
      </Text>
    </>
  );
}

export default CopyRight