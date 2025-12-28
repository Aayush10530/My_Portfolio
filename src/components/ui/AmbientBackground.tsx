"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AmbientBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const mouseXPx = useMotionValue(0);
    const mouseYPx = useMotionValue(0);

    // Smooth spring physics
    const springConfig = { damping: 30, stiffness: 200, mass: 1 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);
    const xPx = useSpring(mouseXPx, springConfig);
    const yPx = useSpring(mouseYPx, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            mouseX.set((e.clientX / innerWidth) * 2 - 1);
            mouseY.set((e.clientY / innerHeight) * 2 - 1);
            mouseXPx.set(e.clientX);
            mouseYPx.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY, mouseXPx, mouseYPx]);

    // Parallax transforms
    const transformLayer1X = useTransform(x, [-1, 1], [-150, 150]);
    const transformLayer1Y = useTransform(y, [-1, 1], [-150, 150]);
    const transformLayer2X = useTransform(x, [-1, 1], [100, -100]);
    const transformLayer2Y = useTransform(y, [-1, 1], [100, -100]);
    const transformLayer3X = useTransform(x, [-1, 1], [-50, 50]);
    const transformLayer3Y = useTransform(y, [-1, 1], [50, -50]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-500 bg-background">

            {/* Spotlight Effect - User requested "cursor movement" */}
            <motion.div
                className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] opacity-100 pointer-events-none mix-blend-screen"
                style={{
                    x: xPx,
                    y: yPx,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
            />

            {/* Layer 1: Primary Blob */}
            <motion.div
                style={{ x: transformLayer1X, y: transformLayer1Y }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[100px] opacity-50 animate-pulse duration-[10000ms]"
            />

            {/* Layer 2: Secondary Blob */}
            <motion.div
                style={{ x: transformLayer2X, y: transformLayer2Y }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-800/20 rounded-full blur-[100px] opacity-50"
            />

            {/* Layer 3: Tertiary Blob */}
            <motion.div
                style={{ x: transformLayer3X, y: transformLayer3Y }}
                className="absolute top-[30%] right-[20%] w-[20vw] h-[20vw] bg-blue-600/10 rounded-full blur-[80px] opacity-40"
            />

            {/* Noise Overlay */}
            <div
                className="absolute inset-0 bg-[url('https://placeholder.pics/svg/300')] opacity-[0.03] bg-repeat bg-[length:60px_60px]"
                style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }}
            />
        </div>
    );
}
