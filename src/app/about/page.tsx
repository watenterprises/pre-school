"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkles, ShieldCheck, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
    return (
        <>
            <Section background="primary" className="pt-32">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Our Story</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Welcome to {siteConfig.name}, where every child&apos;s journey is celebrated. Founded with a vision to create a safe, nurturing, and creative space, we have been shaping young minds since 2015.
                    </p>
                </div>
            </Section>

            <Section title="Our Mission & Values" subtitle="What We Stand For">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { title: "Nurturing Environment", text: "We provide a warm, home-like atmosphere where children feel safe to explore.", icon: <Heart className="text-accent" /> },
                        { title: "Holistic Learning", text: "Education that balances cognitive, social, and emotional growth through play.", icon: <Sparkles className="text-warning" /> },
                        { title: "Safety First", text: "State-of-the-art security and child-safe infrastructure are our top priorities.", icon: <ShieldCheck className="text-primary" /> }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-gray-50 rounded-playful hover:shadow-lg transition-transform hover:-translate-y-2">
                            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="muted">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-left">Our Teaching Philosophy</h2>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 italic">"Play is the highest form of research." - Albert Einstein</p>
                            <p className="text-gray-600 leading-relaxed">
                                At {siteConfig.name}, we believe that children learn best when they are active participants in their own education. Our curriculum is inspired by Montessori and Reggio Emilia approaches, focusing on:
                            </p>
                            <ul className="space-y-4">
                                {["Inquiry-based learning", "Developmentally appropriate activities", "Creative expression through art & music", "Social collaboration and empathy"].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-center text-gray-700">
                                        <Star className="text-warning fill-warning" size={16} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                    <div className="relative">
                        <Image
                            src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=1000"
                            alt="Classroom environment"
                            width={800}
                            height={600}
                            className="rounded-3xl shadow-xl rotate-1 group-hover:rotate-0 transition-transform"
                        />
                    </div>
                </div>
            </Section>
        </>
    );
}
