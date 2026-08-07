"use client";

import { useEffect, useRef } from "react";

type Particle = {
    x: number;
    y: number;
    r: number;
    baseAlpha: number;
    twinkleSpeed: number;
    phase: number;
    vx: number;
    vy: number;
};

/**
 * Fine, faded animated particles ("starlight headliner" feel).
 * Light mode: soft blue specks on pure white.
 * Dark mode: glowing pale-blue stars on near-black.
 * Colours come from the --particle CSS variable so the theme toggle
 * updates the canvas too. Pauses when hidden, respects reduced motion.
 */
export default function StarfieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        let particles: Particle[] = [];
        let width = 0;
        let height = 0;
        let frame = 0;
        let running = true;
        let isDark = false;
        let particleRGB = "46, 144, 250";
        let linkDistance = 0;

        const readTheme = () => {
            isDark = document.documentElement.classList.contains("dark");
            const value = getComputedStyle(document.documentElement)
                .getPropertyValue("--particle")
                .trim();
            if (value) particleRGB = value;
        };

        const setup = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // Lighter load on phones; constellation links desktop-only.
            const isSmall = width < 640;
            linkDistance = isSmall ? 0 : 120;
            const density = isSmall ? 9500 : 7000;
            const count = Math.min(150, Math.floor((width * height) / density));

            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 1.1 + 0.3,
                baseAlpha: Math.random() * 0.45 + 0.2,
                twinkleSpeed: Math.random() * 0.014 + 0.004,
                phase: Math.random() * Math.PI * 2,
                vx: (Math.random() - 0.5) * 0.09,
                vy: (Math.random() - 0.5) * 0.09,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Faint constellation links for a premium, structured feel.
            if (linkDistance > 0) {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const a = particles[i];
                        const b = particles[j];
                        const dx = a.x - b.x;
                        const dy = a.y - b.y;
                        const dist = Math.hypot(dx, dy);
                        if (dist > linkDistance) continue;
                        const strength = (1 - dist / linkDistance) * (isDark ? 0.1 : 0.07);
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(${particleRGB}, ${strength})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            for (const p of particles) {
                const twinkle = reduceMotion
                    ? 1
                    : 0.55 + 0.45 * Math.sin(frame * p.twinkleSpeed + p.phase);
                const alpha = p.baseAlpha * twinkle * (isDark ? 1 : 0.75);

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particleRGB}, ${alpha})`;
                ctx.fill();

                // Soft halo on larger particles for depth.
                if (p.r > 0.95) {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${particleRGB}, ${alpha * (isDark ? 0.12 : 0.07)})`;
                    ctx.fill();
                }

                if (!reduceMotion) {
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < 0) p.x = width;
                    if (p.x > width) p.x = 0;
                    if (p.y < 0) p.y = height;
                    if (p.y > height) p.y = 0;
                }
            }

            frame += 1;
        };

        let rafId = 0;
        const loop = () => {
            if (running) draw();
            rafId = requestAnimationFrame(loop);
        };

        const onResize = () => setup();
        const onVisibility = () => {
            running = !document.hidden;
        };

        // Re-read colours when the theme class flips.
        const observer = new MutationObserver(readTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        readTheme();
        setup();
        loop();
        window.addEventListener("resize", onResize);
        document.addEventListener("visibilitychange", onVisibility);

        return () => {
            cancelAnimationFrame(rafId);
            observer.disconnect();
            window.removeEventListener("resize", onResize);
            document.removeEventListener("visibilitychange", onVisibility);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            {/* Soft floating pastel blobs for depth */}
            <div
                className="blob h-64 w-64 bg-violet-300 sm:h-80 sm:w-80"
                style={{ top: "-4rem", left: "-5rem", animationDelay: "0s" }}
            />
            <div
                className="blob h-56 w-56 bg-pink-300 sm:h-72 sm:w-72"
                style={{ top: "18%", right: "-6rem", animationDelay: "-6s" }}
            />
            <div
                className="blob h-52 w-52 bg-amber-200 sm:h-64 sm:w-64"
                style={{ bottom: "14%", right: "-3rem", animationDelay: "-12s" }}
            />
            <div
                className="blob h-56 w-56 bg-indigo-300 sm:h-72 sm:w-72"
                style={{ bottom: "-4rem", left: "-4rem", animationDelay: "-18s" }}
            />

            {/* Depth wash: barely-there on white, richer on dark */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.05),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(165,180,252,0.12),transparent_62%)]" />
            <canvas ref={canvasRef} className="h-full w-full" />
            {/* Vignette keeps text crisp without tinting the white */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_115%)] opacity-70" />
        </div>
    );
}
