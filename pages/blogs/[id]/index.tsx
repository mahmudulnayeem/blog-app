import { Text, TypographyStylesProvider } from "@mantine/core";
import Layout from "../../../components/Layout";
const Blog = ({ data }: { data: any }) => {
  const blog = data[0];
  return (
    <Layout>
      <Text weight={800} size={24}>
        {blog?.title}
      </Text>
      <TypographyStylesProvider>
        <div
          dangerouslySetInnerHTML={{
            __html: blog.description,
          }}
        />
      </TypographyStylesProvider>
    </Layout>
  );
};

export default Blog;
export async function getServerSideProps(context: any) {
  const response = await fetch(
    `http://localhost:3000/api/blogById/?id=${context.query.id}`
  );
  const data = await response.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
