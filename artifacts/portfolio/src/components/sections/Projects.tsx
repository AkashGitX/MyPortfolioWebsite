import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "healthapp",
    title: "HealthApp",
    subtitle: "AI Powered Medical Hub",
    tagline: "Production-grade full-stack healthcare platform",
    description: "Integrating AI-powered report analysis, role-based dashboards, Stripe payments, and real-time video consultation support.",
    stack: ["Java 17", "Spring Boot 3", "Spring Security 6", "JWT", "PostgreSQL", "Spring AI", "OpenAI", "Stripe", "ZegoCloud"],
    features: ["AI medical report analysis", "Low-cost medicine finder", "Eye checkup system", "Mental health assessment", "Video consultation", "Stripe payments", "JWT authentication", "Role-based dashboards"],
    accent: "#22c55e",
    icon: "⚕",
  },
  {
    id: "budgetbot",
    title: "WhatsAppExpense-AI",
    subtitle: "BudgetBot AI",
    tagline: "AI-powered WhatsApp expense management",
    description: "Users simply message expenses on WhatsApp and the system automatically tracks, categorizes, analyzes, and visualizes spending.",
    stack: ["Java 17", "Spring Boot 3", "Spring AI", "OpenAI", "Twilio WhatsApp API", "PostgreSQL", "Chart.js", "Railway"],
    features: ["AI natural language parsing", "Monthly analytics", "Budget remaining tracker", "Expense trends", "Category-wise spending", "AI-generated insights", "JWT authentication", "WhatsApp integration"],
    live: "https://focused-encouragement-production-b0cd.up.railway.app/",
    github: "https://github.com/AkashGitX/WhatsAppExpense-AI",
    accent: "#25d366",
    icon: "💬",
    flow: "WhatsApp → AI Processing → Expense Tracking → Analytics",
  },
  {
    id: "hotelbooking",
    title: "Hotel Booking Platform",
    subtitle: "Production-Style Ecosystem",
    tagline: "Scalable startup-grade booking platform",
    description: "Simulating a real startup ecosystem with secure authentication, Stripe payments, reviews, and hotel owner management workflows.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "JPA/Hibernate", "TailwindCSS", "Stripe", "Railway"],
    features: ["40+ secure APIs", "JWT authentication", "Hotel owner workflows", "Seamless booking", "Stripe payments", "Review system", "99% uptime", "500+ daily requests"],
    live: "https://lnkd.in/g6ZiCZRC",
    github: "https://lnkd.in/gjJv8wZT",
    accent: "#f4b183",
    icon: "🏨",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const cards = track.querySelectorAll(".project-card");
      const totalWidth = track.scrollWidth - container.offsetWidth;

      gsap.to(track, {
        x: () => -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth + window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0.4, scale: 0.95 },
          {
            opacity: 1, scale: 1, duration: 0.5,
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.getById("horizontal-scroll"),
              start: "left center",
              end: "right center",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" data-testid="section-projects">
      <div ref={containerRef} className="relative overflow-hidden" style={{ height: "100vh" }}>
        <div className="absolute top-12 left-6 md:left-12 z-10">
          <span className="font-mono text-primary text-sm tracking-widest">// PROJECTS</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 text-foreground">Featured Work</h2>
        </div>

        <div
          ref={trackRef}
          className="flex gap-8 items-center h-full pt-32 pl-6 md:pl-12 pr-6"
          style={{ width: "max-content" }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-panel rounded-3xl overflow-hidden flex flex-col md:flex-row"
              style={{ width: "min(85vw, 900px)", height: "65vh", minHeight: "460px" }}
              data-testid={`project-card-${project.id}`}
            >
              <div className="flex flex-col justify-between p-8 md:p-10 flex-1">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.accent }}>
                      Featured Project
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground mb-1">{project.title}</h3>
                  <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                  {project.flow && (
                    <p className="font-mono text-xs text-muted-foreground mb-3 glass-panel inline-block px-3 py-1 rounded-lg">{project.flow}</p>
                  )}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 6).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono border border-white/10 text-muted-foreground bg-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 6 && (
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono border border-white/10 text-muted-foreground bg-white/5">
                        +{project.stack.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3" data-testid={`project-links-${project.id}`}>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="magnetic-btn flex items-center gap-2 px-5 py-2 bg-primary text-background font-bold text-sm rounded-full hover:bg-primary/90 transition-all"
                      data-testid={`btn-live-${project.id}`}
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="magnetic-btn flex items-center gap-2 px-5 py-2 border border-primary/40 text-foreground text-sm rounded-full hover:border-primary hover:bg-primary/10 transition-all"
                      data-testid={`btn-code-${project.id}`}
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-center items-center p-8 min-w-[220px] relative"
                style={{ background: `radial-gradient(circle at center, ${project.accent}15 0%, transparent 70%)` }}
              >
                <div className="text-[80px] opacity-30 select-none">{project.icon}</div>
                <ul className="flex flex-col gap-2 mt-4 w-full">
                  {project.features.slice(0, 5).map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5 shrink-0">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-center items-center p-10 glass-panel rounded-3xl"
            style={{ width: "min(60vw, 480px)", height: "65vh", minHeight: "400px" }}
            data-testid="project-more"
          >
            <span className="font-mono text-primary text-sm tracking-widest mb-4">// MORE WORK</span>
            <h3 className="text-2xl md:text-3xl font-black text-center mb-4">Explore more on GitHub</h3>
            <p className="text-muted-foreground text-center text-sm mb-6 leading-relaxed">
              SkyBlogging · EcycleHub · E-Commerce Platform · Open-source contributions
            </p>
            <a href="https://github.com/AkashGitX" target="_blank" rel="noopener noreferrer"
              className="magnetic-btn flex items-center gap-2 px-8 py-3 bg-primary text-background font-bold rounded-full hover:bg-primary/90 transition-all"
              data-testid="btn-github-more"
            >
              <Github size={16} /> github.com/AkashGitX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
