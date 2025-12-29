"use client";

import { motion } from "framer-motion";
import { PlayCircle, Code, Terminal, Smartphone, Database, FileText, Cloud, ScanFace } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const projects = [
    {
        title: "Face Time",
        description: "Real-time Face Recognition Attendance System using Python & OpenCV. Captures faces, marks attendance, and stores storage in Excel/CSV.",
        tags: ["Python", "OpenCV", "Tkinter", "Pandas"],
        color: "#2b7cee",
        icon: ScanFace,
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
                    <p className="text-gray-500 text-[10px]">>> Marked present at 09:42:15</p>
                    <p className="text-gray-500 text-[10px]">>> Saved to attendance.csv</p>
                </div>
            </div>
        )
    },
    {
        title: "E-Commerce Dashboard",
        description: "A high-performance merchant dashboard built with Next.js and GraphQL, handling real-time inventory updates and sales analytics.",
        tags: ["Next.js", "GraphQL", "Tailwind"],
        color: "#ffbd2e",
        icon: Database,
        visual: (
            <div className="font-mono text-xs space-y-1 z-10 overflow-hidden drop-shadow-sm p-4 text-gray-300">
                <p><span className="text-pink-400">import</span> {"{ useState, useEffect }"} <span className="text-pink-400">from</span> <span className="text-orange-300">'react'</span>;</p>
                <p className="h-2"></p>
                <p><span className="text-blue-400">export default function</span> <span className="text-yellow-300">AnalyticsDash</span>() {"{"}</p>
                <p className="pl-4"><span className="text-blue-400">const</span> [data, setData] = <span className="text-yellow-300">useState</span>(null);</p>
                <p className="pl-4"><span className="text-pink-400">return</span> (</p>
                <p className="pl-8 text-gray-400">&lt;<span className="text-blue-300">Grid</span> container spacing={"{"}<span className="text-green-300">3</span>{"}"}&gt;</p>
                <p className="pl-12 text-gray-400">&lt;<span className="text-blue-300">Chart</span> data={"{"}data{"}"} /&gt;</p>
                <p className="pl-4">);</p>
                <p>{"}"}</p>
            </div>
        )
    },
    {
        title: "Microservices Architecture",
        description: "Event-driven microservices built with Go and Kafka. Designed for scalability and fault tolerance in high-throughput environments.",
        tags: ["Golang", "Docker", "Kafka"],
        color: "#27c93f",
        icon: Database,
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
        visual: (
            <div className="relative z-10 size-24 rounded-full border border-primary/40 flex items-center justify-center shadow-[0_0_40px_rgba(43,124,238,0.4)] bg-black/60 backdrop-blur-md m-auto">
                <Terminal className="text-4xl text-primary animate-pulse drop-shadow-[0_0_10px_rgba(43,124,238,0.8)]" />
            </div>
        )
    }
];

export default function Projects() {
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
                    <Button variant="primary" size="md" className="rounded-full">All</Button>
                    <Button variant="glass" size="md" className="rounded-full">DevOps</Button>
                    <Button variant="glass" size="md" className="rounded-full">Full Stack</Button>
                    <Button variant="glass" size="md" className="rounded-full">System Design</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
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
                                    <a href="#" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                                        <PlayCircle className="size-5" /> Live Demo
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                                        <Code className="size-5" /> Source
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
