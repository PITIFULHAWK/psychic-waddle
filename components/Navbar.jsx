"use client";

import { NavbarClient } from "./NavbarClient";
import { NavbarServer } from "./NavbarServer";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className={`md:fixed relative top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <NavbarServer isScrolled={isScrolled} />
        <NavbarClient isScrolled={isScrolled} />
      </div>
    </div>
  );
};
