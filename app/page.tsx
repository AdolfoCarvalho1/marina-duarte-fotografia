import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Portfolio } from "@/components/Portfolio";
import { PortraitsBand } from "@/components/PortraitsBand";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonial } from "@/components/Testimonial";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Portfolio />
      <PortraitsBand />
      <About />
      <Services />
      <Testimonial />
      <Contact />
    </>
  );
}
