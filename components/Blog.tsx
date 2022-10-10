import { Box, ColorScheme, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useRouter } from "next/router";

const Blog = ({ blog }: { blog: any }) => {
  const { title, description, tags, _id } = blog;
  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
  });
  const router = useRouter();
  return (
    <Box mb="lg">
      <Box mb="md">
        <Text
          size={22}
          weight={800}
          color={colorScheme === "dark" ? "White" : "black"}
          onClick={() => router.push(`/blogs/${_id}`)}
          sx={{ cursor: "pointer" }}
        >
          {title}
        </Text>
        <Box sx={{ display: "flex" }}>
          {tags?.map((tag: any, index: any) => (
            <Text
              color="#2DD4BA"
              key={index}
              size={18}
              weight={550}
              sx={{ cursor: "pointer" }}
              mr="sm"
            >
              {tag}
            </Text>
          ))}
        </Box>
      </Box>
      <Text>{description}</Text>
    </Box>
  );
};

export default Blog;
