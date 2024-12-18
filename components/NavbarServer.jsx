import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const services = [
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

export const NavbarServer = () => {
  return (
    <nav className="bg-[#003B7E] text-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-2xl">
              <span className="text-orange-500">PHYNOVATE</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-3 py-2 text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Our Services <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#003B7E] border-orange-500">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <Link
                        href={service.href}
                        className="text-white hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/blog"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
