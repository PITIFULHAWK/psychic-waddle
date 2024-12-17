import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const FinancialTips = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
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
    </>
  );
};

export default FinancialTips;
