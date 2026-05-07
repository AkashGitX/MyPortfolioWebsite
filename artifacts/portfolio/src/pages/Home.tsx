import { useEffect, useState, useCallback } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/sections/Loader";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Leadership from "@/components/sections/Leadership";
import Experience from "@/components/sections/Experience";
import Profiles from "@/components/sections/Profiles";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaderDone(true);
  }, []);

  useEffect(() => {
    if (!loaderDone) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    gsap.to("#scroll-progress", {
      scaleX: 1,
      transformOrigin: "left center",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, [loaderDone]);

  return (
    <main className="relative bg-background min-h-screen text-foreground">
      <CustomCursor />
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 w-full h-[2px] bg-primary origin-left scale-x-0 z-50 pointer-events-none"
      />

      {!loaderDone && <Loader onFinish={handleLoaderComplete} />}

      <Navbar />

      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Leadership />
        <Experience />
        <Profiles />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
