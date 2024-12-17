"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Year end Accounts",
    description:
      "Working with varied multinationals across different sectors enables us to produce quality accounts with cross-referenced working papers for your quick and easy review.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path
          d="M8 8h32v32H8z"
          stroke="#0055CC"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 20h16M16 28h8"
          stroke="#0055CC"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="36" cy="36" r="4" fill="#FFA500" />
      </svg>
    ),
  },
  {
    title: "Bookkeeping",
    description:
      "Undertaking a low-margin and time consuming activity such as Bookkeeping is an activity that accountants don't usually undertake. Outsourcing enables you to allow bookkeeping to be managed efficiently.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect
          x="12"
          y="8"
          width="24"
          height="32"
          stroke="#0055CC"
          strokeWidth="2"
        />
        <path
          d="M18 20h12M18 28h8"
          stroke="#0055CC"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="36" cy="16" r="4" fill="#FFA500" />
      </svg>
    ),
  },
  {
    title: "Corporate Tax Return",
    description:
      "Majority of our clients use our outsourcing services to prepare and file corporation tax returns accurately and efficiently. Our tax outsourcing team offers dynamic support ranging from basic compliance to complex advisory work.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M8 8h24v32H8z" stroke="#0055CC" strokeWidth="2" />
        <path
          d="M16 16h8M16 24h8"
          stroke="#0055CC"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="36" cy="36" r="4" fill="#FFA500" />
      </svg>
    ),
  },
  {
    title: "VAT",
    description:
      "Outsourcing the VAT function will help any company seek direct help from financial experts, rather than hiring those experts fulltime. Not only outsourcing the task will ease the pressure but also allow for better focus.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path
          d="M12 8l24 32M24 8l12 32M36 8L24 40"
          stroke="#0055CC"
          strokeWidth="2"
        />
        <circle cx="36" cy="36" r="4" fill="#FFA500" />
      </svg>
    ),
  },
  {
    title: "Management Accounts",
    description:
      "Management reports are the lynchpins for all decision making processes. Reports need to be crisp, unambiguous, with a laser like focus but customised as per specific scale and requirements.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="#0055CC" strokeWidth="2" />
        <path d="M24 16v16l8 8" stroke="#0055CC" strokeWidth="2" />
        <circle cx="36" cy="36" r="4" fill="#FFA500" />
      </svg>
    ),
  },
  {
    title: "Payroll",
    description:
      "Our payroll service allows you to achieve your business ambition. You can eliminate many of the back-office costs associated with operating payroll in-house while ensuring compliance.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M8 12h32v24H8z" stroke="#0055CC" strokeWidth="2" />
        <circle cx="24" cy="24" r="8" stroke="#0055CC" strokeWidth="2" />
        <circle cx="36" cy="36" r="4" fill="#FFA500" />
      </svg>
    ),
  },
  // Add other services...
];

export const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= services.length
        ? 0
        : prevIndex + itemsPerPage,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? services.length - itemsPerPage
        : prevIndex - itemsPerPage,
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="relative">
          <div className="flex justify-between items-center gap-8">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white hover:bg-gray-100"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="grid grid-cols-3 gap-8">
              {services
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-sm">
                        {service.description}
                      </p>
                      <Button
                        variant="link"
                        className="text-blue-700 hover:text-blue-800 p-0"
                      >
                        KNOW MORE
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white hover:bg-gray-100"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
