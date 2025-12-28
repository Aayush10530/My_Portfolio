"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, Send, Code, Terminal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate sending
        setTimeout(() => {
            setIsSubmitting(false);
            window.location.href = `mailto:hello@mishra.dev?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="rounded-[32px] overflow-hidden bg-[#0A0F1C] border border-white/5 shadow-2xl flex flex-col md:flex-row min-h-[600px]"
                >

                    {/* Left Panel: Info */}
                    <div className="md:w-2/5 bg-[#0F1629] p-12 flex flex-col justify-between relative overflow-hidden">
                        {/* Decor */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_#2b7cee_0%,_transparent_50%)] blur-[100px]" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Let&apos;s <span className="text-primary">Collaborate</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-12">
                                Interested in scaling your infrastructure or building a next-gen application? Drop me a line.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                                        <Mail className="size-6 text-gray-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-gray-300 font-medium">hello@mishra.dev</span>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                                        <MapPin className="size-6 text-gray-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-gray-300 font-medium">Remote, India</span>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                                        <Briefcase className="size-6 text-gray-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-gray-300 font-medium">Open to Freelance</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 flex gap-4">
                            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                                <Code className="size-5 text-gray-500" />
                            </div>
                            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                                <Terminal className="size-5 text-gray-500" />
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Form */}
                    <div className="md:w-3/5 p-12 bg-[#0A0F1C] relative">
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-gray-500 font-semibold pl-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-[#131B2E] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-gray-500 font-semibold pl-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-[#131B2E] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs uppercase tracking-wider text-gray-500 font-semibold pl-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry"
                                    className="w-full bg-[#131B2E] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-wider text-gray-500 font-semibold pl-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-[#131B2E] border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                variant="primary"
                                size="lg"
                                className="w-full rounded-xl py-6 text-base font-semibold shadow-[0_0_20px_rgba(43,124,238,0.3)] hover:shadow-[0_0_40px_rgba(43,124,238,0.5)]"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
