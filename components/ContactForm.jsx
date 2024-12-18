"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePathname } from 'next/navigation';

export const ContactForm = () => {
  const pathname = usePathname();
  
  // Return null (don't render) if we're on the contact page
  if (pathname === '/contact') return null;

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

        <Card className="max-w-2xl mx-auto border-[#003B7E]/10">
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#003B7E] mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="w-full border-[#003B7E]/20 focus:border-[#FFA500] focus:ring-[#FFA500]" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#003B7E] mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="w-full border-[#003B7E]/20 focus:border-[#FFA500] focus:ring-[#FFA500]" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#003B7E] mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full border-[#003B7E]/20 focus:border-[#FFA500] focus:ring-[#FFA500]" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#003B7E] mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="w-full border-[#003B7E]/20 focus:border-[#FFA500] focus:ring-[#FFA500]" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#003B7E] mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="How can we help you?" 
                  rows={4} 
                  className="w-full border-[#003B7E]/20 focus:border-[#FFA500] focus:ring-[#FFA500]" 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#FFA500] hover:bg-[#FF8C00] text-white transition-colors duration-300"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
