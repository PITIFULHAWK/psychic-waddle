"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-teal-700 to-green-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-bold text-2xl text-yellow-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Phynovate
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/about"
                className="hover:bg-teal-600 px-3 py-2 rounded-md text-lg font-semibold"
              >
                About us
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="hover:bg-teal-600 px-3 py-2 rounded-md text-lg font-semibold focus:outline-none"
                >
                  Our Services
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-[#004d40] rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <Link
                        href="/services#book-keeping"
                        className="block px-4 py-2 text-lg hover:bg-[#00695c]"
                      >
                        Book-Keeping Services
                      </Link>
                      <Link
                        href="/services#accounts-payable"
                        className="block px-4 py-2 text-lg hover:bg-[#00695c]"
                      >
                        Accounts Payable and Receivable Services
                      </Link>
                      <Link
                        href="/services#payroll"
                        className="block px-4 py-2 text-lg hover:bg-[#00695c]"
                      >
                        Payroll Services
                      </Link>
                      <Link
                        href="/services#management-accounting"
                        className="block px-4 py-2 text-lg hover:bg-[#00695c]"
                      >
                        Management Accounting Services
                      </Link>
                      <Link
                        href="/services#compliances-risk"
                        className="block px-4 py-2 text-lg hover:bg-[#00695c]"
                      >
                        Compliances and Risk Management
                      </Link>
                      <Link
                        href="/services#strategic-financial"
                        className="block px-4 py-2 text-lg hover:bg-[#00695c]"
                      >
                        Strategic Financial and Cash Flow Management
                      </Link>
                      <Link
                        href="/services#audit-assurance"
                        className="block px-4 py-2 text-lg hover:bg-[#00695c]"
                      >
                        Audit and Assurance Support
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/blogs"
                className="hover:bg-teal-600 px-3 py-2 rounded-md text-lg font-semibold"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="hover:bg-teal-600 px-3 py-2 rounded-md text-lg font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-teal-600 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
