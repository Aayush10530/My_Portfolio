"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const mainLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Experience", href: "/experience" },
    ];

    const socialLinks = [
        { name: "GitHub", href: "https://github.com/Aayush10530", icon: "/icons/github.png" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/aayush-mishra-2a4a381a8/", icon: "/icons/linkedin.png" },
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
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
                {/* 1. Left: Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-12 w-40">
                            <Image
                                src="/logo.png"
                                alt="Mishra Portfolio"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* 2. Center: Navigation Links */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {mainLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href ? "text-foreground" : "text-gray-600 dark:text-gray-400"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* 3. Right: Socials & CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-3 pr-4 border-r border-white/10 mr-4">
                        {socialLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="p-2 rounded-full hover:bg-white/5 transition-colors group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="size-5 dark:invert opacity-70 group-hover:opacity-100 transition-opacity"
                                />
                            </Link>
                        ))}
                    </div>

                    <Link href="#contact">
                        <Button variant="primary" size="lg" className="rounded-full px-6 shadow-[0_0_20px_rgba(43,124,238,0.4)] hover:shadow-[0_0_30px_rgba(43,124,238,0.6)]">
                            Contact Me
                        </Button>
                    </Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden text-white">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                        <Menu className="size-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 absolute w-full left-0 top-16 px-6 py-6 flex flex-col gap-6 shadow-2xl h-screen">
                    {mainLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "text-lg font-medium transition-colors",
                                pathname === item.href ? "text-primary" : "text-gray-400 hover:text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex gap-4 border-t border-white/10 pt-6">
                        {socialLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-full"
                            >
                                <img src={item.icon} alt={item.name} className="size-5 dark:invert opacity-70" />
                            </Link>
                        ))}
                    </div>
                    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="primary" size="lg" className="w-full justify-center">Contact Me</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
