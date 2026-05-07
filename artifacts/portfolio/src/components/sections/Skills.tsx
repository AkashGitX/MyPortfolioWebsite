import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  { label: "Languages", skills: ["Java", "Python", "JavaScript", "SQL"] },
  { label: "Backend", skills: ["Spring Boot", "Spring Security", "Spring AI", "Hibernate", "JPA", "REST APIs", "Microservices"] },
  { label: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL"] },
  { label: "AI / ML", skills: ["OpenAI", "Spring AI", "Machine Learning", "Pandas", "NumPy"] },
  { label: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Thymeleaf"] },
  { label: "DevOps", skills: ["Railway", "Vercel", "Git", "GitHub", "AWS", "Maven"] },
  { label: "CS Fundamentals", skills: ["DSA", "OOP", "DBMS", "Computer Networks", "System Design"] },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const pillRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pillRefs.current,
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.04, ease: "back.out(1.7)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  let pillIndex = 0;

  return (
    <section ref={sectionRef} id="skills" className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden" data-testid="section-skills">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[clamp(80px,18vw,200px)] font-black text-white/[0.025] tracking-tight leading-none whitespace-nowrap">
          TECH STACK
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16">
          <span className="font-mono text-primary text-sm tracking-widest">// SKILLS</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 text-foreground">Tech Arsenal</h2>
        </div>

        <div className="flex flex-col gap-10" data-testid="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-primary/40" />
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const currentIndex = pillIndex++;
                  return (
                    <span
                      key={skill}
                      ref={(el) => { if (el) pillRefs.current[currentIndex] = el; }}
                      className="glass-panel px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(244,177,131,0.15)] transition-all duration-300 cursor-default"
                      data-testid={`skill-pill-${skill.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
