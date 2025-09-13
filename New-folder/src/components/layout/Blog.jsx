import { Text, Box } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import blogData from "../../data/blogData.json";

function Blog() {
  return (
    <Box>
      <Text
        textAlign="center"
        color="#805AD5"
        fontSize={{ base: "20px", md: "22px", lg: "40px" }}
        fontWeight={{ base: "600", md: "700" }}
        pb={5}
      >
        Blog
      </Text>
      {blogData.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          desc={blog.desc}
          desc2={blog.desc2}
          date={blog.date}
        />
      ))}
    </Box>
  );
}

export default Blog;
