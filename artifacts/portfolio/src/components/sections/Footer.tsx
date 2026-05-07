import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5" data-testid="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-primary font-black text-xl font-mono">AS</span>
          <span className="text-muted-foreground text-sm">
            Built with precision by{" "}
            <span className="text-foreground font-medium">Akash Sutradhar</span>
          </span>
        </div>

        <p className="text-muted-foreground text-sm font-mono">
          © 2025 · Java Backend Developer
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
