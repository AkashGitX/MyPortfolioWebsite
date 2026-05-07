import { ArrowUp, Github, Linkedin } from "lucide-react";

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5" data-testid="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-primary font-black text-xl font-mono">AS</span>
          <span className="text-muted-foreground text-sm">
            Built with precision by{" "}
            <span className="text-foreground font-medium">Akash Sutradhar</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/AkashGitX" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            data-testid="footer-github"
          ><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/akash-sutradhar-b6a305287/" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#0a66c2] transition-colors duration-300"
            data-testid="footer-linkedin"
          ><Linkedin size={18} /></a>
          <a href="https://x.com/Akash_instinct" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            data-testid="footer-twitter"
          ><XIcon size={16} /></a>
        </div>

        <p className="text-muted-foreground text-sm font-mono">
          © 2026 · Software Engineer
        </p>

        <button
          onClick={scrollToTop}
          className="magnetic-btn w-10 h-10 glass-panel rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
          data-testid="btn-scroll-top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
