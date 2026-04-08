import Header from "@/ui/layout/Header";
import Hero from "@/ui/sections/Hero";
import About from "@/ui/sections/About";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
