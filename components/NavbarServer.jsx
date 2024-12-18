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
            <Link href="/" className="font-bold text-lg sm:text-xl md:text-2xl">
              <span className="text-orange-500">PHYNOVATE</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 lg:ml-10 flex items-center space-x-2 lg:space-x-4">
              <Link
                href="/about"
                className="px-2 lg:px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors whitespace-nowrap"
              >
                About Us
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-2 lg:px-3 py-2 text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors whitespace-nowrap"
                  >
                    Our Services <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-[#003B7E] border-orange-500 w-[280px] lg:w-[320px]"
                  align="end"
                >
                  {services.map((service) => (
                    <DropdownMenuItem 
                      key={service.name} 
                      asChild
                      className="focus:bg-orange-500 focus:text-white"
                    >
                      <Link
                        href={service.href}
                        className="text-white hover:bg-orange-500 hover:text-white transition-colors py-2 px-3 text-sm w-full"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/blogs"
                className="px-2 lg:px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors whitespace-nowrap"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-2 lg:px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors whitespace-nowrap"
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
