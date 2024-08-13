import Image from "next/image";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Founder from "@/components/founder/founder";
import Happy from "@/components/happy/happy";

export default async function Home() {
  return (
    <div className="font-sans overflow-hidden">
      <Hero/>
      <About/>
      <Happy/>
      <Founder/>
    </div>
  );
}
