"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "py-3 px-4 md:px-10"
                    : "py-6 px-4 md:px-0"
            )}
        >
            <div
                className={cn(
                    "container mx-auto px-6 h-16 flex items-center justify-between rounded-full transition-all duration-300",
                    scrolled
                        ? "glassmorphism shadow-lg border-white/40"
                        : "bg-transparent border-transparent"
                )}
            >
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-full text-white group-hover:rotate-12 transition-transform shadow-md">
                        <Rocket size={20} />
                    </div>
                    <span className="text-xl font-bold font-heading text-foreground tracking-tight">
                        {siteConfig.name}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {siteConfig.navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-bold font-heading uppercase tracking-wide transition-colors rounded-full",
                                    isActive
                                        ? "text-primary"
                                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                                    />
                                )}
                            </Link>
                        );
                    })}
                    <div className="ml-4 pl-4 border-l border-foreground/10">
                        <Link href="/admissions">
                            <Button size="sm" className="rounded-full shadow-sm hover:shadow-md transition-shadow">
                                Enroll Now
                            </Button>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-2 hover:bg-black/5 rounded-full transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-full left-4 right-4 mt-2 md:hidden"
                    >
                        <div className="glassmorphism rounded-3xl shadow-2xl border-white/40 p-6">
                            <nav className="flex flex-col gap-2">
                                {siteConfig.navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-lg font-bold font-heading p-4 rounded-2xl transition-colors",
                                            pathname === item.href
                                                ? "bg-primary text-white"
                                                : "text-foreground hover:bg-primary/5"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link href="/admissions" onClick={() => setIsOpen(false)} className="mt-4">
                                    <Button className="w-full py-6 text-lg rounded-2xl">Enroll Now</Button>
                                </Link>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
