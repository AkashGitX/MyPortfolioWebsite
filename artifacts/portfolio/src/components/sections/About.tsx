import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@assets/WhatsApp_Image_2026-05-07_at_7.42.12_PM_1778164154984.jpeg";

gsap.registerPlugin(ScrollTrigger);

const specializations = [
  "Spring Boot", "Microservices", "JWT Security", "REST APIs",
  "AI Integration", "PostgreSQL", "Distributed Systems", "System Design",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );

      gsap.fromTo(contentRef.current?.children || [],
        { y: 40, opacity: 0, filter: "blur(8px)" },
        {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-36 px-6 md:px-12" data-testid="section-about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={imgRef} className="relative" data-testid="about-image">
          <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-3xl scale-105" />
          <div className="relative rounded-3xl overflow-hidden border border-primary/15 aspect-[3/4] max-h-[560px]">
            <img
              src={aboutImg}
              alt="Akash Sutradhar at Google Developer Group"
              className="w-full h-full object-cover"
              data-testid="img-about-photo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 glass-panel px-4 py-2 rounded-xl">
            <span className="font-mono text-xs text-primary">Google Developer Group</span>
          </div>
          <div className="absolute top-8 -right-8 font-mono text-primary/30 text-5xl font-black select-none">&gt;</div>
          <div className="absolute bottom-16 -left-6 font-mono text-primary/20 text-3xl font-black select-none">&gt;_</div>
        </div>

        <div ref={contentRef} className="flex flex-col gap-6" data-testid="about-content">
          <div className="flex items-center gap-3">
            <span className="font-mono text-primary text-sm tracking-widest">// ABOUT</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
            I build systems<br />
            <span className="text-primary">that scale.</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            I am Akash Sutradhar, a backend-focused software engineer and B.Tech CSBS student passionate about building scalable backend systems, AI-powered applications, and production-grade architectures.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            My focus is on real-world engineering — production-grade applications, secure backend architecture, and AI integrations that create measurable impact.
          </p>

          <div className="flex flex-wrap gap-2 pt-2" data-testid="about-skills">
            {specializations.map((spec) => (
              <span
                key={spec}
                className="glass-panel px-3 py-1 rounded-full text-sm text-foreground font-medium hover:border-primary/40 transition-colors cursor-default"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
