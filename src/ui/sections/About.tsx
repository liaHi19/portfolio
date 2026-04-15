import { highlights } from "@/constants";

function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Shaping the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one piece at a time
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Software Developer with solid experience building modern
                web applications using React, TypeScript, and Next.js. I enjoy
                working on complex UIs, state management, and form handling, and
                I'm comfortable on the backend too — Node.js, REST APIs, and SQL
                databases are all part of my toolkit.
              </p>

              <p>
                I'm always focused on building things that actually work well —
                fast, usable, and built to last. I like staying current with new
                tools and best practices, and I take pride in delivering
                solutions that make a real difference.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe good software should work well, look good, and be
                easy to build on — something users enjoy using and developers
                don't dread touching."
              </p>
            </div>
          </div>

          {/* Right Column*/}
          <ul className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <li
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
