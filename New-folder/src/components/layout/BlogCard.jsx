import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

function BlogCard({ title, desc, date,desc2 }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(desc);
    alert("Code copied to clipboard!");
  };

  return (
    <Box
      borderRadius="2xl"
      boxShadow="md"
      m={20}
      p={4}
      bg="white"
      _dark={{ bg: "gray.800", color: "white" }}
    >
      <Heading size="md" mb={2}>{title}</Heading>
      <Text fontSize="sm" color="gray.500">{date}</Text>
      <SyntaxHighlighter language="javascript" style={coy}>
        {desc}
      </SyntaxHighlighter>
      <p>{desc2}</p>
      <Button size="sm" mt={2} onClick={handleCopy}>Copy Code</Button>
    </Box>
  );
}

export default BlogCard;
