"use client";

import { useState, useEffect } from "react";
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

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent background scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll when menu is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="md:hidden">
      {/* Mobile Menu Toggle Button */}
      <div className="fixed top-0 right-0 m-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMobileMenu}
          className="text-white hover:bg-orange-500/20"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-[#003B7E] z-40 overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="relative"> {/* Wrap dropdown in a relative div */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start px-3 py-2 text-base font-medium hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Our Services <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-[calc(100vw-2rem)] mx-4 bg-[#003B7E] border-orange-500 max-h-[60vh] overflow-y-auto"
                  sideOffset={5}
                >
                  {services.map((service) => (
                    <DropdownMenuItem
                      key={service.name}
                      asChild
                      className="hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
                    >
                      <Link 
                        href={service.href} 
                        className="w-full px-3 py-2 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link
              href="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
