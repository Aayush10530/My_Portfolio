"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle, Code, Terminal, Smartphone, Database, FileText, Cloud, ScanFace, Zap, Sparkles, Plane, MapPin, Star, Brain, Calculator, Languages, Palette, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface Project {
    title: string;
    description: string;
    tags: string[];
    color: string;
    icon: React.ElementType;
    demoUrl?: string | null;
    repoUrl?: string;
    visual: React.ReactNode;
    category: string;
}

const projects: Project[] = [
    {
        title: "Face Time",
        description: "Real-time Face Recognition Attendance System using Python & OpenCV. Captures faces, marks attendance, and stores storage in Excel/CSV.",
        tags: ["Python", "OpenCV", "Tkinter", "Pandas"],
        color: "#2b7cee",
        icon: ScanFace,
        demoUrl: null,
        repoUrl: "https://github.com/Aayush10530/Face-Recognition-Attendance-System",
        category: "System Design",
        visual: (
            <div className="font-mono text-xs text-gray-300 space-y-1 z-10 p-4 w-full">
                <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                    <div className="size-2 rounded-full bg-red-500"></div>
                    <div className="size-2 rounded-full bg-yellow-500"></div>
                    <div className="size-2 rounded-full bg-green-500"></div>
                    <span className="text-[10px] text-gray-500 ml-2">attendance_sys.py</span>
                </div>
                <p><span className="text-green-400">➜</span> python3 <span className="text-yellow-300">main.py</span></p>
                <div className="pl-2 border-l-2 border-white/10 mt-2 space-y-1">
                    <p><span className="text-blue-400">[INFO]</span> Loading encodings...</p>
                    <p><span className="text-blue-400">[INFO]</span> Starting video stream...</p>
                    <p className="animate-pulse"><span className="text-green-400">[FOUND]</span> Face: <span className="font-bold text-white">Aayush</span> (98%)</p>
                    <p className="text-gray-500 text-[10px]">&gt;&gt; Marked present at 09:42:15</p>
                    <p className="text-gray-500 text-[10px]">&gt;&gt; Saved to attendance.csv</p>
                </div>
            </div>
        )
    },
    {
        title: "Velvitra",
        description: "A high-performance full-stack travel agency website built with TypeScript, Vite, and Node.js. Designed for speed, scalability, and polished UI.",
        tags: ["TypeScript", "React", "Vite", "Node.js", "MongoDB"],
        color: "#ffbd2e",
        icon: Zap,
        demoUrl: null,
        repoUrl: "https://github.com/Aayush10530/Velvitra",
        category: "Full Stack",
        visual: (
            <div className="relative w-full h-full group/image overflow-hidden">
                {/* Background Image - Taj Mahal */}
                <div className="absolute inset-0">
                    <Image
                        src="/projects/velvitra.png"
                        alt="Taj Mahal"
                        fill
                        className="object-cover transition-transform duration-700 group-hover/image:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                </div>

                {/* Floating Tour Card */}
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                                <MapPin className="size-3 text-orange-400 fill-orange-400" />
                                Agra, India
                            </h4>
                            <p className="text-[10px] text-gray-300 mt-0.5">Taj Mahal Sunrise Tour</p>
                        </div>
                        <div className="flex items-center gap-1 bg-black/40 rounded-full px-2 py-0.5 border border-white/10">
                            <Star className="size-2.5 text-yellow-400 fill-yellow-400" />
                            <span className="text-[10px] font-bold text-white">4.9</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
                        <div className="text-[10px] text-gray-400">Starting from <span className="text-white font-bold text-xs">$25</span></div>
                        <div className="text-[10px] font-bold text-orange-400 flex items-center gap-1">
                            BOOK NOW
                        </div>
                    </div>
                </div>

                {/* Live Badge */}
                <div className="absolute top-3 right-3 bg-red-500/20 backdrop-blur-md border border-red-500/30 px-2 py-1 rounded-full flex items-center gap-1.5">
                    <span className="relative flex size-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full size-1.5 bg-red-500"></span>
                    </span>
                    <span className="text-[9px] font-bold text-red-200">LIVE</span>
                </div>
            </div>
        )
    },
    {
        title: "FreshAi",
        description: "Open-source platform integrating machine learning with modern laundry services to enable collaborative, scalable AI-driven development.",
        tags: ["Typescript", "Python", "FastAPI", "YOLOv8", "Docker"],
        color: "#38bdf8",
        icon: Cloud,
        demoUrl: null,
        repoUrl: "https://github.com/Aayush10530/Fresh-Ai",
        category: "Full Stack",
        visual: (
            <div className="relative w-full h-full bg-[#0f172a] flex items-center justify-center overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                {/* Simulated Camera UI */}
                <div className="absolute inset-4 border border-white/10 rounded-lg flex flex-col justify-between p-3 z-10">
                    <div className="flex justify-between items-center text-[10px] font-mono text-cyan-500/70">
                        <span>CAM_01</span>
                        <span>LIVE</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-cyan-500/70">
                        <span>1280x720</span>
                        <span>60FPS</span>
                    </div>
                </div>

                {/* Scanned Object */}
                <div className="relative w-32 h-40 bg-white/5 rounded-md border border-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    {/* Bounding Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute top-8 right-4 w-12 h-12 border-2 border-red-500/80 rounded bg-red-500/10 flex items-start justify-end"
                    >
                        <div className="bg-red-500 text-white text-[8px] font-bold px-1 py-0.5 -mt-4 mr-[-2px]">STAIN 94%</div>
                    </motion.div>
                </div>

                {/* Scan Line */}
                <motion.div
                    animate={{ top: ["10%", "90%", "10%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[1px] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-20"
                />
            </div>
        )
    },
    {
        title: "MagicMinds",
        description: "Interactive AI voice tutor platform helping children learn through natural conversation and roleplay scenarios.",
        tags: ["TypeScript", "Next.js", "OpenAI", "WebRTC", "RestApi", "Web Speech API", "Redis", "Tailwind", "PostgreSQL", "CI/CD"],
        color: "#a855f7",
        icon: Sparkles,
        demoUrl: null,
        repoUrl: "https://github.com/Aayush10530/MagicMinds",
        category: "Full Stack",
        visual: (
            <div className="relative w-full h-full bg-[#1e1b4b] flex items-center justify-center overflow-hidden border border-white/5">
                {/* Mystical Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_60%)]"></div>

                {/* Floating Science/Math Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-purple-300/20 font-mono text-xs"
                        initial={{ x: Math.random() * 200 - 100, y: Math.random() * 200 - 100, opacity: 0 }}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0, 0.8, 0],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }}
                        style={{ left: `${20 + Math.random() * 60}%`, top: `${20 + Math.random() * 60}%` }}
                    >
                        {["E=mc²", "π", "∑", "∫", "Aa", "あ"][i]}
                    </motion.div>
                ))}

                {/* Central AI Brain Orb */}
                <div className="relative z-10 flex flex-col items-center justify-center">

                    {/* Orbiting Subject Icons */}
                    <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute size-40 -top-8 -left-8 rounded-full border border-dashed border-purple-500/20"
                        />
                        {/* Orbiting Items */}
                        {[
                            { Icon: Calculator, color: "text-blue-400", delay: 0 },
                            { Icon: Palette, color: "text-pink-400", delay: 1.5 },
                            { Icon: Languages, color: "text-green-400", delay: 3 },
                            { Icon: GraduationCap, color: "text-yellow-400", delay: 4.5 }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="absolute top-1/2 left-1/2"
                                animate={{
                                    x: [60 * Math.cos(index * Math.PI / 2), 60 * Math.cos((index * Math.PI / 2) + 2 * Math.PI)],
                                    y: [60 * Math.sin(index * Math.PI / 2), 60 * Math.sin((index * Math.PI / 2) + 2 * Math.PI)],
                                }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            >
                                <div className={`p-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 ${item.color}`}>
                                    <item.Icon className="size-3" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Orb */}
                    <div className="relative">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="size-24 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 shadow-[0_0_50px_rgba(139,92,246,0.5)] flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500"
                        >
                            {/* Inner Brain Texture */}
                            <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                            <Brain className="size-12 text-white relative z-10 drop-shadow-md" />

                            {/* Gloss */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-full" />
                        </motion.div>

                        {/* Voice Waveform Activity */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-end gap-1 h-8">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1 bg-purple-400 rounded-full"
                                    animate={{ height: [4, 16 + Math.random() * 16, 4] }}
                                    transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, ease: "easeInOut" }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Status Pill */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="absolute bottom-4 right-4 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2"
                >
                    <div className="size-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-medium text-purple-200">Listening...</span>
                </motion.div>
            </div>
        )
    },
    {
        title: "Microservices Architecture",
        description: "Event-driven microservices built with Go and Kafka. Designed for scalability and fault tolerance in high-throughput environments.",
        tags: ["Golang", "Docker", "Kafka"],
        color: "#27c93f",
        icon: Database,
        demoUrl: "#",
        repoUrl: "#",
        category: "System Design",
        visual: (
            <div className="relative z-10 flex items-center gap-4 justify-center h-full">
                <div className="size-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center">
                    <Terminal className="text-3xl text-blue-500 drop-shadow-lg" />
                </div>
                <div className="w-8 h-0.5 border-t border-dashed border-gray-500"></div>
                <div className="size-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center">
                    <Database className="text-3xl text-orange-500 drop-shadow-lg" />
                </div>
                <div className="w-8 h-0.5 border-t border-dashed border-gray-500"></div>
                <div className="size-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center">
                    <Cloud className="text-3xl text-green-500 drop-shadow-lg" />
                </div>
            </div>
        )
    },
    {
        title: "Rust CLI Tool",
        description: "A high-performance command-line interface tool for optimizing image assets in local development workflows.",
        tags: ["Rust", "Cargo", "CLI"],
        color: "#ff5f56",
        icon: Terminal,
        demoUrl: "#",
        repoUrl: "#",
        category: "DevOps",
        visual: (
            <div className="w-3/4 h-3/4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 p-4 font-mono text-xs text-gray-400 shadow-2xl m-auto">
                <div className="text-white mb-2">$ rust-cli --verbose</div>
                <div className="text-green-500">✓ Compiling assets...</div>
                <div className="text-green-500">✓ Optimizing build...</div>
                <div className="text-blue-500">ℹ Build completed in 1.2s</div>
                <div className="mt-2 text-white">Done.</div>
            </div>
        )
    },
    {
        title: "Inventory Mobile App",
        description: "Cross-platform React Native application for warehouse management, featuring barcode scanning and offline sync.",
        tags: ["React Native", "Firebase", "Redux"],
        color: "#2b7cee",
        icon: Smartphone,
        demoUrl: "#",
        repoUrl: "#",
        category: "Full Stack",
        visual: (
            <div className="w-32 h-56 rounded-[2rem] border-4 border-[#333] bg-black/90 relative shadow-2xl translate-y-8 backdrop-blur-xl m-auto">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#333] rounded-full"></div>
                <div className="w-full h-full rounded-[1.7rem] bg-white/5 overflow-hidden flex flex-col pt-6 px-2">
                    <div className="h-8 w-full bg-white/10 rounded mb-2"></div>
                    <div className="h-24 w-full bg-primary/30 rounded mb-2"></div>
                    <div className="flex gap-2">
                        <div className="h-24 w-1/2 bg-white/10 rounded"></div>
                        <div className="h-24 w-1/2 bg-white/10 rounded"></div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Predictive Maintenance AI",
        description: "Machine learning model deployed on edge devices to predict equipment failure before it happens.",
        tags: ["Python", "TensorFlow", "Azure IoT"],
        color: "#27c93f",
        icon: Terminal,
        demoUrl: "#",
        repoUrl: "#",
        category: "DevOps",
        visual: (
            <div className="relative z-10 size-24 rounded-full border border-primary/40 flex items-center justify-center shadow-[0_0_40px_rgba(43,124,238,0.4)] bg-black/60 backdrop-blur-md m-auto">
                <Terminal className="text-4xl text-primary animate-pulse drop-shadow-[0_0_10px_rgba(43,124,238,0.8)]" />
            </div>
        )
    }
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = projects.filter(project =>
        activeCategory === "All" || project.category === activeCategory
    );

    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
                <div className="space-y-4 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[0.9] drop-shadow-xl">
                        Selected Work
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-xl leading-relaxed">
                        A collection of engineering challenges solved. Building robust systems from code to cloud.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["All", "DevOps", "Full Stack", "System Design"].map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "primary" : "glass"}
                            size="md"
                            className="rounded-full"
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        layout
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card variant="glass" className="h-full flex flex-col group hover:shadow-[0_0_40px_rgba(43,124,238,0.15)] transition-all duration-300 hover:-translate-y-1">
                            <div className="h-64 bg-black/60 border-b border-white/5 flex flex-col relative group-hover:bg-black/70 transition-colors backdrop-blur-sm overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://placeholder.pics/svg/600/0d1117')] opacity-10 bg-cover mix-blend-overlay"></div>
                                {/* Content Wrapper for Hover Zoom */}
                                <div className="w-full h-full flex transition-transform duration-500 group-hover:scale-105">
                                    {project.visual}
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 p-8 gap-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm font-light">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 backdrop-blur-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                                    {project.demoUrl && (
                                        <a href={project.demoUrl} className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                                            <PlayCircle className="size-5" /> Live Demo
                                        </a>
                                    )}
                                    {project.repoUrl && (
                                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors ml-auto">
                                            <Code className="size-5" /> Source
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
