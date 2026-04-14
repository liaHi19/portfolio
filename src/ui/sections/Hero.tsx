import { ArrowRight, ChevronDown, Download } from "lucide-react";
import * as Icons from "lucide-react";

import Button from "../shared/Button";
import { AnimatedBorderButton } from "../shared/AnimatedBorderButton";
import { heroImgSrc, skills, socialLinks } from "@/constants";
import { buildSrcSet, downloadFile } from "@/libs/utils";

const moveLeft = () => {
  return Math.random() * 100;
};

const moveTop = () => {
  return Math.random() * 100;
};

const slowDrift = () => {
  return 15 + Math.random() * 20;
};

const delay = () => {
  return Math.random() * 5;
};

const heroSrcSet = buildSrcSet(heroImgSrc);

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero/hero-bg.webp"
          srcSet={heroSrcSet}
          sizes="(min-width: 1880px) 100.18vw, (min-width: 1040px) 1777px, 2662px"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#8b5cf6",
              left: `${moveLeft()}%`,
              top: `${moveTop()}%`,
              animation: `slow-drift ${slowDrift()}s ease-in-out infinite`,
              animationDelay: `${delay()}s`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="size-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Making <span className="text-primary glow-text">logic</span>
                <br />
                simple
                <br />
                <span className="font-serif italic font-normal text-white">
                  and clear.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I am Nataliia Hirniak, a software engineer specializing in
                React, Next.js, and TypeScript, focused on building scalable,
                performant, and maintainable web applications.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button as="a" href="#contact" size="lg">
                Contact Me <ArrowRight className="size-5" />
              </Button>
              <AnimatedBorderButton
                onClick={() =>
                  downloadFile("/cv/cv.pdf", "Nataliia_Hirniak_CV.pdf")
                }
              >
                <Download className="size-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              <ul className="flex items-center gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = Icons[social.icon];
                  return (
                    <li
                      key={idx}
                      className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        aria-label={social.label}
                      >
                        {<Icon className="size-5" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile/profile.webp"
                  alt="Nataliia Hirniak"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <span className="text-sm font-medium">clean code</span>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="  text-primary">Well-structured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <ul className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <li key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="size-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
