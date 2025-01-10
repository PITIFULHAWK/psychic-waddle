import fs from "fs";
import path from "path";
import FinancialTips from "@/components/FinancialTips";
import HeroSection from "@/components/HeroSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import WhatMakesUsSpecial from "@/components/WhatMakesUsSpecial";

export const getStaticProps = async () => {
  const blogsDirectory = path.join(process.cwd(), "public", "blogs");
  const files = fs.readdirSync(blogsDirectory);

  console.log(blogPosts);
  console.log(blogsDirectory);
  const blogPosts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(blogsDirectory, file);
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    }),
  );
  console.log(blogsDirectory);
  console.log(blogPosts);

  return {
    props: {
      blogPosts,
    },
  };
};

export const metadata = {
  title: "Phynovate | Home",
  description: "Phynovate - Home",
  openGraph: {
    title: "Phynovate",
    description: "Phynovate - Home",
  },
};

export default function Home({ blogPosts }) {
  return (
    <>
      <HeroSection />
      <ServicesCarousel />
      <WhatMakesUsSpecial />
      <FinancialTips blogPosts={blogPosts} />
    </>
  );
}
