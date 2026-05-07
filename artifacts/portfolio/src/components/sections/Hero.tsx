import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SiLeetcode } from "react-icons/si";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import heroImg from "@assets/image_1778164113019.png";

const roles = ["Spring Boot", "Microservices", "AI Integration", "System Design"];

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.9 });

    tl.fromTo(labelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .fromTo(
        [line1Ref.current, line2Ref.current],
        { y: 80, opacity: 0, skewY: 3 },
        { y: 0, opacity: 1, skewY: 0, duration: 0.9, stagger: 0.12, ease: "power4.out" },
        "-=0.3"
      )
      .fromTo(taglineRef.current, { opacity: 0, filter: "blur(8px)", y: 20 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
      .fromTo(pillsRef.current?.children || [], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }, "-=0.3")
      .fromTo(btnsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2")
      .fromTo(socialsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2")
      .fromTo(imgRef.current, { opacity: 0, scale: 0.92, x: 40 }, { opacity: 1, scale: 1, x: 0, duration: 1.1, ease: "power3.out" }, "-=1.4");

    gsap.to(blob1Ref.current, { x: 30, y: -20, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(blob2Ref.current, { x: -20, y: 30, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / centerX * 20;
      const moveY = (clientY - centerY) / centerY * 20;
      gsap.to(blob1Ref.current, { x: moveX, y: moveY, duration: 1.5, ease: "power1.out" });
      gsap.to(blob2Ref.current, { x: -moveX * 0.5, y: -moveY * 0.5, duration: 2, ease: "power1.out" });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-x-hidden pt-20"
      data-testid="section-hero"
    >
      <div ref={blob1Ref} className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div ref={blob2Ref} className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 flex flex-col gap-6 min-w-0">

          <div ref={labelRef} className="flex items-center gap-3 opacity-0" data-testid="hero-label">
            <span className="w-8 h-px bg-primary shrink-0" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Software Engineer</span>
          </div>

          <div className="flex flex-col gap-0 min-w-0" data-testid="hero-name">
            <div
              ref={line1Ref}
              className="font-black text-foreground tracking-tight leading-none"
              style={{ fontSize: "clamp(3rem, 9.5vw, 7.5rem)" }}
            >
              AKASH
            </div>
            <div
              ref={line2Ref}
              className="font-black text-foreground tracking-tight leading-none"
              style={{ fontSize: "clamp(3rem, 9.5vw, 7.5rem)" }}
            >
              SUTRADHAR
            </div>
          </div>

          <p
            ref={taglineRef}
            className="text-muted-foreground text-base md:text-xl leading-relaxed max-w-xl opacity-0"
            data-testid="hero-tagline"
          >
            Building production-grade scalable backend systems with AI-powered integrations and real-world impact.
          </p>

          <div ref={pillsRef} className="flex flex-wrap gap-3" data-testid="hero-pills">
            {roles.map((role) => (
              <span
                key={role}
                className="glass-panel px-4 py-1.5 rounded-full text-sm text-foreground font-medium"
              >
                {role}
              </span>
            ))}
          </div>

          <div ref={btnsRef} className="flex flex-wrap gap-4 opacity-0" data-testid="hero-buttons">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="magnetic-btn px-8 py-3 bg-primary text-background font-bold rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              data-testid="btn-view-projects"
            >
              View Projects
            </button>
            <a
              href="https://github.com/AkashGitX"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn px-8 py-3 border border-primary/40 text-foreground font-bold rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300"
              data-testid="btn-github"
            >
              GitHub
            </a>
          </div>

          <div ref={socialsRef} className="flex items-center gap-5 opacity-0" data-testid="hero-socials">
            <a href="https://github.com/AkashGitX" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="social-github"
            ><Github size={21} /></a>
            <a href="https://www.linkedin.com/in/akash-sutradhar-b6a305287/" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0a66c2] transition-colors duration-300"
              data-testid="social-linkedin"
            ><Linkedin size={21} /></a>
            <a href="https://x.com/Akash_instinct" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              data-testid="social-twitter"
            ><XIcon size={19} /></a>
            <a href="https://leetcode.com/u/Akash_Sutradhar/" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#ffa116] transition-colors duration-300"
              data-testid="social-leetcode"
            ><SiLeetcode size={21} /></a>
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-center lg:justify-end" ref={imgRef} data-testid="hero-image">
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl scale-110 group-hover:scale-125 group-hover:bg-primary/30 transition-all duration-700" />
            <div className="relative w-64 h-80 md:w-80 md:h-[420px] rounded-3xl overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-all duration-500">
              <img
                src={heroImg}
                alt="Akash Sutradhar"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                data-testid="img-hero-photo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-secondary/20 rounded-full animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
            <div className="absolute top-8 -left-8 glass-panel px-3 py-1.5 rounded-lg font-mono text-xs text-primary whitespace-nowrap">
              @RestController
            </div>
            <div className="absolute bottom-12 -right-10 glass-panel px-3 py-1.5 rounded-lg font-mono text-xs text-secondary whitespace-nowrap">
              Spring Boot 3
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" data-testid="scroll-indicator">
        <span className="text-muted-foreground text-xs tracking-widest uppercase font-mono">Scroll</span>
        <ArrowDown size={16} className="text-primary" />
      </div>
    </section>
  );
}
