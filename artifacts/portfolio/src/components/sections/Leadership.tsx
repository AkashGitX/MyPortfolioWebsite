import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Users, Calendar, Code } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Leadership() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const responsibilities = [
    { icon: Users, text: "Led 100+ members across technical initiatives" },
    { icon: Calendar, text: "Organized 10+ technical events and workshops" },
    { icon: Code, text: "Maintained and revamped official Science Club website" },
    { icon: Users, text: "Technical coordination and team leadership" },
  ];

  return (
    <section ref={sectionRef} id="leadership" className="py-24 md:py-36 px-6 md:px-12" data-testid="section-leadership">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-primary text-sm tracking-widest">// LEADERSHIP</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 text-foreground">Responsibility</h2>
        </div>

        <div
          ref={cardRef}
          className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
          data-testid="leadership-card"
        >
          <div className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.4) 40px, rgba(255,255,255,0.4) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.4) 40px, rgba(255,255,255,0.4) 41px)`
            }}
          />

          <div className="absolute top-6 right-6">
            <span className="glass-panel px-3 py-1 rounded-full font-mono text-xs text-primary">Nov 2023 – Present</span>
          </div>

          <div className="relative">
            <span className="font-mono text-xs tracking-widest text-primary uppercase mb-3 block">Club Lead</span>
            <h3 className="text-3xl md:text-4xl font-black text-foreground mb-2">AEC Science Club</h3>
            <p className="text-muted-foreground mb-8">Asansol Engineering College</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {responsibilities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3" data-testid={`responsibility-${i}`}>
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <a
              href="https://science-club-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 border border-primary/40 text-foreground rounded-full hover:border-primary hover:bg-primary/10 transition-all text-sm font-medium"
              data-testid="btn-science-club"
            >
              <ExternalLink size={14} /> Visit Science Club Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
