"use client";

import Link from "next/link";
import { Terminal, Lightbulb, Menu, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Experience", href: "/experience" },
        { name: "GitHub", href: "https://github.com" }, // Ideally replace with actual link
        { name: "LinkedIn", href: "https://linkedin.com" } // Ideally replace with actual link
    ];

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
                <Link href="/" className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center text-white backdrop-blur-md shadow-lg border border-white/10">
                        <Terminal className="size-5" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Mishra</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                pathname === item.href ? "text-white" : "text-gray-300 hover:text-white"
                            )}
                        >
                            {item.name}
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
