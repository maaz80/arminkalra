import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Portfolio from "@/components/Home/Portfolio";
import Resume from "@/components/Home/Resume";
import Clients from "@/components/Home/Clients";
import Footer from "@/components/Home/Footer";

export default function Pages() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white overflow-x-hidden">
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Clients />
      <Footer />
    </main>
  );
}
