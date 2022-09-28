import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "@chakra-ui/react";
import CategoryMenu from "../Components/CategoryMenu";
import Card from "../Components/Card";
import CustomCarousel from "../Components/heroSection/Carousel";
import Content from "../Components/content";
import { SimpleGrid } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Xomos1</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="Electronics and miscellaneous items whole sales"
        />
      </Head>
      <Container maxW={1275} p={0}>
        <CustomCarousel />
        <CategoryMenu />
        <SimpleGrid
          py={20}
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 3, spacing: "sm" },
            { maxWidth: 600, cols: 2, spacing: "sm" },
          ]}
        >
          {[...Array(20)].map((element) => { 
            console.log(element)
            return <Card key={element} />
          })}
        </SimpleGrid>
        {/* <Content /> */}
      </Container>
    </>
  );
};

export default Home;
