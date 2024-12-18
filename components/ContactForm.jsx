"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <div className="bg-[#003B7E]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl font-bold text-center mb-6">
            Start a Conversation
          </h2>
          <p className="text-center mb-12">
            Allow us to help you determine if our team/system is right for your
            office. Call or send us an email using the form below and we will
            reply promptly.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="First Name"
                className="bg-transparent border-white/30 text-white placeholder:text-white/50"
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-white/30 text-white placeholder:text-white/50"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-transparent border-white/30 text-white placeholder:text-white/50"
              />
              <Input
                type="tel"
                placeholder="Phone"
                className="bg-transparent border-white/30 text-white placeholder:text-white/50"
              />
            </div>
            <Textarea
              placeholder="Message"
              className="bg-transparent border-white/30 text-white placeholder:text-white/50 min-h-[120px]"
            />
            <div className="flex justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
