import { lazy, Suspense } from "react";
import Header from "@/ui/layout/Header";
import Hero from "@/ui/sections/Hero";

import Footer from "@/ui/layout/Footer";

import { Toaster } from "sonner";

const About = lazy(() => import("@/ui/sections/About"));
const Projects = lazy(() => import("@/ui/sections/Projects"));
const Experience = lazy(() => import("@/ui/sections/Experience"));
const Contact = lazy(() => import("@/ui/sections/Contact"));

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Toaster richColors position="bottom-right" />
      <Footer />
    </div>
  );
}

export default App;
