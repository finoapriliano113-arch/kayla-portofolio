import About from "@/components/About";
import Achievements from "@/components/Achievements";
import CareerGoals from "@/components/CareerGoals";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeaturedVideo from "@/components/FeaturedVideo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Passion from "@/components/Passion";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import {
  Cursor,
  Grain,
  Marquee,
  ScrollProgress,
} from "@/components/ui/Primitives";
import { MARQUEE_WORDS } from "@/data/site";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Grain />
      <Cursor />
      <Navbar />

      <main id="main">
        <Hero />

        <Marquee items={MARQUEE_WORDS} tone="flame" separator="✳" />

        <About />
        <Passion />
        <Skills />
        <Portfolio />

        <Marquee
          items={[
            "Prepress & Print",
            "Color Grading",
            "Motion Graphics",
            "Product Photography",
            "Visual Storytelling",
            "Creative Collaboration",
          ]}
          tone="outline"
          reverse
          separator="◆"
          className="border-y border-paper/10 bg-ink"
        />

        <Experience />
        <FeaturedVideo />
        <CareerGoals />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
