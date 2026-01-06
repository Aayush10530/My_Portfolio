"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cloud, Rocket, GraduationCap, Download } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const experiences = [
    {
        role: "DevOps Intern",
        company: "Xebia",
        period: "June 2025 - Aug. 2025",
        location: "Remote",
        description: [
            "Automated CI/CD pipeline for a fintech web application serving over 500 users, reducing deployment time by 70% and achieving zero downtime deployments across 7+ releases.",
            "Provisioned AWS infrastructure with Terraform, creating 20+ reusable modules to boost deployment consistency.",
            "Designed pipelines, integrated security tools and built reusable Terraform modules, cutting deployment times by 40%."
        ],
        tags: ["Terraform", "Jenkins", "AWS", "Prometheus", "Git"],
        icon: Cloud,
        current: false
    },
    {
        role: "Full Stack Developer",
        company: "Independent Projects",
        period: "Jan 2024 - Aug 2024",
        location: "Remote",
        description: [
            "Developed and maintained high-traffic web applications using TypeScript, React.js and Node.js, serving over 50k daily active users.",
            "Optimized complex database queries in PostgreSQL, reducing average API response time by 40%.",
            "Integrated third-party payment gateways (RazorPay) and handled secure data processing compliant with PCI-DSS standards."
        ],
        tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis/ MongoDB", "AWS"],
        icon: Rocket,
        current: false
    },
    {
        role: "DevOps Bootcamp Trainee",
        company: "INT College (Israel)",
        period: "Sept 2024",
        location: "UPES",

        description: [
            "Participated in a 1-week intensive bootcamp gaining hands-on experience in CI/CD, containerization and orchestration.",
            "Studied real-world DevOps implementation strategies, including Netflix's architecture, to understand theoretical concepts of scalability and chaos engineering.",
            "Strengthened my problem-solving approach regarding infrastructure automation and deployment workflows."
        ],
        tags: ["CI/CD", "Docker", "Kubernetes"],
        icon: GraduationCap,
        current: false
    },

];

export default function Experience() {
    return (
        <section className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-24 relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative z-10">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white drop-shadow-sm">
                        Work Experience
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        A chronological overview of my professional journey, focusing on building scalable systems, optimizing infrastructure, and leading engineering teams.
                    </p>
                </div>
                <Card variant="glass" className="flex gap-4 p-6 rounded-2xl">
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-white">1+</span>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</span>
                    </div>
                    <div className="w-px h-12 bg-white/10"></div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-white">12+</span>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
                    </div>
                </Card>
            </div>

            <div className="flex flex-col gap-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 50, damping: 20, delay: index * 0.2 }}
                    >
                        <Card variant="glass" className="p-8 group hover:border-white/20 hover:bg-[#161616]/80" hoverEffect>
                            {exp.current && (
                                <div className="absolute top-8 right-8 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-[0_0_15px_rgba(43,124,238,0.3)]">
                                    <div className="size-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(43,124,238,0.8)]"></div>
                                    Current Role
                                </div>
                            )}

                            <div className="relative flex flex-col md:flex-row gap-6 z-10">
                                <div className="shrink-0 size-16 md:size-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden backdrop-blur-md shadow-inner">
                                    <exp.icon className="size-8 text-gray-500 group-hover:text-white transition-colors" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors drop-shadow-sm">
                                            {exp.role}
                                        </h3>
                                        <span className="text-sm font-medium text-gray-500 md:text-right">{exp.period}</span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400 mb-6">
                                        <span className="font-medium text-white">{exp.company}</span>
                                        {exp.location && (
                                            <>
                                                <span className="size-1 rounded-full bg-gray-600"></span>
                                                <span>{exp.location}</span>
                                            </>
                                        )}
                                    </div>

                                    <ul className="flex flex-col gap-3 mb-8 text-gray-300 leading-relaxed list-none">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="flex gap-3 items-start">
                                                <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_5px_rgba(43,124,238,0.6)]"></span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <div key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-300 font-medium transition-colors cursor-default">
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 flex flex-col items-center justify-center gap-6 border-t border-white/10 pt-10 text-center relative z-10">
                <h3 className="text-2xl font-bold text-white">Want to see more details?</h3>
                <p className="text-gray-400 max-w-lg">
                    Check out my projects page for deep dives into the code, or download my resume for a structured overview.
                </p>
                <div className="flex gap-4">
                    <Link href="/projects">
                        <Button variant="primary" size="lg">View Projects</Button>
                    </Link>
                    <a href="/Developer%20Mishra.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="glass" size="lg"><Download className="size-4 mr-2" /> Download CV</Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
