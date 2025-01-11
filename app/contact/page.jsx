import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

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
    <div className="rounded-full p-3 bg-[#003B7E]/10">{icon}</div>
    <div>
      <h3 className="font-semibold text-[#003B7E] mb-1">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Updated with image */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn.pixabay.com/photo/2019/03/10/08/16/contact-4045623_1280.jpg"
            alt="Contact Us"
            width={1920}
            height={500}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B7E]/90 to-[#003B7E]/80 flex items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-8">
              <ContactInfo
                icon={<Phone className="h-6 w-6 text-[#003B7E]" />}
                title="Phone"
                content="+91 70049 51736, +91 70025 06060
"
              />
              <ContactInfo
                icon={<Mail className="h-6 w-6 text-[#003B7E]" />}
                title="Email"
                content="info@phynovate.com"
              />
              {/*<ContactInfo
                icon={<MapPin className="h-6 w-6 text-[#003B7E]" />}
                title="Office"
                content="India"
              />
              <ContactInfo
                icon={<Clock className="h-6 w-6 text-[#003B7E]" />}
                title="Business Hours"
                content="Monday - Friday: 9:00 AM - 5:00 PM MST"
              />*/}
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
