import { navLinks } from "@/constants";
import Button from "@/shared/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      {isMobileMenuOpen && (
        <ul className="md:hidden glass-strong animate-fade-in w-full order-1">
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

            <Button onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button>
          </li>
        </ul>
      )}
      <button
        className="md:hidden p-2 text-foreground cursor-pointer"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  );
}

export default MobileMenu;
