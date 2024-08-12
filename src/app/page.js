import Image from "next/image";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero/>
      <About/>
    </div>
  );
}
