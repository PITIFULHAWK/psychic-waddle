import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industries = [
  { name: "Distribution", icon: "📦" },
  { name: "Consumer Packaged Goods", icon: "🛍️" },
  { name: "Transportation", icon: "🚚" },
  { name: "SASS", icon: "💻" },
  { name: "Manufacturing", icon: "⚙️" },
  { name: "Professional Services", icon: "💼" },
  { name: "Real Estate", icon: "🏠" },
  { name: "Food & Beverage", icon: "🍽️" },
  { name: "Internet of Things", icon: "📱" },
  { name: "AgTech", icon: "🌱" },
  { name: "MedTech", icon: "⚕️" },
  { name: "Cannabis", icon: "🌿" },
  { name: "Forensic Accounting", icon: "🔍" },
  { name: "Construction", icon: "🏗️" },
];

const financialTips = [
  {
    title: "No Need to File Your BOI (For Now)",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Stack of documents",
  },
  {
    title: "Defense Startups and SMBs Prepare for Trump 2.0",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Drones flying in the sky",
  },
  {
    title: "Preparing for Tariffs: 4 Proactive Strategies for Small Businesses",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Shipping containers at a port",
  },
];

export default function HeroSection() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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
              Expert Fractional Phynovates
            </h1>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-white/90">
                Plus accountants, controllers, and analysts.
              </p>
              <p className="text-lg md:text-xl text-white/90">
                Flexible support for your small business.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg"
              >
                <Link href="/consultation">Schedule A Phynovate Consultation</Link>
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

      {/* Why hire a Fractional Phynovate? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why hire a Fractional Phynovate?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-4xl mr-4">📊</span>
                  Professional Financial Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Collaborate with experienced Phynovates and advanced
                  analytics to grow your business.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-4xl mr-4">📈</span>
                  Accurate Accounting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Save hours of frustrating busy work. Focus on growing your
                  business instead.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-4xl mr-4">🧹</span>
                  Bookkeeping Cleanup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Move your business forward with an efficient bookkeeping
                  system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Your Free Consultation */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'll sit down with you for an hour and discuss your business,
            review your financials, show you what to focus on, and make you
            aware of major lurking financial risks.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg"
          >
            <Link href="/consultation">Pick a Day and Time</Link>
          </Button>
        </div>
      </section>

      {/* Financial Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Financial Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {financialTips.map((tip, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={tip.image}
                  alt={tip.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-green-700">
                    {tip.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <span className="text-4xl mb-2">{industry.icon}</span>
                <span className="text-sm font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
