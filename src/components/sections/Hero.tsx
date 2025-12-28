"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, FolderOpen, MapPin, Wifi, GitCommit, Database, Terminal, Cpu, Cloud, Code, Briefcase, Mail, Clock } from "lucide-react";
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
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6 backdrop-blur-md shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    Senior Engineer
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-4">
                                    Architecting <br />
                                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Scalable Systems</span>
                                </h1>
                                <p className="text-lg text-gray-400 font-normal max-w-md leading-relaxed">
                                    Full Stack Development | DevOps | Cloud <br />
                                    Crafting robust digital infrastructure with precision and modern aesthetics.
                                </p>
                            </div>

                            <a href="/experience">
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
                    </Card>
                </motion.div>

                {/* 2. Map Card */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 row-span-1">
                    <Card variant="glass" className="h-full relative group overflow-hidden min-h-[200px]" hoverEffect>
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 mix-blend-luminosity"
                            style={{ backgroundImage: `url('https://placehold.co/600x400/1a1a1a/FFF?text=Map')` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Based In</p>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="text-primary size-5 drop-shadow-[0_0_8px_rgba(43,124,238,0.8)]" />
                                        <span className="text-xl font-bold">India</span>
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
                                <p className="text-3xl font-bold text-white drop-shadow-sm">1,200+</p>
                                <p className="text-sm text-gray-400">Commits this year</p>
                            </div>
                            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 backdrop-blur-sm">
                                <GitCommit className="text-white/70 size-5" />
                            </div>
                        </div>

                        {/* Mock Github Graph */}
                        <div className="flex flex-col gap-1 mt-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            {[1, 2, 3].map((row) => (
                                <div key={row} className="flex justify-between gap-1 h-2">
                                    {[1, 2, 3, 4, 5, 6, 7].map((col) => (
                                        <div
                                            key={col}
                                            className={cn(
                                                "w-full rounded-sm",
                                                (row + col) % 2 === 0 ? "bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.4)]" : "bg-white/5"
                                            )}
                                            style={{ opacity: (row * col * 0.1) % 1 || 0.5 }}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                            <span className="text-xs text-gray-500">40+ Projects Completed</span>
                            <ArrowUpRight className="text-gray-500 size-4" />
                        </div>
                    </Card>
                </motion.div>

                {/* 4. Featured Project (Saral Sahayak) */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-2">
                    <Card variant="glass" className="h-full flex flex-col md:flex-row overflow-hidden group shadow-lg hover:shadow-primary/5" hoverEffect>
                        <div className="flex-1 p-8 flex flex-col justify-center">
                            <div className="mb-4">
                                <div className="inline-block px-3 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold mb-3 backdrop-blur-sm">
                                    OpenAI Buildathon Winner
                                </div>
                                <h2 className="text-3xl font-bold mb-2">Saral Sahayak</h2>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    An AI-powered accessibility assistant that bridges the gap for non-digital natives. Features real-time voice navigation and simplified UI generation.
                                </p>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {["React", "Node.js", "OpenAI API", "Tailwind"].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded-md text-xs text-gray-300 font-mono backdrop-blur-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Code visual */}
                        <div className="flex-1 bg-black/40 backdrop-blur-md border-l border-border-subtle flex flex-col min-h-[250px] font-mono text-sm relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 origin-right">
                            <div className="flex items-center px-4 py-3 border-b border-border-subtle bg-black/20">
                                <div className="flex gap-2">
                                    <div className="size-3 rounded-full bg-[#ff5f56]" />
                                    <div className="size-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="size-3 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="ml-4 text-xs text-gray-500">saral-sahayak — index.ts</div>
                            </div>
                            <div className="p-6 text-gray-300 overflow-hidden relative">
                                <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
                                <div className="leading-relaxed relative z-10 text-xs md:text-sm">
                                    <p><span className="text-purple-400">import</span> {"{ "} <span className="text-yellow-300">OpenAI</span> {" }"} <span className="text-purple-400">from</span> <span className="text-green-300">'openai'</span>;</p>
                                    <br />
                                    <p><span className="text-blue-400">const</span> <span className="text-yellow-200">response</span> = <span className="text-blue-400">async</span> (input) ={">"} {"{"}</p>
                                    <p className="pl-4"><span className="text-blue-400">const</span> completion = <span className="text-blue-400">await</span> openai.chat({"{"}</p>
                                    <p className="pl-8">model: <span className="text-green-300">'gpt-4-turbo'</span>,</p>
                                    <p className="pl-4">{"});"}</p>
                                    <p className="pl-4"><span className="text-purple-400">return</span> completion;</p>
                                    <p>{"};"}</p>
                                    <p className="mt-2 text-gray-500 animate-pulse">_</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* 5. Tech Stack (Venn Diagram) */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-1">
                    <Card variant="glass" className="h-full p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]" hoverEffect>
                        <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-50 pointer-events-none"></div>
                        <h3 className="absolute top-6 left-6 text-lg font-bold text-white z-10">Tech Stack</h3>

                        <div className="relative w-64 h-64 mt-6">
                            {/* Circle 1 */}
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-2 border-cyan-500/30 bg-cyan-500/5 flex items-start justify-center pt-4 mix-blend-plus-lighter backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.1)] z-10"
                            >
                                <span className="text-[10px] uppercase font-bold text-cyan-200 tracking-wider">Frontend</span>
                            </motion.div>

                            {/* Circle 2 */}
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.3 }}
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-2 border-purple-500/30 bg-purple-500/5 flex items-end justify-center pb-4 mix-blend-plus-lighter backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.1)] z-10"
                            >
                                <span className="text-[10px] uppercase font-bold text-purple-200 tracking-wider">Backend</span>
                            </motion.div>

                            {/* Circle 3 - Left */}
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.6 }}
                                className="absolute left-6 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-orange-500/30 bg-orange-500/5 flex items-center justify-start pl-4 mix-blend-plus-lighter backdrop-blur-sm shadow-[0_0_20px_rgba(249,115,22,0.1)] z-10"
                            >
                                <span className="text-[10px] uppercase font-bold text-orange-200 tracking-wider">DevOps</span>
                            </motion.div>

                            {/* Circle 4 - Right */}
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                                className="absolute right-6 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-pink-500/30 bg-pink-500/5 flex items-center justify-end pr-4 mix-blend-plus-lighter backdrop-blur-sm shadow-[0_0_20px_rgba(236,72,153,0.1)] z-10"
                            >
                                <span className="text-[10px] uppercase font-bold text-pink-200 tracking-wider">Software</span>
                            </motion.div>

                            {/* Center */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-20">
                                <div className="text-white font-bold text-lg drop-shadow-[0_0_10px_rgba(43,124,238,0.8)]">Me</div>
                                <div className="absolute inset-0 bg-primary opacity-20 blur-xl rounded-full"></div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center w-full">Interactive Expertise</p>
                    </Card>
                </motion.div>

                {/* 6. Skills (Full Width) */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3">
                    <Card variant="glass" className="p-8 md:p-10 relative overflow-hidden">
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
                                    { name: "Docker & Kubernetes", level: "85%" },
                                    { name: "AWS / Cloud Arch", level: "80%" },
                                    { name: "Python & Django", level: "75%" },
                                    { name: "UI/UX Design", level: "70%" },
                                ].map(skill => (
                                    <div key={skill.name} className="flex flex-col gap-2">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                                            <span className="text-xs font-mono text-primary">{skill.level}</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(43,124,238,0.5)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* 7. Contact */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 rounded-squircle glass-panel overflow-hidden shadow-lg">
                        <div className="p-8 md:p-12 relative flex flex-col justify-between">
                            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">Let's <span className="font-bold">Collaborate</span></h2>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Interested in scaling your infrastructure or building a next-gen web application? Drop me a line.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { icon: Mail, text: "hello@mishra.dev" },
                                        { icon: MapPin, text: "Bangalore, India" },
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
                            <form className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500 font-medium ml-1">Name</label>
                                        <input className="glass-input rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-white" placeholder="John Doe" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-gray-500 font-medium ml-1">Email</label>
                                        <input className="glass-input rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-white" placeholder="john@example.com" type="email" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-500 font-medium ml-1">Subject</label>
                                    <input className="glass-input rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-white" placeholder="Project Inquiry" type="text" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-500 font-medium ml-1">Message</label>
                                    <textarea className="glass-input rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600 text-white resize-none" placeholder="Tell me about your project..." rows={4}></textarea>
                                </div>
                                <Button type="button" className="mt-2 w-full">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
