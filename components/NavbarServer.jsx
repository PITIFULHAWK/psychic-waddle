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

export const NavbarServer = ({ isScrolled }) => {
  return (
    <nav
      className={`transition-colors duration-300 ${isScrolled ? "border-b border-gray-200" : ""
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-lg sm:text-xl md:text-2xl">
              <span
                className={`${isScrolled ? "text-[#003B7E]" : "text-[#FFA500]"
                  } transition-colors duration-300`}
              >
                PHYNOVATE
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 lg:ml-10 flex items-center space-x-2 lg:space-x-4">
              {/* <Link
                href="/about"
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium 
                  ${isScrolled 
                    ? "text-[#003B7E] hover:text-[#FFA500]" 
                    : "text-white hover:text-[#FFA500]"
                  } transition-colors whitespace-nowrap`}
              >
                About Us
              </Link> */}
              <Link
                href="/#"
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium 
                  ${isScrolled
                    ? "text-[#003B7E] hover:text-[#FFA500]"
                    : "text-white hover:text-[#FFA500]"
                  } transition-colors whitespace-nowrap`}
              >
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`px-2 lg:px-3 py-2 text-sm font-medium
                      ${isScrolled
                        ? "text-[#003B7E] hover:text-[#FFA500]"
                        : "text-white hover:text-[#FFA500]"
                      } transition-colors whitespace-nowrap`}
                  >
                    Our Services <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`${isScrolled
                      ? "bg-white border-[#FFA500]"
                      : "bg-[#003B7E] border-[#FFA500]"
                    } w-[280px] lg:w-[320px] backdrop-blur-md overflow-y-auto max-h-[60vh]`}
                  align="end"
                  sideOffset={5}
                  onOpenAutoFocus={(e) => e.preventDefault()}
                  style={{ scrollbarGutter: "stable" }}
                >
                  {services.map((service) => (
                    <DropdownMenuItem
                      key={service.name}
                      asChild
                      className={`${isScrolled
                          ? "text-[#003B7E] hover:text-[#FFA500]"
                          : "text-white hover:text-[#FFA500]"
                        } focus:bg-[#FFA500]/10`}
                    >
                      <Link
                        href={service.href}
                        className="py-2 px-3 text-sm w-full transition-colors"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {/*<Link
                href="/blogs"
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium 
                  ${isScrolled
                    ? "text-[#003B7E] hover:text-[#FFA500]"
                    : "text-white hover:text-[#FFA500]"
                  } transition-colors whitespace-nowrap`}
              >
                Blog
              </Link>*/}
              <Link
                href="/contact"
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium 
                  ${isScrolled
                    ? "text-[#003B7E] hover:text-[#FFA500]"
                    : "text-white hover:text-[#FFA500]"
                  } transition-colors whitespace-nowrap`}
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
