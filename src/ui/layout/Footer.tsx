import * as Icons from "lucide-react";
import { socialLinks } from "@/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              <sup className="text-primary">&lt;&gt;</sup>NH
              <sub className="text-primary">&lt;/&gt;</sub>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Nataliia Hirniak. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, indx) => {
              const Icon = Icons[social.icon];
              return (
                <a
                  key={indx}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
