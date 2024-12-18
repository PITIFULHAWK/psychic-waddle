"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { services } from "./NavbarServer";

export const NavbarClient = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="md:hidden">
      {/* Mobile Menu Toggle Button */}
      <div className="fixed top-0 right-0 m-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMobileMenu}
          className="text-white"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-[#003B7E] pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-3 py-2 text-base font-medium hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Our Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full bg-[#003B7E] border-orange-500">
                {services.map((service) => (
                  <DropdownMenuItem
                    key={service.name}
                    asChild
                    className="hover:bg-orange-500 hover:text-white"
                  >
                    <Link href={service.href} className="w-full px-3 py-2">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
