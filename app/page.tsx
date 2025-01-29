import Hero from "@/components/main/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="h-full w-full">
        <div className="flex flex-col max-w-[1400px] mx-auto gap-20">
          <Hero/>
        </div>
      </main>
    </div>
  );
}
