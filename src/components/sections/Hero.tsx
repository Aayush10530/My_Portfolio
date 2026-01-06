"use client";

import { useState } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, FolderOpen, MapPin, Wifi, Database, Code, Briefcase, Mail, PieChart, Brain, Sparkles, Lightbulb, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    },
};

export default function Hero() {
    const { scrollY } = useScroll();
    const parallaxY = useTransform(scrollY, [0, 500], [0, -50]);
    const [isSkillsHovered, setIsSkillsHovered] = useState(false);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
            >

                {/* 1. Intro Card (Span 2, Row 2) */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 row-span-2">
                    <Card variant="glass" className="h-full p-8 md:p-10 flex flex-col justify-between group relative overflow-hidden" hoverEffect>
                        <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none">
                            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
                        </div>

                        <div className="relative z-10 flex flex-col gap-6 h-full justify-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-xs font-medium text-primary mb-6 backdrop-blur-md shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    AI Generalist
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-4 text-foreground">
                                    Architecting <br />
                                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-500 dark:from-white dark:to-white/50">Scalable Systems</span>
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-400 font-normal max-w-md leading-relaxed">
                                    Full Stack | DevOps | Cloud <br />
                                    Crafting robust digital infrastructure with precision and modern aesthetics.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-2">
                                <a href="/Developer%20Mishra.pdf" target="_blank" rel="noopener noreferrer">
                                    <Button variant="secondary" size="lg" className="shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                        View Resume <ArrowUpRight className="size-4 ml-1" />
                                    </Button>
                                </a>
                                <a href="/projects">
                                    <Button variant="glass" size="lg">
                                        <FolderOpen className="size-4 mr-2" /> My Work
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 row-span-1">
                    <Card variant="glass" className="h-full relative group overflow-hidden min-h-[200px]" hoverEffect>
                        <motion.div
                            className="absolute left-0 top-0 w-full h-[140%] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 mix-blend-luminosity"
                            style={{
                                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBG745TZHe7lZLfwf9qm1b1282SD4udlT7wiHMZ04BgZ0hjTODhQwMQL1ZGMw3JfxKrHC0zqgHsu5m6dIsqzGaqbTIBsvo77rCBblB3xJI1eAJ5W88Vf6r4klXg4XAXR8rZ0fU9Ydr1j1WomARX9NAWjIirH6LidPsClH7MnlPUGWd_zTjHOj-RhPeAgtM-5g1vYowUk7oVe1t-xzMQ05P8DFD3cCJ5t9wgxFXsQq-lwFKYofpcWbUz3oQ9heAXkqz4D0vUrTbnQrY')`,
                                y: parallaxY
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        <div className="absolute bottom-6 left-6 right-6 z-20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1">Based In</p>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="text-primary size-5 drop-shadow-[0_0_8px_rgba(43,124,238,0.8)]" />
                                        <span className="text-xl font-bold text-foreground">India</span>
                                    </div>
                                </div>
                                <div className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 backdrop-blur-md shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                                    <Wifi className="size-3" /> Remote
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* 3. Stats Card */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 row-span-1">
                    <Card variant="glass" className="h-full p-6 flex flex-col group hover:border-primary/30 transition-colors" hoverEffect>
                        <div className="flex items-start justify-between mb-auto">
                            <div>
                                <p className="text-3xl font-bold text-foreground drop-shadow-sm">20+ Projects</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Transformed my ideas into reality</p>
                            </div>
                            <div className="size-10 rounded-full bg-primary/10 dark:bg-white/5 flex items-center justify-center border border-white/5 backdrop-blur-sm">
                                <PieChart className="text-foreground/70 size-5" />
                            </div>
                        </div>

                        {/* Github Graph - High Contrast Neon */}
                        <div className="flex flex-col gap-2 mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                            {[
                                [0, 1, 1, 0, 1, 0, 1],
                                [1, 0, 1, 1, 0, 1, 0],
                                [1, 1, 0, 1, 1, 0, 1]
                            ].map((row, rowIndex) => (
                                <div key={rowIndex} className="flex justify-between gap-1 h-3">
                                    {row.map((active, colIndex) => (
                                        <div
                                            key={colIndex}
                                            className={cn(
                                                "w-full rounded-sm transition-all duration-500 ease-out",
                                                active
                                                    ? "bg-green-500/50 shadow-none group-hover:bg-green-500 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                                                    : "bg-white/5"
                                            )}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                            <span className="text-xs text-gray-500"></span>
                            <ArrowUpRight className="text-gray-500 size-4 group-hover:text-white transition-colors" />
                        </div>
                    </Card>
                </motion.div>

                {/* 4. Featured Project (Aayush Mishra) */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-2">
                    <Card variant="glass" className="h-full flex flex-col md:flex-row overflow-hidden group shadow-lg hover:shadow-primary/5" hoverEffect>
                        <div className="flex-1 p-8 flex flex-col justify-center">
                            <div className="mb-4">
                                <div className="inline-block px-3 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold mb-3 backdrop-blur-sm">
                                    AI Solution
                                </div>
                                <h2 className="text-3xl font-bold mb-2 text-foreground">Magic Minds</h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                    MagicMinds, A voice-based conversational AI that acts as a human-like learning companion for children.
                                    It enables natural, spoken interaction and contextual roleplay, helping kids practice real-world conversations and develop practical communication skills through engaging, personalized learning rather than rote memorization.
                                </p>
                            </div>

                        </div>

                        {/* AI Learning Companion Visual */}
                        <div className="flex-1 bg-gray-50 dark:bg-black/40 backdrop-blur-md border-l border-border-subtle flex flex-col items-center justify-center min-h-[250px] relative overflow-hidden group-hover:bg-primary/5 transition-colors duration-500">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Central AI Orb */}
                            <div className="relative z-10 flex items-center justify-center">
                                {/* Core */}
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 shadow-[0_0_30px_rgba(43,124,238,0.5)] z-20 flex items-center justify-center"
                                >
                                    <Brain className="text-white size-8" />
                                </motion.div>

                                {/* Ripples */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute border border-primary/30 rounded-full"
                                        initial={{ width: 64, height: 64, opacity: 0.8 }}
                                        animate={{
                                            width: [64, 200],
                                            height: [64, 200],
                                            opacity: [0.5, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.6,
                                            ease: "easeOut"
                                        }}
                                    />
                                ))}

                                {/* Floating Icons (Orbiting) */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-40 h-40"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/10">
                                        <Lightbulb className="text-yellow-400 size-4" />
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/10">
                                        <Sparkles className="text-purple-400 size-4" />
                                    </div>
                                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/10">
                                        <MessageCircle className="text-green-400 size-4" />
                                    </div>
                                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/10">
                                        <Heart className="text-red-400 size-4" />
                                    </div>
                                </motion.div>
                            </div>

                            <p className="absolute bottom-6 text-xs font-medium text-primary tracking-widest uppercase opacity-60">Learning Companion</p>
                        </div>
                    </Card>
                </motion.div>

                {/* 5. Tech Stack (Venn Diagram) */}
                <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="col-span-1 md:col-span-1 lg:col-span-1 z-20 group">
                    <Card variant="glass" className="h-full p-6 flex flex-col items-center justify-center relative min-h-[300px] !overflow-visible hover:border-primary/40 hover:shadow-[0_0_40px_rgba(43,124,238,0.15)]" hoverEffect={false}>
                        <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-50 pointer-events-none"></div>
                        <h3 className="absolute top-6 left-6 text-lg font-bold text-foreground z-10">Tech Stack</h3>

                        {/* Rotating Container */}
                        <div className="relative w-64 h-64 mt-6">
                            {/* Venn Diagram (Nucleus) - Static */}
                            <div className="absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-90">
                                {/* Circle 1 */}
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-2 border-cyan-500/30 bg-cyan-500/5 flex items-start justify-center pt-4 mix-blend-plus-lighter backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                                    <span className="text-[10px] uppercase font-bold text-cyan-200 tracking-wider">Frontend</span>
                                </div>
                                {/* Circle 2 */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-2 border-purple-500/30 bg-purple-500/5 flex items-end justify-center pb-4 mix-blend-plus-lighter backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                                    <span className="text-[10px] uppercase font-bold text-purple-200 tracking-wider">Backend</span>
                                </div>
                                {/* Circle 3 */}
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-orange-500/30 bg-orange-500/5 flex items-center justify-start pl-4 mix-blend-plus-lighter backdrop-blur-sm shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                                    <span className="text-[10px] uppercase font-bold text-orange-200 tracking-wider">DevOps</span>
                                </div>
                                {/* Circle 4 */}
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-pink-500/30 bg-pink-500/5 flex items-center justify-end pr-4 mix-blend-plus-lighter backdrop-blur-sm shadow-[0_0_20px_rgba(236,72,153,0.1)]">
                                    <span className="text-[10px] uppercase font-bold text-pink-200 tracking-wider">Cloud</span>
                                </div>
                            </div>

                            {/* Orbiting Skills Ring (Electrons) - Visible on Hover */}
                            <div className="absolute inset-[-50px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_12s_linear_infinite] [animation-play-state:paused] group-hover:[animation-play-state:running]">
                                {[
                                    { icon: "https://cdn.simpleicons.org/react/61DAFB", name: "React" },
                                    { icon: "https://cdn.simpleicons.org/nodedotjs/339933", name: "Node" },
                                    { icon: "/icons/python.png", name: "Python" },
                                    { icon: "https://cdn.simpleicons.org/docker/2496ED", name: "Docker" },
                                    { icon: "https://cdn.simpleicons.org/nextdotjs/ffffff", name: "Next.js" },
                                    { icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", name: "Tailwind" },
                                    { icon: "https://cdn.simpleicons.org/typescript/3178C6", name: "TS" },
                                    { icon: "https://cdn.simpleicons.org/git/F05032", name: "Git" },
                                    { icon: "/icons/jenkins.png", name: "Jenkins" },
                                    { icon: "/icons/aws.png", name: "AWS" },
                                    { icon: "/icons/terraform.png", name: "Terraform" },
                                    { icon: "/icons/java.png", name: "Java" },
                                ].map((skill, i, arr) => {
                                    const angle = (i / arr.length) * 360;
                                    return (
                                        <div
                                            key={i}
                                            className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 bg-white/80 dark:bg-black/80 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md"
                                            style={{
                                                transform: `rotate(${angle}deg) translate(110px) rotate(-${angle}deg)`, // Position them in circle
                                            }}
                                        >
                                            <div className="w-full h-full animate-[spin_12s_linear_infinite_reverse] [animation-play-state:paused] group-hover:[animation-play-state:running] flex items-center justify-center">
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className={cn(
                                                        "w-5 h-5 opacity-90",
                                                        skill.name === "Next.js" && "invert dark:invert-0"
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Center - Static relative to container rotation (independent) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-20 pointer-events-none">
                            <div className="text-white font-bold text-lg drop-shadow-[0_0_10px_rgba(43,124,238,0.8)]">Me</div>
                            <div className="absolute inset-0 bg-primary opacity-20 blur-xl rounded-full"></div>
                        </div>

                        <p className="text-xs text-gray-500 mt-2 text-center w-full z-20 relative">Interactive Expertise</p>
                    </Card>
                </motion.div>

                {/* 6. Skills (Full Width) */}
                <motion.div
                    variants={itemVariants}
                    className="col-span-1 md:col-span-2 lg:col-span-3"
                    onHoverStart={() => setIsSkillsHovered(true)}
                    onHoverEnd={() => setIsSkillsHovered(false)}
                >
                    <Card variant="glass" className="p-8 md:p-10 relative overflow-hidden transition-all duration-500 ease-out" hoverEffect>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-light mb-8 flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <Database className="text-primary size-6" />
                                </div>
                                Skills & Proficiency
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                                {[
                                    { name: "React & Next.js", level: "95%" },
                                    { name: "Node.js & Express", level: "90%" },
                                    { name: "Docker & Kubernetes", level: "95%" },
                                    { name: "AWS / Cloud Arch", level: "80%" },
                                    { name: "Python & Django", level: "95%" },
                                    { name: "CI/CD", level: "90%" },
                                ].map(skill => (
                                    <motion.div
                                        key={skill.name}
                                        className="flex flex-col gap-2 group cursor-default"
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                    >
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-foreground dark:group-hover:text-white transition-colors duration-300">{skill.name}</span>
                                            <span className="text-xs font-mono text-primary group-hover:text-primary-foreground transition-colors duration-300">{skill.level}</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden border border-gray-200 dark:border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level }}
                                                variants={{
                                                    rest: { filter: "brightness(1)", boxShadow: "0 0 10px rgba(43,124,238,0.5)" },
                                                    hover: { filter: "brightness(1.3)", boxShadow: "0 0 25px rgba(43,124,238,0.8)" }
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="h-full bg-primary rounded-full relative"
                                            >
                                                <div className="absolute inset-0 bg-white/20 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Hidden Skills - Expands on Hover */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: isSkillsHovered ? "auto" : 0,
                                    opacity: isSkillsHovered ? 1 : 0
                                }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 pt-6">
                                    {[
                                        { name: "TypeScript", level: "95%" },
                                        { name: "PostgreSQL", level: "85%" },
                                        { name: "Java/Spring", level: "80%" },
                                        { name: "MongoDB", level: "90%" },
                                        { name: "Terraform", level: "90%" },
                                        { name: "WebSockets", level: "85%" },
                                    ].map(skill => (
                                        <motion.div
                                            key={skill.name}
                                            className="flex flex-col gap-2 group cursor-default"
                                            initial="rest"
                                            whileHover="hover"
                                            animate="rest"
                                            variants={{
                                                rest: { x: 0 },
                                                hover: { x: 5 }
                                            }}
                                        >
                                            <div className="flex justify-between items-end">
                                                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">{skill.name}</span>
                                                <span className="text-xs font-mono text-primary group-hover:text-primary-foreground transition-colors duration-300">{skill.level}</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: skill.level }} // This might re-trigger on expand
                                                    viewport={{ once: false }}
                                                    variants={{
                                                        rest: { filter: "brightness(1)", boxShadow: "0 0 10px rgba(43,124,238,0.5)" },
                                                        hover: { filter: "brightness(1.3)", boxShadow: "0 0 25px rgba(43,124,238,0.8)" }
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="h-full bg-primary rounded-full relative"
                                                >
                                                    <div className="absolute inset-0 bg-white/20 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </Card>
                </motion.div>

                {/* 7. Contact */}
                <motion.div
                    id="contact-card"
                    variants={itemVariants}
                    className="col-span-1 md:col-span-2 lg:col-span-3"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 rounded-squircle glass-panel overflow-hidden shadow-lg transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(43,124,238,0.15)] hover:-translate-y-1">
                        <div className="p-8 md:p-12 relative flex flex-col justify-between">
                            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">Let&apos;s <span className="font-bold">Collaborate</span></h2>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Interested in scaling your infrastructure or building a next-gen application? Drop me a line.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { icon: Mail, text: "aayushmishra01530@gmail.com" },
                                        { icon: MapPin, text: "Remote, India" },
                                        { icon: Briefcase, text: "Open to Freelance" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-300 group">
                                            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform">
                                                <item.icon className="size-5" />
                                            </div>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 flex gap-4">
                                {[Code, Briefcase, Mail].map((Icon, i) => (
                                    <a key={i} href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-transparent hover:border-white/10">
                                        <Icon className="size-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-black/40 backdrop-blur-md">
                            <form
                                className="flex flex-col gap-4"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const subject = formData.get('subject') as string;
                                    const body = formData.get('message') as string;
                                    window.location.href = `mailto:aayushmishra01530@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500 font-medium ml-1">Name</label>
                                        <input
                                            name="name"
                                            className="glass-input rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-white"
                                            placeholder="John Doe"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500 font-medium ml-1">Email</label>
                                        <input
                                            name="email"
                                            className="glass-input rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-white"
                                            placeholder="john@example.com"
                                            type="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-500 font-medium ml-1">Subject</label>
                                    <input
                                        name="subject"
                                        className="glass-input rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-white"
                                        placeholder="Project Inquiry"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-500 font-medium ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        className="glass-input rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-white resize-none"
                                        placeholder="Tell me about your project..."
                                        rows={4}
                                        required
                                    ></textarea>
                                </div>
                                <Button type="submit" className="mt-2 w-full">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
