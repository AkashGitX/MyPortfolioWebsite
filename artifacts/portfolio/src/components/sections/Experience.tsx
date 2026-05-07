import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, delay: i * 0.15, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 md:py-36 px-6 md:px-12" data-testid="section-experience">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-primary text-sm tracking-widest">// JOURNEY</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 text-foreground">Experience &amp; Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={(el) => { if (el) cardsRef.current[0] = el; }}
            className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
            data-testid="experience-card"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Briefcase size={20} className="text-primary" />
            </div>
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Experience</span>
            <h3 className="text-2xl font-black text-foreground mb-1">Euron EdTech</h3>
            <p className="text-primary font-medium text-sm mb-1">Intern</p>
            <p className="text-muted-foreground font-mono text-xs mb-6">Nov 2024 – Jan 2025</p>
            <ul className="flex flex-col gap-3">
              {[
                "Technical collaboration across teams",
                "Campus upskilling initiatives",
                "Team engagement programs",
                "Technical event contributions",
              ].map((item, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2" data-testid={`exp-item-${i}`}>
                  <span className="text-primary shrink-0 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={(el) => { if (el) cardsRef.current[1] = el; }}
            className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
            data-testid="education-card"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <GraduationCap size={20} className="text-secondary" />
            </div>
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2 block">Education</span>
            <h3 className="text-2xl font-black text-foreground mb-1">Asansol Engineering College</h3>
            <p className="text-primary font-medium text-sm mb-1">B.Tech — Computer Science &amp; Business Systems</p>
            <p className="text-muted-foreground font-mono text-xs mb-6">2023 – 2027</p>
            <div className="flex items-center gap-4">
              <div className="glass-panel px-5 py-3 rounded-2xl text-center">
                <div className="text-3xl font-black text-foreground">8.1</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">CGPA</div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground">CSBS Program</span>
                <span className="text-sm text-muted-foreground">Current Student</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
