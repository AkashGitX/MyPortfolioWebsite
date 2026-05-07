import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiLeetcode } from "react-icons/si";
import { Github, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const profiles = [
  {
    id: "github",
    icon: Github,
    name: "GitHub",
    handle: "@AkashGitX",
    desc: "Production-grade projects, open-source contributions, and backend systems.",
    stat: "Public Repos",
    url: "https://github.com/AkashGitX",
    color: "#f4b183",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    name: "LinkedIn",
    handle: "Akash Sutradhar",
    desc: "Professional network, achievements, and career updates.",
    stat: "500+ Connections",
    url: "https://www.linkedin.com/in/akash-sutradhar-b6a305287/",
    color: "#0a66c2",
  },
  {
    id: "leetcode",
    icon: SiLeetcode,
    name: "LeetCode",
    handle: "@Akash_Sutradhar",
    desc: "Global Rank 2879 (Weekly) · Global Rank 2865 (Biweekly). Competitive problem solver.",
    stat: "Top Global Ranks",
    url: "https://leetcode.com/u/Akash_Sutradhar/",
    color: "#ffa116",
  },
];

export default function Profiles() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.8, delay: i * 0.12, ease: "back.out(1.4)",
            scrollTrigger: { trigger: sectionRef.current, start: "top 78%" }
          }
        );

        const handleEnter = () => gsap.to(card, { y: -6, scale: 1.02, duration: 0.3, ease: "power2.out" });
        const handleLeave = () => gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="profiles" className="py-24 md:py-36 px-6 md:px-12" data-testid="section-profiles">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-primary text-sm tracking-widest">// FIND ME</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 text-foreground">Coding Profiles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="profiles-grid">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => { if (el) cardsRef.current[i] = el as HTMLElement; }}
                className="glass-panel rounded-3xl p-8 flex flex-col gap-5 cursor-pointer transition-all duration-300 hover:border-white/20 no-underline group"
                style={{ boxShadow: `0 0 0 0 ${profile.color}20` }}
                data-testid={`profile-card-${profile.id}`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${profile.color}15`, boxShadow: `0 0 20px ${profile.color}20` }}
                >
                  <Icon size={26} style={{ color: profile.color }} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-foreground">{profile.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground mt-1">{profile.handle}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{profile.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-wide" style={{ color: profile.color }}>{profile.stat}</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
