"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
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
        <>
            <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
                <div className={cn(
                    "rounded-full px-4 md:px-8 h-16 w-full max-w-7xl flex items-center justify-between transition-all duration-500",
                    scrolled
                        ? "bg-black/30 backdrop-blur-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] supports-[backdrop-filter]:bg-black/20"
                        : "bg-transparent border-transparent"
                )}>

                    {/* 1. Left: Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 flex-shrink-0"
                    >
                        <div className="relative h-8 w-32">
                            <Image
                                src="/logo.png"
                                alt="Mishra Portfolio"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* 2. Center: Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {mainLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-white",
                                    pathname === item.href ? "text-white" : "text-gray-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* 3. Right: Socials & CTA */}
                    <div className="hidden md:flex items-center gap-5">
                        <div className="flex items-center gap-3 pr-5 border-r border-white/10">
                            {socialLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="opacity-70 hover:opacity-100 transition-opacity"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        width={20}
                                        height={20}
                                        className="size-5 dark:invert"
                                    />
                                </Link>
                            ))}
                        </div>

                        <Button
                            onClick={() => {
                                if (pathname === "/") {
                                    document.getElementById("contact-card")?.scrollIntoView({ behavior: "smooth" });
                                } else {
                                    router.push("/#contact-card");
                                }
                            }}
                            className="rounded-full bg-[#1e60f5] hover:bg-[#1a55d6] text-white px-6 font-medium shadow-lg hover:shadow-blue-500/20 border-none h-10 transition-transform duration-300 hover:scale-105"
                        >
                            Contact Me
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden text-white ml-auto">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                            <Menu className="size-6 text-gray-300" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown - Keeping it simpler for dock style */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl pt-24 px-6 md:hidden">
                    <div className="flex flex-col gap-8 items-center">
                        {mainLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "text-2xl font-medium transition-colors",
                                    pathname === item.href ? "text-[#1e60f5]" : "text-gray-400 hover:text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="/#contact-card" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button className="rounded-full bg-[#1e60f5] px-8 py-6 text-lg">Contact Me</Button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
