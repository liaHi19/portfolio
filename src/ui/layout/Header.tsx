import Button from "@/ui/shared/Button";

import MobileMenu from "./MobileMenu";
import { navLinks } from "@/constants";
import { useEffect, useState } from "react";
import { cn } from "@/libs/utils";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 transition-colors duration-500 z-99",
        isScrolled || isMobileMenuOpen
          ? "glass-strong py-3 border-none"
          : "bg-transparent py-5",
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between flex-wrap">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary flex gap-1 items-center"
        >
          <sup className="text-primary">&lt;&gt;</sup>NH
          <sub className="text-primary">&lt;/&gt;</sub>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          <li className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </li>
        </ul>

        <div className="hidden md:block">
          <Button as="a" href="#contact" size="sm" className="capitalize block">
            contact me
          </Button>
        </div>
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </nav>
    </header>
  );
}

export default Header;
