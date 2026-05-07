import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, FileText, Zap, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: Trophy,
    title: "LeetCode Weekly Contest 498",
    desc: "Global Rank 2879 among 30,000+ participants worldwide.",
    tag: "Competitive Programming",
    color: "#f4b183",
  },
  {
    icon: Trophy,
    title: "LeetCode Biweekly Contest 181",
    desc: "Global Rank 2865 among 18,000+ participants worldwide.",
    tag: "Competitive Programming",
    color: "#f4b183",
  },
  {
    icon: Zap,
    title: "Finalist — HacksPire Hackathon",
    desc: "Among 2000+ participants. Built HerbalVerse-AI — an AI-powered medicinal plant platform with chatbot insights and image recognition.",
    tag: "Hackathon · 2000+ participants",
    color: "#3b5bff",
  },
  {
    icon: Users,
    title: "Finalist — Hacktropica Hackathon",
    desc: "Among 5000+ participants. Developed EcycleHub — a location-based sustainability platform connecting donors with NGOs to drive circular economy.",
    tag: "Hackathon · 5000+ participants",
    color: "#22c55e",
  },
  {
    icon: FileText,
    title: "International Research Paper",
    desc: "ML-Based Forest Fire Detection presented at the 19th ICENS Conference in Dubai. Real-world AI/ML application with global research exposure.",
    tag: "19th ICENS · Dubai",
    color: "#a78bfa",
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1, duration: 2, ease: "power2.inOut",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", end: "bottom 80%", scrub: 1 }
        }
      );

      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card,
          { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 80%" }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="achievements" className="py-24 md:py-36 px-6 md:px-12" data-testid="section-achievements">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-primary text-sm tracking-widest">// ACHIEVEMENTS</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 text-foreground">Milestones</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 origin-top" ref={lineRef} style={{ transformOrigin: "top" }} />

          <div className="flex flex-col gap-10 pl-16" data-testid="achievements-list">
            {achievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  ref={(el) => { if (el) cardsRef.current[i] = el; }}
                  className="glass-panel rounded-2xl p-6 relative group hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,177,131,0.08)]"
                  data-testid={`achievement-card-${i}`}
                >
                  <div className="absolute -left-[46px] w-8 h-8 rounded-full flex items-center justify-center border border-white/10 bg-background"
                    style={{ boxShadow: `0 0 16px ${item.color}40` }}
                  >
                    <Icon size={14} style={{ color: item.color }} />
                  </div>

                  <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: item.color }}>
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-black text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
