import { NavbarClient } from "./NavbarClient";
import { NavbarServer } from "./NavbarServer";

export const Navbar = () => {
  return (
    <div className="relative">
      <NavbarServer />
      <NavbarClient />
    </div>
  );
};
