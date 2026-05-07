import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiLeetcode } from "react-icons/si";
import { Mail, Github, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const email = "aec.csbs.akashsutradhar@gmail.com";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
        }
      );
      gsap.fromTo(contentRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden" data-testid="section-contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="font-mono text-primary text-sm tracking-widest">// CONTACT</span>
          <h2
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 text-foreground leading-tight"
            data-testid="contact-heading"
          >
            Let&apos;s Build Something{" "}
            <span className="text-primary">Real.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto">
            Open to backend engineering roles, AI integrations, and ambitious projects.
          </p>
        </div>

        <div ref={contentRef} className="flex flex-col gap-8">
          <div className="flex justify-center">
            <a
              href={`mailto:${email}`}
              className="group magnetic-btn flex items-center gap-3 glass-panel px-8 py-5 rounded-2xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 hover:shadow-[0_0_40px_rgba(244,177,131,0.08)]"
              data-testid="email-link"
            >
              <Mail size={18} className="text-primary shrink-0" />
              <span className="font-mono text-foreground text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                {email}
              </span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-5" data-testid="contact-socials">
            <a href="https://github.com/AkashGitX" target="_blank" rel="noopener noreferrer"
              className="magnetic-btn w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_rgba(244,177,131,0.15)] transition-all duration-300"
              data-testid="contact-github"
            ><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/akash-sutradhar-b6a305287/" target="_blank" rel="noopener noreferrer"
              className="magnetic-btn w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-muted-foreground hover:text-[#0a66c2] hover:border-[#0a66c2]/40 hover:shadow-[0_0_20px_rgba(10,102,194,0.15)] transition-all duration-300"
              data-testid="contact-linkedin"
            ><Linkedin size={20} /></a>
            <a href="https://x.com/Akash_instinct" target="_blank" rel="noopener noreferrer"
              className="magnetic-btn w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-300"
              data-testid="contact-twitter"
            ><XIcon size={20} /></a>
            <a href="https://leetcode.com/u/Akash_Sutradhar/" target="_blank" rel="noopener noreferrer"
              className="magnetic-btn w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-muted-foreground hover:text-[#ffa116] hover:border-[#ffa116]/40 hover:shadow-[0_0_20px_rgba(255,161,22,0.15)] transition-all duration-300"
              data-testid="contact-leetcode"
            ><SiLeetcode size={20} /></a>
            <a href={`mailto:${email}`}
              className="magnetic-btn w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_rgba(244,177,131,0.15)] transition-all duration-300"
              data-testid="contact-email"
            ><Mail size={20} /></a>
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-10" data-testid="contact-form">
            <h3 className="text-xl font-black mb-6 text-foreground">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const emailVal = (form.elements.namedItem("email") as HTMLInputElement).value;
                const msg = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                window.location.href = `mailto:${email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(msg)}%0A%0AFrom: ${emailVal}`;
              }}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  data-testid="input-name"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  data-testid="input-email"
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none text-sm"
                data-testid="input-message"
              />
              <button
                type="submit"
                className="magnetic-btn self-start px-8 py-3 bg-primary text-background font-bold rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                data-testid="btn-send-message"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
