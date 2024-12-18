import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Phynovate | Contact",
  description: "Phynovate - Contact",
  openGraph: {
    title: "Phynovate",
    description: "Phynovate - Contact",
  },
};

const ContactInfo = ({ icon, title, content }) => (
  <div className="flex items-start gap-4">
    <div className="rounded-full p-3 bg-[#003B7E]/10">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-[#003B7E] mb-1">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003B7E] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-6 border-[#003B7E]/10">
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#003B7E] mb-2">
                        First Name
                      </label>
                      <Input className="w-full border-[#003B7E]/20" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#003B7E] mb-2">
                        Last Name
                      </label>
                      <Input className="w-full border-[#003B7E]/20" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#003B7E] mb-2">
                      Email
                    </label>
                    <Input type="email" className="w-full border-[#003B7E]/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#003B7E] mb-2">
                      Phone
                    </label>
                    <Input type="tel" className="w-full border-[#003B7E]/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#003B7E] mb-2">
                      Message
                    </label>
                    <Textarea rows={4} className="w-full border-[#003B7E]/20" />
                  </div>
                  <Button className="w-full bg-[#FFA500] hover:bg-[#FF8C00] text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <ContactInfo
                icon={<Phone className="h-6 w-6 text-[#003B7E]" />}
                title="Phone"
                content="720-230-6058"
              />
              <ContactInfo
                icon={<Mail className="h-6 w-6 text-[#003B7E]" />}
                title="Email"
                content="info@phynovate.com"
              />
              <ContactInfo
                icon={<MapPin className="h-6 w-6 text-[#003B7E]" />}
                title="Office"
                content="123 Business Avenue, Suite 100, Denver, CO 80202"
              />
              <ContactInfo
                icon={<Clock className="h-6 w-6 text-[#003B7E]" />}
                title="Business Hours"
                content="Monday - Friday: 9:00 AM - 5:00 PM MST"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200">
        {/* Add your map component or iframe here */}
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=your-map-embed-url"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
