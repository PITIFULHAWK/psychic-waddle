import FinancialTips from "@/components/FinancialTips";
import HeroSection from "@/components/HeroSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import WhatMakesUsSpecial from "@/components/WhatMakesUsSpecial";

export const metadata = {
  title: "Phynovate | Home",
  description: "Phynovate - Home",
  openGraph: {
    title: "Phynovate",
    description: "Phynovate - Home",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesCarousel />
      <WhatMakesUsSpecial />
      {/*<FinancialTips />*/}
    </>
  );
}
