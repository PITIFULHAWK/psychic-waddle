"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/app/actions/sendEmail";

export const ContactForm = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await sendEmail(formData);
    setFormStatus(result);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-[#003B7E]/10">
          <CardContent className="p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[#003B7E] mb-2"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="text-black w-full border-[#003B7E]/20 focus:border-[#FFA500] focus:ring-[#FFA500]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[#003B7E] mb-2"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="text-black w-full border-[#003B7E]/20 focus:border-[#FFA500] focus:ring-[#FFA500]"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#003B7E] mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="text-black w-full border-[#003B7E]/20 focus:border-[#FFA500] focus:ring-[#FFA500]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#003B7E] mb-2"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 99999 99999"
                  className="text-black w-full border-[#003B7E]/20 focus:border-[#FFA500] focus:ring-[#FFA500]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#003B7E] mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={4}
                  className="text-black w-full border-[#003B7E]/20 focus:border-[#FFA500] focus:ring-[#FFA500]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FFA500] hover:bg-[#FF8C00] text-white transition-colors duration-300"
              >
                Send Message
              </Button>
            </form>
            {formStatus && (
              <div
                className={`mt-4 p-4 rounded ${formStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {formStatus.message}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
