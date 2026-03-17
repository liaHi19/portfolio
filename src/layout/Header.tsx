import Button from "@/shared/Button";

import MobileMenu from "./MobileMenu";
import { navLinks } from "@/constants";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 transition-all duration-500 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between flex-wrap ">
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
          <Button size="sm" className="capitalize">
            contact me
          </Button>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}

export default Header;
