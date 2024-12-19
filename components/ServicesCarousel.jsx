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
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: 2 cards
      } else {
        setItemsPerPage(3); // Desktop: 3 cards
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setSlideDirection('right');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= services.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setSlideDirection('left');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.max(services.length - itemsPerPage, 0)
        : prevIndex - itemsPerPage
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#003B7E]">Our Services</h2>

        <div className="relative max-w-full overflow-hidden">
          <div className="flex items-center gap-4 md:gap-8">
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex bg-white hover:bg-blue-50 border-[#003B7E] text-[#003B7E]"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="relative w-full overflow-hidden">
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 transition-transform duration-500 ease-in-out`}
                onTransitionEnd={() => setIsAnimating(false)}
                style={{
                  transform: isAnimating 
                    ? `translateX(${slideDirection === 'right' ? '-100%' : '100%'})`
                    : 'translateX(0)',
                  opacity: isAnimating ? 0 : 1,
                  transition: 'transform 500ms ease-in-out, opacity 500ms ease-in-out',
                }}
              >
                {services
                  .slice(currentIndex, currentIndex + itemsPerPage)
                  .map((service, index) => (
                    <Card
                      key={`${service.title}-${index}`}
                      className="bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border-[#003B7E]/10"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-[#003B7E] mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6 text-sm">
                          {service.description}
                        </p>
                        <Button
                          variant="link"
                          className="text-[#FFA500] hover:text-[#FF8C00] p-0 transition-colors duration-300"
                        >
                          KNOW MORE
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex bg-white hover:bg-blue-50 border-[#003B7E] text-[#003B7E]"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile navigation buttons */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="bg-white hover:bg-blue-50 border-[#003B7E] text-[#003B7E]"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white hover:bg-blue-50 border-[#003B7E] text-[#003B7E]"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
