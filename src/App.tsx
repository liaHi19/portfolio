import Header from "@/ui/layout/Header";
import Hero from "@/ui/sections/Hero";
import About from "@/ui/sections/About";
import Projects from "@/ui/sections/Projects";
import Experience from "./ui/sections/Experience";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}

export default App;
