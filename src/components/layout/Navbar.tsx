"use client";

import Link from "next/link";
import { Terminal, Menu, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
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
        { name: "GitHub", href: "https://github.com", icon: "/icons/github.png" },
        { name: "LinkedIn", href: "https://linkedin.com", icon: "/icons/linkedin.png" }
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
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-primary/10 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white backdrop-blur-md shadow-lg border border-primary/10 dark:border-white/10">
                        <Terminal className="size-5" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-foreground">Mishra</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors flex items-center justify-center",
                                pathname === item.href ? "text-foreground" : "text-gray-600 dark:text-gray-300 hover:text-foreground"
                            )}
                        >
                            {item.icon ? (
                                <div className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                                    <img src={item.icon} alt={item.name} className="w-5 h-5 dark:invert opacity-80 hover:opacity-100 rounded-lg" />
                                </div>
                            ) : (
                                item.name
                            )}
                        </Link>
                    ))}

                    <a href="/contact">
                        <Button variant="primary" size="lg" className="rounded-full px-6 shadow-[0_0_20px_rgba(43,124,238,0.4)] hover:shadow-[0_0_30px_rgba(43,124,238,0.6)]">
                            Contact Me
                        </Button>
                    </a>
                </div>
                {/* Mobile Menu */}
                <div className="md:hidden text-white">
                    <Menu className="size-6" />
                </div>
            </div>
        </nav>
    );
}
