"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ContactForm } from "./ContactForm";

export const ContactFormBottom = () => {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#003B7E]">
            Get In Touch
          </h2>
          <p className="text-gray-600">
            Have questions about our services? We'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
