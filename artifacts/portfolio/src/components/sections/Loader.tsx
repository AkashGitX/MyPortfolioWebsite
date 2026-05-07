import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const done = onFinish;

    const tl = gsap.timeline({ onComplete: done });

    tl.fromTo(
      textRef.current?.children || [],
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: "power4.out" }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      "-=0.4"
    )
    .to(
      subtitleRef.current,
      { opacity: 0, y: -10, duration: 0.4, ease: "power2.in" },
      "+=0.35"
    )
    .to(containerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.0,
      ease: "power4.inOut",
    }, "-=0.1");

  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      data-testid="loader"
    >
      <div ref={textRef} className="flex overflow-hidden pb-4">
        {["A", "K", "A", "S", "H"].map((letter, i) => (
          <span key={i} className="text-6xl md:text-8xl font-black text-foreground">{letter}</span>
        ))}
      </div>
      <p ref={subtitleRef} className="text-primary font-mono text-sm tracking-[0.3em] mt-2 opacity-0">
        SYSTEMS ARCHITECT
      </p>
    </div>
  );
}
