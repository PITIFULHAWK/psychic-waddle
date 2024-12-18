import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const financialTips = [
  {
    title: "No Need to File Your BOI (For Now)",
    image: "https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162_1280.jpg",
    alt: "Stack of documents",
  },
  {
    title: "Defense Startups and SMBs Prepare for Trump 2.0",
    image: "https://cdn.pixabay.com/photo/2015/05/31/10/51/technology-791029_1280.jpg",
    alt: "Drones flying in the sky",
  },
  {
    title: "Preparing for Tariffs: 4 Proactive Strategies for Small Businesses",
    image: "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
    alt: "Shipping containers at a port",
  },
];

const FinancialTips = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#003B7E]">
            Financial Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {financialTips.map((tip, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-[#003B7E]/10">
                <Image
                  src={tip.image}
                  alt={tip.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg text-[#003B7E] hover:text-[#FFA500] transition-colors duration-300">
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
