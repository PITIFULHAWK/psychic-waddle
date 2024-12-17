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
            backgroundImage: "url('/placeholder.svg?height=600&width=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-green-600/90 z-10" />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Leveraging the business process excellence
            </h1>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-white/90">
                For Enterprises across the globe
              </p>
              <p className="text-lg md:text-xl text-white/90">
                by ensuring an exceptional Experience.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg"
              >
                <Link href="/#">Schedule A Phynovate Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white font-semibold px-8 py-6 text-lg"
              >
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
