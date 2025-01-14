import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="flex flex-col min-h-[600px]">
      <section className="relative w-full min-h-[600px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593378_1280.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B7E]/90 to-[#003B7E]/80 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Leveraging the business process excellence
            </h1>
            <div className="space-y-4 animate-fade-in-up">
              <p className="text-lg sm:text-xl md:text-2xl text-white/90">
                For Enterprises across the globe
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/90">
                by ensuring an exceptional Experience.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {/* <Button
                asChild
                className="bg-[#FFA500] hover:bg-[#FF8C00] text-white font-semibold px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg w-full sm:w-auto"
              >
                <Link href="/#">Schedule A Phynovate Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white font-semibold px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg w-full sm:w-auto"
              >
                <Link href="/services">Learn More</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
