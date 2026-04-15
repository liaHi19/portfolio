import { useState } from "react";

import { ArrowUpRight, Github } from "lucide-react";

import { projects } from "@/constants";

import { AnimatedBorderButton } from "../shared/AnimatedBorderButton";

const LIMIT = 4;

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, LIMIT);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 size-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 size-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects
            <span className="font-serif italic font-normal text-white">
              {" "}
              that matter.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from web apps to tools that solve
            real problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.labelLink}
                  className="absolute inset-0 z-10"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex gap-3 justify-end">
                  <div className="relative group/link">
                    <a
                      href={project.link}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full glass text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.labelLink}
                    >
                      <ArrowUpRight className="size-4" />
                      Live
                    </a>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-xs rounded-lg bg-card border border-border/50 text-muted-foreground opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-md">
                      View live site
                    </div>
                  </div>
                  <div className="relative group/link">
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full glass text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.labelGithub}
                    >
                      <Github className="size-4" />
                      Code
                    </a>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-xs rounded-lg bg-card border border-border/50 text-muted-foreground opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-md">
                      View source code
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <h3 className="flex items-start justify-between text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                    <ArrowUpRight
                      className="size-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                    />
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.labelLink}
                    className="absolute inset-0 z-10"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {projects.length > LIMIT && (
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton onClick={() => setShowAll(!showAll)}>
              {!showAll ? "View All Projects" : "Hide All Projects"}
              <ArrowUpRight className="size-5" />
            </AnimatedBorderButton>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
