"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen, CreditCard, Users, LineChart, ShieldCheck, PiggyBank, ClipboardCheck } from "lucide-react";

const services = [
  {
    id: "book-keeping",
    title: "Book-Keeping Services",
    description: "Accurate and timely bookkeeping is crucial for maintaining financial clarity. We provide end-to-end bookkeeping services, including transaction recording, Bank Account and Credit card reconciliation, and financial reporting to keep your books updated.",
    icon: <BookOpen className="w-12 h-12 text-[#003B7E]" />,
  },
  {
    id: "accounts-payable",
    title: "Accounts Payable and Receivable Services",
    description: "Stay on top of your obligations with efficient AP management. We manage vendor payments, monitor expenses, and help optimize cash outflows to improve your working capital. And Improve cash flow by staying on top of incoming payments.",
    icon: <CreditCard className="w-12 h-12 text-[#003B7E]" />,
  },
  {
    id: "payroll",
    title: "Payroll Services",
    description: "Ensure seamless payroll processing, compliance with tax regulations, and timely salary disbursement. Our payroll management services guarantee that your employees are compensated accurately and on time.",
    icon: <Users className="w-12 h-12 text-[#003B7E]" />,
  },
  {
    id: "management-accounting",
    title: "Management Accounting Services/ Financial Planning and Analysis (FP&A)",
    description: "Gain deep financial insights with custom financial models designed to meet your business needs. We specialize in preparing comprehensive Management Information System (MIS) reports to track performance metrics.",
    icon: <LineChart className="w-12 h-12 text-[#003B7E]" />,
  },
  {
    id: "compliances-risk",
    title: "Compliances and Risk Management",
    description: "Stay ahead of regulatory requirements with our Taxation and Compliance Tracker and Companies Compliance services. We ensure timely tax filings, accurate record-keeping, and adherence to evolving tax laws.",
    icon: <ShieldCheck className="w-12 h-12 text-[#003B7E]" />,
  },
  {
    id: "strategic-financial",
    title: "Strategic Financial and Cash Flow Management",
    description: "Achieving financial stability and growth starts with effective management of cash flow and overall finances. We provide expert support in forecasting, monitoring, and managing cash inflows and outflows.",
    icon: <PiggyBank className="w-12 h-12 text-[#003B7E]" />,
  },
  {
    id: "audit-assurance",
    title: "Audit and Assurance Support",
    description: "Ensure a smooth and hassle-free audit process with our professional Audit Assistance services. We help businesses prepare for internal, statutory, or external audits by organizing and reviewing financial records.",
    icon: <ClipboardCheck className="w-12 h-12 text-[#003B7E]" />,
  },
];

export const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(3);
      } else {
        setCardsToShow(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + services.length) % services.length);
  };

  const getVisibleCards = () => {
    let cards = [];
    const halfShow = Math.floor(cardsToShow / 2);
    
    for (let i = -halfShow; i <= halfShow; i++) {
      let index = (activeIndex + i + services.length) % services.length;
      cards.push({
        ...services[index],
        position: i,
      });
    }
    return cards;
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003B7E]">
          Our Services
        </h2>

        <div className="relative max-w-full mx-auto">
          {/* Cards Container */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Navigation Buttons - Moved in front */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 z-30 bg-white hover:bg-blue-50 border-[#003B7E] text-[#003B7E]"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 z-30 bg-white hover:bg-blue-50 border-[#003B7E] text-[#003B7E]"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Cards */}
            <div className="absolute w-full flex justify-center items-center">
              {getVisibleCards().map((service, index) => {
                const position = service.position;
                const isCenter = position === 0;
                const spread = position < 0 ? -1 : 1;
                const spreadDistance = Math.abs(position) * 100;

                return (
                  <div
                    key={`${service.id}-${index}`}
                    className="absolute transition-all duration-500"
                    style={{
                      transform: `
                        translateX(${isCenter ? '0' : `${spread * spreadDistance}%`})
                        scale(${isCenter ? 1 : 0.8})
                        perspective(1000px)
                        rotateY(${position * 10}deg)
                      `,
                      zIndex: cardsToShow - Math.abs(position),
                      opacity: 1 - (Math.abs(position) * 0.15),
                    }}
                  >
                    <Card className="w-[300px] h-[350px] bg-white shadow-sm hover:shadow-md transition-all duration-300 border-[#003B7E]/10">
                      <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                        <div>
                          <div className="flex justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-[#003B7E] mb-4">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-4">
                            {service.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${index === activeIndex ? 'bg-[#003B7E] w-4' : 'bg-[#003B7E]/30'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
