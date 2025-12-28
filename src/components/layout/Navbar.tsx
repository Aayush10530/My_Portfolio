"use client";

import Link from "next/link";
import { Terminal, Lightbulb, Menu, Download } from "lucide-react"; // Replaced material symbols with lucide-react
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "w-full fixed top-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-black/20 backdrop-blur-xl border-border-subtle"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center text-white backdrop-blur-md shadow-lg border border-white/10">
                        <Terminal className="size-5" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Mishra</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {["Home", "Projects", "GitHub", "LinkedIn"].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}

                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Lightbulb className="size-5" />
                    </Button>

                    <Button variant="primary" size="md">
                        Contact Me
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden text-white">
                    <Menu className="size-6" />
                </div>
            </div>
        </nav>
    );
}
