import { Divider, Text, TypographyStylesProvider } from "@mantine/core";
import Head from "next/head";
import Layout from "../../../components/Layout";
const Blog = ({ data }: { data: any }) => {
  const blog: any = data[0];
  return (
    <Layout>
      <Head>
        <title>blog</title>
        <meta name="description" content={blog.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text weight={800} size={24} align="center">
        {blog?.title}
      </Text>
      <Divider mt="sm" mb="lg" />
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
    `https://blog-app-ochre-two.vercel.app/api/blogById/?id=${context.query.id}`
  );
  const data = await response.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
