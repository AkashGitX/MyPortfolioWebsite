import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Skills", "Projects", "Achievements", "Contact"];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 2.8, ease: "power3.out" }
    );

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-black/30 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-primary font-black text-2xl tracking-wider font-mono magnetic-btn"
          data-testid="nav-logo"
        >
          AS
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-muted-foreground hover:text-foreground text-sm font-medium tracking-wide transition-colors duration-300 relative group magnetic-btn"
                data-testid={`nav-link-${link.toLowerCase()}`}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground magnetic-btn"
          data-testid="nav-hamburger"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-background/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-foreground"
            data-testid="nav-close"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-4xl font-black text-foreground hover:text-primary transition-colors"
              data-testid={`mobile-nav-${link.toLowerCase()}`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
