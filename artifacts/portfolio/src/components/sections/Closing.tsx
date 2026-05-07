import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import closingImg from "@assets/WhatsApp_Image_2026-05-07_at_8.50.30_PM_1778167481916.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function Closing() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const particle1 = useRef<HTMLDivElement>(null);
  const particle2 = useRef<HTMLDivElement>(null);
  const particle3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic parallax — gentle so face stays in frame
      gsap.to(imgRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade in quote
      gsap.fromTo(
        quoteRef.current?.children || [],
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );

      // Overlay fade
      gsap.fromTo(overlayRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 1.5, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // Floating particles
      [particle1, particle2, particle3].forEach((ref, i) => {
        gsap.to(ref.current, {
          y: -30 - i * 10,
          x: (i % 2 === 0 ? 1 : -1) * (10 + i * 5),
          duration: 4 + i * 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.8,
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "85vh", minHeight: "500px" }}
      data-testid="section-closing"
    >
      {/* Parallax image */}
      <div
        ref={imgRef}
        className="absolute inset-0 scale-[1.2]"
        style={{ top: "-10%", bottom: "-10%" }}
      >
        <img
          src={closingImg}
          alt="Akash Sutradhar"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 20%" }}
          data-testid="img-closing"
        />
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />

      {/* Glow overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 opacity-0"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 blur-[100px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      {/* Floating particles */}
      <div ref={particle1} className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-primary/60 blur-[1px]" />
      <div ref={particle2} className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-primary/40 blur-[1px]" />
      <div ref={particle3} className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-secondary/40 blur-[2px]" />

      {/* Quote overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 md:pb-28 px-6 text-center">
        <div ref={quoteRef} className="flex flex-col items-center gap-4 max-w-3xl">
          <span className="font-mono text-primary text-sm tracking-[0.3em] uppercase">
            // THE STORY CONTINUES
          </span>
          <h2
            className="font-black text-foreground leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            Code is craft.{" "}
            <span className="text-primary">Build with intent.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Every system I build is a step toward something greater — scalable, meaningful, and lasting.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="w-12 h-px bg-primary/40" />
            <span className="font-mono text-muted-foreground text-xs tracking-widest">AKASH SUTRADHAR</span>
            <span className="w-12 h-px bg-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
