import Image from "next/image";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Founder from "@/components/founder/founder";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero/>
      <About/>
      <Founder/>
    </div>
  );
}
