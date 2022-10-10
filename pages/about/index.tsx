import {
  Box,
  Center,
  ColorScheme,
  Divider,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import Layout from "../../components/Layout";

const socialLinks = [
  {
    link: "https://github.com/hasannayeem71",
    icon: BsGithub,
  },
  {
    link: "https://www.facebook.com/hasannayeem701/",
    icon: BsFacebook,
  },
  {
    link: "https://twitter.com/Mahmudu44103704",
    icon: BsTwitter,
  },
];

const About = () => {
  const [colorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
  });
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="About mahmudul hasan nayeem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>About</h1>
      <Divider />
      <Center>
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          <Box
            mt="sm"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Image
              src="https://i.ibb.co/55pZWH8/nayeem2.jpg"
              alt="user profile picture"
              height={200}
              width={200}
              layout="intrinsic"
              style={{ borderRadius: "50%" }}
            />
            <Text mt="md" size={22} weight={600}>
              Mahmudul Hasan Nayeem
            </Text>
            <Text mt="sm" size={16} align="center">
              Front end developer <br />{" "}
              <Link href="https://theesports.club/" passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: colorScheme === "dark" ? "#8c8fa3" : "black",
                  }}
                >
                  The Esporst Club
                </a>
              </Link>
              , India
            </Text>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.link} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "black", margin: "5px" }}
                  >
                    {
                      <social.icon
                        size={22}
                        color={colorScheme === "dark" ? "#8c8fa3" : "black"}
                      />
                    }
                  </a>
                </Link>
              ))}
            </Box>
          </Box>

          <div>
            <Text my="sm">
              Mahmudul Hasan Nayeem is a front-end web developer at the Esports
              Club. His responsibilities are to create and maintain a front-end
              app including the npm package for the micro front-end.
              <br /> <br />
              He maintains and debugs front-end code and gives the review. Also
              works on improving the design He writes clean code for better
              understanding.
              <br />
              <br />
              Overall clean code and user-friendly UI are his main concerns. He
              makes user-friendly and mobile-responsive UI
            </Text>
          </div>
        </SimpleGrid>
      </Center>
    </Layout>
  );
};

export default About;
