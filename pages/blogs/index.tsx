import Head from "next/head";
import Blog from "../../components/Blog";
import Layout from "../../components/Layout";
const Blogs = ({ data }: { data: any }) => {
  const blogs = data;

  return (
    <Layout>
      <Head>
        <title>blogs</title>
        <meta name="description" content="Blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {blogs.map((blog: any) => (
        <Blog key={blog._id} blog={blog} />
      ))}
    </Layout>
  );
};

export default Blogs;
export async function getServerSideProps(context: any) {
  const response = await fetch(`http://localhost:3000/api/blogs`);
  const data = await response.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
