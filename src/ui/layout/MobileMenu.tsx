import { navLinks } from "@/constants";

import Button from "@/ui/shared/Button";
import { Menu, X } from "lucide-react";

function MobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
}) {
  return (
    <>
      {isMobileMenuOpen && (
        <ul className="md:hidden border-none animate-fade-in w-full order-1">
          <li className="container mx-auto p-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button
              as="a"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Me
            </Button>
          </li>
        </ul>
      )}
      <button
        className="md:hidden p-2 text-foreground cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Mobile Menu Button"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  );
}

export default MobileMenu;
