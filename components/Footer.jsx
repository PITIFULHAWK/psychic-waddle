import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "./ContactForm";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/" },
  { name: "How it works", href: "/" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Book-Keeping", href: "/services/#book-keeping" },
  {
    name: "Accounts Payable and Receivable Services",
    href: "/services/#accounts-payable",
  },
  { name: "Payroll Services", href: "/services/#payroll" },
  {
    name: "Management Accounting Services/ Financial Planning and Analysis (FP&A)",
    href: "/services/#management-accounting",
  },
  {
    name: "Compliances and Risk Management",
    href: "/services/#compliances-risk",
  },
  {
    name: "Strategic Financial and Cash Flow Management",
    href: "/services/#strategic-financial",
  },
  { name: "Audit and Assurance Support", href: "/services/#audit-assurance" },
];

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Contact Form Section */}
      <ContactForm />

      {/* Main Footer Section */}
      <div className="bg-[#003B7E] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  <span className="text-orange-500">PHYNOVATE</span>
                </h2>
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Phone className="h-5 w-5" />
                  Call. 720-230-6058
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>E. info@phynovate.com</span>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Get A Quote
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Link</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span>© 2024 Phynovate. All Rights Reserved.</span>
              <Link
                href="/privacy"
                className="hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-white/10"
                asChild
              >
                <Link href="https://facebook.com" target="_blank">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-white/10"
                asChild
              >
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
