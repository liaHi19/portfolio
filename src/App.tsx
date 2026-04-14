import Header from "@/ui/layout/Header";
import Hero from "@/ui/sections/Hero";
import About from "@/ui/sections/About";
import Projects from "@/ui/sections/Projects";
import Experience from "@/ui/sections/Experience";
import { Footer } from "@/ui/layout/Footer";
import { Contact } from "@/ui/sections/Contact";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Toaster richColors position="bottom-right" />
      <Footer />
    </div>
  );
}

export default App;
