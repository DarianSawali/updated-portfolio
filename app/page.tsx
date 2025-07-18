import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <div>
      <main className="h-full w-full">
        <div className="flex flex-col max-w-[1400px] mx-auto">
          <Hero/>
          <Skills/>
          <Projects />
          <Footer />
        </div>
      </main>
    </div>
  );
}
